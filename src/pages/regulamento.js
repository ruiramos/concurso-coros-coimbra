import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import { Section } from "../components/styled.js";

const DocContainer = tw.div`
  flex
`;

const Doc = styled.a`
  min-width: 150px;
  min-height: 300px;
  ${tw`block m-2 text-sm no-underline`}

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

const SmallDate = tw.small`block text-gray-500 leading-relaxed`;
const Underline = styled.span`
  text-decoration: underline;
`;

const Regulamento = ({ data }) => (
  <Layout>
    <SEO title="Regulamento" />

    <Section>
      <p>
        O regulamento bem como a partitura da obra obrigatória,{" "}
        <em>Espera-me</em>, de Paulo Bernardino, estão também disponiveis para
        download:
      </p>

      <DocContainer>
        <Doc href="/regulamento-concurso-coros-30-01.pdf" target="_blank">
          <DocImg>
            <Img fluid={data.regThumb.childImageSharp.fluid} />
          </DocImg>
          <Underline>Regulamento (pdf)</Underline>
          <SmallDate className="no-underline">
            Actualizado: 30/01/2020
          </SmallDate>
        </Doc>
        <Doc href="/espera-me.pdf" target="_blank">
          <DocImg>
            <Img fluid={data.obraThumb.childImageSharp.fluid} />
          </DocImg>
          <Underline>Espera-me (pdf)</Underline>
        </Doc>
      </DocContainer>
    </Section>
  </Layout>
);

export default Regulamento;
export const query = graphql`
  query RegulamentoQuery {
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
