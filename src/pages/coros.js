import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Coro from "../components/coro";
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
    name: "Coro AlmaGraham",
    image: "alma-graham.jpg",
    id: "alma-graham",
  },
  {
    name: "Coro Misto da Universidade de Coimbra",
    image: "cmuc.jpg",
    id: "cmuc",
  },
  {
    name: 'Coral "Ensaio"',
    image: "coral-ensaio.jpg",
    id: "coral-ensaio",
  },
  {
    name: "Coral Mille Voci",
    image: "coral-mille-voci.jpg",
    id: "coral-mille-voci",
  },
  {
    name: "Coro Feminino do Conservatório de Música de Paredes",
    image: "coro-feminino-cmparedes.jpg",
    id: "coro-feminino-cmparedes",
  },
  {
    name: "ProVocal Ensemble",
    image: "provocal-ensemble.jpg",
    id: "pro-vocal",
  },
  {
    name: "Grupo Coral Stella Maris",
    image: "stella-maris.jpg",
    id: "stella-maris",
  },
  {
    name: "Vocal Art Ensemble",
    image: "vocal-art-ensemble.jpg",
    id: "vocal-art-ensemble",
  },
];

const CorosPage = ({ data }) => {
  const [selectedChoir, setSelectedChoir] = useState();

  const keyedBios = useMemo(
    () =>
      data?.allMarkdownRemark.edges.reduce((acc, edge) => {
        const id = edge.node.frontmatter.id;
        acc[id] = edge.node.html;
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
    <Layout>
      <SEO title="Coros" />
      <CorosContainer>
        {coros.map((coro, i) => (
          <Coro {...coro} key={`coro-${i}`} />
        ))}
      </CorosContainer>
      {selectedChoir ? (
        <BioModal
          onClose={() => (window.location.hash = "")}
          coro={selectedChoir}
        >
          {keyedBios[selectedChoir.id]}
        </BioModal>
      ) : null}
    </Layout>
  );
};

const Backdrop = styled.div`
  ${tw`absolute z-10 bg-black inset-0 opacity-80 h-full`}
`;

const ModalContainer = styled.div`
  ${tw`absolute z-20 top-8 border border-solid border-gray-200 bg-white p-10 rounded`}
  width: 70%;
  left: 15%;
  @media only screen and (max-device-width: 480px) {
    width: 90%;
    left: 5%;
    padding: 1em;
  }

  h1 {
    ${tw`mb-6`}
  }

  img {
    float: right;
    width: 350px;
    margin: 0 0 20px 20px;
  }
`;

const BioModal = ({ onClose, coro, children }) => {
  return ReactDOM.createPortal(
    <div>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <img src={`/images/coros/${coro.image}`} />
        <h1>{coro.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
        <button onClick={onClose}>Fechar</button>
      </ModalContainer>
    </div>,
    document.querySelector("body")
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
          }
        }
      }
    }
  }
`;

export default CorosPage;
