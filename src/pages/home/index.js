import React from 'react';

import { MainNavbar, MainFooter } from '../../components';
import {
  Header,
  Intro,
  Techs,
  Projects,
  Education,
  Work,
  Volunteer,
} from './sections';

export const Home = () => (
  <>
    <MainNavbar />

    <Header />
    <Intro />
    <Techs />
    <Projects />
    <Education />
    <Work />
    <Volunteer />

    <MainFooter />
  </>
);
