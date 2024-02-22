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
      <p>
        O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra organiza
        este ano a terceira edição do Concurso de Coros - Coimbra, no âmbito da
        música coral.
      </p>
      <p>
        O concurso de coros visa não só homenagear José António Carlos Seixas,
        compositor de destaque do barroco português, nado em Coimbra, em 1704,
        mas, sobretudo, dinamizar a música coral tendo como palco a cidade de
        Coimbra, cidade universitária de cariz e de matriz eminentemente
        culturais, detentora de assinalável tradição neste campo musical.
      </p>
      <p>
        Encontram-se disponiveis para download o{" "}
        <a target="_blank" href="/2024/Regulamento_III_Concurso.pdf">
          Regulamento do III Concurso
        </a>
        , bem como a{" "}
        <a target="_blank" href="/2024/PartituraIIIConcursoCoros.pdf">
          obra obrigatória - Balada para Coimbra, de José Firmino
        </a>
        .
      </p>
    </Section>
  </Layout>
);

export default IndexPage;
