document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form');
  const inp = document.querySelector('#die-container');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, method, sides } = event.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sides: sides.value }),
    });
    const data = await response.text();
    inp.innerHTML = data;
  });
  // PSEUDO-код:
  // 1 - перехватить событие отправки формы
  // 2 - предотвратить действие по умолчанию для этого события
  // 3 - отправить AJAX-сообщение на сервер
  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика
});
