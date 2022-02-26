import '../styles/code.css';

const about = {
  'cam.location': 'San Jose, CA',
  'cam.interests': '["D&D", "VR", "Cooking", "Coding"]',
  'cam.education': 'B.A. Sociology - Princeton University',
  'cam.skills':
    '["Javascript", "Python", "Sass", "Webpack", "git", "React", "Bash", "Jest"]',
  'cam.contact': {
    LinkedIn: 'https://www.linkedin.com/in/cam-nguyen-6a1ab257/',
    GitHub: 'https://github.com/Cambuchi',
  },
};

const introduction = () => {
  const terminal = document.getElementById('terminal');

  const launch = user();
  let script = document.createElement('span');
  script.id = 'launch';
  script.classList = 'input';
  script.classList.add('hidden');
  script.style.display = 'inline-flex';
  script.textContent = 'node introduction.js';
  launch.append(script);
  terminal.append(launch);

  let assign = document.createElement('div');
  assign.classList = 'input';
  assign.classList.add('hidden');
  assign.textContent = "> const cam = Cambuchi(human, 'he/him');";
  terminal.append(assign);

  const keys = Object.keys(about);
  keys.forEach((key) => {
    if (key != 'cam.contact') {
      const input = document.createElement('div');
      input.textContent = `> ${key}`;
      input.classList = 'hidden';
      input.classList.add('input');
      terminal.append(input);
      const text = document.createElement('div');
      text.classList.add('hidden');
      if (about[key][0] === '[') {
        text.textContent = about[key];
      } else {
        text.textContent = `"${about[key]}"`;
      }

      terminal.append(text);
    } else if (key === 'cam.contact') {
      const input = document.createElement('div');
      input.textContent = `> ${key}`;
      input.classList = 'hidden';
      input.classList.add('input');
      terminal.append(input);
      const text = document.createElement('div');
      text.classList.add('hidden');
      const beginning = document.createElement('span');
      beginning.textContent = '["';
      const comma = document.createElement('span');
      comma.textContent = '", "';
      const end = document.createElement('span');
      end.textContent = '"]';
      let contacts = Object.keys(about[key]);
      for (let item of contacts) {
        const link = document.createElement('a');
        link.href = about[key][item];
        link.textContent = item;
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noreferrer noopener');
        if (item === 'LinkedIn') {
          text.append(beginning);
          text.append(link);
          text.append(comma);
        } else if (item === 'GitHub') {
          text.append(link);
          text.append(end);
        }
      }
      terminal.append(text);
    }
  });
};

const animate = () => {
  const launch = document.getElementById('launch');
  const terminal = document.getElementById('terminal');
  const terminalItems = terminal.children;

  launch.classList.remove('hidden');
  launch.style.width = `${launch.textContent.length + 2}ch`;
  launch.style.animation = `typing 2s steps(${
    launch.textContent.length + 2
  }), blink .5s step-end 4 alternate`;
  launch.classList.add('typing-demo');

  launch.onanimationend = () => {
    setTimeout(() => {
      animateItem(1);
      launch.onanimationend = null;
    }, 350);
  };
};

const animateItem = (index) => {
  if (index > 11) {
    return;
  }
  const terminal = document.getElementById('terminal');
  const terminalItems = terminal.children;
  const launch = terminalItems[index];

  // console.log(terminalItems[index].textContent);

  if (terminalItems[index].textContent[-1] === ';') {
    launch.classList.remove('hidden');
    launch.style.width = `${launch.textContent.length + 1}ch`;
    launch.style.animation = `typing 2.5s steps(${
      launch.textContent.length + 1
    }), blink .5s step-end 5 alternate`;
    launch.classList.add('typing-demo');
    launch.onanimationend = () => {
      animateItem(index + 1);
      launch.onanimationend = null;
    };
  } else if (terminalItems[index].textContent[0] === '>') {
    launch.classList.remove('hidden');
    launch.style.width = `${launch.textContent.length + 1}ch`;
    launch.style.animation = `typing 1.5s steps(${
      launch.textContent.length + 1
    }), blink .5s step-end 3 alternate`;
    launch.classList.add('typing-demo');
    launch.onanimationend = () => {
      animateItem(index + 1);
      launch.onanimationend = null;
    };
  } else {
    terminalItems[index].classList.remove('hidden');
    setTimeout(() => {
      animateItem(index + 1);
      launch.onanimationend = null;
    }, 250);
  }
};

const user = () => {
  let user = document.createElement('div');
  let guest = document.createElement('span');
  guest.classList = 'guest';
  guest.textContent = 'guest';
  let site = document.createElement('span');
  site.classList = 'site';
  site.textContent = 'cambuchi.github.io';
  let path = document.createElement('span');
  path.classList = 'path';
  path.textContent = '/home ';

  user.append(guest);
  user.insertAdjacentText('beforeend', '@');
  user.append(site);
  user.insertAdjacentText('beforeend', ':$ ~ ');
  user.append(path);

  return user;
};

export { introduction, animate };
