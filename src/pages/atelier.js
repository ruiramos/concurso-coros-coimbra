import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import tw from "twin.macro";

import { Section, MainHeading, SubHeading } from "components/styled";

const Atlier = ({ data }) => (
  <Layout>
    <SEO title="Atlier de trabalho coral" />
    <MainHeading>8 de junho de 2024</MainHeading>
    <SubHeading>
      Atelier de trabalho coral – Orientado pelo Maestro Jorge Matta
    </SubHeading>

    <Section>
      <p>
        Neste atelier serão trabalhadas obras de Diogo Dias Melgás (1630-1700),
        destacado compositor da Escola de Évora, herdeiro da tradição
        renascentista mas já com uma linguagem de algum modo barroca (Salve
        Regina e/ou In jejunio et fletu, ainda a escolher), e um “Vilancico
        Negro” de Santa Cruz de Coimbra, século XVII (Casuá casué).
      </p>
      <p>
        O objetivo principal deste atelier não é a apresentação das obras no
        concerto final do Festival (ainda que isso possa acontecer), mas o
        trabalho detalhado de ensaio, nas suas vertentes técnicas e musicais.
      </p>
    </Section>
  </Layout>
);

export default Atlier;
