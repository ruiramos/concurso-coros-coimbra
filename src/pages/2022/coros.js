import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import { graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import Coro from "components/coro";
import BioModal from "components/biomodal";
import styled from "styled-components";
import tw from "twin.macro";

const CorosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5em;
  row-gap: 1.5em;

  @media only screen and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const coros = [
  {
    name: "Associação Coral Stella Maris",
    image: "stella-maris.jpg",
    id: "stella-maris",
  },
  {
    name: 'Coral "Ensaio" da Associação Pró-Música da Póvoa de Varzim',
    image: "coral-ensaio.jpg",
    id: "coral-ensaio",
  },
  {
    name: "Coral Mille Voci",
    image: "coral-mille-voci.jpg",
    id: "coral-mille-voci",
  },
  {
    name: "Coro AlmaGraham",
    image: "alma-graham.jpg",
    id: "alma-graham",
  },
  {
    name: "Coro Feminino do Conservatório de Música de Paredes",
    image: "coro-feminino-cmparedes.jpg",
    id: "coro-feminino-cmparedes",
    lugar: 3,
  },
  {
    name: "Coro Misto da Universidade de Coimbra",
    image: "cmuc.jpg",
    id: "cmuc",
  },
  {
    name: "ProVocal Ensemble",
    image: "provocal-ensemble.jpg",
    id: "pro-vocal",
    lugar: 2,
  },
  {
    name: "Vocal Art Ensemble",
    image: "vocal-art-ensemble.jpg",
    id: "vocal-art-ensemble",
    lugar: 1,
  },
];

const CorosPage = ({ data }) => {
  const [selectedChoir, setSelectedChoir] = useState();

  const keyedBios = useMemo(
    () =>
      data?.allMarkdownRemark.edges.reduce((acc, edge) => {
        const id = edge.node.frontmatter.id;
        acc[id] = edge.node;
        return acc;
      }, {}),
    [data]
  );

  useEffect(() => {
    const coroId = window.location.hash.slice(1);

    if (!coroId) {
      setSelectedChoir(null);
      return;
    }

    const oCoro = coros.find((coro) => coro.id === coroId);
    setSelectedChoir(oCoro);
    window.scrollTo(0, 0);
  }, [typeof window !== "undefined" ? window.location.hash : undefined]);

  return (
    <Layout edition="2022">
      <SEO title="Coros" />
      <CorosContainer>
        {coros.map((coro, i) => (
          <Coro {...coro} key={`coro-${i}`} />
        ))}
      </CorosContainer>
      {selectedChoir ? (
        <BioModal
          onClose={() => (window.location.hash = "")}
          coro={{ ...selectedChoir, ...keyedBios[selectedChoir.id] }}
        >
          {keyedBios[selectedChoir.id].html}
        </BioModal>
      ) : null}
    </Layout>
  );
};

export const query = graphql`
  query CorosBioQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            id
            video_id
          }
        }
      }
    }
  }
`;

export default CorosPage;
