import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import tw from "twin.macro";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Note, Sep } from "./styled";

const StyledFooter = styled.footer`
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
    ${tw`pt-2 text-xs font-medium`}
  }
`;

const FooterSection = styled.div`
  float: left;
  padding-right: 30px;
`;
const Footer = ({ edition }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryOld {
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
          gatsbyImageData(height: 40)
        }
      }
      edac: file(relativePath: { eq: "edac.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      mfe: file(relativePath: { eq: "mf-ensemble.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      atenas: file(relativePath: { eq: "atenas.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      aguas: file(relativePath: { eq: "aguas.png" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      siloal: file(relativePath: { eq: "siloal.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 35)
        }
      }
      talinamed: file(
        relativePath: { eq: "2024/patrocinadores/talinamed.png" }
      ) {
        childImageSharp {
          gatsbyImageData(height: 65)
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
  const talinamedImage = getImage(data.talinamed);

  return (
    <StyledFooter>
      {edition === "2022" && (
        <>
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
        </>
      )}
      {edition === "2024" && (
        <>
          <FooterSection>
            <h4>Apoios:</h4>
            <div>
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
              <a
                href="https://www.talinamed.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={talinamedImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Talinamed"
                  style={{ marginBottom: "1em" }}
                />
              </a>
            </div>
          </FooterSection>
        </>
      )}
      <Note as="div">
        Site: <a href="mailto:ruiramos@gmail.com">Rui Ramos</a>
      </Note>
    </StyledFooter>
  );
};

export default Footer;
