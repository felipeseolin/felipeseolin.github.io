import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

import './styles.sass';
import avatar from '../../../../assets/avatar.png';

export const Header = () => (
  <Section id="header" style={{ padding: 0 }}>
    <Hero id="header-hero" color="dark" size="fullheight">
      <Hero.Body className="has-text-centered">
        <Container>
          <Heading renderAs="h1" size={1}>
            Developer & Software engineer student
          </Heading>

          <Heading subtitle renderAs="h2" size={4}>
            Felipe Seolin Bento
          </Heading>

          <img src={avatar} alt="Myself as a cartoon" className="avatar" />
        </Container>
      </Hero.Body>
    </Hero>
  </Section>
);
