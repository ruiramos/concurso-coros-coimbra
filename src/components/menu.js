import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

import { LATEST_EDITION } from "components/constants";

const StyledHeader = styled.header`
  ${tw`pb-2`}
  clear: both;
  overflow: hidden;
`;

const MenuContainer = tw.ul`
  text-center
`;

<<<<<<< Updated upstream
const MenuLink = props => (
=======
const EditionsContainer = tw.div`
  text-gray-400
  text-right
`;

const MenuLink = (props) => (
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
const Menu = () => {
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <StyledMenuLink to="/">Apresentação</StyledMenuLink>
        {/* <StyledMenuLink to="/coros">Coros</StyledMenuLink> */}
        <StyledMenuLink to="/localizacao/">Local</StyledMenuLink>
        <StyledMenuLink to="/regulamento/">Regulamento</StyledMenuLink>
        <StyledMenuLink to="/juri/">Júri</StyledMenuLink>
        <StyledMenuLink to="/2017/">Edição Anterior</StyledMenuLink>
        <StyledMenuLink to="/en/">
          <Img
            fixed={data.ukFlag.childImageSharp.fixed}
            style={{ verticalAlign: "bottom" }}
          />
        </StyledMenuLink>
=======
        {menuData[edition].map((item) => (
          <StyledMenuLink to={item.link}>{item.copy}</StyledMenuLink>
        ))}

        {edition === LATEST_EDITION && false && (
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
        )}
>>>>>>> Stashed changes
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
