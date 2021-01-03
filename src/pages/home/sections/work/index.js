import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji } from '../../../../components';

import remsoft from '../../../../assets/logos/remsoft.png';
import ibs from '../../../../assets/logos/ibs.png';
import trimble from '../../../../assets/logos/trimble.png';
import utfpr from '../../../../assets/logos/utfprPreto.png';

import './styles.sass';

export const Work = () => (
  <Section
    id="work"
    size="small"
    className="has-text-centered has-text-dark has-background-primary"
  >
    <Container>
      <Heading renderAs="h3" className="has-text-dark">
        Work experience <Emoji size={1} symbol="💻" label="Laptop" />
      </Heading>
      <Columns>
        {/* Trimble */}
        <Columns.Column size={3}>
          <Content>
            <img src={trimble} alt="Logo da Trimble" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              JR FullStack Software Engineer
            </Heading>
            <p>
              <a
                href="https://www.trimble.com/"
                className="has-text-weight-semibold"
              >
                Trimble (Transportation)
              </a>{' '}
              - Remote
            </p>
            <p>dec/2020 - now</p>
          </Content>
        </Columns.Column>
        {/* IBS */}
        <Columns.Column size={3}>
          <Content>
            <img src={ibs} alt="Logo da IBS" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Programming assistant/Junior full-stack programmer
            </Heading>
            <p>
              <a
                href="https://www.biosistemico.org.br/"
                className="has-text-weight-semibold"
              >
                Instituto BioSistêmico (IBS)
              </a>{' '}
              - Remote
            </p>
            <p>
              Angular 8+, NodeJS, AdonisJS, NestJS, PostgreSQL,Firebase, JS, TS,
              Git, Gitlab, HTML, CSS, SASS, and others
            </p>
            <p>apr/2020 - dec/2020</p>
          </Content>
        </Columns.Column>
        {/* RemSoft */}
        <Columns.Column size={3}>
          <Content>
            <img src={remsoft} alt="Logo da RemSoft" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Full Stack programmer intern
            </Heading>
            <p>
              <a
                href="https://www.remsoft.com.br/"
                className="has-text-weight-semibold"
              >
                RemSoft
              </a>{' '}
              - Remote
            </p>
            <p>
              PHP, HTML, CSS, JS, JQuery, MySQL, Bootstrap 3+, SVN, Redmine, and
              others
            </p>
            <p>jan/2020 - apr/2020</p>
          </Content>
        </Columns.Column>
        {/* COGETI */}
        <Columns.Column size={3}>
          <Content>
            <img src={utfpr} alt="Logo da UTFPR" />
            <Heading
              subtitle
              renderAs="h4"
              className="has-text-dark has-text-weight-semibold"
            >
              Full Stack programmer intern
            </Heading>
            <p>
              <a
                href="http://www.utfpr.edu.br/estrutura/tecnologia-de-informacao/competencia-cogeti"
                className="has-text-weight-semibold"
              >
                COGETI - UTFPR
              </a>{' '}
              - Cornélio Procópio, Paraná, Brazil
            </p>
            <p>
              PHP, HTML, CSS, JS, JQuery, Propel, PostgreSQL,DOMPDF, Angular 7,
              Bootstrap 3, JSON, REST, Docker, and others
            </p>
            <p>may/2018 - nov/2019</p>
          </Content>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);
