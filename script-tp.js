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
// randomic quotes
const refreshBtn = document.querySelector('.btn-quote');
const outputQuote = document.querySelector('.output-quotes');
const outputQuoteItalic = document.getElementById('italic-quotes');
const outputQuotePoppins = document.getElementById('poppins-quotes');
fetch('sayings.json')
  .then((quote) => quote.json())
  .then((itens) => {
    function getRandomicQuote() {
      const randomicIndex = Math.floor(Math.random() * itens.length);
      const randomQuote = itens[randomicIndex];
      return randomQuote;
    }
    function displayQuote(quote, element) {
      element.innerHTML = `${quote.text} - ${quote.author}`;
    }
    function displayItalicQuote(quote, element) {
      element.innerHTML = `${quote.text} - ${quote.author}`;
    }
    function displayPoppinsQuote(quote, element) {
      element.innerHTML = `${quote.text} - ${quote.author}`;
    }

    refreshBtn.addEventListener('click', () => {
      const randomQuote = getRandomicQuote();
      displayQuote(randomQuote, outputQuote);
      displayItalicQuote(randomQuote, outputQuoteItalic);
      displayPoppinsQuote(randomQuote, outputQuotePoppins);
    });
    const randomQuote = getRandomicQuote();
    displayQuote(randomQuote, outputQuote);
    displayItalicQuote(randomQuote, outputQuoteItalic);
    displayPoppinsQuote(randomQuote, outputQuotePoppins);
  });
