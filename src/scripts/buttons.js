const createButtons = () => {
  // create content container
  const buttons = document.createElement('div');
  buttons.id = 'buttons';

  const blog = document.createElement('a');
  blog.id = 'blog-btn';
  blog.classList = 'btn';
  blog.href = 'https://cambuchi.github.io/blog';
  blog.textContent = 'blog';

  const resume = document.createElement('a');
  resume.id = 'resume-btn';
  resume.classList = 'btn';
  resume.href = 'https://cambuchi.github.io/resume/';
  resume.textContent = 'resume';

  buttons.append(blog);
  buttons.append(resume);

  return buttons;
};

export default createButtons;
