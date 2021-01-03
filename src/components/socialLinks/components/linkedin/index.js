import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaLinkedinIn } from 'react-icons/fa';

import { linkedin } from '../../../../assets/data/socialLinks.json';

export const Linkedin = ({ isNavbarItem }) => {
  const ALinkedin = () => (
    <a href={linkedin} className="has-text-white">
      <FaLinkedinIn />
    </a>
  );

  const NavbarItemLinkedin = () => (
    <Navbar.Item href={linkedin}>
      <FaLinkedinIn />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemLinkedin /> : <ALinkedin />;
};
