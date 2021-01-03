import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji } from '../../../../components';
import utfpr from '../../../../assets/logos/utfprPreto.png';
import pap from '../../../../assets/logos/pap.jpg';
import ada from '../../../../assets/logos/ada.png';
import './styles.sass';

export const Education = () => (
  <Section
    id="education"
    size="small"
    className="has-text-centered has-text-dark has-background-primary"
  >
    <Container>
      <Heading renderAs="h3" className="has-text-dark">
        Education <Emoji size={1} symbol="📖" label="Open Book" />
      </Heading>
      <Columns>
        {/* Apple Developer Academy */}
        <Columns.Column size={4}>
          <Content>
            <img
              src={ada}
              alt="Logo da Apple Developer Academy"
            />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Apple Developer Academy - PUCPR
            </Heading>
            <p>
              <a
                href="http://developeracademy.pucpr.br/processo/"
                className="has-text-weight-semibold "
              >
                PUCPR
              </a>{' '}
              - Curitiba, Paraná, Brazil
            </p>
            <p>2021 - now</p>
          </Content>
        </Columns.Column>
        {/* UTFPR */}
        <Columns.Column size={4}>
          <Content>
            <img src={utfpr} alt="Logo da UTFPR" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Software Engineering (Bachelor Degree)
            </Heading>
            <p>
              <a
                href="http://portal.utfpr.edu.br"
                className="has-text-weight-semibold "
              >
                UTFPR
              </a>{' '}
              - Cornélio Procópio, Paraná, Brazil
            </p>
            <p>2017 - now</p>
          </Content>
        </Columns.Column>
        {/* Passo a Passo */}
        <Columns.Column size={4}>
          <Content>
            <img
              src={pap}
              className="image-rounded"
              alt="Logo do colégio passo a passo"
            />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              High School
            </Heading>
            <p>
              <a
                href="https://www.instagram.com/colegiopassoapassotr/"
                className="has-text-weight-semibold "
              >
                Colégio Passo a Passo
              </a>{' '}
              - Terra Rica, Paraná, Brazil
            </p>
            <p>2014 - 2016</p>
          </Content>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);
