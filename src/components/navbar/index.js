import React, { useState } from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';

export const MainNavbar = () => {
  const [isActive, setActive] = useState(false);

  const handleOpenCloseMenu = () => {
    setActive(!isActive);
  };

  return (
    <Navbar color="dark" fixed="top" active={isActive} transparent={true}>
      <Navbar.Brand>
        <Navbar.Burger onClick={handleOpenCloseMenu} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container
          className="navbar-start"
          style={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <Navbar.Item href="#">Home</Navbar.Item>
          <Navbar.Item href="#">About Me</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
