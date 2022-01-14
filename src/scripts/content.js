// module for creating the content section

const createContent = () => {
  // create content container
  const content = document.createElement('div');
  content.id = 'content';

  const terminalContainer = document.createElement('div');
  terminalContainer.id = 'terminal-container';

  const terminalHeader = document.createElement('div');
  terminalHeader.id = 'terminal-header';

  const terminalHeaderText = document.createElement('div');
  terminalHeaderText.id = 'terminal-header-text';
  terminalHeaderText.textContent = 'guest@cambuchi.github.io:$ ~ /home';

  // terminalHeaderGreen = document.createElement('div');
  // terminalHeaderGreen.id = 'terminal-header-green'

  // terminalHeaderYellow = document.createElement('div');
  // terminalHeaderYellow.id = 'terminal-header-yellow'

  // terminalHeaderRed = document.createElement('div');
  // terminalHeaderRed.id = 'terminal-header-red'

  terminalHeader.append(terminalHeaderText);
  terminalContainer.append(terminalHeader);

  const terminal = document.createElement('div');
  terminal.id = 'terminal';
  terminalContainer.append(terminal);

  content.append(terminalContainer);

  return content;
};

export default createContent;
