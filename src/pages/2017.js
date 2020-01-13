import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Coro from "../components/coro";

import { Section, SectionTitle } from "../components/styled";

const ImageContainer = styled.div`
  width: 50%;
  max-width: 600px;
  overflow: hidden;
  float: left;
`;

const coros = [
  {
    name: "ArquiCoro",
    img: "",
  },
  {
    name: "Choral Polyphónico João Rodrigues de Deus",
    img: "",
  },
  {
    name: "Coro dos Pequenos Cantores de Coimbra",
    img: "",
  },
  {
    name: "Coro Legatto",
    img: "",
  },
  {
    name: "Grupo Corral de Urrô",
    img: "",
  },
  {
    name: "Grupo Coral dos Loureiros",
    img: "",
  },
  {
    name: "Grupo Vocal Ad Libitum",
    img: "",
  },
  {
    name: "Orfeão Egas Moniz",
    img: "",
  },
];

const PrevPage = ({ data }) => (
  <Layout>
    <SEO title="I Concurso de Coros - Coimbra" />
    <ImageContainer>
      <Img
        fluid={data.logoImage.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    </ImageContainer>
    <div style={{ float: "right", width: "50%", padding: "5em 0" }}>
      <h2>
        28 de Outubro de 2018
        <br />
        Igreja do Convento de S. Francisco, Coimbra
      </h2>
    </div>

    <Section>
      <SectionTitle>Resultados</SectionTitle>
      <p>1º Lugar - Coro LeGatto</p>
      <p>2º Lugar - Coro dos Pequenos Cantores de Coimbra</p>
      <p>3º Lugar - Grupo Vocal Ad Libitum</p>
    </Section>

    <Section>
      <SectionTitle>Videos</SectionTitle>
      <iframe
        title="I Concurso de Coros Coimbra - Videos"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLg3xgq5Rluu9z7QbjSsJ60NgTji9rdcIw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Section>

    <Section>
      <SectionTitle>Coros</SectionTitle>
      {coros.map(c => (
        <Coro {...c} />
      ))}
    </Section>

    <Section>
      <SectionTitle>Cartaz</SectionTitle>
      <a href="/images/i-concurso-cartaz.png" target="_blank">
        <Img
          fixed={data.cartazImage.childImageSharp.fixed}
          imgStyle={{ width: "200px" }}
        />
      </a>
    </Section>
  </Layout>
);

export const query = graphql`
  query PrevPageQuery {
    logoImage: file(relativePath: { eq: "i-concurso-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cartazImage: file(relativePath: { eq: "i-concurso-cartaz.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default PrevPage;
