import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaRocket } from 'react-icons/fa';

import { rocketseat } from '../../../../assets/data/socialLinks.json';

export const Rocketseat = ({ isNavbarItem }) => {
  const ARocketseat = () => (
    <a href={rocketseat} className="has-text-white">
      <FaRocket />
    </a>
  );

  const NavbarItemRocketseat = () => (
    <Navbar.Item href={rocketseat}>
      <FaRocket />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemRocketseat /> : <ARocketseat />;
};
