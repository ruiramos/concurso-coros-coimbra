import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CoroContainer = styled.a`
  display: grid;
  grid-template-rows: 200px 1fr;
  min-height: 315px;
  text-decoration-line: none;
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
    ${tw`py-2 pb-0 text-center underline`}
  }

  h4 {
    ${tw`pt-0 text-center no-underline text-primary font-semibold`}
  }
`;

const Coro = ({ name, image, id, lugar }) => {
  return (
    <CoroContainer href={`#${id}`}>
      {image && <img src={`/images/coros/${image}`} />}
      <div css={[tw`py-2`]}>
        <h3>{name}</h3>
        {lugar && (
          <h4>
            {lugar}
            <sup>o</sup> classificado
          </h4>
        )}
      </div>
    </CoroContainer>
  );
};

export default Coro;
