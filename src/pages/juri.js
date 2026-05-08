import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import tw from "twin.macro";
import React from "react";
import { graphql } from "gatsby";

import Resumo from "components/resumo";
import Layout from "components/layout";
import SEO from "components/seo";
import { Section } from "components/styled.js";

const JuriImgContainer = styled.div``;

const JuriElement = styled.div`
  ${tw`flex flex-col md:flex-row mt-10`}

  & > * {
    ${tw`py-1 px-0 md:p-4`}
  }

  & > ${JuriImgContainer} {
    ${tw`flex-grow-0`}
  }

  h3 {
    ${tw`mb-2`}
  }

  p {
    ${tw`text-gray-500`}
  }
`;

const Juri = ({ data }) => (
  <Layout>
    <SEO title="Júri" />

    <Section>
      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.joaoSantos.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>João Santos</h3>
          <Resumo>
            <p>
              João Santos é licenciado em Música Sacra pela Escola das Artes da
              Universidade Católica Portuguesa – Porto, onde estudou Órgão,
              Composição, Direção e Piano com prestigiados professores.
              Distinguiu-se nas áreas de órgão e composição em Portugal e no
              estrangeiro, colaborando com intérpretes de renome como T. Jellema,
              W. Zerer, M. Bouvard, O. Latry e D. Roth. Apresenta-se
              regularmente em recital e participou em importantes concursos
              internacionais.
            </p>
            <p>
              Entre as salas e festivais onde atuou destacam-se a Catedral de
              Westminster, o Orgelfestival Ruhr, a Catedral de Notre-Dame de
              Paris e o St. Christoph Summer Festival. Como compositor, venceu
              por duas vezes o Concurso Internacional &quot;Órgãos de
              Mafra&quot; (2017 e 2019) e tem obras publicadas e encomendadas
              por diversas instituições.
            </p>
            <p>
              Desde 2020 desenvolve intensa atividade e investigação pioneira
              sobre o harmónio em Portugal e fundou, em 2023, o fort'Expressivo,
              atelier de música, que integra dois raros instrumentos de Mustel:
              um Orgue-Célesta (1898) e um Orgue Expressif (1899). Foi organista
              titular do Santuário de Fátima (2010–2018), integra a equipa de
              Mafra e dirige o Coro Carlos Seixas, sendo organista da Catedral
              de Leiria desde 2007.
            </p>
            <p>
              <a
                href="https://jsantos-organ.com"
                target="_blank"
                rel="noreferrer"
              >
                jsantos-organ.com
              </a>
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.silvioCortez.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Sílvio Cortez</h3>
          <Resumo>
            <p>
              Realizou os seus estudos musicais na Academia de Música de Paredes
              e no Conservatório do Porto onde viria a concluir o curso
              complementar. Conclui com alta classificação o curso superior de
              Direção Musical (coro e orquestra) no Conservatório Superior de
              Gaia, onde trabalhou com os Maestros Manuel Ivo Cruz, Mário Mateus
              e Gerald Kegelmann. Estudou Técnica Vocal e repertório com a
              Professora Fernanda Correia e frequentou diversos seminários de
              expressão corporal orientados pela Professora Jane Davidson.
            </p>
            <p>
              Nas diferentes áreas da história, teoria, análise e composição teve
              oportunidade de estudar com Christopher Bochmann, Benoît Gibson,
              João Pedro Alvarenga, Vanda de Sá, e Rui Vieira Nery. É licenciado
              em História e Teoria da Música pela Universidade de Évora e
              frequentou o doutoramento na Universidade de Aveiro.
            </p>
            <p>
              No âmbito performativo, apresentou-se em Espanha, França, Itália,
              Dinamarca, Hungria, Grécia, Roménia, Bulgária, Noruega e Suíça
              assim como concertos em Portugal continental e ilhas. Dirigiu o
              eCOROmia – Coro da Faculdade de Economia do Porto, o Ensemble Vocal
              de Freamunde e o CAUM – Coro Académico da Universidade do Minho.
              Foi diretor artístico do F.I.C.C. – Freamunde International Choir
              Competition (2010-2016). Em 2017 foi convidado para participar como
              júri no 4th International Passion Music Festival Szczecin – Polónia.
            </p>
            <p>
              Atualmente é Diretor Pedagógico do Conservatório do Vale do Sousa e
              professor de História da Cultura e das Artes no Conservatório de
              Música de Paredes. Orienta regularmente workshops de direção coral
              e de Coro – Práticas e Saberes. É o maestro titular da Orquestra
              ARNEMA e dirige desde a sua fundação, o Coro Feminino CVS (2007) e
              o Vocal Art Ensemble (2018). No presente ano (2026), reassume a
              posição de maestro titular do CAUM – Coro Académico da
              Universidade do Minho.
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.claraAlcobia.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Clara Alcobia Coelho</h3>
          <Resumo>
            <p>
              Clara Alcobia Coelho é desde 2001 docente na Escola Superior de
              Música de Lisboa e na Academia Nacional Superior de Orquestra e
              desde 1997 membro do Coro Gulbenkian. Dirigiu e fez a preparação
              musical de programas com diversos agrupamentos como o Estúdio de
              Ópera da Escola Superior de Música de Lisboa, o Coro Lisboa
              Cantat, o Coro do Tejo, o coro do Festival &quot;Les Musicalles de
              Grillon&quot; no sul de França, o Ensemble Lusiovoce, o Coro
              Gulbenkian, o Ensemble Mpmp e o Coro Casa da Música.
            </p>
            <p>
              Tem-se dedicado à direção e preparação de música vocal moderna e
              contemporânea (Magnus Lindberg, Eugene Birman, Dominique Pauwels,
              Emanuel Nunes, James Macmillan, entre outros) com especial ênfase
              na música portuguesa. Dirigiu ópera contemporânea a cappella (Zad
              Moultaka, Judith Weir e Stephen Oliver) em Lisboa e em Londres
              (2017).
            </p>
            <p>
              Gravou música moderna e contemporânea para Coro e Órgão com o
              Ensemble Lusiovoce (2021), a gravação do 1º Prémio Musa – prémio
              de Composição Mpmp, dedicado a música moderna e contemporânea
              portuguesa para coro a cappella sobre textos de Sophia de Mello
              Breyner (2019) e recentemente a integral para coro a cappella de
              Joly Braga Santos, com o Ensemble Mpmp (2025). Estudou com Vasco
              Azevedo e Paulo Lourenço. É doutoranda na ELACH da Universidade do
              Minho.
            </p>
          </Resumo>
        </div>
      </JuriElement>
    </Section>
  </Layout>
);

export default Juri;

export const query = graphql`
  query Juri2026Query {
    joaoSantos: file(relativePath: { eq: "2026/maestros/joao-santos.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    silvioCortez: file(
      relativePath: { eq: "2026/maestros/silvio-cortez.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    claraAlcobia: file(
      relativePath: { eq: "2026/maestros/clara-alcobia.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
  }
`;
