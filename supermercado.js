const produtos = {
    hortifruti: [
        { nome: 'Maçã Duas Por', preco: 3.50, estoque: 100, imagem: 'imagens/maca.webp' },
        { nome: 'Banana', preco: 10.00, estoque: 100, imagem: 'imagens/banana.webp' },
        { nome: 'Meia Melancia', preco: 10.00, estoque: 100, imagem: 'imagens/melancia.webp' },
        { nome: 'Três Laranjas Por', preco: 5.00, estoque: 100, imagem: 'imagens/laranja.webp' },
        { nome: 'Um Abacate Por', preco: 4.00, estoque: 100, imagem: 'imagens/abacate.webp' },
        { nome: 'Um Abacaxi Por', preco: 5.00, estoque: 100, imagem: 'imagens/abacaxi.webp' },
        { nome: 'Um Alface Por', preco: 5.00, estoque: 100, imagem: 'imagens/alface.webp' },
        { nome: 'Tomate KL', preco: 5.00, estoque: 100, imagem: 'imagens/tomate.webp' },
        { nome: 'Um Pepino', preco: 1.50, estoque: 100, imagem: 'imagens/pepino.webp' },
        { nome: 'Couve', preco: 5.00, estoque: 100, imagem: 'imagens/couve.webp' },
        { nome: 'Um Repolho', preco: 5.00, estoque: 100, imagem: 'imagens/repolho.webp' },
        { nome: 'Cebola KL', preco: 5.00, estoque: 100, imagem: 'imagens/cebola.webp' },
        { nome: 'Uma Abóbora', preco: 6.00, estoque: 100, imagem: 'imagens/abobora.webp' },
        { nome: 'Limão KL', preco: 5.00, estoque: 100, imagem: 'imagens/limao.webp' },
        { nome: 'Kiwi KL', preco: 5.00, estoque: 100, imagem: 'imagens/kiwi.webp' }
    ],
    bebidas: [
        { nome: 'Coca-Cola 2L', preco: 10.00, estoque: 100, imagem: 'imagens/cocacola2l.webp' },
        { nome: 'Guaraná 2L', preco: 9.00, estoque: 100, imagem: 'imagens/guarana.webp' },
        { nome: 'Fanta Uva 2L', preco: 9.00, estoque: 100, imagem: 'imagens/fantauva.webp' },
        { nome: 'Itubaina 2L', preco: 6.00, estoque: 100, imagem: 'imagens/itubaina.webp' },
        { nome: 'Água 5L', preco: 6.00, estoque: 100, imagem: 'imagens/agua5l.webp' },
        { nome: 'Suco Del Valle', preco: 7.00, estoque: 100, imagem: 'imagens/sucodelvalle.webp' },
        { nome: 'Suco Ades Maçã', preco: 6.50, estoque: 100, imagem: 'imagens/sucoades.webp' },
        { nome: 'Cerveja Skol', preco: 6.00, estoque: 100, imagem: 'imagens/cervejaskol.webp' },
        { nome: 'Cerveja Duplo Malte', preco: 6.00, estoque: 100, imagem: 'imagens/cervejaduplomalte.webp' },
        { nome: 'Gin', preco: 6.00, estoque: 100, imagem: 'imagens/gin.webp' },
        { nome: 'Dolly Limão', preco: 6.00, estoque: 100, imagem: 'imagens/dollylimao.webp' },
        { nome: 'Refrigerante Lata 350ml', preco: 6.00, estoque: 100, imagem: 'imagens/cocacolalata.webp' },
        { nome: 'Whisky', preco: 6.00, estoque: 100, imagem: 'imagens/whisky.webp' },
        { nome: 'H2O', preco: 6.00, estoque: 100, imagem: 'imagens/h2o.webp' },
        { nome: 'Energético', preco: 6.00, estoque: 100, imagem: 'imagens/energetico.webp' }
    ],
    limpeza: [
        { nome: 'Detergente', preco: 4.50, estoque: 100, imagem: 'imagens/detergente.webp' },
        { nome: 'Sabão em Pó', preco: 8.00, estoque: 100, imagem: 'imagens/sabaoempo.webp' },
        { nome: 'Sabão em Barra', preco: 4.50, estoque: 100, imagem: 'imagens/sabaoembarra.webp' },
        { nome: 'Amaciante', preco: 4.50, estoque: 100, imagem: 'imagens/amaciante.webp' },
        { nome: 'Cloro', preco: 4.50, estoque: 100, imagem: 'imagens/cloro.webp' },
        { nome: 'Cândida', preco: 4.50, estoque: 100, imagem: 'imagens/candida.webp' },
        { nome: 'Desinfetante', preco: 4.50, estoque: 100, imagem: 'imagens/desifetante.webp' },
        { nome: 'Limpa Alumínio', preco: 4.50, estoque: 100, imagem: 'imagens/limpaaluminio.webp' },
        { nome: 'Esponja', preco: 4.50, estoque: 100, imagem: 'imagens/esponja.webp' },
        { nome: 'Diabo Verde', preco: 4.50, estoque: 100, imagem: 'imagens/diabo verde.webp' },
        { nome: 'Rodo', preco: 4.50, estoque: 100, imagem: 'imagens/rodo.webp' },
        { nome: 'Vassoura', preco: 4.50, estoque: 100, imagem: 'imagens/vassoura.webp' },
        { nome: 'Saco de Lixo', preco: 4.50, estoque: 100, imagem: 'imagens/saco de lixo.webp' }
    ],
    carnes: [
        { nome: 'Frango', preco: 12.00, estoque: 100, imagem: 'imagens/frango.webp' },
        { nome: 'Carne Bovina', preco: 20.00, estoque: 100, imagem: 'imagens/carnebovina.webp' },
        { nome: 'Linguiça', preco: 12.00, estoque: 100, imagem: 'imagens/linguica.webp' },
        { nome: 'Fígado', preco: 12.00, estoque: 100, imagem: 'imagens/figado.webp' },
        { nome: 'Coxinha da Asa', preco: 12.00, estoque: 100, imagem: 'imagens/coxinhadaasa.webp' },
        { nome: 'Patinho', preco: 12.00, estoque: 100, imagem: 'imagens/patinhocarne.webp' },
        { nome: 'Carne Moída', preco: 12.00, estoque: 100, imagem: 'imagens/carnemoida.webp' },
        { nome: 'Cupim', preco: 12.00, estoque: 100, imagem: 'imagens/cupim.webp' },
        { nome: 'Acém', preco: 12.00, estoque: 100, imagem: 'imagens/acemcarne.webp' },
        { nome: 'Lombo', preco: 12.00, estoque: 100, imagem: 'imagens/lombocarne.webp' },
        { nome: 'Mocotó', preco: 12.00, estoque: 100, imagem: 'imagens/mocoto.webp' },
        { nome: 'Peito de Frango', preco: 12.00, estoque: 100, imagem: 'imagens/peitodefrango.webp' },
        { nome: 'Frango Inteiro', preco: 12.00, estoque: 100, imagem: 'imagens/frango.webp' },
        { nome: 'Tulipa', preco: 12.00, estoque: 100, imagem: 'imagens/tulipa.webp' },
        { nome: 'Coração de Galinha', preco: 12.00, estoque: 100, imagem: 'imagens/coracaodegalinha.webp' }
    ],
     brinquedos : [
        { nome: 'Cavalinho', preco: 7.00, estoque: 100, imagem: 'imagens/cavalinho.webp' },
        { nome: 'Dama', preco: 6.00, estoque: 100, imagem: 'imagens/dama.webp' },
        { nome: 'Dominó', preco: 6.00, estoque: 100, imagem: 'imagens/domino.webp' },
        { nome: 'Pula Pula', preco: 6.00, estoque: 100, imagem: 'imagens/pula pula jpg.jpg' },
        { nome: 'Jogo do Mico', preco: 6.00, estoque: 100, imagem: 'imagens/jogo do mico.webp' },
        { nome: 'Banco Imobiliário', preco: 6.00, estoque: 100, imagem: 'imagens/banco imobiliario.webp' },
        { nome: 'Animais Plástico', preco: 6.00, estoque: 100, imagem: 'imagens/animais plastico png.png' },
        { nome: 'Carrinho Hot Wheels', preco: 6.00, estoque: 100, imagem: 'imagens/carrinho hot whells.webp' },
        { nome: 'Peteca', preco: 6.00, estoque: 100, imagem: 'imagens/peteca.webp' },
        { nome: 'Bola de Vôlei', preco: 6.00, estoque: 100, imagem: 'imagens/bola de volei.webp' },
        { nome: 'Bola de Futebol', preco: 6.00, estoque: 100, imagem: 'imagens/bola de futebol.webp' },
        { nome: 'Barbie', preco: 6.00, estoque: 100, imagem: 'imagens/barbie.webp' },
        { nome: 'Boneca Bebê', preco: 6.00, estoque: 100, imagem: 'imagens/boneca bebe.webp' },
        { nome: 'Carro Vermelho', preco: 6.00, estoque: 100, imagem: 'imagens/carro vermelho.webp' },
        { nome: 'Trator Carrinho', preco: 6.00, estoque: 100, imagem: 'imagens/trator carrinho jpg.jpg' }
    ],
    
    mercearia: [
        { nome: 'Arroz', preco: 5.00, estoque: 100, imagem: 'imagens/arroz5kg.webp' },
        { nome: 'Feijão', preco: 4.00, estoque: 100, imagem: 'imagens/feijao1kg.webp' },
        { nome: 'Macarrão', preco: 5.00, estoque: 100, imagem: 'imagens/macarrao.webp' },
        { nome: 'Molho de Tomate', preco: 2.50, estoque: 100, imagem: 'imagens/molhodetomate.webp' },
        { nome: 'Macarrão Instantâneo', preco: 2.50, estoque: 100, imagem: 'imagens/macarraoinstantaneo.webp' },
        { nome: 'Bolacha de Maizena', preco: 2.50, estoque: 100, imagem: 'imagens/bolachamaizena.webp' },
        { nome: 'Café', preco: 4.00, estoque: 100, imagem: 'imagens/cafe.webp' },
        { nome: 'Pão de Forma', preco: 4.00, estoque: 100, imagem: 'imagens/paodeforma.webp' },
        { nome: 'Pacote de Fralda', preco: 15.00, estoque: 100, imagem: 'imagens/pacotefralda.webp' },
        { nome: 'Papel Higiênico', preco: 5.00, estoque: 100, imagem: 'imagens/papelhigienico.webp' },
        { nome: 'Papel Toalha', preco: 5.00, estoque: 100, imagem: 'imagens/papeltoalha.webp' },
        { nome: 'Shampoo', preco: 8.00, estoque: 100, imagem: 'imagens/shampoo.webp' },
        { nome: 'Sabonete', preco: 2.00, estoque: 100, imagem: 'imagens/sabonete.webp' },
        { nome: 'Creme de Pentear', preco: 7.00, estoque: 100, imagem: 'imagens/cremedepentear.webp' },
        { nome: 'Salgadinho', preco: 2.50, estoque: 100, imagem: 'imagens/salgadinho.webp' }
    ]
};

