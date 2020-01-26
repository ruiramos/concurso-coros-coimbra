import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import { Section } from "../components/styled.js";

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
  ${tw`pt-8 lg:p-2`}

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
          <h3>Igreja do Convento São Francisco</h3>
          <p>
            Av. da Guarda Inglesa 1a
            <br />
            3040-193 Coimbra
          </p>
          <Img
            fluid={data.convent.childImageSharp.fluid}
            style={{ marginTop: "3em" }}
          />
          <small>Foto João Duarte</small>
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
