import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "components/layout22";

const HorasTh = styled.th`
  width: 20%;
`;
const AtividadeTh = styled.th`
  width: 55%;
`;
const LocalTh = styled.th`
  width: 25%;
`;
const ProgramaTable = styled.table`
  text-align: center;

  th {
    ${tw`bg-gray-600 text-white py-2`}
  }

  tr > td {
    ${tw`p-4 border-b border-gray-200`}

    &:first-child {
      ${tw`text-gray-400`}
    }

    ul {
      ${tw`text-left list-disc p-4`}
      li {
        ${tw`py-1`}
      }
    }
  }

  tr:last-child td {
    ${tw`border-0`}
  }
`;

const ProgramaTableNew = styled.table`
  width: 100%;
  text-align: center;
  td {
    ${tw`p-6`}
  }
  th {
    ${tw`bg-gray-600 text-white py-6`}
    h2 {
      margin: 0;
    }
  }
  tr.time-place td {
    ${tw`flex justify-between bg-gray-200 p-2`}
    span {
      ${tw`text-gray-500`}
    }
    span:first-child {
      ${tw`text-gray-500`}
    }
  }

  ul {
    display: block;
    ${tw`text-left`}
    li {
      ${tw`py-1`}
    }

    &.dim {
      ${tw`text-gray-500`}
    }

    &.disc {
      ${tw`list-disc`}
    }
  }
`;

const Programa = () => {
  return (
    <Layout>
      <ProgramaTableNew>
        <tr>
          <th>
            <h2>II Concurso de Coros - Coimbra 2022</h2>
            <h3>Programa</h3>
          </th>
        </tr>
        <tr className="time-place">
          <td>
            <span>10:00 às 12:40</span>
            <span>Sala D. Afonso Henriques (antiga Igreja)</span>
          </td>
        </tr>
        <tr>
          <td>
            <b>Receção dos coros</b> <br />e<br /> Ensaio de colocação
            <ul className="dim">
              <li>10:20 - 10:40 - Associação Coral Stella Maris</li>
              <li>10:40 - 11:00 - Coral Mille Voci</li>
              <li>11:00 - 11:20 - Vocal Art Ensemble </li>
              <li>11:20 - 11:40 - Coro Feminino do C. Música de Paredes </li>
              <li>11:40 - 12:00 - Coro AlmaGraham</li>
              <li>12:00 - 12:20 - Pro Vocal Ensemble</li>
              <li>
                12:20 - 12:40 - Coral “Ensaio” da Assoc. Pró-Música Póv.de
                Varzim
              </li>
            </ul>
          </td>
        </tr>
        <tr className="time-place">
          <td>
            <span>12:45</span>
            <span>Sala D. Afonso Henriques (antiga Igreja)</span>
          </td>
        </tr>
        <tr>
          <td>
            Sorteio da ordem de atuação
            <br />
            (aberto a todos os coros)
          </td>
        </tr>
        <tr className="time-place">
          <td>
            <span>13:00 às 14:00</span>
            <span>
              Existem vários restaurantes na proximidade do CSF -{" "}
              <a
                href="https://www.tripadvisor.pt/RestaurantsNear-g189143-d2543384-Mosteiro_de_Santa_Clara_a_Velha-Coimbra_Coimbra_District_Central_Portugal.html"
                target="_blank"
                rel="noreferrer"
              >
                algumas ideias
              </a>
            </span>
          </td>
        </tr>
        <tr>
          <td>Almoço (livre)</td>
        </tr>
        <tr className="time-place">
          <td>
            <span>14:15 às 19:00</span>
            <span>Sala D. Afonso Henriques (antiga Igreja)</span>
          </td>
        </tr>
        <tr>
          <td>
            <b>Atuação dos coros - Concurso</b>
            <br />e <br />
            Deliberação do júri
          </td>
        </tr>
        <tr className="time-place">
          <td>
            <span>19:00 às 21:00</span>
            <span>Jardim do Convento São Francisco</span>
          </td>
        </tr>
        <tr>
          <td>
            Jantar
            <br />
            (refeição ligeira oferecida pela organização)
          </td>
        </tr>
        <tr className="time-place">
          <td>
            <span>21:30 às 23:00</span>
            <span>Sala D. Afonso Henriques (antiga Igreja)</span>
          </td>
        </tr>
        <tr>
          <td>
            <b>Concerto / Gala</b>
            <br />
            <ul className="disc">
              <li>Coro Carlos Seixas</li>
              <li>
                EDAC - Escola de Dança Arte e Corpo, com a participação de João
                Santos (piano) e Paulo Bernardino (acordeão)
              </li>
              <li>Coro Classificado em 3º lugar </li>
              <li>Coro Classificado em 2º lugar</li>
              <li>Coro Classificado em 1º lugar </li>
              <li>Final com interpretação em conjunto de "Espera-me"</li>
            </ul>
          </td>
        </tr>
      </ProgramaTableNew>

      {/*
      <ProgramaTable>
        <tr>
          <HorasTh>Horas</HorasTh>
          <AtividadeTh>Atividade</AtividadeTh>
          <LocalTh>Local</LocalTh>
        </tr>
        <tr>
          <td>10:00 às 12:40</td>
          <td>
            <b>Receção dos coros</b> <br />e<br /> Ensaio de colocação
          </td>
          <td rowspan="2">
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>12:45</td>
          <td>
            Sorteio da ordem de atuação
            <br />
            (aberto a todos os coros)
          </td>
        </tr>
        <tr>
          <td>13:00 às 14:00</td>
          <td>Almoço (livre)</td>
          <td>
            Existem vários restaurantes na proximidade do CSF -{" "}
            <a
              href="https://www.tripadvisor.pt/RestaurantsNear-g189143-d2543384-Mosteiro_de_Santa_Clara_a_Velha-Coimbra_Coimbra_District_Central_Portugal.html"
              target="_blank"
              rel="noreferrer"
            >
              algumas ideias
            </a>
          </td>
        </tr>
        <tr>
          <td>14:15 às 19:00</td>
          <td>
            <b>Atuação dos coros - Concurso</b>
            <br />e <br />
            Deliberação do júri
          </td>
          <td>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>19:00 às 21:00</td>
          <td>
            Jantar
            <br />
            (refeição ligeira oferecida pela organização)
          </td>
          <td>Jardim do Convento São Francisco</td>
        </tr>
        <tr>
          <td>21:30 às 23:30</td>
          <td>
            <b>Concerto / Gala</b>
            <br />
            <ul>
              <li>Coro Carlos Seixas</li>
              <li>
                EDAC - Escola de Dança Arte e Corpo, com a participação de João
                Santos (piano) e Paulo Bernardino (acordeão)
              </li>
              <li>Coro Classificado em 3º lugar </li>
              <li>Coro Classificado em 2º lugar</li>
              <li>Coro Classificado em 1º lugar </li>
              <li>Final com interpretação em conjunto de "Espera-me"</li>
            </ul>
          </td>
          <td>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
      </ProgramaTable>*/}
    </Layout>
  );
};

export default Programa;
