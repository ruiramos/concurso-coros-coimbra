import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "twin.macro";

const MainTitle = styled.h1``;
const Box = styled.div`
  ${tw`my-8`}
  ul {
    ${tw`list-disc`}
  }
`;

const CorosPage = () => (
  <Layout>
    <SEO title="Coros" />
    <p>
      O secretariado do Coro Carlos Seixas agradece a todos os coros que
      apresentaram a sua candidatura e aos que, não concorrendo por motivos
      vários, nos enviaram mensagens de apoio pela iniciativa.{" "}
    </p>
    <p>
      De acordo com o regulamento o juri selecionou oito coros para a segunda
      fase do concurso e dois suplentes.
    </p>
    <p>Parabéns aos selecionados!</p>
    <Box>
      <h2>Selecionados para a 2.ª fase do Concurso</h2>
      <ul>
        <li>Associação Coral Stella Maris</li>
        <li>Coral “Ensaio” da Associação Pró-Música da Póvoa de Varzim </li>
        <li>Coral Mille Voci</li>
        <li>Coro AlmaGraham</li>
        <li>Coro Feminino do Conservatório de Música de Paredes</li>
        <li>Coro Misto da Universidade de Coimbra</li>
        <li>ProVocal_Ensemble</li>
        <li>Vocal Art Ensemble</li>
      </ul>
    </Box>
    <Box>
      <h2>1.º Suplente</h2>
      <ul>
        <li>Grupo Coral de Queluz</li>
      </ul>
    </Box>

    <Box>
      <h2>2.º Suplente</h2>
      <ul>
        <li>Asociación Coral Polifónica "Máximo Gorki" (Vigo)</li>
      </ul>
    </Box>
  </Layout>
);

export default CorosPage;
