import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import tw from "twin.macro";

import { Section } from "../components/styled.js";
import { Sep } from "../components/styled.js";

const MainHeading = tw.h2` text-center border-0 mb-0 pb-0`;
const SubHeading = tw.h3` text-center `;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <MainHeading>4 de junho de 2022</MainHeading>
    <SubHeading>Convento São Francisco, Coimbra</SubHeading>

    <Section>
      <div css={[tw`border rounded p-8 my-4`]}>
        <h2 css={[tw`m-0 mb-4`]}>
          Classificação do II Concurso de Coros Coimbra:
        </h2>
        <ol css={[tw`list-decimal pl-8`]}>
          <li>
            <a href="/coros/#vocal-art-ensemble">Vocal Art Ensemble</a>
          </li>
          <li>
            <a href="/coros/#pro-vocal">ProVocal Ensemble</a>
          </li>
          <li>
            <a href="/coros/#coro-feminino-cmparedes">
              Coro Feminino do Conservatório de Música de Paredes
            </a>
          </li>
        </ol>
      </div>
      <div css={[tw`w-1/2 inline-block p-4`]}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLg3xgq5Rluu9rkhMjMKQrcs4-DuVnVPGh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=2fMrr5i5RcM&list=PLg3xgq5Rluu9rkhMjMKQrcs4-DuVnVPGh"
          target="_blank"
          css={[tw`text-center mt-2 block`]}
        >
          II Concurso de Coros Coimbra - Concurso (YouTube)
        </a>
      </div>
      <div css={[tw`w-1/2 inline-block p-4`]}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLg3xgq5Rluu-c-pJ4kDIFZheRsgNRVZqL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=KZIpTQqh3CA&list=PLg3xgq5Rluu-c-pJ4kDIFZheRsgNRVZqL"
          target="_blank"
          css={[tw`text-center mt-2 block`]}
        >
          II Concurso de Coros Coimbra - Gala (YouTube)
        </a>
      </div>
    </Section>
    <Sep primary />

    <Section>
      <p>
        O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra
        organiza, no corrente ano, o "II Concurso de Coros - Coimbra", no âmbito
        da música coral, pretendendo que esta edição tenha o mesmo sucesso que a
        versão anterior.
      </p>
      <p>
        O concurso de coros visa não só homenagear José António Carlos Seixas,
        compositor de destaque do barroco português, nado em Coimbra, em 1704,
        mas, sobretudo, dinamizar a música coral tendo como palco a cidade de
        Coimbra, cidade universitária de cariz e de matriz eminentemente
        culturais, detentora de assinalável tradição neste campo musical.
      </p>
      <p>
        No "II Concurso de Coros – Coimbra 2022'' pretende-se ainda prestar a
        devida homenagem à poetisa Sophia de Mello Breyner Andresen, através da
        escolha da peça obrigatória do concurso - “Espera-me” - com Poema da sua
        autoria e Música do Doutor Paulo Bernardino.
      </p>
      <p>
        O "II Concurso de Coros - Coimbra" integrará duas fases: a primeira será
        uma fase de pré-seleção, com todos os coros amadores inscritos; a
        segunda, a realizar no dia 04 de junho de 2022, terá a participação de
        oito <Link to="/coros/">coros selecionados</Link>, na primeira fase,
        pelo <Link to="/juri/">Júri</Link>, que será constituído por
        prestigiados maestros de renome nacional e internacional.
      </p>
      <p>
        O evento terminará com um Concerto de Gala, à noite, com a participação
        dos três primeiros coros classificados e do anfitrião, Coro Carlos
        Seixas.
      </p>
    </Section>
  </Layout>
);

export default IndexPage;
