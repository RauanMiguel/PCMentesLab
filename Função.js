const toggleDark = document.getElementById('toggleDark');
if (toggleDark) {
  toggleDark.addEventListener('click', () => {
    if (document.body.classList.toggle('light')) {
      document.body.style.background = 'white';
      document.body.style.color = '#06283D';
    } else {
      document.body.style.background = '';
      document.body.style.color = '';
    }
  });
}

const expandAll = document.getElementById('expandAll');
if (expandAll) {
  expandAll.addEventListener('click', () => {
    document.querySelectorAll('.event').forEach(e => e.classList.add('open'));
  });
}

document.querySelectorAll('.event').forEach(e => {
  e.addEventListener('click', () => e.classList.toggle('open'));
});

const search = document.getElementById('search');
if (search) {
  search.addEventListener('input', ev => {
    const q = ev.target.value.toLowerCase().trim();
    document.querySelectorAll('.event').forEach(evEl => {
      const keys = evEl.getAttribute('data-keywords') || '';
      const title = evEl.querySelector('h3').innerText.toLowerCase();
      evEl.style.display = (!q || title.includes(q) || keys.includes(q)) ? '' : 'none';
    });
  });
}

const showModal = document.getElementById('showModal');
if (showModal) {
  showModal.addEventListener('click', () => {
    alert('PCMentesLab\n\nCriado por:\n- Miguel\n- Rauan\n\nObrigado por visitar!');
  });
}

const btn = document.getElementById('saibaMais');
if (btn) {
  btn.addEventListener('click', () => {
    alert('Explore a página "História" para descobrir como os computadores evoluíram!');
  });
}

const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
  });
}
