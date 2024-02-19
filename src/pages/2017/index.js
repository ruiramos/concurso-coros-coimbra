import React from "react";
import { graphql } from "gatsby";
//import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import SEO from "components/seo";
import Coro from "components/coro";

import { Section, SectionTitle, Note } from "components/styled";

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
    name: "Grupo Coral de Urrô",
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
  <Layout edition="2017">
    <SEO title="I Concurso de Coros" />
    <Section>
      <SectionTitle>Resultados do I Concurso</SectionTitle>
      <p>
        1º Lugar - Coro LeGatto
        <br />
        2º Lugar - Coro dos Pequenos Cantores de Coimbra
        <br />
        3º Lugar - Grupo Vocal Ad Libitum
      </p>
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
      <Note>
        Playlist de videos do evento, carregue em 1/19 no canto superior direito
        para ver mais.
      </Note>
    </Section>

    <Section>
      <SectionTitle>Coros selecionados para a 2.ª fase</SectionTitle>
      <ul>
        {coros.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
    </Section>

    <Section>
      <SectionTitle>Cartaz</SectionTitle>
      <LinkWithShadow href="/images/i-concurso-cartaz.png" target="_blank">
        <GatsbyImage
          image={data.cartazImage.childImageSharp.gatsbyImageData}
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
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    cartazImage: file(relativePath: { eq: "i-concurso-cartaz.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
  }
`;

export default PrevPage;
