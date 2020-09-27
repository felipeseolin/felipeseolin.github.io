import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';

import { Emoji } from '../../../../components/emoji';
import CV from '../../../../data/CV.pdf';

import './styles.sass';

export const Intro = () => {
  const urlTr =
    'https://www.google.com/maps/place/Terra+Rica+-+PR,+87890-000/@-22.7223398,-52.6453142,14z/data=!4m5!3m4!1s0x94927872ed384261:0xc3fe22171c550465!8m2!3d-22.726538!4d-52.6202469';
  const urlUtfpr = 'http://portal.utfpr.edu.br';
  const urlRemSoft = 'https://www.remsoft.com.br';
  const urlIbs = 'https://www.biosistemico.org.br';

  return (
    <Section
      id="intro"
      size="medium"
      className="has-text-centered has-text-dark"
    >
      <Container>
        <Heading renderAs="h3" className="column is-12">
          Bem-vindo! Welcome! ¡Bienvenido!{' '}
          <Emoji size={1} symbol="👋" label="waving hand" />
        </Heading>

        <p className="column is-12">
          My name is{' '}
          <span className="has-text-weight-semibold">Felipe Seolin Bento</span>,
          I was born and raised in <a href={urlTr}>Terra Rica</a>, a small town
          in the northwest of Paraná, Brazil. In 2017 I started studying
          Software Engineering at the{' '}
          <a className="is-link" href={urlUtfpr}>
            Federal Technological University of Paraná
          </a>
          , Cornélio Procópio campus. In 2018 I was an intern of IT on campus,
          working as a full-stack developer and graphic designer sometimes. In
          2020 started at <a href={urlRemSoft}>RemSoft</a>, as full-stack
          developer intern too. Today, I work at{' '}
          <a href={urlIbs}>Instituto BioSistemico (IBS)</a>, as a programming
          assistant/junior full-stack programmer.
        </p>

        <Button
          renderAs="a"
          color="dark"
          href={CV}
          target="_blank"
          className="has-text-light"
        >
          Download my CV
        </Button>
      </Container>
    </Section>
  );
};
