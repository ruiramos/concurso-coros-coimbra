import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Section } from "../components/styled.js";

const Juri = ({ data }) => (
  <Layout>
    <SEO title="Júri" />

    <Section>
      <p>
        O júri da edição deste ano será composto pelos maestros Jorge Matta, que
        presidirá, Eugénio Amorim, João Santos, Aoife Hiney e Vasco Negreiros.
      </p>
    </Section>
  </Layout>
);

export default Juri;
