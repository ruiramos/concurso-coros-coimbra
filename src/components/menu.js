import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { LATEST_EDITION, MENU_DATA } from "components/constants";

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
  text-sm
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
        {MENU_DATA[edition].map((item) => (
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
