function fetchAdvice() {
  // Fetch advice using the selected advice ID
  fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => {
      const adviceNum = document.querySelector('h1');
      adviceNum.textContent = "ADVICE #" + data.slip.id;
      const adviceText = document.querySelector('.advice-text');
      adviceText.textContent = '"' + data.slip.advice + '"';
    })
    .catch(error => console.error(error));
}

const diceButton = document.querySelector('.dice-btn');
diceButton.addEventListener('click', fetchAdvice);
