import React from 'react';

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';

import { BiWorld, BiCode } from 'react-icons/bi';

import { Emoji, CardHover } from '..';

import './styles.sass';

export const Project = ({
  urlBackground,
  isInConstruction,
  children,
  urlWebsite,
  urlSource,
}) => {
  return (
    <CardHover urlBackground={urlBackground}>
      <Container fluid className="project-overlay has-text-white">
        {isInConstruction ? (
          <p>
            <Emoji symbol="🚧" label="construction" /> In construction
          </p>
        ) : null}
        <Heading subtitle renderAs="p" className="has-text-white">
          {children}
        </Heading>
        <div>
          {urlWebsite ? (
            <Button
              rounded={true}
              fullwidth={false}
              color="primary"
              renderAs="a"
              href={urlWebsite}
              target="_blank"
              style={{ marginRight: '8px' }}
            >
              <BiWorld style={{ marginRight: '4px', marginBottom: '4px' }} />
              Website
            </Button>
          ) : null}
          {urlSource ? (
            <Button
              rounded={true}
              fullwidth={false}
              color="primary"
              renderAs="a"
              href="google.com"
              target="_blank"
            >
              <BiCode style={{ marginRight: '4px' }} />
              Code
            </Button>
          ) : null}
        </div>
      </Container>
    </CardHover>
  );
};
