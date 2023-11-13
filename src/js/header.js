import { refs } from './refs';
import Darkmode from 'darkmode-js';

<<<<<<< Updated upstream
// stepAuth();
=======
stepAuth();
>>>>>>> Stashed changes
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#', // default: '#fff'
    backgroundColor: '#f3f3f3', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#f6f6f6', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);

  const lSDarkMode = localStorage.getItem('darkmode');
  const parsedDarkMode = JSON.parse(lSDarkMode);

  if (parsedDarkMode) {
    refs.inputSwitch.checked = true;
    darkmode.toggle();
  }

  refs.inputSwitch.addEventListener('click', e => {
    const options = {
      bottom: '64px', // default: '32px'
      right: 'unset', // default: '32px'
      left: '32px', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#', // default: '#fff'
      backgroundColor: '#f3f3f3', // default: '#fff'
      buttonColorDark: '#100f2c', // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.toggle();
  });

  refs.singUpButton.addEventListener('click', () => {
    refs.modalAuth.style.display = 'flex';

  });

  refs.closeBtn.addEventListener('click', () => {
    refs.modalAuth.style.display = 'none';
  });
});



<<<<<<< Updated upstream

// function showModalAuth(view) {
//   if (view) {
//     // refs.body.style.overflow = 'visible';
//     refs.modalAuth.style.display = 'flex';
//     console.log(view);
//   } else {
//     // refs.body.style.overflow = 'hidden';
//     refs.modalAuth.style.display = 'none';
//     console.log(view);
//   }
// }
=======
refs.singUpButton.addEventListener('click', () => {
  showModalAuth(true);
});
// refs.singUpButton.addEventListener('click', () => {
//   refs.modalAuth.style.display = 'flex';
// });
refs.closeBtn.addEventListener('click', () => {
  showModalAuth(false);
});
// refs.closeBtn.addEventListener('click', () => {
//   refs.modalAuth.style.display = 'none';
// });

function showModalAuth(view) {
  if (!view) {
    refs.body.style.overflow = 'visible';
    refs.modalAuth.style.display = 'none';
  } else {
    refs.body.style.overflow = 'hidden';
    refs.modalAuth.style.display = 'flex';
  }
}
>>>>>>> Stashed changes

refs.formModalAuth.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  sendAuthData(formProps).then(response => {
    if (response?.data) {
      localStorage.setItem('name', response.data.name);
      showModalAuth(false);
      stepAuth();
    }
  });
};

function sendAuthData(data) {
  // console.log(data);
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 1000);
  });
}

function stepAuth() {
  if (localStorage.getItem('name')) {
    refs.singUpButton.innerText = localStorage.getItem('name');
    // refs.singUpButton.removeEventListener('click');
    refs.singUpButton.addEventListener('click', () => {
      logOut();
    });
  }
}

function logOut() {
  localStorage.clear();
  refs.singUpButton.innerText = 'Sing Up';
}
