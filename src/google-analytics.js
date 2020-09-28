import ReactGA from 'react-ga';

const initializaGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview('/');
};

export default initializaGA;
