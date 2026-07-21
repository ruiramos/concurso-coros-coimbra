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
      <p>
        O júri será constituído por cinco elementos: Jorge Matta, que presidirá,
        João Santos, Sílvio Cortez, Clara Alcobia Coelho e Pedro Miguel.
      </p>
    </Section>

    <Section>
      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.jorgeMatta.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Jorge Matta</h3>
          <Resumo>
            <p>
              Maestro-adjunto do Coro Gulbenkian durante longos anos, é
              doutorado em Musicologia Histórica pela Universidade Nova de
              Lisboa, onde ensinou no Departamento de Ciências Musicais.
            </p>
            <p>
              Editor e intérprete, destacou-se pela descoberta, recuperação e
              divulgação do património musical português, realizando a primeira
              audição moderna de mais de 300 obras vocais e instrumentais de
              compositores portugueses, e estreias absolutas de obras de
              Constança Capdeville, Jorge Peixinho, Fernando Lopes-Graça, Filipe
              Pires, Miguel Azguime e Eurico Carrapatoso.
            </p>
            <p>
              A sua longa discografia, a maior parte com o Coro Gulbenkian, é
              dedicada também à música portuguesa, desde a polifonia
              seiscentista até aos compositores dos nossos dias. A uma das
              gravações foi atribuído o Prémio Discobole da Academia Francesa do
              Disco. Como autor e intérprete gravou para a televisão as séries
              de programas &quot;Música de Corte no Palácio da Ajuda&quot;
              (1986), &quot;Tempos da Música&quot; (1988) e &quot;Percursos da
              Música Portuguesa&quot; (2008). Participou em destacados festivais
              de música portugueses e estrangeiros (Espanha, França, Inglaterra,
              Alemanha, Israel, China e Estados Unidos), e dirigiu as mais
              importantes orquestras em Portugal, para além de outros
              agrupamentos na Bélgica, Alemanha e Estados Unidos.
            </p>
            <p>
              Foi Director do Teatro Nacional de S. Carlos e Presidente da
              Comissão de Acompanhamento das Orquestras Regionais.
            </p>
          </Resumo>
        </div>
      </JuriElement>

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
              Clara Alcobia Coelho realizou os seus estudos superiores na
              Escola Superior de Música de Lisboa, nas áreas de Formação
              Musical e Direção Coral, tendo concluído posteriormente o
              Mestrado em Direção Coral. Estudou direção com Vasco Azevedo,
              Paulo Lourenço e Michel Corboz.
            </p>
            <p>
              É docente na Escola Superior de Música de Lisboa e na Academia
              Nacional Superior de Orquestra desde 2000 e integra o Coro
              Gulbenkian desde 1997, desenvolvendo paralelamente uma intensa
              atividade como directora coral e preparadora musical.
            </p>
            <p>
              Entre 2006 e 2016 trabalhou com o coro do festival Les Musicales
              de Grillon (França). Colaborou regularmente com o Coro Gulbenkian
              na preparação musical de numerosos programas de referência, com
              particular destaque para a música portuguesa e para o repertório
              moderno e contemporâneo. Desde 2010 dirige o Ensemble Lusiovoce,
              com o qual se apresentou em festivais como o Cistermúsica, o
              Festival de Órgão de Santarém, o Festival Estoril Lisboa, o
              Festival de Órgão da Madeira e o Festival de Órgão de Mafra.
            </p>
            <p>
              Com agrupamentos da Escola Superior de Música de Lisboa dirigiu a
              ópera Paride ed Elena, de C. W. Gluck, no Teatro São Luiz, para
              além de numerosos concertos dedicados ao repertório coral e vocal
              de câmara.
            </p>
            <p>
              Tem desenvolvido investigação dedicada à música portuguesa, com
              particular incidência no repertório coral dos séculos XX e XXI, e
              nos últimos anos tem-se dedicado especialmente à direção de
              música vocal contemporânea.
            </p>
            <p>
              Entre os seus projetos mais relevantes contam-se a direção da
              versão encenada da ópera Hummus, de Zad Moultaka, em Lisboa e
              Londres; a gravação de obras de música moderna e contemporânea
              para coro e órgão com o Ensemble Lusiovoce; a direção da gravação
              do álbum vencedor do 1.º Prémio MUSA – Prémio de Composição MPMP,
              dedicado à música coral portuguesa contemporânea a cappella sobre
              textos de Sophia de Mello Breyner Andresen; e, mais recentemente,
              com o Ensemble MPMP, a interpretação de Lux Aeterna, de György
              Ligeti, do programa Ventos do Ocidente e da integral da obra
              coral a cappella de Joly Braga Santos, na sua maioria inédita.
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.pedroMiguel.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Pedro Miguel</h3>
          <Resumo>
            <p>
              Iniciou os seus estudos musicais na Escola de Música Nossa Senhora
              do Cabo, onde concluiu o curso de piano, com Marina Dellalian, e
              frequentou o Curso de Canto com Joana Levy. Em 2000, ingressou na
              licenciatura em Ciências Musicais da Faculdade de Ciências Sociais
              e Humanas da Universidade Nova de Lisboa. Licenciado em Direção
              Coral e Formação Musical pela Escola Superior de Música de Lisboa,
              frequentou o Mestrado em Direção Coral, sob a orientação de Paulo
              Lourenço.
            </p>
            <p>
              Neste âmbito, assumiu o cargo de Maestro Adjunto do Coro de Câmara
              da Escola Superior de Música de Lisboa entre 2011 e 2013, coro com
              o qual participou no I Festival Coral de Verão 2012, tendo
              alcançado a Medalha de Ouro (II) na Categoria B2. Participou nas
              classes de direção do 4.º Estágio Internacional de Orquestra, sob a
              orientação de Jean Sébastien Béreau, e do 7.º Curso Internacional
              de Música Vocal de Aveiro, com Paulo Lourenço e António Vassalo
              Lourenço.
            </p>
            <p>
              Entre 2008 e janeiro de 2012, dirigiu o Coro do Orfeão de Leiria e
              o Coro de Câmara do Orfeão de Leiria. Dirigiu, entre 2006 e 2012,
              o Coro Vozes Crescendo. Assumiu, entre setembro de 2011 e julho de
              2013, a Direção Artística do Coral de Linda-a-Velha. Dirigiu o
              Coro Regina Coeli de Lisboa entre fevereiro de 2013 e outubro de
              2022, conquistando a Medalha de Ouro-III na categoria Vozes Mistas
              (2015) e a Medalha de Prata-IX na categoria Música Sacra (2016) no
              Festival Coral de Verão.
            </p>
            <p>
              É, desde 2005, membro do Coro da Fundação Gulbenkian. Dirige,
              desde 2012, o Grupo Coral de Queluz, desde 2018, o Grupo Coral
              Millennium BCP e, desde 2024, o Vocal Da Capo.
            </p>
            <p>
              <a
                href="https://vocaldacapo.pt/maestro/"
                target="_blank"
                rel="noreferrer"
              >
                vocaldacapo.pt
              </a>
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
    jorgeMatta: file(relativePath: { eq: "2026/maestros/jorge-matta.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
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
    pedroMiguel: file(
      relativePath: { eq: "2026/maestros/pedro-miguel.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
  }
`;
