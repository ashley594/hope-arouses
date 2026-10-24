document.getElementById('scroll-cue').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(signupForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      document.getElementById('form-note').textContent = "Thank you — we'll be in touch.";
      signupForm.reset();
    })
    .catch(() => {
      document.getElementById('form-note').textContent = 'Something went wrong. Please try again.';
    });
});
