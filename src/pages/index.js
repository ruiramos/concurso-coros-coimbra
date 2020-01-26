import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import { Section, SectionTitle, Sep } from "../components/styled.js";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="lol" />

    <Section>
      <p>
        O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra
        organiza, no corrente ano, o "II Concurso de Coros - Coimbra", no âmbito
        da música coral polifónica, pretendendo que esta edição tenha o mesmo
        sucesso que a versão anterior.
      </p>
      <p>
        O concurso de coros visa não só homenagear José António Carlos Seixas,
        compositor de destaque do barroco português, nado em Coimbra, em 1704,
        mas, sobretudo, dinamizar a música coral polifónica tendo como palco a
        cidade de Coimbra, cidade universitária de cariz e de matriz
        eminentemente culturais, detentora de assinalável tradição neste campo
        musical.
      </p>
      <p>
        O "II Concurso de Coros - Coimbra" integrará duas fases: a primeira será
        uma fase de pré-seleção, com todos os coros amadores inscritos; a
        segunda, a realizar no dia 06 de junho de 2019, terá a participação de
        oito coros selecionados, na primeira fase, pelo Júri, que será
        constituído por prestigiados maestros de renome nacional e
        internacional.
      </p>
      <p>
        O evento terminará com um Concerto de Gala, à noite, com a participação
        dos três primeiros coros classificados e do anfitrião, Coro Carlos
        Seixas.
      </p>
    </Section>

  </Layout>
);

export default IndexPage;
