import React from "react";

import { Link } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import tw from "twin.macro";

import { Section, MainHeading, SubHeading } from "components/styled.js";

const Title = tw.h4`font-bold`;

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
      <p>Nesta edição as atividades decorrerão durante dois dias:</p>
      <Title>
        Dia 8 – Atelier de Trabalho Coral – Orientado pelo Maestro Jorge Matta
      </Title>

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

      <Title>Dia 9 – III Concurso de Coros</Title>
      <p>
        O concurso de coros visa não só homenagear José António Carlos Seixas,
        compositor de destaque do barroco português, nado em Coimbra, em 1704,
        mas também dinamizar música coral tendo como palco a cidade de Coimbra,
        cidade universitária de cariz e de matriz eminentemente culturais,
        detentora de assinalável tradição neste campo musical.
      </p>
      <p>
        Encontram-se disponiveis para download o{" "}
        <a target="_blank" href="/2024/Regulamento_III_Concurso.pdf">
          Regulamento do III Concurso
        </a>
        , bem como a obra obrigatória -{" "}
        <a target="_blank" href="/2024/PartituraIIIConcursoCoros.pdf">
          Balada para Coimbra, de José Firmino
        </a>
        .
      </p>
      <p>
        No &quot;III Concurso de Coros – Coimbra 2024&#39;&#39; pretende-se
        ainda prestar a devida homenagem ao maestro José Firmino, através da
        escolha da peça obrigatória - “Balada para Coimbra”. José Firmino,
        maestro recentemente falecido, foi fundador de dois grupos corais de
        Coimbra - o Choral Poliphonico e o Coro dos Pequenos Cantores, tendo
        sido ainda autor de vasta obra coral e sinfónica.
      </p>
      <p>
        O &quot;III Concurso de Coros - Coimbra&quot; integrará duas fases: a
        primeira será uma fase de pré-seleção, com todos os coros amadores
        inscritos; a segunda, a realizar no dia 09 de junho de 2024, terá a
        participação de oito coros selecionados . O <Link to="/juri">Júri</Link>{" "}
        é constituído por prestigiados maestros de renome nacional e
        internacional. O evento terminará com um Concerto de Gala, à noite, com
        a participação dos três primeiros coros classificados e do anfitrião,
        Coro Carlos Seixas.
      </p>
    </Section>
  </Layout>
);

export default IndexPage;
