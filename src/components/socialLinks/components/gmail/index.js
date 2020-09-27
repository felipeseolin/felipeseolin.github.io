import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { SiGmail } from 'react-icons/all';

import { gmail } from '../../../../assets/socialLinks.json';

export const Gmail = ({ isNavbarItem }) => {
  const AGmail = () => (
    <a href={gmail} className="has-text-white">
      <SiGmail />
    </a>
  );

  const NavbarItemGmail = () => (
    <Navbar.Item href={gmail}>
      <SiGmail />
    </Navbar.Item>
  );

  return isNavbarItem ? <NavbarItemGmail /> : <AGmail />;
};
