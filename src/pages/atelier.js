import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { ProgramaTableNew, ProgramaTitle } from "components/styled";
import tw from "twin.macro";

import { Section, MainHeading, SubHeading, Sep } from "components/styled";

const Atlier = ({ data }) => (
  <Layout>
    <SEO title="Atlier de trabalho coral" />
    <Section>
      <p>
        Nesta edição do Concurso de Coros - Coimbra 2024 está prevista a
        realização de um Atelier de Trabalho Coral, que decorrerá no dia 8 de
        junho para, em convívio com coralistas de várias regiões do país.
        aprendermos com os melhores - os elementos do juri.
      </p>
      <p>
        O Atelier funcionará no Convento São Francisco em Coimbra, mais
        propriamente na Sala D. Afonso Henriques.
      </p>

      <h2>Atelier de Trabalho Coral - orientado pelo Maestro Jorge Matta</h2>

      <p>
        Neste atelier serão trabalhadas obras de Diogo Dias Melgás (1630-1700),
        destacado compositor da Escola de Évora, herdeiro da tradição
        renascentista, mas já com uma linguagem de algum modo barroca (Salve
        Regina e/ou In jejunio et fletu, ainda a escolher), e um “Vilancico
        Negro” de Santa Cruz de Coimbra, século XVII (Casuá casué).
      </p>
      <p>
        O objetivo principal deste atelier é o trabalho detalhado de ensaio, nas
        suas vertentes técnicas e musicais.
      </p>
      <p>Gostaríamos muito que aceitassem este nosso convite, participando.</p>
      <p>
        Para esta atividade poderão inscrever-se todos os coralistas
        interessados em participar (independentemente de serem concorrentes ou
        não ao concurso) enviando mail para{" "}
        <a href="mailto:coro.secretariado@cm-coimbra.pt">
          coro.secretariado@cm-coimbra.pt
        </a>{" "}
        com os seguintes elementos: nome, coro e naipe a que pertence, mail e
        contacto telefónico.
      </p>

      <p>
        A inscrição terá um custo de 2,50 € para os coralistas que integrem
        coros concorrentes ao III Concurso e 5,00 € para os restantes.{" "}
      </p>

      <p>
        O pagamento é feito no dia do atelier em dinheiro ou por MBW para o
        Secretariado do coro.
      </p>
    </Section>

    <Sep />

    <Section>
      <h2>Programa</h2>
      <ProgramaTitle>
        <h2>Atelier de Música Coral Portuguesa </h2>
        <h3>8 de junho de 2024</h3>
      </ProgramaTitle>
      <ProgramaTableNew>
        <tr>
          <th>Horário</th>
          <th style={{ width: "66%" }}>Descrição</th>
          <th>Local</th>
        </tr>
        <tr>
          <td>10:00 10:30</td>
          <td>
            <p className="strong">Abertura do Secretariado</p>
            <p className="strong">Receção dos coralistas</p>
          </td>
          <td>Bilheteira do Concurso</td>
        </tr>
        <tr>
          <td>10:30 11:00</td>
          <td>
            <p className="strong">Apresentação do Atelier</p>
            <p>Maestro Jorge Matta</p>
          </td>
          <td>
            Sala D. Afonso Henriques (Antiga Igreja do Convento São Francisco)
          </td>
        </tr>
        <tr>
          <td>11:00 12:30</td>
          <td>
            <p className="strong">Atelier</p>
            <p>Maestros</p>
          </td>
          <td>Sala D. Afonso Henriques e salas afectas</td>
        </tr>
        <tr>
          <td>12:30 14:00</td>
          <td>
            <p className="strong">Almoço</p>
            <p>(livre)</p>
          </td>
          <td>(Existem vários restaurantes na proximidade do CSF)</td>
        </tr>
        <tr>
          <td>14:00 17:30</td>
          <td>
            <p className="strong">Atelier</p>
            <p>(Continuação)</p>
          </td>
          <td>Sala D. Afonso Henriques e salas afectas</td>
        </tr>
        <tr className="time-place">
          <td></td>
          <td>Intervalo (15 minutos)</td>
          <td></td>
        </tr>
        <tr>
          <td>17:30 18:00</td>
          <td>
            <p className="strong">Apresentação das peças</p>
            <p>Coros envolvidos sob direção do maestro</p>
          </td>
          <td>Sala D. Afonso Henriques</td>
        </tr>
        <tr>
          <td>19:00 21:00</td>
          <td>
            <p className="strong">Jantar</p>
            <p>(livre)</p>
          </td>
          <td></td>
        </tr>
      </ProgramaTableNew>
    </Section>
  </Layout>
);

export default Atlier;
