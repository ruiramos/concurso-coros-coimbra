import Img from "gatsby-image";
import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";
import { graphql } from "gatsby";

import Resumo from "../components/resumo";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Section } from "../components/styled.js";

const JuriImgContainer = styled.div``;

const JuriElement = styled.div`
  ${tw`flex flex-col md:flex-row mt-2`}

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
        O júri da edição deste ano será composto pelos maestros Jorge Matta, que
        presidirá, Eugénio Amorim, João Santos, Aoife Hiney e Vasco Negreiros.
      </p>
    </Section>

    <Section>
      <JuriElement>
        <JuriImgContainer>
          <Img
            fixed={data.jmatta.childImageSharp.fixed}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Jorge Matta</h3>
          <Resumo>
            <p>
              Maestro-adjunto do Coro Gulbenkian, é doutorado em Musicologia
              Histórica pela Universidade Nova de Lisboa, onde ensinou no
              Departamento de Ciências Musicais. É investigador do CESEM (Centro
              de Estudos de Estética e Sociologia Musical). Fez parte da equipa
              que criou o Doutoramento em Artes Musicais, de que foi o
              Coordenador. Editor e intérprete, tem-se destacado pela
              descoberta, recuperação e divulgação do património musical
              português, realizando a primeira audição moderna de mais de 300
              obras vocais e instrumentais de compositores portugueses, e
              estreias absolutas de obras de Constança Capdeville, Jorge
              Peixinho, Fernando Lopes-Graça, Filipe Pires, Miguel Azguime e
              Eurico Carrapatoso.
            </p>
            <p>
              A sua já longa discografia, a maior parte com o Coro Gulbenkian, é
              dedicada também à música portuguesa, desde a polifonia
              seiscentista até aos compositores dos nossos dias. A uma das
              gravações foi atribuído o Prémio Discobole da Academia Francesa do
              Disco. Como autor e intérprete gravou para a televisão as séries
              de programas “Música de Corte no Palácio da Ajuda” (1986), “Tempos
              da Música” (1988) e “Percursos da Música Portuguesa” (2008).
              Participou em destacados festivais de música portugueses e
              estrangeiros (Espanha, França, Inglaterra, Alemanha, Israel, China
              e Estados Unidos), e dirigiu as mais importantes orquestras em
              Portugal, para além de outros agrupamentos na Bélgica, Alemanha e
              Estados Unidos.
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
          <Img
            fixed={data.vnegreiros.childImageSharp.fixed}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Vasco Negreiros</h3>
          <Resumo>
            <p>
              Vasco Negreiros nasceu em Portugal, tendo emigrado para o Brasil
              aos dez anos de idade, onde iniciou ao piano os seus estudos de
              música. Mais tarde, estudou Viola d’Arco e Canto, tendo-se
              especializado inicialmente em Direcção Coral.
            </p>
            <p>
              Na Alemanha, concluiu o curso de Direcção na Musikhochschule
              Karlsruhe, seguindo Pós- Graduação (KapellMeister Ausbildung),
              também em Direcção, na Musikhochschule de Mannheim- Heidelberg.
              Concluiu em 2005 Doutoramento sob orientação de Owen Rees
              (Oxford), do qual resultou a edição facsimilada do Livro de varios
              motetes, de Frei Manuel Cardoso, pela Casa da Moeda – Imprensa
              Nacional de Portugal.
            </p>
            <p>
              Como maestro, dirige regularmente o Vocal Ensemble, colaborando
              como convidado com diversas orquestras, no país e no estrangeiro,
              principalmente em programas de Música Antiga ou nas interpretações
              das suas próprias composições, tendo inciado a sua carreira
              discográfica em 1989, com o CD «Brasil Barroco», que incluía
              música colonial em primeira audição contemporânea. Desde 1998 é
              professor no Curso Internacional de Música Antiqua de Daroca
              (Espanha).
            </p>
            <p>
              Publicou ainda um CD triplo com a íntegra do ‘Livro de varios
              motetes’ de Frei Manuel Cardoso, pela editora Althum, assim como o
              resultado da sua investigação sobre Jerónimo Francisco de Lima:
              ‘Rabbia, Furor, Dispetto’, pelo selo discográfico Paraty, de
              Paris, muito elogiado pela crítica internacional. Para crianças,
              publicou pela editora mPmP (Movimento Patrimonial pela Música
              Portuguesa) o CD ‘O Gato das Botas’, uma obra pedagógica
              orquestral de sua autoria.
            </p>
            <p>
              Vasco Negreiros é Professor de Direcção e de outras disciplinas
              dos foros prático, teórico e auditivo, na Universidade de Aveiro.
              Realizou muitas edições musicais, principalmente no campo da
              Música Histórica e é conferencista e autor de diversos artigos e
              livros de índole musicológica.
            </p>
            <p>
              Para além da actividade artística como maestro, dedica-se bastante
              à composição, tendo sido premiado na Bulgária, pelo seu Amen para
              coro infantil, realizando residência artística como compositor
              convidado do Festival Ketewan, na Índia, em 2017. Em 2019 foi o
              compositor convidado do Festival Estoril Lisboa, para o qual
              escreveu a obra ‘Peregrinações – sobre o livro de Fernão Mendes
              Pinto’, interpretada no Mosteiro dos Jerónimos pelo actor Luís
              Miguel Cintra e pela Orquestra Metropolitana de Lisboa, sob
              direcção do próprio compositor.
            </p>
          </Resumo>
        </div>
      </JuriElement>
    </Section>
  </Layout>
);

export default Juri;

export const query = graphql`
  query JuriQuery {
    jmatta: file(relativePath: { eq: "maestros/j-matta.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vnegreiros: file(relativePath: { eq: "maestros/vasco-negreiros2.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
