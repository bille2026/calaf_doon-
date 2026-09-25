const form = document.querySelector('#waitlist-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  if (!email) return;
  message.textContent = `You're on the list, ${email}. We'll be in touch soon.`;
  form.reset();
});
