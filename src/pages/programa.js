import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { Section, ProgramaTableNew, ProgramaTitle } from "components/styled";
import tw from "twin.macro";

const Programa = () => (
  <Layout>
    <SEO title="Programa" />
    <Section>
      <h2>Programa</h2>
      <ProgramaTitle>
        <h2>IV Concurso de Coros</h2>
        <h3>26 de setembro de 2026</h3>
      </ProgramaTitle>
      <ProgramaTableNew>
        <tr>
          <th style={{ width: "12%" }}>Horário</th>
          <th>Descrição</th>
          <th>Local</th>
        </tr>
        <tr>
          <td>10:20 - 12:40</td>
          <td>
            <p className="strong">Receção dos coros</p>
            <p className="strong">Ensaio de colocação</p>
            <ul className="dim">
              <li>10:20 - 10:40 - Coro Municipal Marquês de Pombal</li>
              <li>10:40 - 11:00 - Orfeão de Eiriz</li>
              <li>11:00 - 11:20 - Etos Vocal Ensemble</li>
              <li>11:20 - 11:40 - Coral Polifónico Cantate Iubilo</li>
              <li>
                11:40 - 12:00 - Coro Clássico do Orfeão Universitário do Porto
              </li>
              <li>12:00 - 12:20 - Coral Mille Voci</li>
              <li>12:20 - 12:40 - Coro Geração 57</li>
            </ul>
          </td>
          <td>Antiga Igreja do Convento São Francisco</td>
        </tr>
        <tr>
          <td>12:45</td>
          <td>
            <p className="strong">Sorteio da ordem de atuação</p>
            <p>(participação de todos os coros)</p>
          </td>
          <td>Antiga Igreja do Convento São Francisco</td>
        </tr>
        <tr>
          <td>13:00 - 14:30</td>
          <td>
            <p className="strong">Almoço</p>
            <p>(livre)</p>
          </td>
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
        </tr>
        <tr className="time-place section">
          <td></td>
          <td>Concurso - Atuação dos coros</td>
          <td></td>
        </tr>
        <tr>
          <th>Horário</th>
          <th style={{ width: "66%" }}>
            <p>Atuação do Coro</p>
            <p style={{ fontWeight: "normal" }}>
              (de acordo com o sorteio - duração 15 min; ensaio prévio na Sala
              Ensaio &quot;Restaurante&quot;)
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
            Antiga Igreja do Convento São Francisco
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
          <td>Intervalo (20 minutos)</td>
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
          <td>17:35 - 18:05</td>
          <td>
            <p className="strong">Deliberação do júri</p>
            <p>(Intervalo para os coralistas)</p>
          </td>
        </tr>
        <tr>
          <td>18:15</td>
          <td>
            <p className="strong">Entrega de Lembranças aos Coros</p>
            <p className="strong">Comunicação dos resultados</p>
          </td>
        </tr>
        <tr>
          <td>18:30 - 21:00</td>
          <td>
            <p className="strong">Jantar</p>
            <p>(livre)</p>
          </td>
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
        </tr>
        <tr className="time-place section">
          <td></td>
          <td>Concerto / Gala</td>
          <td></td>
        </tr>
        <tr>
          <td>21:30 - 23:00</td>
          <td>
            <ul style={{ listStyle: "disc", paddingLeft: "2em" }}>
              <li>Participação de João Santos (harmónio)</li>
              <li>Coro Carlos Seixas</li>
              <li>EDAC - Escola de Dança Arte e Corpo</li>
              <li>Coro Classificado em 3º lugar</li>
              <li>Coro Classificado em 2º lugar</li>
              <li>Coro Classificado em 1º lugar</li>
              <li>
                Final: interpretação em conjunto de &quot;A Esmola da
                Rainha&quot;
              </li>
            </ul>
          </td>
          <td>Antiga Igreja do Convento São Francisco</td>
        </tr>
      </ProgramaTableNew>
    </Section>
  </Layout>
);

export default Programa;
