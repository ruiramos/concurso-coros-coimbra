/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import tw from "tailwind.macro";
import styled from "styled-components";
import Menu from "./menu";
import "./layout.css";
import { Sep } from "../components/styled.js";

const Container = tw.div`
  mx-auto my-4 px-8 bg-white mt-0 min-h-screen
`;

const Content = tw.div`
  px-0 lg:px-40
`;

const ImgContainer = tw.div`
  mb-10
`;

const Footer = tw.footer`text-sm text-gray-500 mb-8`;
const PrimaryNotice = styled.div`
  ${tw`text-center text-white p-2 mt-4 bg-primary`}
  background: #56c8e5;
`;

const Layout = ({ lang = "pt", children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "ii-concurso-logo-temp.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
  `);

  const image = getImage(data.logo);

  return (
    <Container className="container">
      <PrimaryNotice>
        <h5>
          Candidaturas abertas até 28 de março de 2022, consulte o{" "}
          <a href="/regulamento/">regulamento</a> para mais informações.
        </h5>
      </PrimaryNotice>

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
        <Menu lang={lang} />

        <Sep primary />

        <main>{children}</main>

        <Sep />

        <Footer>
          Site: <a href="mailto:ruiramos@gmail.com">Rui Ramos</a>
        </Footer>
      </Content>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
