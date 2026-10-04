// Checkout do ebook. Troque este endereço se a oferta mudar.
// Vazio: mantém o WhatsApp como canal para consultar a compra.
const CHECKOUT_URL = 'https://pay.kiwify.com.br/MoAlfK2';

const futureTimer = document.getElementById('future-timer');
if (futureTimer) {
  let startedAt = Date.now();
  let firstVisit = true;
  try {
    const savedStart = Number(localStorage.getItem('future-timer-start'));
    if (Number.isFinite(savedStart) && savedStart > 0 && savedStart <= startedAt) {
      startedAt = savedStart;
      firstVisit = false;
    } else {
      localStorage.setItem('future-timer-start', String(startedAt));
    }
  } catch {
    // Mantém o cronômetro funcionando se o navegador bloquear o armazenamento.
  }
  const updateTimer = () => {
    const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor(elapsed / 60) % 60;
    const seconds = elapsed % 60;
    futureTimer.textContent = [hours, minutes, seconds]
      .map(value => String(value).padStart(2, '0')).join(':');
  };
  updateTimer();
  setInterval(updateTimer, 1000);
  const showBar = () => {
    updateTimer();
    document.body.classList.add('future-bar-visible');
  };
  if (firstVisit) {
    setTimeout(showBar, 10000);
  } else {
    showBar();
  }
}

if (CHECKOUT_URL) {
  try {
    const checkout = new URL(CHECKOUT_URL);
    if (checkout.protocol === 'https:') {
      document.querySelectorAll('.purchase').forEach(button => {
        button.href = checkout.href;
      });
      document.querySelector('.purchase-note').textContent =
        'Você será direcionado ao checkout para conferir as condições e finalizar sua compra.';
      const answer = document.querySelectorAll('.faq details')[3].querySelector('p');
      answer.textContent = 'Clique em “Quero comprar o ebook” para abrir o checkout e consultar as condições de pagamento e entrega.';
    }
  } catch (error) {
    console.warn('Confira o endereço do checkout em script.js. O WhatsApp continua disponível.');
  }
}
