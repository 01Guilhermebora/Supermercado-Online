document.addEventListener('DOMContentLoaded', () => {
    const confirmarPagamentoBtn = document.getElementById('confirmarPagamentoBtn');

    confirmarPagamentoBtn.addEventListener('click', () => {
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const backButtonContainer = document.getElementById('backButtonContainer');

        if (paymentMethod) {
            // Simulação de chamada para o sistema de pagamento PyQui Py
            const paymentSuccess = processPayment(paymentMethod.value); // Chama a função de processamento de pagamento

            if (paymentSuccess) {
                alert(`Pagamento confirmado com ${paymentMethod.value}.`);
                // Limpa o carrinho
                localStorage.removeItem('cart');
                // Mostra a mensagem de sucesso
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none'; // Oculta mensagem de erro, se houver

                setTimeout(() => {
                    successMessage.style.display = 'none'; // Oculta a mensagem de sucesso
                    backButtonContainer.style.display = 'block'; // Mostra o botão de voltar
                    // Redireciona para a página do supermercado após 3 segundos
                    location.href = 'supermercado.html';
                }, 3000); // Oculte após 3 segundos
            } else {
                errorMessage.innerText = 'O pagamento falhou. Tente novamente.'; // Mensagem de erro
                successMessage.style.display = 'none'; // Oculta a mensagem de sucesso
                backButtonContainer.style.display = 'none'; // Oculta o botão de voltar
            }
        } else {
            errorMessage.innerText = 'Por favor, escolha uma forma de pagamento.'; // Mensagem abaixo
            successMessage.style.display = 'none'; // Oculta a mensagem de sucesso, se estiver visível
            backButtonContainer.style.display = 'none'; // Oculta o botão de voltar
        }
    });
});

// Simulação da função de processamento de pagamento
function processPayment(method) {
    // Aqui você pode adicionar lógica para verificar o método de pagamento
    // Simulação simples: retorna true se o método for "cartao", senão retorna false
    if (method === 'cartao') {
        // Simular sucesso de pagamento
        return true;
    } else if (method === 'pix') {
        // Simular falha de pagamento para "Pix"
        return false;
    }
    return false; // Padrão, caso nenhum método válido seja passado
}

function goBack() {
    location.href = 'supermercado.html'; // Redireciona de volta ao supermercado
}
// Função para renderizar os produtos com base na categoria selecionada
function renderProducts(category) {
    const productsContainer = document.getElementById('products');
    const productsInCategory = products[category] || [];

    productsContainer.innerHTML = productsInCategory.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>R$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>
    `).join('');
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Produto adicionado ao carrinho!');
    }
}

// Função para exibir o conteúdo do carrinho
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('total');

    cartItemsContainer.innerHTML = cart.map(item => `
        <li>${item.name} - R$${item.price.toFixed(2)}</li>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = `Total: R$${total.toFixed(2)}`;

    document.getElementById('cart-button').innerText = `Carrinho (${cart.length})`;

    if (cart.length > 0) {
        document.getElementById('cart').classList.remove('hidden');
    } else {
        document.getElementById('cart').classList.add('hidden');
    }
}

// Função para finalizar a compra
document.getElementById('checkout-button').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        window.location.href = 'checkout.html'; // Redireciona para a página de checkout
    } else {
        alert('Seu carrinho está vazio.');
    }
});

// Inicializar exibição do carrinho e produtos
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
    renderProducts('hortifruti');
});

// Função de busca de produtos
document.getElementById('search').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const allProducts = Object.values(products).flat();

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>R$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>
    `).join('');
});
