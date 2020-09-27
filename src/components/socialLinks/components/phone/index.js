import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { FaMobileAlt } from 'react-icons/fa';

import { phone } from '../../../../data/socialLinks.json';

export const Phone = ({ isNavbarItem }) => {
  const APhone = () => (
    <a href={phone} className="has-text-white">
      <FaMobileAlt />
    </a>
  );

  const NavbarItemPhone = () => (
    <Navbar.Item href={phone}>
      <FaMobileAlt />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemPhone /> : <APhone />;
};
