import React from "react";

import { Link } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import tw from "twin.macro";

import { Section } from "components/styled.js";

const MainHeading = tw.h2` text-center border-0 mb-0 pb-0`;
const SubHeading = tw.h3` text-center `;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <MainHeading>9 de junho de 2024</MainHeading>
    <SubHeading>
      Sala D. Afonso Henriques, Antiga Igreja Convento São Francisco
    </SubHeading>

    <Section>
      <div>
        <a target="_blank" href="/2024/Regulamento_III_Concurso.pdf">
          Regulamento
        </a>
      </div>
      <div>
        <a href="/2024/PartituraIIIConcursoCoros.pdf">
          Obra obrigatória - Balada para Coimbra
        </a>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
