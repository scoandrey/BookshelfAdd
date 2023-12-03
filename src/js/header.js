import { refs } from './refs';
import Darkmode from 'darkmode-js';

// stepAuth();
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
});

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

const showModalAuthListener = () => {
  showModalAuth(true);
};

refs.singUpButton.addEventListener('click', showModalAuthListener);

refs.closeBtn.addEventListener('click', () => {
  showModalAuth(false);
});

function showModalAuth(view) {
  if (!view) {
    refs.body[0].style.overflow = 'visible';
    refs.modalAuth.style.display = 'none';
  } else {
    refs.body[0].style.overflow = 'hidden';
    refs.modalAuth.style.display = 'flex';
  }
}

refs.formModalAuth.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const nameError = document.querySelector('.name-error');
  const telError = document.querySelector('.tel-error');
  const { 0: name, 1: tel, 2: email } = e.target;

  const nameSuccess = name.value.length > 1;
  if (!nameSuccess) {
    nameError.innerText = 'The name must be longer than one symbol';
  } else {
    nameError.innerText = '';
  }

  const telSuccess = tel.value.length > 9;
  if (!telSuccess) {
    telError.innerText = 'The tel must be longer than 9 symbols';
  } else {
    telError.innerText = '';
  }

  if (nameSuccess && telSuccess) {
    sendAuthData(formProps).then(response => {
      if (response?.data) {
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('tel', response.data.tel);
        localStorage.setItem('email', response.data.email);
        showModalAuth(false);
        stepAuth();
        refs.singUpButton.removeEventListener('click', showModalAuthListener);
      }
    });
  }
};

function sendAuthData(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data }), 1000);
  });
}

function stepAuth() {
  if (localStorage.getItem('name')) {
    refs.singUpButton.innerText = localStorage.getItem('name');
    // refs.singUpButton.removeEventListener('click', ()=> {});
    refs.singUpButton.addEventListener('click', () => {
      logOut();
    });
  }
}

function logOut() {
  localStorage.clear();
  // refs.singUpButton.innerText = 'Sing Up';
}

// refs.formModalAuth.addEventListener('submit', e => {
//   e.preventDefault();

// });
