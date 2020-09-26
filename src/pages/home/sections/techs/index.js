import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

import { Emoji } from '../../../../components';

import './styles.sass';

export const Techs = () => {
  return (
    <Section id="techs" className="has-text-centered">
      <Container className="is-narrow">
        <Box>
          <Content>
            <Columns className="is-centered">
              <Columns.Column>
                <Heading subtitle renderAs="h4">
                  <Emoji breakLine size={1.5} symbol="👓" label="glasses" />
                  Worked with
                </Heading>
                <p>
                  Some technologies that I used in projects at a professional
                  way.
                </p>
                <hr />
                <p>
                  HTML, CSS, SASS, SCSS, JavaScript, TypeScript, Angular 6+,
                  Jquery, PHP, SQL, PostgreSQL, NodeJS, NestJS, AdonisJS,
                  Firebase/Firestorm, Bootstrap 3+, Ant Design, Bulma, PrimeNG,
                  AdminLTE, Docker, Nginx, Apache, Gitlab, Github , Gitlab
                  CI/CD, Photoshop, Illustrator, Corel Draw.
                </p>
              </Columns.Column>
              <Columns.Column>
                <Heading subtitle renderAs="h4">
                  <Emoji breakLine size={1.5} symbol="📖" label="open book" />
                  Studying
                </Heading>
                <p>
                  Studying these technologies, but I have not yet executed on
                  any project.
                </p>
                <hr />
                <p>
                  React, React Native, Redux, MongoDB, Mongoose, Python3, Java,
                  Spring Boot, Maven, Laravel, C-Language, C#, Unity, Heroku,
                  Webpack, Jest, Travis CS, JUnit, Selenium, MySQL.
                </p>
              </Columns.Column>
              <Columns.Column>
                <Heading subtitle renderAs="h4">
                  <Emoji breakLine size={1.5} symbol="💡" label="light bulb" />
                  Want to learn
                </Heading>
                <p>
                  Technologies I'm interested in but I haven't had the
                  opportunity to learn yet.
                </p>
                <hr />

                <p>
                  Dart, Flutter, Swift, Objective-C, Jenkis, Kotlin, NextJS,
                  VueJS, Kubernetes, GithbuActions, Django, Google Cloud, AWS.
                </p>
              </Columns.Column>
            </Columns>
          </Content>
        </Box>
      </Container>
    </Section>
  );
};
