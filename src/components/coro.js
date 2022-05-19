import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CoroContainer = styled.a`
  display: grid;
  grid-template-rows: 200px 1fr;
  ${tw`border border-solid border-gray-200`}

  &:hover {
    ${tw`bg-gray-100 cursor-pointer`}
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }

  h3 {
    min-height: 90px;
  }
`;

const Coro = ({ name, image, id }) => {
  return (
    <CoroContainer href={`#${id}`}>
      {image && <img src={`/images/coros/${image}`} />}
      <h3 css={[tw`py-4 text-center`]}>{name}</h3>
    </CoroContainer>
  );
};

export default Coro;
