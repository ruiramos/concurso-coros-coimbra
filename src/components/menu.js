import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

const StyledHeader = styled.header`
  ${tw`pb-2`}
  clear: both;
  overflow: hidden;
`;

const Menu = tw.ul`
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

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Menu>
      <StyledMenuLink to="/">Apresentação</StyledMenuLink>
      {/* <StyledMenuLink to="/coros">Coros</StyledMenuLink> */}
      <StyledMenuLink to="/localizacao/">Localização</StyledMenuLink>
      <StyledMenuLink to="/regulamento/">Regulamento</StyledMenuLink>
      <StyledMenuLink to="/juri/">Juri</StyledMenuLink>
      <StyledMenuLink to="/2017/">Edição Anterior</StyledMenuLink>
    </Menu>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
