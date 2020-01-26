import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import { Section, SectionTitle, Sep } from "../components/styled.js";

const Container = tw.div`
  px-8 lg:px-40
`;

const ImgContainer = tw.div`
  mb-10
`;

const DocContainer = tw.div`
  flex
`;

const Doc = styled.a`
  min-width: 200px;
  min-height: 300px;
  ${tw`block m-2 text-sm`}

  & img {
    border: 1px solid #eee;
  }
`;

const DocImg = styled.div`
  ${tw`shadow m-2`}
  &:hover {
    ${tw`shadow-md`}
  }
`;

const MainHeading = tw.h2` text-center`;
const SubHeading = tw.h3` text-center `;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="lol" />

    <ImgContainer>
      <Img
        fixed={data.logo.childImageSharp.fixed}
        imgStyle={{ objectFit: "contain" }}
        style={{ margin: "auto", display: "block" }}
      />
    </ImgContainer>

    <Container>
      <MainHeading>06 de junho de 2019</MainHeading>
      <SubHeading>Convento de Sao Francisco, Coimbra</SubHeading>

      <Sep primary />

      <Section>
        <p>
          O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra
          organiza, no corrente ano, o "II Concurso de Coros - Coimbra", no
          âmbito da música coral polifónica, pretendendo que esta edição tenha o
          mesmo sucesso que a versão anterior.
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
          O "II Concurso de Coros - Coimbra" integrará duas fases: a primeira
          será uma fase de pré-seleção, com todos os coros amadores inscritos; a
          segunda, a realizar no dia 06 de junho de 2019, terá a participação de
          oito coros selecionados, na primeira fase, pelo Júri, que será
          constituído por prestigiados maestros, já confirmados, de renome
          nacional e internacional. O evento terminará com um Concerto de Gala,
          à noite, com a participação dos três primeiros coros classificados e
          do anfitrião, Coro Carlos Seixas.
        </p>
      </Section>

      <Sep />

      <Section>
        <SectionTitle>Juri e Regulamento</SectionTitle>
        <p>
          O juri da edição deste ano será composto por Jorge Matta, Aoife Hiney,
          Eugénio Amorim, Vasco Negreiros e o maestro João Santos.
        </p>
        <p>
          O regulamento bem como as partituras da obra obrigatória, Espera-me,
          estão também disponiveis para download:
        </p>

        <DocContainer>
          <Doc href="/regulamento-concurso-coros-2.pdf" target="_blank">
            <DocImg>
              <Img fluid={data.regThumb.childImageSharp.fluid} />
            </DocImg>
            Regulamento (pdf)
          </Doc>
          <Doc href="/espera-me.pdf" target="_blank">
            <DocImg>
              <Img fluid={data.obraThumb.childImageSharp.fluid} />
            </DocImg>
            Espera-me (pdf)
          </Doc>
        </DocContainer>
      </Section>

      <Sep />

      <Section></Section>
    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    logo: file(relativePath: { eq: "i-concurso-logo.jpg" }) {
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    coimbra: file(relativePath: { eq: "coimbra-i.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    regThumb: file(relativePath: { eq: "reg-thumb.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    obraThumb: file(relativePath: { eq: "obra-thumb.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
