/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import tw from "tailwind.macro";
import Menu from "./menu";
import "./layout.css";
import { Sep } from "../components/styled.js";

const Container = tw.div`
  mx-auto my-4 px-8 bg-white mt-0 min-h-screen
`;

const Content = tw.div`
  px-2 lg:px-40
`;

const ImgContainer = tw.div`
  mb-10
`;

const MainHeading = tw.h2` text-center`;
const SubHeading = tw.h3` text-center `;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "ii-concurso-logo-temp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container className="container">
      <a href="/" title="Voltar à página inicial">
        <ImgContainer>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            style={{ margin: "auto", display: "block", maxHeight: "400px" }}
          />
        </ImgContainer>
      </a>

      <Content>
        <MainHeading>06 de junho de 2020</MainHeading>
        <SubHeading>Igreja do Convento São Francisco, Coimbra</SubHeading>

        <Sep primary />
        <Menu />
        <main>{children}</main>
        <Sep />
      </Content>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
