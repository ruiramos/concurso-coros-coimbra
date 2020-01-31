import styled from "styled-components";
import tw from "tailwind.macro";

export const Section = tw.div`
  my-8
`;

export const SectionTitle = tw.h2`
  mb-4
`;

export const Sep = styled.hr`
  border: 0;
  border-top: 2px solid;
  ${props => (props.primary ? tw`border-primary` : tw`border-gray-300`)};
  width: 125px;
  ${tw`my-8 mx-auto`}
`;

export const Note = tw.small`text-gray-500`;
