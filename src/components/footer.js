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
    ${tw`mr-1 lg:mr-2`}
    display: inline-block;
    vertical-align: middle;
    padding: 4px;
  }

  ${Note} {
    clear: both;
    ${tw`pt-2 text-xs font-medium`}
  }
`;

const FooterSection = styled.div`
  float: left;
  margin-bottom: 10px;
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
          gatsbyImageData(height: 38)
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
      atenas: file(relativePath: { eq: "cafe-atenas.jpeg" }) {
        childImageSharp {
          gatsbyImageData(height: 50)
        }
      }
      aguas: file(relativePath: { eq: "aguas.png" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      siloal: file(relativePath: { eq: "siloal.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 30)
        }
      }
      talinamed: file(
        relativePath: { eq: "2024/patrocinadores/talinamed2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 100)
        }
      }
      frijobel: file(relativePath: { eq: "2024/patrocinadores/frijobel.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 40)
        }
      }
      pbc: file(relativePath: { eq: "2024/patrocinadores/PBC_logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 33)
        }
      }
      smc: file(relativePath: { eq: "2024/patrocinadores/SMC-Logotipo.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 50)
        }
      }
      dancake: file(relativePath: { eq: "2024/patrocinadores/dancake.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50)
        }
      }
      beirao: file(relativePath: { eq: "2024/patrocinadores/beirao.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50)
        }
      }
      casapessoal: file(
        relativePath: { eq: "2024/patrocinadores/casa-pessoal.png" }
      ) {
        childImageSharp {
          gatsbyImageData(height: 55)
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
  const frijobelImage = getImage(data.frijobel);
  const pbcImage = getImage(data.pbc);
  const smcImage = getImage(data.smc);
  const dancakeImage = getImage(data.dancake);
  const beiraoImage = getImage(data.beirao);
  const casaPessoalImage = getImage(data.casapessoal);

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
              />
            </a>
          </FooterSection>
        </>
      )}
      {edition === "2024" && (
        <>
          <FooterSection style={{ display: "flex" }}>
            <div style={{ minWidth: "125px", flexShrink: 0 }}>
              <h4>Apoio:</h4>
              <a
                href="https://www.cm-coimbra.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={cmcImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Camara Municipal de Coimbra"
                />
              </a>
              <a
                href="https://www.cm-coimbra.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={casaPessoalImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Camara Municipal de Coimbra"
                />
              </a>
            </div>
            <div>
              <h4>Patrocínio:</h4>
              <a
                href="https://www.aguasdecoimbra.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={aguasImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Aguas de Coimbra"
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
                />
              </a>
              <a href="https://frijobel.pt/" target="_blank" rel="noreferrer">
                <GatsbyImage
                  image={frijobelImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Frijobel"
                />
              </a>
              <a
                href="https://www.dancake.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={dancakeImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="DanCake"
                />
              </a>
              <a
                href="http://www.pbc-sroc.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={pbcImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="PBC"
                />
              </a>
              <a
                href="https://www.licorbeirao.com/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={beiraoImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Licor Beirao"
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
                />
              </a>
              <a
                href="https://www.seminariomaiordecoimbra.com/"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={smcImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Seminario Maior de Coimbra"
                />
              </a>
              <a
                href="https://www.facebook.com/atenasfrancesinhas"
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage
                  image={atenasImage}
                  imgStyle={{ objectFit: "contain" }}
                  alt="Cafe Atenas"
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
