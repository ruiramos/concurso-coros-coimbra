import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const StyledHeader = styled.header`
  clear: both;
  overflow: hidden;
`;

const MenuContainer = tw.ul`
  text-center
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

const Menu = ({ lang = "pt" }) => {
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
        <StyledMenuLink to="/">Apresentação</StyledMenuLink>
        <StyledMenuLink to="/coros/">Os Coros</StyledMenuLink>
        <StyledMenuLink to="/programa/">Programa</StyledMenuLink>
        <StyledMenuLink to="/localizacao/">Local</StyledMenuLink>
        <StyledMenuLink to="/regulamento/">Regulamento</StyledMenuLink>
        <StyledMenuLink to="/juri/">Júri</StyledMenuLink>
        <StyledMenuLink to="/2017/">Edição Anterior</StyledMenuLink>
        <StyledMenuLink
          to={lang === "pt" ? "/en/" : "/"}
          css={{ position: "relative", top: "6px" }}
        >
          <GatsbyImage
            image={image}
            style={{ verticalAlign: "bottom" }}
            alt={lang === "pt" ? "In English" : "Em Português"}
          />
        </StyledMenuLink>
      </MenuContainer>
    </StyledHeader>
  );
};

export default Menu;
