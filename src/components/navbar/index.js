import React, { useState } from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-scroll';

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
          {/* Home */}
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-item"
          >
            Home
          </Link>
          {/* About Me */}
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-item"
          >
            About Me
          </Link>
          {/* Tech */}
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-item"
          >
            Technologies
          </Link>
          {/* Projects */}
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-item"
          >
            Projects
          </Link>
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
