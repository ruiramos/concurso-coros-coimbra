import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Section } from "../components/styled.js";

const Juri = ({ data }) => (
  <Layout>
    <SEO title="Juri" />

    <Section>
      <p>
        O juri da edição deste ano será composto por Aoife Hiney, Eugénio
        Amorim, João Santos, Jorge Matta e Vasco Negreiros.
      </p>
    </Section>
  </Layout>
);

export default Juri;
