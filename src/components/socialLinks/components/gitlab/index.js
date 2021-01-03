import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaGitlab } from 'react-icons/fa';

import { gitlab } from '../../../../assets/data/socialLinks.json';

export const Gitlab = ({ isNavbarItem }) => {
  const AGitlab = () => (
    <a href={gitlab} className="has-text-white">
      <FaGitlab />
    </a>
  );

  const NavbarItemGitlab = () => (
    <Navbar.Item href={gitlab}>
      <FaGitlab />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemGitlab /> : <AGitlab />;
};
