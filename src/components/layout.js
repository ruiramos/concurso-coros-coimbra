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
    margin-right: 1em;
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
          gatsbyImageData(height: 45)
        }
      }
      edac: file(relativePath: { eq: "edac.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      mfe: file(relativePath: { eq: "mf-ensemble.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      atenas: file(relativePath: { eq: "atenas.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      aguas: file(relativePath: { eq: "aguas.png" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      siloal: file(relativePath: { eq: "siloal.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
    }
  `);

  const image = getImage(data.logo);
  const cmcImage = getImage(data.cmc);
  const edacImage = getImage(data.edac);
  const mfeImage = getImage(data.mfe);
  const atenasImage = getImage(data.atenas);
  const aguasImage = getImage(data.aguas);
  const siloalImage = getImage(data.siloal);

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
            <FooterSection>
              <h4>Apoios:</h4>
              <a
                href="https://www.cm-coimbra.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={cmcImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Camara Municipal de Coimbra"
                  style={{ marginBottom: "1em" }}
                />
              </a>
              <a
                href="https://www.facebook.com/edancaac"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={edacImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="EDAC - Escola de Dança Arte e Corpo"
                  style={{ marginBottom: "1em" }}
                />
              </a>
              <a
                href="https://www.facebook.com/ManuelFariaEnsemble/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={mfeImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Manuel Faria Ensemble"
                  style={{ marginBottom: "1em" }}
                />
              </a>
            </FooterSection>
            <FooterSection>
              <h4>Patrocinadores:</h4>
              <a
                href="http://atenasfrancesinhas.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={atenasImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Cafe Atenas"
                  style={{ marginBottom: "1em" }}
                />
              </a>
              <a
                href="https://www.aguasdecoimbra.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={aguasImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Aguas de Coimbra"
                  style={{ marginBottom: "1em" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/siloal-produtos-e-medicamentos-veterin%C3%A1rios/about/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={siloalImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Siloal"
                  style={{ marginBottom: "1em" }}
                />
              </a>
            </FooterSection>
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
