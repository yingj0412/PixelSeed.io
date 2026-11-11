document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.legal-language [data-lang]');
  function setLanguage(lang) {
    if (lang !== 'ko' && lang !== 'en') return;
    document.querySelectorAll('[data-lang-ko][data-lang-en]').forEach(el => {
      el.textContent = lang === 'ko' ? el.dataset.langKo : el.dataset.langEn;
    });
    buttons.forEach(b => { b.classList.toggle('active', b.dataset.lang === lang); b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    document.documentElement.lang = lang;
    document.title = document.querySelector('h1').textContent + ' | '+document.querySelector('.legal-brand').textContent.replace(/\.$/, '');
  }
  buttons.forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
  setLanguage('en');
});
