import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { ProgramaTableNew, ProgramaTitle } from "components/styled";
import tw from "twin.macro";

import { Section, MainHeading, SubHeading, Sep } from "components/styled";
const Concurso = () => (
  <Layout>
    <SEO title="Atlier de trabalho coral" />
    <Section>
      <h2>Programa</h2>
      <ProgramaTitle>
        <h2>Concurso de Coros</h2>
        <h3>9 de junho de 2024</h3>
      </ProgramaTitle>
      <ProgramaTableNew>
        <tr>
          <th style={{ width: "12%" }}>Horário</th>
          <th>Descrição</th>
          <th>Local</th>
        </tr>
        <tr>
          <td>10:00 - 12:40</td>
          <td>
            <p className="strong">Receção dos coros </p>
            <p className="strong">Ensaio de colocação</p>
          </td>
          <td>
            Bilheteira da Igreja / Sala D. Afonso Henriques (Antiga Igreja do
            Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>12:45 - 13:00</td>
          <td>
            <p className="strong">Sorteio da ordem de atuação</p>
            <p className="">(aberto a todos os coros)</p>
          </td>
          <td>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>13:00 - 14:00</td>
          <td>
            <p className="strong">Almoço</p>
            <p className="">(livre)</p>
          </td>
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
        </tr>
        <tr className="time-place section">
          <td></td>
          <td>Concurso de Coros</td>
          <td></td>
        </tr>
        <tr>
          <th>Horário</th>
          <th style={{ width: "66%" }}>
            <p>Atuação do Coro</p>
            <p style={{ fontWeight: "normal" }}>
              (de acordo com o sorteio-duração 15 min)
            </p>
          </th>
          <th>Local</th>
        </tr>
        <tr>
          <td>15:00 - 15:15</td>
          <td>
            <p className="strong">Coro 1</p>
          </td>
          <td rowSpan="10" css={[tw`bg-gray-100`]}>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>15:20 - 15:35</td>
          <td>
            <p className="strong">Coro 2</p>
          </td>
        </tr>
        <tr>
          <td>15:40 - 15:55</td>
          <td>
            <p className="strong">Coro 3</p>
          </td>
        </tr>
        <tr>
          <td>16:00 - 16:15</td>
          <td>
            <p className="strong">Coro 4</p>
          </td>
        </tr>
        <tr className="time-place">
          <td></td>
          <td>Intervalo (15 min)</td>
        </tr>
        <tr>
          <td>16:35 - 16:50</td>
          <td>
            <p className="strong">Coro 5</p>
          </td>
        </tr>
        <tr>
          <td>16:55 - 17:10</td>
          <td>
            <p className="strong">Coro 6</p>
          </td>
        </tr>
        <tr>
          <td>17:15 - 17:30</td>
          <td>
            <p className="strong">Coro 7</p>
          </td>
        </tr>
        <tr>
          <td>17:35</td>
          <td>
            <p className="strong">Deliberação júri</p>
            <p>(Intervalo para os coralistas)</p>
          </td>
        </tr>
        <tr>
          <td>18:15</td>
          <td>
            <p className="strong">Entrega de Lembranças aos coros</p>
            <p className="strong">Comunicação dos resultados</p>
          </td>
        </tr>
        <tr>
          <td>18:30 - 21:00</td>
          <td>
            <p className="strong">Jantar</p>
            <p className="">(livre)</p>
          </td>
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
        </tr>
        <tr className="time-place section">
          <td></td>
          <td>Concerto / Gala</td>
          <td></td>
        </tr>
        <tr>
          <td>21:30 - 23:30</td>
          <td>
            <ul style={{ listStyle: "disc", paddingLeft: "2em" }}>
              <li>Coro Carlos Seixas</li>
              <li>EDAC - Escola de Dança Arte e Corpo</li>
              <li>
                Participação de João Santos (piano) e Paulo Bernardino (sanfona)
              </li>
              <li>Coro Classificado em 3º lugar</li>
              <li>Coro Classificado em 2º lugar</li>
              <li>Coro Classificado em 1º lugar</li>
              <li>
                Final com interpretação em conjunto de "Balada para Coimbra"{" "}
              </li>
            </ul>
          </td>
          <td>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
      </ProgramaTableNew>
    </Section>
  </Layout>
);

export default Concurso;
