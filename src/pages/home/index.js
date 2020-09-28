import React from 'react';

import initializaGA from '../../google-analytics';

import { MainNavbar, MainFooter } from '../../components';
import {
  Header,
  Intro,
  Techs,
  Projects,
  Education,
  Work,
  Volunteer,
  Design,
} from './sections';

export const Home = () => {
  initializaGA();
  return (
    <>
      <MainNavbar />

      <Header />
      <Intro />
      <Techs />
      <Projects />
      <Education />
      <Work />
      <Volunteer />
      <Design />

      <MainFooter />
    </>
  );
};
