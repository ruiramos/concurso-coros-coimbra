import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../components/layout";

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

const Programa = () => {
  return (
    <Layout>
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
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
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
      </ProgramaTable>
    </Layout>
  );
};

export default Programa;
