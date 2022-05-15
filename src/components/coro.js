import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CoroContainer = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  ${tw``}

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;

const Coro = ({ name, image }) => (
  <CoroContainer>
    {image && <img src={`/images/coros/${image}`} />}
    <h3 css={[tw`py-4 text-center`]}>{name}</h3>
  </CoroContainer>
);

export default Coro;
