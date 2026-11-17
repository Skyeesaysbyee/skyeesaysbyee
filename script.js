
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const letterForm = document.getElementById('letterForm');

if (letterForm) {
  letterForm.addEventListener('submit', (event) => {

    if (letterForm.action.includes('YOUR_FORM_ID')) {
      event.preventDefault();

      document.getElementById('formNotice').textContent =
        'Letters are not connected yet. Add your Formspree form ID to letters.html first.';
    }

  });
}
