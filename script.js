const validarLogin = () => {
  const login = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (login == 'tryber@teste.com' & password == '123456') {
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
