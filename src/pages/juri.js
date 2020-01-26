import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Section } from "../components/styled.js";

const Juri = ({ data }) => (
  <Layout>
    <SEO title="Juri" />

    <Section>
      <p>
        O juri da edição deste ano será composto por Jorge Matta, Aoife Hiney,
        Eugénio Amorim, Vasco Negreiros e João Santos.
      </p>
    </Section>
  </Layout>
);

export default Juri;
