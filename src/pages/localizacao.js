import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import { Section, Note } from "../components/styled.js";

const Content = tw.div`lg:flex`;
const Left = styled.div`
  width: 50%;
  ${tw`lg:p-2`}

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  ${tw`pt-8 lg:p-2 flex justify-end`}

  @media (max-width: 1023px) {
    width: 100%;
    & > iframe {
      max-width: 100%;
    }
  }
`;

const Local = ({ data }) => (
  <Layout>
    <SEO title="Localização" />

    <Section>
      <Content>
        <Left>
          <GatsbyImage image={data.convent.childImageSharp.gatsbyImageData} />
          <Note>Foto: João Duarte</Note>
          <h3 css={[tw`mt-4`]}>
            Sala D. Afonso Henriques (antiga Igreja do Convento)
          </h3>
          <p>
            Convento de São Francisco
            <br />
            Av. da Guarda Inglesa 1a
            <br />
            3040-193 Coimbra
          </p>
        </Left>
        <Right>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12189.01147653796!2d-8.4359678!3d40.2034377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f26f440bd4b86e6!2sConvento%20S%C3%A3o%20Francisco!5e0!3m2!1sen!2suk!4v1580071585373!5m2!1sen!2suk"
            width="400"
            height="300"
            frameborder="0"
            style={{ border: 0 }}
            title="Mapa"
            allowfullscreen=""
          ></iframe>
        </Right>
      </Content>
    </Section>
  </Layout>
);

export default Local;

export const query = graphql`
  query LocalQuery {
    convent: file(relativePath: { eq: "convento_fachada.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
