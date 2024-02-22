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
import { Note, Sep } from "components/styled";
import { LATEST_EDITION } from "components/constants";
import Footer from "./footer";

const Container = tw.div`
  mx-auto mt-4 px-8 bg-white mt-0 min-h-screen
`;

const Content = tw.div`
  px-0 lg:max-w-5xl lg:m-auto
`;

const ImgContainer = tw.div`
  mb-10
`;

const PrimaryNotice = styled.div`
  ${tw`text-center text-white p-2 bg-primary`}
  background: #56c8e5;
`;

const Layout = ({ lang = "pt", edition = LATEST_EDITION, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "iii-concurso-cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
      logo17: file(relativePath: { eq: "i-concurso-logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
      logo22: file(relativePath: { eq: "ii-concurso-logo-temp.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
  `);

  const image =
    edition === "2017"
      ? getImage(data.logo17)
      : edition === "2022"
      ? getImage(data.logo22)
      : getImage(data.logo);

  return (
    <>
      {edition !== LATEST_EDITION && (
        <PrimaryNotice>
          <h5>
            <Link to="/">
              Voltar ao site do III Concurso Coros Coimbra (2024)
            </Link>
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

        <Content>
          <Menu lang={lang} edition={edition} />

          <Sep primary />

          <main>{children}</main>

          <Sep />

          <Footer />
        </Content>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
