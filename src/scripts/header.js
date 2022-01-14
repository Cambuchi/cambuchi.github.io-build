// module to create header with javascript
const createHeader = () => {
  const header = document.createElement('div');
  header.id = 'header';

  const title = document.createElement('p');
  title.classList = 'title';
  title.textContent = 'cam nguyen | home';

  header.append(title);

  return header;
};

export default createHeader;
