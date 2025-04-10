const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let current = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      current = '';
    } else if (button.classList.contains('delete')) {
      current = current.slice(0, -1);
    } else if (button.classList.contains('equals')) {
      try {
        current = eval(current).toString();
      } catch {
        current = 'خطا';
      }
    } else {
      current += value;
    }

    display.textContent = current || '0';
  });
});
