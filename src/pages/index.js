import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const MainTitle = styled.h1`
  margin-bottom: 0.25em;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainTitle>II Concurso de Coros - Coimbra</MainTitle>
    <h4>6 de junho de 2020</h4>
    <p>Mais informações em breve.</p>
  </Layout>
);

export default IndexPage;
