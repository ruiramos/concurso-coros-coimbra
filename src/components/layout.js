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
  mx-auto my-4 px-8 bg-white mt-0 min-h-screen
`;

const Content = tw.div`
  px-0 lg:max-w-5xl lg:m-auto
`;

const ImgContainer = tw.div`
  mb-10
`;

const Footer = styled.footer`
  h4 {
    ${tw`my-2 text-sm font-semibold`}
  }
  p {
    ${tw`text-sm`}
  }
`;

const PrimaryNotice = styled.div`
  ${tw`text-center text-white p-2 bg-primary`}
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
      cmc: file(relativePath: { eq: "cmc.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED)
        }
      }
    }
  `);

  const image = getImage(data.logo);
  const cmcImage = getImage(data.cmc);

  return (
    <>
      <PrimaryNotice>
        <h5>
          Já se encontra disponível a{" "}
          <Link to="/coros/">lista dos coros finalistas</Link> para o II
          Concurso de Coros - Coimbra.
        </h5>
      </PrimaryNotice>
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
          <Menu lang={lang} />

          <Sep primary />

          <main>{children}</main>

          <Sep />

          <Footer>
            <h4>Apoio:</h4>
            <Link to="https://www.cm-coimbra.pt/" target="blank">
              <GatsbyImage
                image={cmcImage}
                imgStyle={{ objectFit: "contain" }}
                alt="Camara Municipal de Coimbra"
                style={{ marginBottom: "1em" }}
              />
            </Link>
            <Note as="p">
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
