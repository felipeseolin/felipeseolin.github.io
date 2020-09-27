import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaGithub } from 'react-icons/fa';

import { github } from '../../../../data/socialLinks.json';

export const Github = ({ isNavbarItem }) => {
  const AGithub = () => (
    <a href={github} className="has-text-white">
      <FaGithub />
    </a>
  );

  const NavbarItemGithub = () => (
    <Navbar.Item href={github}>
      <FaGithub />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemGithub /> : <AGithub />;
};
