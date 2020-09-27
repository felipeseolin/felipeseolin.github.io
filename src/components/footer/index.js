import React from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Container from 'react-bulma-components/lib/components/container';
import Footer from 'react-bulma-components/lib/components/footer';

import { SocialLinks } from '../socialLinks';
import './styles.sass';

export const MainFooter = () => (
  <Footer renderAs="footer" className="has-background-primary">
    <Container className="has-text-light">
      <Content style={{ textAlign: 'center' }}>
        <Heading
          renderAs="h3"
          className="has-text-light has-text-weight-semibold"
        >
          Felipe Seolin Bento
        </Heading>
        <Heading
          subtitle={true}
          renderAs="h4"
          size={6}
          className="has-text-light has-text-weight-normal"
        >
          Personal website that is always in construction
        </Heading>
        <SocialLinks />
        <div className="made-by-bulma">
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--white.png"
              alt="Made with Bulma"
              width="163"
              height="31"
            />
          </a>
        </div>
      </Content>
    </Container>
  </Footer>
);
