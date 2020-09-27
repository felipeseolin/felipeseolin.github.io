import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaDev } from 'react-icons/fa';

import { dev } from '../../../../data/socialLinks.json';

export const Dev = ({ isNavbarItem }) => {
  const ADev = () => (
    <a href={dev} className="has-text-white">
      <FaDev />
    </a>
  );

  const NavbarItemDev = () => (
    <Navbar.Item href={dev}>
      <FaDev />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemDev /> : <ADev />;
};