// Função para exibir produtos de uma categoria específica
function showProducts(categoria) {
    const productList = document.getElementById("productList");
    const categoryTitle = document.getElementById("categoryTitle");

    productList.innerHTML = "";  // Limpa os produtos exibidos anteriormente
    categoryTitle.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    document.getElementById("productsSection").style.display = "block";  // Mostra a seção de produtos

    produtos[categoria].forEach(produto => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
        
        productItem.innerHTML = `
            <div class="product-image-container">
                <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
            </div>
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Estoque: ${produto.estoque}</p>
            <input type="number" id="quantity-${produto.nome}" value="1" min="1" max="${produto.estoque}" style="width: 50px; margin-bottom: 10px;">
            <button onclick="addToCart('${categoria}', '${produto.nome}', parseInt(document.getElementById('quantity-${produto.nome}').value))">Adicionar ao Carrinho</button>
        `;

        productList.appendChild(productItem);
    });
}

// Função para adicionar produto ao carrinho e atualizar o contador
function addToCart(categoria, nomeProduto, quantidade) {
    const produto = produtos[categoria].find(item => item.nome === nomeProduto);

    if (produto && produto.estoque >= quantidade) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.nome === produto.nome);

        if (existingProduct) {
            existingProduct.quantidade += quantidade;
        } else {
            cart.push({ nome: produto.nome, preco: produto.preco, quantidade });
        }

        produto.estoque -= quantidade; // Atualiza o estoque do produto
        localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho atualizado
        alert(`${produto.nome} foi adicionado ao carrinho!`);
        updateCartCount();
        showProducts(categoria); // Atualiza a lista de produtos para mostrar o novo estoque
    } else {
        alert("Quantidade indisponível em estoque!");
    }
}

