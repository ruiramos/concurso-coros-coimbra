import React from "react";
import tw from "twin.macro";

import Layout from "components/layout";
import { Section } from "components/styled";
import SEO from "components/seo";

const Edicao2022 = () => {
  return (
    <Layout edition="2022">
      <SEO title="Videos e Resultados - II Concurso de Coros Coimbra" />
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
        <div css={[tw`w-full lg:w-1/2 inline-block p-4`]}>
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
            rel="noreferrer"
            css={[tw`text-center mt-2 block`]}
          >
            II Concurso de Coros Coimbra - Concurso (Playlist YouTube)
          </a>
        </div>
        <div css={[tw`w-full lg:w-1/2 inline-block p-4`]}>
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
            rel="noreferrer"
            css={[tw`text-center mt-2 block`]}
          >
            II Concurso de Coros Coimbra - Gala (Playlist YouTube)
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Edicao2022;
