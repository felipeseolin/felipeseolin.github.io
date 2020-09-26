import React from 'react';

import { MainNavbar } from '../../components';
import { Header, Intro, Techs, Projects } from './sections';

export const Home = () => (
  <>
    <MainNavbar />

    <Header />
    <Intro />
    <Techs />
    <Projects />
  </>
);
