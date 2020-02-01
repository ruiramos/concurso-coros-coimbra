import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

const StyledHeader = styled.header`
  ${tw`pb-2`}
  clear: both;
  overflow: hidden;
`;

const MenuContainer = tw.ul`
  text-center
`;

const MenuLink = props => (
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

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      ukFlag: file(relativePath: { eq: "uk-flag-64-3.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <MenuContainer>
        <StyledMenuLink to="/">Apresentação</StyledMenuLink>
        {/* <StyledMenuLink to="/coros">Coros</StyledMenuLink> */}
        <StyledMenuLink to="/localizacao/">Localização</StyledMenuLink>
        <StyledMenuLink to="/regulamento/">Regulamento</StyledMenuLink>
        <StyledMenuLink to="/juri/">Júri</StyledMenuLink>
        <StyledMenuLink to="/2017/">Edição Anterior</StyledMenuLink>
        <StyledMenuLink to="/en/">
          <Img
            fixed={data.ukFlag.childImageSharp.fixed}
            style={{ verticalAlign: "bottom" }}
          />
        </StyledMenuLink>
      </MenuContainer>
    </StyledHeader>
  );
};

export default Menu;
