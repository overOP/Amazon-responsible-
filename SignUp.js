// Navigation between forms
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('div[id]').forEach(div => div.classList.add('hidden'));
      document.querySelector(link.getAttribute('href')).classList.remove('hidden');
    });
  });

  // Display alert on form submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  });