// Função para atualizar a contagem de itens no carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cartLink').innerText = `Carrinho (${cartCount})`;
}

// Função para buscar produtos pelo nome
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('productList');
    resultsContainer.innerHTML = ''; // Limpa a lista de produtos
    document.getElementById("productsSection").style.display = "block";
    document.getElementById("categoryTitle").textContent = "Resultados da Pesquisa";

    let foundProducts = false;

    for (let categoria in produtos) {
        produtos[categoria].forEach(produto => {
            if (produto.nome.toLowerCase().includes(input)) {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-item');
                productDiv.innerHTML = `
                    <div class="product-image-container">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
                    </div>
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <p>Estoque: ${produto.estoque}</p>
                    <input type="number" id="quantity-${produto.nome}" value="1" min="1" max="${produto.estoque}" style="width: 50px; margin-bottom: 10px;">
                    <button onclick="addToCart('${categoria}', '${produto.nome}', parseInt(document.getElementById('quantity-${produto.nome}').value))">Adicionar ao Carrinho</button>
                `;
                resultsContainer.appendChild(productDiv);
                foundProducts = true;
            }
        });
    }

    if (!foundProducts) {
        resultsContainer.innerHTML = '<p>Produto não encontrado.</p>';
    }
}

// Inicializa a contagem de itens no carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', updateCartCount);
