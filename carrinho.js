let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartCount();
});

// Função para exibir os produtos no carrinho
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItemsContainer.innerHTML = ''; // Limpa os itens exibidos

    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach(item => {
            const preco = !isNaN(item.preco) ? item.preco : 0; // Define preço padrão se não for um número
            const quantidade = !isNaN(item.quantidade) ? item.quantidade : 1; // Define quantidade padrão

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${preco.toFixed(2)}</p>
                <p>Quantidade: ${quantidade}</p>
                <p>Total: R$ ${(preco * quantidade).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.nome}')">Remover</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
            totalPrice += preco * quantidade;
        });

        totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    } else {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        totalPriceElement.textContent = 'Total: R$ 0.00';
    }
}

// Função para remover um produto do carrinho
function removeFromCart(nomeProduto) {
    cart = cart.filter(item => item.nome !== nomeProduto); // Filtra o produto removido
    saveCart(); // Atualiza o carrinho no localStorage
    displayCartItems(); // Atualiza a visualização do carrinho
    updateCartCount(); // Atualiza a contagem de itens no carrinho na página principal
}

// Função para exibir a seção de pagamento
function showPaymentOptions() {
    document.getElementById("cartSection").style.display = "none";
    document.getElementById("paymentSection").style.display = "block";
}

// Função para alternar as informações do cartão de crédito
function toggleCardInfo() {
    const cardInfo = document.getElementById('cardInfo');
    cardInfo.style.display = document.getElementById('creditCard').checked ? 'block' : 'none';
}

// Função para confirmar o pagamento
function confirmPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (paymentMethod) {
        if (paymentMethod.value === 'cartao') {
            const cardNumber = document.getElementById('cardNumber').value;
            const cardHolder = document.getElementById('cardHolder').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;

            if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
                alert('Por favor, preencha todos os campos do cartão.');
                return;
            }
        }
        // Limpa o carrinho e redireciona para a página de confirmação
        cart = [];
        saveCart();
        location.href = 'compra-confirmacao.html';
    } else {
        alert('Por favor, escolha uma forma de pagamento.');
    }
}

// Função para gerar o código Pix
function generatePixCode() {
    const prefix = 'PIX-';
    const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    const pixCode = prefix + randomCode;

    document.getElementById('pixCode').innerText = pixCode;
    document.getElementById('pixInfo').style.display = 'block';
    document.getElementById('cardInfo').style.display = 'none';
}

// Função para atualizar a contagem de itens no carrinho
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + (isNaN(item.quantidade) ? 1 : item.quantidade), 0);
    document.getElementById('cartLink').innerText = `Carrinho (${cartCount})`;
}

// Função para salvar o carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
