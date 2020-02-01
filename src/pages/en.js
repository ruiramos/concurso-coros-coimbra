import React from "react";
import tw from "tailwind.macro";
import Layout from "../components/layout.js";

import { Section } from "../components/styled.js";

const MainHeading = tw.h2` text-center`;
const SubHeading = tw.h3` text-center `;

const English = () => {
  return (
    <Layout>
      <MainHeading>6 June 2020</MainHeading>
      <SubHeading>Convento São Francisco church, Coimbra, Portugal</SubHeading>
      <Section>
        <p>
          Coimbra's Carlos Seixas Choir organizes once again, this year, the "II
          Choir Contest - Coimbra".
        </p>
        <p>
          The choir competition aims not only to pay homage to José António
          Carlos Seixas, a prominent composer of the Portuguese Baroque, born in
          Coimbra in 1704, but, above all, to stimulate polyphonic choral music
          within the city of Coimbra, a university city of a very particular
          nature and eminent cultural matrix, with a remarkable tradition in
          this musical field.
        </p>
        <p>
          The "II Choir Contest - Coimbra" will include two phases: the first
          will be a pre-selection phase, with all the amateur choirs enrolled;
          the second, to be held on June 6, 2020, will have the participation of
          eight selected choirs by the Jury, constituted by prestigious
          conductors of national and international renown. The event will end
          with an evening Gala Concert, with the participation of the first
          three classified choirs and the host, the Choir Carlos Seixas.
        </p>
        <p>
          Applications are open until 28 March 2020. For further information
          about the application process please refer to the{" "}
          <a href="/regulamento/">Regulamento page</a> (in Portuguese) or email{" "}
          <a href="mailto:coro.secretariado@cm-coimbra.pt">
            coro.secretariado@cm-coimbra.pt
          </a>
          .
        </p>
      </Section>
    </Layout>
  );
};

export default English;