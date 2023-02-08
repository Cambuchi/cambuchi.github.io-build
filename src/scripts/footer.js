// module to create the footer with javascript
const createFooter = () => {
  const footer = document.createElement('div');
  footer.id = 'footer';
  let date = new Date();
  footer.textContent = `Copyright © ${date.getFullYear()} Cam Nguyen`;

  return footer;
};

export default createFooter;
