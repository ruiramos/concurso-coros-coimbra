/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import styled from "styled-components";
import Menu from "./menu";
import "./layout.css";
import { Note, Sep } from "../components/styled.js";

const Container = tw.div`
  mx-auto mt-4 px-8 bg-white mt-0 min-h-screen
`;

const Content = tw.div`
  px-0 lg:max-w-5xl lg:m-auto
`;

const ImgContainer = tw.div`
  mb-10
`;

const Footer = styled.footer`
  padding-bottom: 40px;
  h4 {
    ${tw`my-2 text-sm font-semibold`}
  }
  p {
    ${tw`text-sm`}
  }

  a {
    display: inline-block;
    margin-right: 0.75em;
  }

  ${Note} {
    clear: both;
    ${tw`pt-4 text-sm font-medium`}
  }
`;

const PrimaryNotice = styled.div`
  ${tw`text-center text-white p-2 bg-primary`}
  background: #56c8e5;
`;

const FooterSection = styled.div`
  float: left;
  padding-right: 30px;
`;

const Layout = ({ lang = "pt", edition, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "iii-concurso-logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
  `);

  const image = getImage(data.logo);

  return (
    <>
      {false && (
        <PrimaryNotice>
          <h5>
            Resultados 2022: 3ᵒ Coro Feminino CM Paredes; 2ᵒ ProVocal Ensemble;
            1ᵒ Vocal Art Ensemble. Parabéns!
          </h5>
        </PrimaryNotice>
      )}
      <Container className="container">
        <a href="/" title="Voltar à página inicial">
          <ImgContainer>
            <GatsbyImage
              image={image}
              imgStyle={{ objectFit: "contain" }}
              alt="Concurso Coros Coimbra"
              style={{ margin: "auto", display: "block", maxHeight: "400px" }}
            />
          </ImgContainer>
        </a>

        <a href="/" title="Voltar à página inicial">
          <ImgContainer>
            <GatsbyImage
              image={image}
              imgStyle={{ objectFit: "contain" }}
              alt="Concurso Coros Coimbra"
              style={{ margin: "auto", display: "block", maxHeight: "400px" }}
            />
          </ImgContainer>
        </a>
        <Content>
          <Menu lang={lang} edition={edition} />

          <Sep primary />

          <main>{children}</main>

          <Sep />
          <Footer>
            <Note as="div">
              Site: <a href="mailto:ruiramos@gmail.com">Rui Ramos</a>
            </Note>
          </Footer>
        </Content>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
