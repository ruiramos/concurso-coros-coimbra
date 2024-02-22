import React from "react";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import { Section as CommonSection, Sep } from "components/styled.js";

const DocContainer = tw.div`
  flex
`;

const Section = styled(CommonSection)`
  ol {
    ${tw`list-decimal mb-2`}
    counter-reset: item;
    & > li {
      display: block;
    }
    & > li:before {
      content: counters(item, ".") ". ";
      counter-increment: item;
    }
    ol {
      ${tw`ml-4 mb-2`}
    }
  }

  ul {
    ${tw`list-disc ml-8 mb-2`}
  }
`;

const Doc = styled.a`
  min-width: 150px;
  min-height: 200px;
  ${tw`block m-2 text-sm no-underline`}

  & img {
    border: 1px solid #eee;
  }
`;

const DocImg = styled.div`
  ${tw`shadow m-2 transition-all`}
  &:hover {
    ${tw`shadow-md`}
  }
`;

const RegTitle = tw.h2``;

const SmallDate = tw.small`block text-gray-500 leading-relaxed`;
const Underline = styled.span`
  text-decoration: underline;
`;

const Regulamento = ({ data }) => (
  <Layout edition="2022">
    <SEO title="Regulamento" />

    <Section>
      <RegTitle>Preâmbulo</RegTitle>
      <p>
        O Concurso de Coros – Coimbra visa divulgar o repertório coral, com
        particular enfoque sobre a música coral portuguesa, e promover o salutar
        convívio entre diferentes grupos corais do país e do estrangeiro.
      </p>
      <p>
        O I Concurso de Coros - Coimbra realizou-se a 28 de outubro de 2017.
      </p>
      <p>Foram vencedores da 1ª edição os seguintes coros:</p>
      <p css={tw`ml-4`}>
        1º lugar - Coro Legatto;
        <br />
        2º lugar - Coro dos Pequenos Cantores de Coimbra;
        <br />
        3º lugar - Grupo Vocal Ad Libitum
      </p>

      <RegTitle>I - Organização</RegTitle>
      <ol>
        <li>
          O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra,
          adiante designado CCS, propõe-se realizar periodicamente um concurso
          de coros.
        </li>
        <li>
          O segundo concurso, denominado “II Concurso de Coros – Coimbra 2022”,
          realizar-se-á a 4 de junho de 2022, na Sala D. Afonso Henriques do
          Convento São Francisco.
        </li>
        <li>O Concurso de Coros é bienal.</li>
      </ol>

      <RegTitle>II - Participação</RegTitle>
      <ol>
        <li>No Concurso podem participar todos os Coros amadores.</li>
        <li>
          O concurso decorrerá em duas fases:
          <ol>
            <li>
              Na primeira fase, de pré-seleção, os Coros participantes serão
              sujeitos à apreciação de um Júri, através de uma gravação em
              formato mp3. Para o efeito deverão enviar gravação de uma obra à
              escolha, dentro do repertório do canto tradicional português
              harmonizado, “à capella”; caso o Coro passe à fase seguinte, esta
              peça será interpretada na 2ª fase.
            </li>
            <li>
              A segunda fase terá a participação dos Coros selecionados pelo
              Júri na primeira fase, até ao máximo de oito Coros. Serão ainda
              selecionados 2 Coros suplentes para o caso de alguma desistência.
              <br />
              Esta fase é presencial e nela cada Coro concorrente deve
              interpretar:
              <ul>
                <li>Obra obrigatória; </li>
                <li>Obra à escolha (referida em 2.1);</li>
                <li>Obra livre.</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          No dia da atuação, ou seja, na 2ª fase, não será permitido qualquer
          tipo de play-back, nem vocal nem instrumental.
        </li>
        <li>
          Os Coros interessados deverão apresentar a candidatura até 28 de março
          de 2022.
        </li>
        <li>
          Depois de comunicada a sua admissão, até 18 de abril, os Coros terão
          um prazo máximo de 15 dias úteis (até 10 de maio) para confirmar a sua
          participação, para o que deverão:
          <ol>
            <li>
              Enviar breve biografia atualizada do Coro, acompanhada de
              fotografia;
            </li>
            <li>
              Pagar a taxa de inscrição, no montante de 50,00 €, por
              transferência bancária para o IBAN – PT 50003502550007589733268
            </li>
            <li>
              Todos os documentos devem ser enviados por e-mail para:
              <br />
              <a href="mailto:coro.secretariado@cm-coimbra.pt">
                coro.secretariado@cm-coimbra.pt
              </a>
              <br />
              <br />
              Ou por correio para:
              <br />
              <br />
              Coro Carlos Seixas
              <br />
              Casa do Pessoal do Município de Coimbra
              <br />
              Pátio da Inquisição nº 20
              <br />
              3000-221 COIMBRA
              <br />
            </li>
          </ol>
        </li>
      </ol>

      <RegTitle>III - Obras a interpretar</RegTitle>
      <ol>
        <li>
          Obra obrigatória, em anexo:{" "}
          <a href="/espera-me.pdf">
            <em>Espera-me</em>
          </a>{" "}
          – Paulo Bernardino, poema de Sophia de Mello Breyner Andresen;
          <ol>
            <li>
              No caso de outras tipologias, que não Coro misto, a adaptação da
              obra será da responsabilidade do próprio Coro;
            </li>
          </ol>
        </li>
        <li>
          Obra à escolha, dentro do repertório do canto tradicional português
          harmonizado, “à capella”;
        </li>
        <li>
          Obra livre “a capella” ou com acompanhamento instrumental (v.g. piano,
          violino, guitarra e/ou outros);
        </li>
        <li>A duração máxima de cada atuação não deverá exceder 15 minutos.</li>
      </ol>

      <RegTitle>IV - Júri e prémios</RegTitle>
      <ol>
        <li>
          O júri será constituído por cinco elementos: Eugénio Amorim, que
          presidirá, João Santos, Aoife Hiney, Vasco Negreiros e Pedro Teixeira.
        </li>

        <li>As decisões do júri são soberanas e não podem ser revistas.</li>

        <li>
          Serão atribuídos prémios não monetários aos 1º, 2º e 3º classificados.
        </li>

        <li>
          A organização reserva-se o direito de atribuir menções honrosas e
          diplomas.
        </li>
      </ol>

      <RegTitle>V - Disposições Diversas</RegTitle>
      <ol>
        <li>
          Todos os Coros participantes terão, no dia da atuação, um ensaio,
          mediante combinação prévia.
        </li>
        <li>
          A organização não é responsável pelas despesas de transporte ou
          estadia dos Coros participantes.
        </li>
        <li>
          A pedido prévio, a Organização prestará ajuda aos Coros participantes,
          em termos de informações (logística e outras) ou ajudas pontuais de
          deslocação, dentro da medida do que for possível.
        </li>
      </ol>

      <RegTitle>VI - Disposição Final</RegTitle>
      <ol>
        <li>
          Todas as dúvidas ou casos omissos serão resolvidos pela Organização
          que é soberana, após consulta do júri, se tal se manifestar relevante
          para o assunto em questão.
        </li>
      </ol>
    </Section>

    <Sep />

    <Section>
      <p>
        O regulamento do concurso bem como a partitura da obra obrigatória,{" "}
        <em>Espera-me</em>, de Paulo Bernardino, estão também disponiveis para
        download em formato PDF:
      </p>

      <DocContainer>
        <Doc href="/regulamento-concurso-coros-18-02-22.pdf" target="_blank">
          <DocImg>
            <GatsbyImage
              image={data.regThumb.childImageSharp.gatsbyImageData}
            />
          </DocImg>
          <Underline>Regulamento (pdf)</Underline>
          <SmallDate className="no-underline">
            Actualizado: 30/01/2020
          </SmallDate>
        </Doc>
        <Doc href="/espera-me.pdf" target="_blank">
          <DocImg>
            <GatsbyImage
              image={data.obraThumb.childImageSharp.gatsbyImageData}
            />
          </DocImg>
          <Underline>Espera-me (pdf)</Underline>
        </Doc>
      </DocContainer>
    </Section>
  </Layout>
);

export default Regulamento;
export const query = graphql`
  query RegulamentoQuery {
    regThumb: file(relativePath: { eq: "reg-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: CONSTRAINED)
      }
    }
    obraThumb: file(relativePath: { eq: "obra-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: CONSTRAINED)
      }
    }
  }
`;
