document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === target));

    history.replaceState(null, '', `#${target}`);
  });
});

const initial = location.hash.replace('#', '');
if (initial) {
  const btn = document.querySelector(`.tab-btn[data-tab="${initial}"]`);
  if (btn) btn.click();
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
