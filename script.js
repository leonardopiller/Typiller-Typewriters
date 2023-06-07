const input = document.getElementById('inputLetra');
const outputDefault = document.querySelector('.output');

const outputItalic = document.querySelector('#italic');
const outputPoppins = document.querySelector('#poppins');
input.addEventListener('input', () => {
  const texto = input.value;
  outputDefault.textContent = texto;
  outputItalic.textContent = texto;
  outputPoppins.textContent = texto;
});

// (output.textContent = texto
