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
`;

<<<<<<< Updated upstream
const Layout = ({ children }) => {
=======
const FooterSection = styled.div`
  float: left;
  padding-right: 30px;
`;

const Layout = ({ lang = "pt", edition, children }) => {
>>>>>>> Stashed changes
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "iii-concurso-logo.jpg" }) {
        childImageSharp {
<<<<<<< Updated upstream
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
=======
          gatsbyImageData(width: 800, layout: CONSTRAINED)
>>>>>>> Stashed changes
        }
      }
    }
  `);

<<<<<<< Updated upstream
=======
  const image = getImage(data.logo);

>>>>>>> Stashed changes
  return (
    <Container className="container">
      <PrimaryNotice>
        <h5>
          Candidaturas abertas até 28 de março, consulte o{" "}
          <a href="/regulamento/">regulamento</a> para mais informações.
        </h5>
      </PrimaryNotice>

<<<<<<< Updated upstream
      <a href="/" title="Voltar à página inicial">
        <ImgContainer>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            style={{ margin: "auto", display: "block", maxHeight: "400px" }}
          />
        </ImgContainer>
      </a>
=======
        <Content>
          <Menu lang={lang} edition={edition} />
>>>>>>> Stashed changes

      <Content>
        <Menu />

        <Sep primary />

<<<<<<< Updated upstream
        <main>{children}</main>

        <Sep />

        <Footer>
          Site: <a href="mailto:ruiramos@gmail.com">Rui Ramos</a>
        </Footer>
      </Content>
    </Container>
=======
          <Sep />
          <Footer>
            <Note as="div">
              Site: <a href="mailto:ruiramos@gmail.com">Rui Ramos</a>
            </Note>
          </Footer>
        </Content>
      </Container>
    </>
>>>>>>> Stashed changes
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
