import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { LATEST_EDITION } from "components/constants";

const StyledHeader = styled.header`
  clear: both;
  overflow: hidden;
`;

const MenuContainer = tw.ul`
  text-center
`;

const EditionsContainer = tw.div`
  text-gray-400
  text-right
`;

const MenuLink = (props) => (
  <li className={props.className}>
    <Link {...props} className="" activeClassName="active">
      {props.children}
    </Link>
  </li>
);

const StyledMenuLink = styled(MenuLink)`
  display: inline-block;
  padding: 0 0.5em;
  margin: 0;

  & > a.active {
    font-weight: bold;
  }
`;

const menuData = {
  2017: [
    {
      link: "/2017/",
      copy: "Resultados",
    },
  ],
  2022: [
    {
      link: "/2022/",
      copy: "Apresentação",
    },
    {
      link: "/2022/coros",
      copy: "Os Coros",
    },
    {
      link: "/2022/programa",
      copy: "Programa",
    },
    {
      link: "/2022/localizacao",
      copy: "Local",
    },
    {
      link: "/2022/regulamento",
      copy: "Regulamento",
    },
  ],

  2024: [
    {
      link: "/",
      copy: "Apresentação",
    },
  ],
};

const Menu = ({ lang = "pt", edition = LATEST_EDITION }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      ukFlag: file(relativePath: { eq: "uk-flag-64.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, layout: FIXED)
        }
      }
      ptFlag: file(relativePath: { eq: "pt-flag-64.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, layout: FIXED)
        }
      }
    }
  `);
  const image = getImage(lang === "pt" ? data.ukFlag : data.ptFlag);

  return (
    <StyledHeader>
      <MenuContainer>
        {menuData[edition].map((item) => (
          <StyledMenuLink to={item.link}>{item.copy}</StyledMenuLink>
        ))}

        {edition === LATEST_EDITION && false && (
          <StyledMenuLink
            to={lang === "pt" ? "/en/" : "/"}
            css={{ position: "relative", top: "6px" }}
          >
            <GatsbyImage
              image={data.ukFlag.childImageSharp.gatsbyImageData}
              style={{ verticalAlign: "bottom" }}
              alt={lang === "pt" ? "In English" : "Em Português"}
            />
          </StyledMenuLink>
        )}
      </MenuContainer>

      <EditionsContainer>
        {edition !== LATEST_EDITION ? (
          <StyledMenuLink to="/">Voltar ao site do III Concurso</StyledMenuLink>
        ) : (
          <>
            <span>Edições anteriores:</span>
            <StyledMenuLink to="/2017/">2017</StyledMenuLink>
            <StyledMenuLink to="/2022/">2022</StyledMenuLink>
          </>
        )}
      </EditionsContainer>
    </StyledHeader>
  );
};

export default Menu;
