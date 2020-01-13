import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const MainTitle = styled.h1``;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainTitle>II Concurso de Coros - Coimbra</MainTitle>
    <p>
      A segunda ediçao do Concurso de Coros - Coimbra ir-se-a realizar em 2020.
    </p>
  </Layout>
);

export default IndexPage;
