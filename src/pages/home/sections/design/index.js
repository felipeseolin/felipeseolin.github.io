import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import Content from 'react-bulma-components/lib/components/content';

import { Emoji } from '../../../../components';
import { GraphicDesignGallery } from './components';

import './styles.sass';

export const Design = () => {
  return (
    <Section id="design" className="has-text-centered">
      <Container className="is-narrow">
        <Box>
          <Heading renderAs="h3">
            Graphic Design <Emoji symbol="🎨" label="Artist Palette" />
          </Heading>
          <Heading subtitle renderAs="h4">
            Some graphic design work I did for volunteer projects
          </Heading>
          <Content>
            <GraphicDesignGallery />
          </Content>
          <p>
            My knowledge in graphic design and tools (Illustrator, Corel Draw
            and Photoshop), comes from a technical course in Web Design. Since
            then I have always helped volunteer projects and friends when
            necessary. This course was also the beginning of my contact with
            programming.
          </p>
        </Box>
      </Container>
    </Section>
  );
};
