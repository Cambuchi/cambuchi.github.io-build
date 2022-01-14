const createButtons = () => {
  // create content container
  const buttons = document.createElement('div');
  buttons.id = 'buttons';

  const blog = document.createElement('a');
  blog.id = 'blog-btn';
  blog.classList = 'btn';
  blog.href = 'https://cambuchi.github.io/blog';
  blog.textContent = 'blog';
  blog.setAttribute('target', '_blank');
  blog.setAttribute('rel', 'noreferrer noopener');

  const resume = document.createElement('a');
  resume.id = 'resume-btn';
  resume.classList = 'btn';
  resume.href = 'https://cambuchi.github.io/resume/';
  resume.textContent = 'resume';
  resume.setAttribute('target', '_blank');
  resume.setAttribute('rel', 'noreferrer noopener');

  buttons.append(blog);
  buttons.append(resume);

  return buttons;
};

export default createButtons;
