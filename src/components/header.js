import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 2em;
  clear: both;
  overflow: hidden;
`;

const Menu = styled.ul`
  list-style: none;
  float: right;
  padding: 0;
  margin: 0;
`;

const LeftTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.125em;
  float: left;
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
    <LeftTitle>
      <Link to="/">II Concurso de Coros - Coimbra</Link>
    </LeftTitle>
    <div
      style={{
        textAlign: "right",
      }}
    >
      <Menu>
        <StyledMenuLink to="/coros">Coros</StyledMenuLink>
        <StyledMenuLink to="/regulamento">Regulamento</StyledMenuLink>
        <StyledMenuLink to="/2017">Edicao Anterior</StyledMenuLink>
      </Menu>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
