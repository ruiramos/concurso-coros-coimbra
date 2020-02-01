import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "tailwind.macro";
import Img from "gatsby-image";

import { Section, Sep } from "../components/styled.js";

const DocContainer = tw.div`
  flex
`;

const Doc = styled.a`
  min-width: 150px;
  min-height: 300px;
  ${tw`block m-2 text-sm no-underline`}

  & img {
    border: 1px solid #eee;
  }
`;

const DocImg = styled.div`
  ${tw`shadow m-2`}
  &:hover {
    ${tw`shadow-md`}
  }
`;

const NormalList = tw.ul`list-disc mb-4`;
const RegTitle = tw.h2`mt-6`;

const SmallDate = tw.small`block text-gray-500 leading-relaxed`;
const Underline = styled.span`
  text-decoration: underline;
`;

const Regulamento = ({ data }) => (
  <Layout>
    <SEO title="Regulamento" />

    <Section>
      <RegTitle>Preâmbulo</RegTitle>
      <p>
        O Concurso de Coros - Coimbra visa divulgar a música coral polifónica e
        promover o salutar convívio entre diferentes grupos corais do país e do
        estrangeiro.
      </p>
      <p>
        O I Concurso de Coros - Coimbra realizou-se a 28 de outubro de 2017.
      </p>
      <p>Foram vencedores da 1ª edição os seguintes coros:</p>
      <p>
        1º lugar - Coro Legatto;
        <br />
        2º lugar - Coro dos Pequenos Cantores de Coimbra;
        <br />
        3º lugar - Grupo Vocal Ad Libitum
      </p>

      <RegTitle>I - Organização</RegTitle>
      <p>
        1. O Coro Carlos Seixas da Casa do Pessoal do Município de Coimbra,
        adiante designado CCS, propõe-se realizar periodicamente um concurso de
        coros.
      </p>
      <p>
        2. O segundo concurso, denominado “II Concurso de Coros – Coimbra”,
        realizar-se-á a 6 de junho de 2020, na Igreja do Convento São Francisco.
      </p>
      <p>3. O Concurso de Coros é bienal.</p>

      <RegTitle>II - Participação</RegTitle>
      <p>1. No Concurso podem participar todos os Coros amadores.</p>
      <p>2. O concurso decorrerá em duas fases:</p>
      <p>
        2.1. Na primeira fase, de pré-seleção, todos os Coros participantes
        serão sujeitos à apreciação de um Júri, através de uma gravação em
        formato mp3. Para o efeito deverão os Coros participantes enviar
        gravação de uma obra à escolha, dentro do repertório do canto
        tradicional português harmonizado, “à capella”; caso o Coro passe à fase
        seguinte, esta peça será interpretada na 2ª fase.
      </p>
      <p>
        2.2. A segunda fase terá a participação dos Coros selecionados pelo Júri
        na primeira fase, até ao máximo de oito Coros. Serão ainda selecionados
        2 Coros suplentes para o caso de alguma desistência.
      </p>
      <p>
        Esta fase é presencial e nela cada Coro concorrente deve interpretar:
      </p>
      <NormalList>
        <li>Obra obrigatória;</li>
        <li>Obra à escolha;</li>
        <li>Obra livre.</li>
      </NormalList>
      <p>
        3. No dia da atuação, ou seja, na 2ª fase, não será permitido qualquer
        tipo de play-back, nem vocal nem instrumental.
      </p>
      <p>
        4. Os Coros interessados deverão apresentar a candidatura até 28 de
        março de 2020.
      </p>
      <p>
        5. Depois de comunicada a sua admissão, até 18 de abril, os Coros terão
        um prazo máximo de 15 dias úteis (até 9 de maio) para confirmar a sua
        participação, para o que deverão:
      </p>
      <p>
        5.1. Enviar breve biografia atualizada do Coro, acompanhada de
        fotografia;
      </p>
      <p>
        5.2. Pagar a taxa de inscrição, no montante de 25,00 €, por
        transferência bancária para o IBAN – PT 50003502550007589733268
      </p>
      <p>5.3. Todos os documentos devem ser enviados por correio para:</p>
      <p>
        Coro Carlos Seixas
        <br />
        Casa do Pessoal do Município de Coimbra
        <br />
        Pátio da Inquisição nº 20
        <br />
        3000-221 COIMBRA
      </p>
      <p>
        Ou por e-mail para:
        <br />
        <a href="mailto:coro.secretariado@cm-coimbra.pt">
          coro.secretariado@cm-coimbra.pt
        </a>
      </p>

      <RegTitle>III - Obras a interpretar</RegTitle>
      <p>
        1. Obra obrigatória, em anexo:{" "}
        <a href="/espera-me.pdf">
          <em>Espera-me</em>
        </a>{" "}
        – Paulo Bernardino, poema de Sophia de Mello Breyner Andresen;
      </p>
      <p>
        1.1. No caso de outras tipologias, que não Coro misto, a adaptação da
        obra será da responsabilidade do próprio Coro;
      </p>
      <p>
        2. Obra à escolha, dentro do repertório do canto tradicional português
        harmonizado, “à capella”;
      </p>
      <p>3. Obra livre “à capella” ou com acompanhamento ao piano;</p>
      <p>4. A duração máxima de cada atuação não deverá exceder 15 minutos.</p>

      <RegTitle>IV - Júri e prémios</RegTitle>
      <p>
        1. O júri será constituído por cinco elementos: Jorge Matta, que
        presidirá, Eugénio Amorim, João Santos (titulares), Aoife Hiney e Vasco
        Negreiros (convidados).
      </p>
      <p>2. As decisões do júri são soberanas e não podem ser revistas.</p>
      <p>
        3. Serão atribuídos prémios não monetários aos 1º, 2º e 3º
        classificados.
      </p>
      <p>4. O júri pode atribuir prémios “ex aequo”.</p>
      <p>
        5. A organização reserva-se o direito de atribuir menções honrosas e
        diplomas.
      </p>

      <RegTitle>V - Disposições Diversas</RegTitle>
      <p>
        1. Todos os Coros participantes terão, no dia da atuação, um ensaio,
        mediante combinação prévia.
      </p>
      <p>
        2. A organização não é responsável pelas despesas de transporte ou
        estadia dos Coros participantes.
      </p>
      <p>
        3. A pedido prévio, a Organização prestará ajuda aos Coros
        participantes, em termos de informações (logística e outras) ou ajudas
        pontuais de deslocação, dentro da medida do que for possível.
      </p>

      <RegTitle>VI - Disposição Final</RegTitle>
      <p>
        1. Todas as dúvidas ou casos omissos serão resolvidos pela Organização
        que é soberana, após consulta do júri, se tal se manifestar relevante
        para o assunto em questão.
      </p>
    </Section>

    <Sep />

    <Section>
      <p>
        O regulamento do concurso bem como a partitura da obra obrigatória,{" "}
        <em>Espera-me</em>, de Paulo Bernardino, estão também disponiveis para
        download em formato PDF:
      </p>

      <DocContainer>
        <Doc href="/regulamento-concurso-coros-30-01.pdf" target="_blank">
          <DocImg>
            <Img fluid={data.regThumb.childImageSharp.fluid} />
          </DocImg>
          <Underline>Regulamento (pdf)</Underline>
          <SmallDate className="no-underline">
            Actualizado: 30/01/2020
          </SmallDate>
        </Doc>
        <Doc href="/espera-me.pdf" target="_blank">
          <DocImg>
            <Img fluid={data.obraThumb.childImageSharp.fluid} />
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
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    obraThumb: file(relativePath: { eq: "obra-thumb.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
