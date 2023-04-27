const validarLogin = () => {
  const login = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
    return true;
  }
  alert('Email ou senha inválidos.');
  return false;
};

const buttonEntrar = document.getElementById('button-entrar');
const validarButton = () => {
  buttonEntrar.addEventListener('click', (validarLogin));
};
validarButton();

const enableSubmit = () => {
  const submitBtn = document.querySelector('submit-btn');
  const agreement = document.querySelector('agreement');
  agreement.addEventListener('change', () => {
    submitBtn.disabled = !agreement.ariaChecked;
  });
};
enableSubmit();

/* const submit = () => {
  const submitBtn = document.querySelector('submit-btn');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
}; */
