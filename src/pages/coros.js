import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import { graphql } from "gatsby";
import BioModal from "components/biomodal";
import Layout from "components/layout";
import SEO from "components/seo";
import Coro from "components/coro";
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
    name: "Choral Polyphónico João Rodrigues de Deus",
    image: "choral-jrd.jpg",
    id: "choral-jrd",
  },
  {
    name: "Coro Allegretus",
    image: "coro-allegretus.jpg",
    id: "coro-allegretus",
  },
  {
    name: "Coro Feminino da ESE",
    image: "coro-feminino-ese.jpg",
    id: "coro-feminino-ese",
    lugar: 2,
  },
  {
    name: "Coro Feminino do Conservatório do Vale do Sousa",
    image: "coro-feminino-vale-sousa.jpg",
    id: "coro-feminino-vale-sousa",
    lugar: 1,
  },
  {
    name: "Coro Misto da ESE",
    image: "coro-misto-ese.jpg",
    id: "coro-misto-ese",
    lugar: 3,
  },
  {
    name: "Coro Misto da Universidade de Coimbra",
    image: "coro-misto-uc.jpg",
    id: "coro-misto-uc",
    mencao: true,
  },
  {
    name: "Etos Vocal Ensemble",
    image: "etos-vocal.jpg",
    id: "etos-vocal",
    mencao: true,
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
    <Layout edition="2024">
      <SEO title="Coros" />
      <CorosContainer>
        {coros.map((coro, i) => (
          <Coro {...coro} key={`coro-${i}`} />
        ))}
      </CorosContainer>
      {selectedChoir ? (
        <BioModal
          onClose={() => (window.location.hash = "")}
          edicao="2024"
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
