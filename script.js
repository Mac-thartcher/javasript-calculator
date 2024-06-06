let displayElement = document.getElementById('display');
function press(key) {
  if (key === 'AC') {
    displayElement.textContent = '';
  } else if (key === '=') {
    try {
      displayElement.textContent = eval(displayElement.textContent);
    } catch (e) {
      displayElement.textContent = 'Error';
    }
  } else {
    displayElement.textContent += key;
  }
}
