import React from "react";
import { graphql } from "gatsby";
//import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Coro from "../components/coro";

import { Section, SectionTitle } from "../components/styled";

const LinkWithShadow = tw.a`shadow inline-block`;

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
    <SEO title="I Concurso de Coros" />
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
        style={{ maxWidth: "100%" }}
      ></iframe>
      <small>
        Playlist de videos do evento, carregue em 1/18 no canto superior direito
        para ver mais.
      </small>
    </Section>

    <Section>
      <SectionTitle>Coros participantes</SectionTitle>
      {coros.map(c => (
        <Coro {...c} />
      ))}
    </Section>

    <Section>
      <SectionTitle>Cartaz</SectionTitle>
      <LinkWithShadow href="/images/i-concurso-cartaz.png" target="_blank">
        <Img
          fixed={data.cartazImage.childImageSharp.fixed}
          imgStyle={{ width: "200px" }}
        />
      </LinkWithShadow>
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
