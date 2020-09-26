import React from 'react';

export const Emoji = ({ label, symbol, breakLine, size }) => (
  <span
    className="emoji"
    style={{
      display: breakLine ? 'block' : '',
      fontSize: size ? size + 'em' : '1em',
    }}
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);
