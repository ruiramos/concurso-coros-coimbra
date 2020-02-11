import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-height: 275px;
  overflow: hidden;
  position: relative;

  &.expanded {
    max-height: none;
    &:after {
      display: none;
    }
  }

  &:after {
    box-shadow: inset #ffffff 0px -25px 20px 0px;
    content: " ";
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
  }

  p {
    margin-bottom: 24px;
  }
`;

const Resumo = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Container className={expanded ? "expanded" : ""}>{children}</Container>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "esconder" : "mostrar mais"}
      </button>
    </div>
  );
};

export default Resumo;
