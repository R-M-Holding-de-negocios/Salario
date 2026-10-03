// Checkout do ebook. Troque este endereço se a oferta mudar.
// Vazio: mantém o WhatsApp como canal para consultar a compra.
const CHECKOUT_URL = 'https://pay.kiwify.com.br/MoAlfK2';

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
