import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';

import { FaGithub } from 'react-icons/fa';

import { Emoji, Project } from '../../../../components';

import projects from '../../../../data/projects';

export const Projects = () => (
  <Section id="projects" className="has-text-centered has-background-light">
    <Container>
      <Heading renderAs="h3" className="column is-12">
        Projects <Emoji symbol="🏗️" label="building construction" />
      </Heading>
      <Heading subtitle renderAs="h4" className="column is-12">
        Some works that I have done and I've been doing
      </Heading>

      <Columns className="is-centered">
        {projects.map((project) => (
          <Project
            isInConstruction={project.isInConstruction}
            urlWebsite={project.urlWebsite}
            urlBackground={project.urlBackground}
            urlSource={project.urlSource}
          >
            {project.text}
          </Project>
        ))}
      </Columns>
      <Button
        renderAs="a"
        href="https://github.com/felipeseolin"
        target="_blank"
      >
        <span style={{ marginRight: '4px' }}>View more projects</span>
        <FaGithub />
      </Button>
    </Container>
  </Section>
);
