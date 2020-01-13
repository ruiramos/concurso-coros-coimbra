import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const MainTitle = styled.h1``;

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <MainTitle>II Concurso de Coros - Coimbra</MainTitle>
    <p>Em breve.</p>
  </div>
);

export default IndexPage;
