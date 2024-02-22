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
  <Layout edition="2022">
    <SEO title="Júri" />

    <Section>
      <p>
        O júri da edição deste ano será composto pelos maestros António Vassalo
        Lourenço, João Santos, Jorge Matta, Mariano García Sánchez e Paulo
        Bernardino.
      </p>
    </Section>

    <Section>
      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.antVassaloLourenco.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>António Vassalo Lourenço</h3>
          <Resumo>
            <p>
              Concluiu o Doutoramento (DMA em Conducting, Orchestral Emphasis)
              em 2005 pela University of Cincinnati e o Mestrado (Master in
              Music em Direção de Coro e de Orquestra) em 1996 na mesma
              Universidade, onde também leccionou como Assistente. É Professor
              Associado, responsável pelas classes de Direção, Coro e Orquestra,
              e Diretor da Licenciatura em Música na Universidade de Aveiro e
              menbro do INET- md. Foi Diretor Artístico da Orquestra Filarmonia
              das Beiras, entre 1999 e 2023, e foi ainda Diretor Artístico e
              Maestro Titular do Coro Regina Coeli entre 1983 e 2008.
            </p>
            <p>
              No trabalho desenvolvido com estes grupos deu particular atenção à
              música portuguesa, tendo realizado diversas estreias, primeiras
              audições modernas e gravações de obras de compositores
              portugueses, e ao repertório operístico, incluindo óperas infantis
              ou em portuguesas ou outras com versões em português. Atualmente é
              Maestro Adjunto da Orquestra Sinfonietta de Lisboa de quem foi
              co-fundador em 1995. Na Universidade de Cincinnati estudou
              Orquestração com Samuel Adler, Direção de Coro com Elmar Thomas,
              Earl Rivers e John Leman e Direção de Orquestra com o Maestro e
              Compositor Gerhard Samuel e ainda com Christopher Zimmerman, de
              quem foi Assistente de Direção.
            </p>
            <p>
              A sua formação e atividade musicais iniciaram-se aos 8 anos na
              Fundação Calouste Gulbenkian onde estudou violino e fez parte do
              Coro Infantil. Estudou Canto na Academia dos Amadores de Música
              com a professora Maria Amélia Abreu tendo concluído em 1990 o
              Curso Superior no Conservatório Nacional de Lisboa na classe da
              professora Filomena Amaro. Cantou em diversos grupos profissionais
              entre os quais o Coro Gulbenkian, entre 1982 e 1993, e dirigiu
              diversos coros em Portugal.
            </p>
            <p>
              A sua carreira como Maestro iniciou-se no Coro Regina Coeli tendo
              obtido com este grupo prémios em concursos internacionais.
              Frequentou cursos de Direção Coral em Portugal, Espanha, França e
              Bélgica, onde trabalhou com Manuel Cabero, Josep Prats
              (Barcelona), Erwin List (Strasbourg), Hélène Guy (Lyon), Edgar
              Saramago, Fernando Eldoro (Lisboa), Paul Brandevick (Boston),
              Johan Duijck (Gent) e Laszlo Héltay (Londres) e realizou também
              estudos de Direção de Orquestra, desde 1990, em Portugal, Espanha
              e França com Octave Calleya (Roménia), Jeno Rehah (Hungria), Ernst
              Schelle (Alemanha) e Jean- Sébastien Béreau (Paris). Foi aluno da
              classe de Direção da Orquestra Metropolitana de Lisboa, sob a
              orientação de Jean- Marc Burfin. Foi fundador e Maestro Adjunto da
              Orquestra da Juventude Musical Portuguesa e Assistente de Direção
              da Concert Orchestra de Cincinnati. Como maestro convidado dirigiu
              diversas orquestras e coros em Portugal, Espanha, França e nos
              Estados Unidos da América.
            </p>
            <p>
              Desde 1987 tem participado, como monitor, em diversos Cursos de
              Direção Coral, é Diretor Pedagógico do Curso Internacional de
              Música Vocal (CIMV: Direção Coral, Canto e Ópera) e tem sido
              Diretor Musical de peças teatrais. Foi Diretor Artístico do
              Festival Internacional de Música de Aveiro entre 2000 e 2004 e
              desempenhou o cargo de Coordenador Artístico da Orquestra
              Sinfónica Portuguesa e do Coro do Teatro Nacional de S. Carlos
              entre 2002 e 2003 e é, desde 2015, Diretor Artístico do Festival
              Música em Leiria. Em 2006 criou o Estúdio de Ópera de Centro,
              projeto que tem desenvolvido importante atividade formativa e tem
              realizado por todo o país produções de ópera que incluem, para
              além da apresentação de importantes óperas de repertório,
              produções em português, ópera portuguesa e ópera para crianças.
              Foi diretor do Departamento de Comunicação e Arte da Universidade
              de Aveiro entre 2011 e 2015.
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
            <p>
              <a href="https://jsantos-organ.com" target="_blank">
                jsantos-organ.com
              </a>
            </p>
          </Resumo>
        </div>
      </JuriElement>

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
          <GatsbyImage
            image={data.marianoGarcia.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Mariano García Sánchez</h3>
          <Resumo>
            <p>
              Nacido en Madrid en 1972, es ingeniero superior de
              telecomunicación por la Universidad Politécnica de Madrid, con
              formación de postgrado en Marketing por UNED, ESIC y ESADE. Tras
              cursar en su adolescencia el grado medio de piano en el
              Conservatorio Profesional Arturo Soria de Madrid, ya en su etapa
              adulta ha completado su formación en dirección coral con los
              maestros Nuria Fernández y Esteban Sanz y en técnica vocal con
              Amaya Añúa, Celia Alcedo, Alfredo García y Mireia Bonet.
            </p>
            <p>
              Compagina su labor profesional en la industria de
              telecomunicaciones con un activo papel como director coral y
              gestor de eventos y organizaciones culturales. La vinculación con
              la música coral le surge en su adolescencia, participando desde
              1990 en distintas agrupaciones corales madrileñas como tenor,
              pianista acompañante y director.
            </p>
            <p>
              Como director musical y gestor institucional ha logrado numerosos
              premios y reconocimientos en certámenes y ciclos nacionales e
              internacionales con los coros Coral Santiago Apóstol y Coro
              Encanto, de los que es director desde su fundación. Así, ha
              logrado primeros premios en certámenes nacionales como Torrevieja,
              Cocentaina, Fuensalida, etc. Con sus coros ha actuado hasta seis
              veces en el Auditorio Nacional de Madrid, incluso con la presencia
              de S. M. la Reina Doña Sofía. Ha grabado seis discos de producción
              propia y uno para la Editorial San Pablo.
            </p>
            <p>
              Ha desarrollado numerosos proyectos con amplia repercusión en
              diversos programas de TV y campañas publicitarias de ámbito
              nacional, tanto de carácter comercial como social. Es creador y
              coordinador general de la plataforma Coros por la Paz, surgida en
              2022 como movimiento coral internacional para la promoción de la
              paz a través del canto, logrando convocar a más de 25.000
              coralistas europeos a un evento simultáneo en cientos de ciudades
              europeas. Dicha iniciativa le valió para ser reconocido con el
              premio “Axuntábense” otorgado por la Federación de coros
              asturianos en 2023.
            </p>
          </Resumo>
        </div>
      </JuriElement>

      <JuriElement>
        <JuriImgContainer>
          <GatsbyImage
            image={data.pauloBernardino.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "0.25rem" }}
          />
        </JuriImgContainer>
        <div>
          <h3>Paulo Bernardino</h3>
          <Resumo>
            <p>
              PAULO BERNARDINO é investigador, maestro, compositor, organista e
              pianista. Doutorado em Direção Coral e de Orquestra pela
              Universidade de Aveiro (2021), detém uma Pós-Graduação de Estudos
              Avançados em Polifonia administrada pela ESMAE – Porto (2023) e é
              também licenciado em Engenharia Eletrotécnica pela Universidade de
              Coimbra (1998) e em Música Sacra pela Universidade Católica
              Portuguesa – Porto (2003). Enquanto autor e compositor é
              representado pela Imprensa da UC, pela editora MPmp e pelas
              revistas Salicus e STELLA.
            </p>
            <p>
              Atualmente é maestro e diretor artístico do Grupo Coral de Urrô
              (Arouca), do Coral Stella Maris (Anadia), do Coro APRe! (Coimbra)
              e do Coro da SRCOM (Coimbra), sendo fundador, entre outros, do
              Manuel Faria Ensemble (Coimbra). Desenvolveu uma intensa atividade
              docente nas áreas da análise e composição, direção coral e de
              orquestra, musicologia, formação musical, acústica, piano,
              acordeão e órgão em diversas instituições de ensino, de entre as
              quais se destacam a EDMS de Coimbra (1994-2021), a UCP-Porto
              (2003-2008), a FLUC (2005-2010), o Instituto Piaget (2008- 2013) e
              a ESEC (2014/15).
            </p>
            <p>
              Colabora desde janeiro de 2018 com a paróquia de Espinho num
              projeto que visa a renovação musical litúrgica e sacra, sendo
              responsável, entre outros, pela criação do coro infantojuvenil
              Schola Cantorum Stella Maris. Organista da Sé Catedral de Coimbra,
              desde 1994, é nomeado em 2002 organista titular dessa mesma
              Catedral. Acumula função idêntica na Capela da Universidade de
              Coimbra desde 2007. É, desde janeiro de 2023, também organista
              titular do Mosteiro de Santa Maria de Arouca. Com mais de uma
              dezena de trabalhos discográficos, tem realizado concertos a nível
              nacional e internacional. Paralelamente à sua atividade regular,
              apresenta-se também enquanto acordeonista, sanfonineiro e outros.
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
    jorgeMatta: file(relativePath: { eq: "2024/maestros/jorgeMatta.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    joaoSantos: file(relativePath: { eq: "2024/maestros/JoaoSantos.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    marianoGarcia: file(
      relativePath: { eq: "2024/maestros/mariano-garcia.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    pauloBernardino: file(
      relativePath: { eq: "2024/maestros/paulo-bernardino.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    antVassaloLourenco: file(
      relativePath: { eq: "2024/maestros/AntVassaloLourenco.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
  }
`;
