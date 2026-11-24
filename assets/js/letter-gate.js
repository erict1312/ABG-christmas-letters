
(function () {
  const config = window.LETTER_CONFIG;
  const form = document.getElementById('password-form');
  const input = document.getElementById('letter-password');
  const error = document.getElementById('password-error');
  const gate = document.getElementById('password-gate');
  const content = document.getElementById('letter-content');
  const title = document.getElementById('letter-title');
  const greeting = document.getElementById('letter-greeting');
  const paragraphs = document.getElementById('letter-paragraphs');

  if (!config || !form) return;
  document.title = config.pageTitle || 'Christmas Letter';
  document.getElementById('recipient-name').textContent = config.recipientName || 'You';
  title.textContent = config.letterTitle || 'A Letter for You';
  greeting.textContent = config.greeting || ('Dear ' + (config.recipientName || 'friend') + ',');

  function unlock() {
    gate.hidden = true;
    content.hidden = false;
    paragraphs.replaceChildren();
    (config.paragraphs || []).forEach(function (paragraph) {
      const p = document.createElement('p');
      p.textContent = paragraph;
      paragraphs.appendChild(p);
    });
    if (config.closing) {
      const closing = document.createElement('p');
      closing.textContent = config.closing;
      paragraphs.appendChild(closing);
    }
    if (config.signature) {
      const signature = document.createElement('p');
      signature.innerHTML = '<strong></strong>';
      signature.querySelector('strong').textContent = config.signature;
      paragraphs.appendChild(signature);
    }
    try { sessionStorage.setItem('letter-unlocked-' + location.pathname, 'yes'); } catch (_) {}
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (input.value.trim() === config.password) {
      error.textContent = '';
      unlock();
    } else {
      error.textContent = 'That password doesn’t look right. Please try again.';
      input.select();
    }
  });

  try {
    if (sessionStorage.getItem('letter-unlocked-' + location.pathname) === 'yes') unlock();
  } catch (_) {}
})();
