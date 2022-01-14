// initialize module establishing general html structure
// import styles of each section
import '../styles/header.css';
import '../styles/content.css';
import '../styles/footer.css';
import '../styles/buttons.css';

// import modules for each section
import createHeader from './header';
import createContent from './content';
import createButtons from './buttons';
import createFooter from './footer';

// create the page
const initialize = () => {
  // target the body
  const body = document.body;
  // create the header
  const header = createHeader();
  // create the content area
  const content = createContent();
  // create the buttons
  const buttons = createButtons();
  // create the footer
  const footer = createFooter();

  // append all to body
  body.prepend(footer);
  body.prepend(buttons);
  body.prepend(content);
  body.prepend(header);
};

export default initialize;
