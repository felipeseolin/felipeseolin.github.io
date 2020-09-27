import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji } from '../../../../components/emoji';

import ap from '../../../../assets/logos/ap.png';
import ed from '../../../../assets/logos/ecodelta.png';

import './styles.sass';

export const Volunteer = () => (
  <Section
    id="volunteer"
    size="medium"
    className="has-text-centered has-text-dark has-background-primary"
  >
    <Container>
      <Heading renderAs="h3" className="has-text-dark">
        Volunteer projects <Emoji size={1} symbol="💙" label="Blue Heart" />
      </Heading>
      <Columns>
        {/* Abrindo Portas */}
        <Columns.Column size={6}>
          <Content>
            <img src={ap} alt="Logo da Abrindo Portas" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Marketing
            </Heading>
            <p>
              <a
                href="http://www.abrindoportas.cp.utfpr.edu.br"
                className="has-text-weight-semibold "
              >
                Abrindo Portas
              </a>
            </p>
            <p>
              This UTFPR extension project aims to bring free English language
              teaching to high school students from public and state schools in
              the city of Cornélio Procópio
            </p>
            <p>2017 - 2020</p>
          </Content>
        </Columns.Column>
        {/* EcoDelta */}
        <Columns.Column size={6}>
          <Content>
            <img src={ed} alt="Logo da EcoDelta" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Marketing Leader
            </Heading>
            <p>
              <a
                href="http://ecodelta.cp.utfpr.edu.br/"
                className="has-text-weight-semibold "
              >
                EcoDelta
              </a>
            </p>
            <p>
              EcoDelta is an extension project developed by students of
              engineering courses at UTFPR, and guided by professors at the
              institution, since the beginning of 2017. The goal is to develop a
              car with greater efficiency energy, using gasoline as fuel, and
              then participate in the main competitions, focused on energy
              research, which encourage students to design and build prototypes
              that travel the longest distance with the least amount of fuel
            </p>
            <p>2018 - 2019</p>
          </Content>
        </Columns.Column>
      </Columns>
      <p>
        I love being a volunteer and help projects, that I identify with and
        there were other projects that I've helped, but those ones are on a
        special place for me
      </p>
    </Container>
  </Section>
);
