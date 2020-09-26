import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji } from '../../../../components';

export const Projects = () => (
  <Section id="projects" className="has-text-centered">
    <Container>
      <Heading renderAs="h3" className="column is-12">
        Projects <Emoji symbol="🏗️" label="building construction" />
      </Heading>
      <Heading subtitle renderAs="h4" className="column is-12">
        Some works that I have done and I've been doing
      </Heading>

      <Columns>
        <Columns.Column backgroundColor="primary" size={4}>
          <p>teste</p>
        </Columns.Column>

        <Columns.Column backgroundColor="primary" size={4}>
          <p>teste</p>
        </Columns.Column>

        <Columns.Column backgroundColor="primary" size={4}>
          <p>teste</p>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);
