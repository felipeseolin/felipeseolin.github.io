import React from 'react';

import {
  Linkedin,
  Github,
  Gitlab,
  Dev,
  Rocketseat,
  Gmail,
  Phone,
} from './components';

import './styles.sass';

export const SocialLinks = () => (
  <div className="icons-contact-container">
    <Linkedin />
    <Github />
    <Gitlab />
    <Dev />
    <Rocketseat />
    <Gmail />
    <Phone />
  </div>
);
