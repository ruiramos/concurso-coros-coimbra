import React, { useEffect, useState, useMemo } from "react";

import { graphql, navigate } from "gatsby";
import BioModal from "components/biomodal";
import Layout from "components/layout";
import SEO from "components/seo";
import Coro from "components/coro";
import styled from "styled-components";

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
    name: "Coral Mille Voci",
    image: "2026/coral-mille-voci.jpg",
    id: "coral-mille-voci",
  },
  {
    name: "Coral Polifónico Cantate Iubilo",
    image: "2026/coral-polifonico-cantate-iubilo.jpg",
    id: "coral-polifonico-cantate-iubilo",
  },
  {
    name: "Coro Clássico do Orfeão Universitário do Porto",
    image: "2026/coro-classico-oup.jpg",
    id: "coro-classico-oup",
  },
  {
    name: "Coro Geração 57",
    image: "2026/coro-geracao-57.jpg",
    id: "coro-geracao-57",
  },
  {
    name: "Coro Municipal Marquês de Pombal",
    image: "2026/coro-municipal-marques-pombal.jpg",
    id: "coro-municipal-marques-pombal",
  },
  {
    name: "Etos Vocal Ensemble",
    image: "2026/etos-vocal.jpg",
    id: "etos-vocal",
  },
  {
    name: "Orfeão de Eiriz",
    image: "2026/orfeao-eiriz.jpg",
    id: "orfeao-eiriz",
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
  }, [typeof window !== "undefined" ? window.location.hash : undefined]);

  return (
    <Layout>
      <SEO title="Coros" />
      <CorosContainer>
        {coros.map((coro, i) => (
          <Coro {...coro} key={`coro-${i}`} />
        ))}
      </CorosContainer>
      {selectedChoir ? (
        <BioModal
          onClose={() => navigate(window.location.pathname, { replace: true })}
          edicao="2026"
          coro={{ ...selectedChoir, ...keyedBios[selectedChoir.id] }}
        >
          {keyedBios[selectedChoir.id].html}
        </BioModal>
      ) : null}
    </Layout>
  );
};

export const query = graphql`
  query CorosBioQuery2026 {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/coros/2026/" } }
    ) {
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
