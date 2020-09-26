import React, { useState } from 'react';

import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import './styles.sass';

export const Project = () => {
  const [isOver, setOver] = useState(false);

  const test = () => {
    setOver(!isOver);
  };

  const Overlay = () => (
    <Container fluid onMouseEnter={test} onMouseLeave={test}>
      <Heading size={5} renderAs="p">
        Fluid
      </Heading>
      <Heading subtitle renderAs="p">
        Container
      </Heading>
    </Container>
  );

  return (
    <Columns.Column size={4}>
      <Container
        className="project"
        style={{ backgroundImage: "url('https://picsum.photos/500')" }}
      >
        {isOver ? <Overlay /> : null}
      </Container>
    </Columns.Column>
  );
};
