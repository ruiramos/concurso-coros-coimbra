import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Coro from "../components/coro";
import styled from "styled-components";
import tw from "twin.macro";

const MainTitle = styled.h1``;
const Box = styled.div`
  ${tw`my-8`}
  ul {
    ${tw`list-disc`}
  }
`;

const CorosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5em;
  row-gap: 1.5em;
`;

const coros = [
  {
    name: "Coro AlmaGraham",
    image: "alma-graham.jpg",
  },
  {
    name: "Coro Misto da Universidade de Coimbra",
    image: "cmuc.jpg",
  },
  {
    name: 'Coral "Ensaio"',
    image: "coral-ensaio.jpg",
  },
  {
    name: "Coral Mille Voci",
    image: "coral-mille-voci.jpg",
  },
  {
    name: "Coro Feminino do Conservatório de Música de Paredes",
    image: "coro-feminino-cmparedes.jpg",
  },
  {
    name: "ProVocal Ensemble",
    image: "provocal-ensemble.jpg",
  },
  {
    name: "Grupo Coral Stella Maris",
    image: "stella-maris.jpg",
  },
  {
    name: "Vocal Art Ensemble",
    image: "vocal-art-ensemble.jpg",
  },
];

const CorosPage = () => (
  <Layout>
    <SEO title="Coros" />
    <CorosContainer>
      {coros.map((coro) => (
        <Coro {...coro} />
      ))}
    </CorosContainer>
  </Layout>
);

export default CorosPage;
