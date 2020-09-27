import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji, Project } from '../../../../components';

import oldPortfolio from '../../../../assets/oldPortfolio.png';
import tvUtfpr from '../../../../assets/tvUtfpr.png';
import platformGame from '../../../../assets/platformGame.png';

export const Projects = () => (
  <Section id="projects" className="has-text-centered has-background-light">
    <Container>
      <Heading renderAs="h3" className="column is-12">
        Projects <Emoji symbol="🏗️" label="building construction" />
      </Heading>
      <Heading subtitle renderAs="h4" className="column is-12">
        Some works that I have done and I've been doing
      </Heading>

      <Columns>
        <Project urlWebsite="https://abrindoportas.cp.utfpr.edu.br">
          Voluntary project that teaches English for free to high school
          students in the town of Cornélio Procópio
        </Project>
        <Project
          urlBackground={tvUtfpr}
          urlWebsite="https://apoio.cp.utfpr.edu.br/apptv/"
        >
          TV system that displays UTFPR campus information, news, forecast, and
          others
        </Project>
        <Project
          urlBackground={oldPortfolio}
          urlSource="https://github.com/felipeseolin/portfolio"
          urlWebsite="https://felipeseolin.github.io/portfolio"
        >
          This is my old personal website, that I've made in the discipline of
          web programming
        </Project>
        <Project
          urlBackground={platformGame}
          urlSource="https://github.com/felipeseolin/platform-game"
          urlWebsite="https://felipeseolin.github.io/platform-game"
        >
          Platform game made for the game development discipline
        </Project>
      </Columns>
    </Container>
  </Section>
);
