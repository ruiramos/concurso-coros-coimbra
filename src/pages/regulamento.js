import React from "react";
import { graphql } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import styled from "styled-components";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  Section as CommonSection,
  Sep,
  MainHeading,
  SubHeading,
} from "components/styled.js";

const DocContainer = tw.div`
  flex
`;

const Section = styled(CommonSection)`
  ol {
    ${tw`list-decimal mb-2`}
    counter-reset: item;
    & > li {
      display: block;
      ${tw`mb-1`}
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

const Regulamento = ({ data }) => {
  return (
    <Layout>
      <SEO title="Regulamento" />
      <MainHeading>III Concurso de Coros – Coimbra 2024</MainHeading>
      <SubHeading>Regulamento</SubHeading>
      <Section>
        <RegTitle>Preâmbulo</RegTitle>
        <p>
          O Concurso de Coros – Coimbra visa divulgar o repertório coral, com
          particular enfoque sobre a música coral portuguesa, e promover o
          salutar convívio entre diferentes grupos corais do país e do
          estrangeiro.
        </p>
        <p>
          O I Concurso de Coros - Coimbra realizou-se a 28 de outubro de 2017 e
          o segundo a 4 de junho de 2022. Foram vencedores os seguintes coros:
        </p>
        <ul>
          <li>
            1ª edição: 1º lugar - Coro Legatto; 2º lugar - Coro dos Pequenos
            Cantores de Coimbra; 3º lugar - Grupo Vocal Ad Libitum;
          </li>
          <li>
            2ª edição: 1º lugar Vocal Art Ensemble; 2º lugar – ProVocal
            Ensemble; 3º lugar – Coro Feminino do Conservatório de Música de
            Paredes.
          </li>
        </ul>

        <RegTitle>I - Organização</RegTitle>
        <ol>
          <li>
            O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra,
            adiante designado CCS, propõe-se realizar periodicamente um concurso
            de coros.
          </li>
          <li>O Concurso de Coros é bienal.</li>
          <li>
            O terceiro concurso, denominado “III Concurso de Coros – Coimbra
            2022”, realizar-se-á a 9 de junho de 2024, na Sala D. Afonso
            Henriques do Convento São Francisco.
          </li>
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
                harmonizado, “à capella”; caso o Coro passe à fase seguinte,
                esta peça será interpretada na 2ª fase.
              </li>
              <li>
                A segunda fase terá a participação dos Coros selecionados pelo
                Júri na primeira fase, até ao máximo de oito Coros. Serão ainda
                selecionados 2 Coros suplentes para o caso de alguma
                desistência.
                <br />
                Esta fase é presencial e nela cada Coro concorrente deve
                interpretar:
                <ul>
                  <li>Obra à escolha (referida no número anterior);</li>
                  <li>Obra obrigatória;</li>
                  <li>Obra livre.</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            No dia da atuação, ou seja, na 2ª fase, não será permitido qualquer
            tipo de playback, nem vocal nem instrumental.
          </li>
          <li>
            Os Coros interessados deverão apresentar a candidatura até 1 de
            abril de 2024.
          </li>
          <li>
            Depois de comunicada a sua admissão, até 22 de abril, os Coros terão
            até 30 de abril para confirmar a sua participação, para o que
            deverão:
            <ol>
              <li>
                Enviar breve biografia atualizada do Coro, acompanhada de
                fotografia;
              </li>
              <li>
                Pagar a taxa de inscrição, no montante de 75,00 €, por
                transferência bancária para o IBAN – PT 50003502550007589733268
                (enviar comprovativo da transferência).
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
            <a href="/2024/PartituraIIIConcursoCoros.pdf">
              <em>"Balada para Coimbra"</em>
            </a>{" "}
            – José Firmino;
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
            Obra livre “a capella” ou com acompanhamento instrumental (v.g.
            piano, violino, guitarra e/ou outros);
          </li>
          <li>
            A duração máxima de cada atuação não deverá exceder 15 minutos.
          </li>
        </ol>

        <RegTitle>IV - Júri e prémios</RegTitle>
        <ol>
          <li>
            O júri será constituído por cinco elementos: Jorge Matta, que
            presidirá, João Santos, António Vassalo Lourenço, Paulo Bernardino e
            Mariano Garcia Sanchez.
          </li>

          <li>As decisões do júri são soberanas e não podem ser revistas.</li>

          <li>
            Serão atribuídos prémios não monetários aos 1º, 2º e 3º
            classificados.
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
            A pedido prévio, a Organização prestará ajuda aos Coros
            participantes, em termos de informações (logística e outras), dentro
            da medida do que for possível.
          </li>
        </ol>

        <RegTitle>VI - Disposição Final</RegTitle>
        <ol>
          <li>
            Todas as dúvidas ou casos omissos serão resolvidos pela Organização
            que é soberana, após consulta do júri, se tal se manifestar
            relevante para o assunto em questão.
          </li>
        </ol>
      </Section>
      <Sep />
      <Section>
        <p>
          O regulamento do III Concurso bem como a partitura da obra
          obrigatória, <em>Balada para Coimbra</em>, de José Firmino, estão
          disponiveis para download em formato PDF:
        </p>

        <DocContainer>
          <Doc href="/2024/Regulamento_III_Concurso.pdf" target="_blank">
            <DocImg>
              <GatsbyImage
                image={data.regThumb.childImageSharp.gatsbyImageData}
              />
            </DocImg>
            <Underline>Regulamento (pdf)</Underline>
            <SmallDate className="no-underline">
              Actualizado: 22/02/2024
            </SmallDate>
          </Doc>
          <Doc href="/2024/PartituraIIIConcursoCoros.pdf" target="_blank">
            <DocImg>
              <GatsbyImage
                image={data.obraThumb.childImageSharp.gatsbyImageData}
              />
            </DocImg>
            <Underline>Balada para Coimbra (pdf)</Underline>
          </Doc>
        </DocContainer>
      </Section>
    </Layout>
  );
};

export default Regulamento;
export const query = graphql`
  query RegulamentoQuery {
    regThumb: file(relativePath: { eq: "2024/regulamento-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
    obraThumb: file(relativePath: { eq: "2024/obra-thumb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
  }
`;
