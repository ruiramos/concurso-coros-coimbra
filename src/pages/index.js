import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { MainHeading, SubHeading } from "components/styled.js";
import tw from "twin.macro";

const IndexPage = () => (
  <Layout>
    <SEO />

    <MainHeading>26 de setembro de 2026</MainHeading>
    <SubHeading css={[tw`text-yellow-600`]}>Save the date</SubHeading>

    {/*
    <Section>Save the date!</Section>
    */}
  </Layout>
);

export default IndexPage;
