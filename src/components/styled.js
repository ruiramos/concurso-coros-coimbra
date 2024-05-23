import styled from "styled-components";
import tw from "twin.macro";

export const Section = tw.div`
  my-8
`;

export const SectionTitle = tw.h2`
`;

export const Sep = styled.hr`
  border: 0;
  border-top: 2px solid;
  ${(props) => (props.primary ? tw`border-primary` : tw`border-gray-300`)};
  width: 125px;
  ${tw`my-8 mx-auto`}
`;

export const Note = tw.small`text-gray-400`;

export const MainHeading = tw.h2` text-center border-0 mb-0 pb-0`;
export const SubHeading = tw.h3` text-center `;

export const ProgramaTitle = styled.div`
  ${tw` text-center bg-gray-100 py-6`}
  ${tw`border border-solid border-gray-200`}
  h2, h3 {
    ${tw`mt-0`}
  }
`;

export const ProgramaTableNew = styled.table`
  width: 100%;
  text-align: center;
  ${tw`border border-solid border-gray-200`}
  border-top: 0;
  td {
    ${tw`p-6`}
  }
  th {
    ${tw` py-6`}
    h2 {
      margin: 0;
    }
  }
  tr.time-place td {
    ${tw`bg-gray-100 p-2`}
    ${tw`text-gray-500 font-semibold`}
  }

  td p.strong {
    ${tw`font-semibold`}
  }

  td p {
    ${tw`mb-0`}
  }

  ul {
    display: block;
    ${tw`text-left`}
    li {
      ${tw`py-1`}
    }

    &.dim {
      ${tw`text-gray-500`}
    }

    &.disc {
      ${tw`list-disc`}
    }
  }
`;
