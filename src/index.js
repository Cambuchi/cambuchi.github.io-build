// import styles
import './styles/modern-normalize.css';
import './styles/main.css';

// import modules
import initialize from './scripts/initialize';
import { introduction, animate } from './scripts/terminal';

// IIFE to encapsulate site creation
(() => {
  // create the initial page structure
  initialize();
  introduction();
  animate();
})();
