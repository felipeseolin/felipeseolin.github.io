import React, { useState } from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';

import {
  Dev,
  Linkedin,
  Github,
  Gitlab,
  Gmail,
  Phone,
  Rocketseat,
} from '../socialLinks/components';

import './styles.sass';

export const MainNavbar = () => {
  const [isActive, setActive] = useState(false);

  const handleOpenCloseMenu = () => {
    setActive(!isActive);
  };

  return (
    <Navbar
      id="main-navbar"
      color="dark"
      fixed="top"
      active={isActive}
      transparent={true}
    >
      <Navbar.Brand>
        <Navbar.Burger onClick={handleOpenCloseMenu} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container className="navbar-start">
          <Navbar.Item href="#header">Home</Navbar.Item>
          <Navbar.Item href="#intro">About Me</Navbar.Item>
          <Navbar.Item href="#techs">Technologies</Navbar.Item>
          <Navbar.Item href="#projects">Projects</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Linkedin isNavbarItem />
          <Github isNavbarItem />
          <Gitlab isNavbarItem />
          <Dev isNavbarItem />
          <Rocketseat isNavbarItem />
          <Gmail isNavbarItem />
          <Phone isNavbarItem />
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
