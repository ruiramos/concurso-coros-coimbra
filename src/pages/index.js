import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import tw from "twin.macro";

import { Section, MainHeading, SubHeading } from "components/styled.js";

const Title = tw.h4`font-bold`;
const Footnote = tw.p`mt-8 text-sm italic text-gray-600`;

const IndexPage = () => (
  <Layout>
    <SEO />

    <MainHeading>26 de setembro de 2026</MainHeading>
    <SubHeading>
      Sala D. Afonso Henriques, Antiga Igreja
      <br />
      Convento São Francisco
    </SubHeading>

    <Section>
      <p>
        O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra
        organiza, este ano, a quarta edição do Concurso de Coros - Coimbra 2026,
        no âmbito da música coral.
      </p>
      <Title>Dia 26 de setembro – IV Concurso de Coros</Title>
      <p>
        O Concurso de Coros visa não só homenagear José António Carlos Seixas,
        compositor de destaque do barroco português, nado em Coimbra, em 1704,
        mas também dinamizar música coral tendo como palco a cidade de Coimbra,
        cidade universitária de cariz e de matriz eminentemente culturais,
        detentora de assinalável tradição neste campo musical.
      </p>
      <p>
        No IV Concurso de Coros – Coimbra 2026 pretende-se ainda prestar
        homenagem à Rainha Santa Isabel, padroeira da nossa cidade, nos 400 anos
        da sua canonização, com a peça obrigatória a concurso &quot;A Esmola da
        Rainha&quot; de Mário de Sousa Santos, grande figura musical do século
        XX da música coral conimbricense.
      </p>
      <p>
        O IV Concurso de Coros integrará duas fases: a primeira será uma fase de
        pré-seleção, com todos os coros amadores inscritos; a segunda, a
        realizar dia 26 de setembro de 2026, terá a participação de sete coros
        selecionados. O júri é constituído por prestigiados maestros de renome
        nacional e internacional. O evento terminará com um Concerto de Gala, à
        noite, com a participação dos três coros classificados e do anfitrião,
        Coro Carlos Seixas.
      </p>
      <p>
        Encontram-se disponíveis para download o{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="/2026/Regulamento_IVCONCURSO_DE_COROS_2026_Rev01.pdf"
        >
          Regulamento do IV Concurso
        </a>
        , bem como a obra obrigatória –{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="/2026/Rainha Santa - A esmola da rainha.pdf"
        >
          &quot;A Esmola da Rainha&quot; de Mário de Sousa Santos
        </a>
        .
      </p>

      <Footnote>
        Informamos que, por motivos alheios à nossa vontade, o workshop
        inicialmente previsto para o dia 27 de setembro não se irá realizar.
        Lamentamos qualquer inconveniente que esta alteração possa causar e
        agradecemos, desde já, a vossa compreensão.
      </Footnote>
    </Section>
  </Layout>
);

export default IndexPage;
