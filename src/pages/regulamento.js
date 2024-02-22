import React from "react";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import { Section as CommonSection, Sep } from "components/styled.js";

const DocContainer = tw.div`
  flex
`;

const Section = styled(CommonSection)`
  ol {
    ${tw`list-decimal mb-2`}
    counter-reset: item;
    & > li {
      display: block;
    }
    & > li:before {
      content: counters(item, ".") ". ";
      counter-increment: item;
    }
    ol {
      ${tw`ml-4 mb-2`}
    }
  }

  ul {
    ${tw`list-disc ml-8 mb-2`}
  }
`;

const Doc = styled.a`
  min-width: 150px;
  min-height: 200px;
  ${tw`block m-2 text-sm no-underline`}

  & img {
    border: 1px solid #eee;
  }
`;

const DocImg = styled.div`
  ${tw`shadow m-2 transition-all`}
  &:hover {
    ${tw`shadow-md`}
  }
`;

const RegTitle = tw.h2``;

const SmallDate = tw.small`block text-gray-500 leading-relaxed`;
const Underline = styled.span`
  text-decoration: underline;
`;

const Regulamento = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Section>
        <p>
          O regulamento do III Concurso bem como a partitura da obra
          obrigatória, <em>Balada para Coimbra</em>, de José Firmino, estão
          também disponiveis para download em formato PDF:
        </p>

        <DocContainer>
          <Doc href="/2024/Regulamento_III_Concurso.pdf" target="_blank">
            <DocImg>
              <GatsbyImage
                image={data.regThumb.childImageSharp.gatsbyImageData}
              />
            </DocImg>
            <Underline>Regulamento (pdf)</Underline>
            <SmallDate className="no-underline">
              Actualizado: 22/02/2024
            </SmallDate>
          </Doc>
          <Doc href="/2024/PartituraIIIConcursoCoros.pdf" target="_blank">
            <DocImg>
              <GatsbyImage
                image={data.obraThumb.childImageSharp.gatsbyImageData}
              />
            </DocImg>
            <Underline>Balada para Coimbra (pdf)</Underline>
          </Doc>
        </DocContainer>
      </Section>
    </Layout>
  );
};

export default Regulamento;
export const query = graphql`
  query RegulamentoQuery {
    regThumb: file(relativePath: { eq: "2024/regulamento-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
    obraThumb: file(relativePath: { eq: "2024/obra-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
  }
`;
