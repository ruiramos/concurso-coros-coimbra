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
            fixed={data.eamorim.childImageSharp.fixed}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Eugénio Amorim</h3>
          <Resumo>
            <p>
              Eugénio Amorim concluiu os Cursos Superiores de Piano e Composição
              no Conservatório de Música do Porto e posteriormente o Bacharelato
              em Direção de Orquestra e a Licenciatura em Música Sacra na Escola
              Superior de Música de Würzburg (Alemanha).
            </p>
            <p>
              Maestro do Coro da Sé Catedral do Porto de 1994 a 2010. Para além
              da atividade musical da Catedral, dirigiu cerca de 200 concertos
              em Portugal, Inglaterra e Alemanha e promoveu a edição de dois
              CD's com música portuguesa.
            </p>
            <p>
              A sua atividade estende-se à composição musical de que destacam
              obras mais recentes como 2 Magnificat (um para coro a cappella,
              editado pela AVA e outro para Coro misto, 4 trompetes, soprano
              solo e Órgão), "Salmo 84 - Paisagens Monásticas - Silêncio", assim
              como diversos motetes; em breve será estreada o 2º acto de uma
              ópera partilhada com outros 3 compositores.
            </p>
            <p>
              É doutorado em Musicologia pela Universidade Católica Portuguesa
              com uma tese intitulada "Prática composicional na música sacra em
              Portugal na primeira metade do século XVIII - Estudo e edição da
              obra de João Rodrigues Esteves", prosseguindo a sua atividade de
              investigação no CECH - Centro de Estudos Clássicos e Humanísticos
              da Universidade de Coimbra.
            </p>
            <p>
              Foi membro da Comissão Instaladora da Escola das Artes da
              Universidade Católica, onde lecionou desde a sua fundação até
              2003, prosseguindo desde então a sua atividade docente no Curso de
              Composição da Escola Superior de Música e das Artes do Espetáculo
              do Instituto Politécnico do Porto, onde é atualmente coordenador
              da respectiva área e membro do Conselho Técnico-Científico.
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <Img
            fixed={data.jsantos.childImageSharp.fixed}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>João Santos</h3>
          <Resumo>
            <p>
              João Santos é licenciado em Música Sacra pela Escola das Artes da
              Universidade Católica Portuguesa - Porto, onde estudou com Luca
              Antoniotti (Órgão), Eugénio Amorim (Composição e Direcção de
              Coros), Cesário Costa (Direcção de Orquestra), Anselm Hartmann
              (Piano), entre outros.  João Santos tem-se destacado nas áreas de
              Órgão e Composição, tanto a nível nacional, com o 2º prémio no
              Concurso Nacional de Órgão do Instituto Gregoriano de Lisboa
              (2007), como internacionalmente, contactando com célebres
              organistas como T. Jellema, W. Zerer, M. Bouvard, J. Janssen, F.
              Espinasse, O. Latry, D. Roth, L. Scandali, entre outros.
            </p>
            <p>
              Participou nos prestigiados concursos internacionais de órgão
              em Alkmaar, (Holanda), Freiberg, (Alemanha) e Innsbruck (Áustria).
              Efectua regularmente concertos por todo o país e estrangeiro, de
              onde se destacam a Catedral de Westminster (Londres),
              o Orgelfestival Rhür (Alemanha), a Catedral de Notre Dame de
              Paris, o St. Christoph Summer Festival (Vilnius), entre outros.
              Foi solista com a Orquestra Clássica da Madeira durante o Festival
              Internacional de Órgão da Madeira, 2014. É convidado com
              frequência para se apresentar como continuista em orquestras,
              nomeadamente com a Orquestra Filarmonia das Beiras. Como
              compositor, além de larga produção no domínio da música litúrgica,
              obras suas têm sido reconhecidas internacionalmente, sendo
              finalista no Simon Carrington Chamber Singers Choral Composition
              Competition (EUA) e no Musicaficta International Choral
              Composition Competition (Itália). No seguimento deste último, as
              suas obras Jesu Dulcis Memoria e Tryptich foram selecionadas para
              publicação pela editora Edition Ferrimontana, sediada na Alemanha.
              A sua transcrição para seis órgãos do Allegretto da 7ª Sinfonia
              de L. Van Beethoven arrecadou o primeiro prémio no concurso
              internacional de composição <em>&quot;Órgãos de Mafra&quot;</em>,
              2017. Na edição de 2019 do mesmo concurso, foi distinguido também
              com o primeiro prémio, desta vez com uma obra original intitulada
              “Magnificat”.
            </p>
            <p>
              João Santos é pianista acompanhador do dueto de contratenores
              ENCANTO, com quem apresenta uma regularidade de concertos por todo
              o País, bem como em inúmeras digressões no estrangeiro,
              nomeadamente França, Suíça, Brasil, Estados Unidos, Bélgica,
              Inglaterra, Alemanha e Eslováquia.  João Santos Dirige o Coro
              Carlos Seixas (Coimbra) desde a sua fundação em 2007. De 2010 a
              2018, foi organista titular do Santuário de Fátima. É organista
              titular da Catedral de Leiria desde 2007.
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <Img
            fixed={data.ahiney.childImageSharp.fixed}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Aoife Hiney</h3>
          <Resumo>
            <p>
              Aoife Hiney concluiu o Doutoramento em Música em 2017 e o Mestrado
              em Música (Performance – Direção Coral) na Universidade de Aveiro
              (UA). Tem um Honours Degree em Educação Musical do Trinity
              College, Dublin.
            </p>

            <p>
              Estudou direção coral com António Vassalo Lourenço (PT), Bernie
              Sherlock (IE), David Brophy (IE), Ite O’Donovan (IE), Lilla Gabor
              (HU) Marco António da Silva Ramos (BR), Neil Ferris (UK) e Vasco
              Negreiros (PT).
            </p>

            <p>
              Foi maestrina assistente do coro de câmara New Dublin Voices,
              várias vezes premiado ao nível internacional. Fundou em 2012 o
              coro de câmara Voz Nua em Aveiro, e em 2015 a Associação Voz Nua.
              Maestrina dos três coros integrados na Associação Voz Nua, também
              dirigiu o Coro Slava (Universidade Nova de Lisboa), o Coro de
              Academia de Saberes (Aveiro), e também colaborou com o coro
              masculino Graduale (Aveiro) como maestrina convidada.
            </p>

            <p>
              É directora artística do FICA (Festival Internacional de Coros,
              Aveiro), e assistente de direção do festival ZêzereArts. Tem
              apresentado o seu trabalho académico em congressos nacionais e
              internacionais. A sua pesquisa tem como enfoque práticas não
              profissionais de canto coral, formação musical para professores,
              práticas de investigação partilhadas e o desenvolvimento da
              literacia musical e educação musical para adultos. Atualmente é
              investigadora integrada no INET-md, UA e professora adjunta
              convidada na Escola Superior de Educação do Instituto Politécnico.
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
    jmatta: file(relativePath: { eq: "maestros/j-matta-2.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jsantos: file(relativePath: { eq: "maestros/j-santos.jpg" }) {
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
    ahiney: file(relativePath: { eq: "maestros/aoife-hiney.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    eamorim: file(relativePath: { eq: "maestros/eugenio-amorim.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
