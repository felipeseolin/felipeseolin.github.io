import React, { useState } from 'react';

import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';

import './styles.sass';

export const CardHover = ({ size, urlBackground, children }) => {
  const [isOver, setOver] = useState(false);

  const toggleOver = () => {
    setOver(!isOver);
  };

  return (
    <Columns.Column size={size ? size : 4}>
      <Container
        className="project-container"
        style={{ backgroundImage: `url('${urlBackground}')` }}
        onMouseEnter={toggleOver}
        onMouseLeave={toggleOver}
      >
        {isOver ? children : null}
      </Container>
    </Columns.Column>
  );
};
