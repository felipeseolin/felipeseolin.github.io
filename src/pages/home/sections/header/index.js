import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

export const Header = () => (
  <Section id="header" style={{ padding: 0 }}>
    <Hero color="dark" size="fullheight">
      <Hero.Body className="has-text-centered">
        <Container>
          <Heading renderAs="h1" className="column is-12" size={1}>
            Developer & Software engineer student
          </Heading>

          <Heading subtitle renderAs="h2" className="column is-12" size={4}>
            Felipe Seolin Bento
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
);
