# Landing page — Desafio Além do Salário

Página responsiva com tema amarelo, pronta para editar no VS Code. Não precisa de Node, npm ou instalação de dependências.

## Abrir

1. Extraia o ZIP mantendo a estrutura das pastas.
2. Abra a pasta `landingpage` no VS Code (Arquivo > Abrir Pasta).
3. Abra `index.html` no navegador. Se preferir, use a extensão Live Server do VS Code.

## Arquivos

- `index.html`: textos, preço de R$ 37, seções e perguntas frequentes.
- `styles.css`: cores, fontes, espaçamentos e versões para celular.
- `script.js`: configuração opcional do checkout.
- `assets/mockup-amarelo.png`: imagem do produto.

## Compra

O botão “Quero comprar o ebook” abre o checkout https://pay.kiwify.com.br/MoAlfK2. O contato no rodapé continua abrindo o WhatsApp. Pagamento e entrega são configurados na Kiwify; esta página direciona o comprador ao checkout.

Para trocar o checkout, atualize o link do botão em `index.html` e coloque o novo endereço HTTPS na variável `CHECKOUT_URL` em `script.js`. A página ajustará o destino e as orientações de compra. Confirme as condições de pagamento e entrega da plataforma antes de publicar.

## Publicar

Envie todos os arquivos, incluindo `assets`, para uma hospedagem que aceite sites estáticos. O ebook não está dentro da pasta pública: entregue-o ao comprador pelo seu fluxo de venda.

Não foram adicionados depoimentos, garantias comerciais ou promessas de faturamento. Consultoria é opcional e contratada separadamente.
