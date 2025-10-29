// Alternar modo escuro/claro
document.getElementById('toggleDark').addEventListener('click', () => {
  if (document.body.classList.toggle('light')) {
    document.body.style.background = 'white';
    document.body.style.color = '#06283D';
  } else {
    document.body.style.background = '';
    document.body.style.color = '';
  }
});

// Expandir todos os eventos
document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.event').forEach(e => e.classList.add('open'));
});

// Clicar em um evento abre/fecha
document.querySelectorAll('.event').forEach(e => {
  e.addEventListener('click', () => e.classList.toggle('open'));
});

// Filtro de busca
document.getElementById('search').addEventListener('input', ev => {
  const q = ev.target.value.toLowerCase().trim();
  document.querySelectorAll('.event').forEach(evEl => {
    const keys = evEl.getAttribute('data-keywords') || '';
    const title = evEl.querySelector('h3').innerText.toLowerCase();
    evEl.style.display = (!q || title.includes(q) || keys.includes(q)) ? '' : 'none';
  });
});

// Modal simples de créditos
document.getElementById('showModal').addEventListener('click', () => {
  alert('PCMentesLab\\n\\nCriado por:\\n- Miguel\\n- Rauan\\n\\nObrigado por visitar!');
});