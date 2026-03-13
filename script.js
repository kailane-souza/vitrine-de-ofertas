const container = document.getElementById("produtos")
const busca = document.getElementById("buscar")

container.innerHTML = "Carregando produtos..."

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(produtos => {
        container.innerHTML = ""

        produtos.forEach(produto => {
            let estoque = Math.floor(Math.random() * 20) + 1
            let card = document.createElement("div")
            card.classList.add("card")

            if (estoque <= 10) {
                card.classList.add("urgente")
            }

            card.innerHTML = `
             <div class="rating">
                        <span class="estrela">⭐ ${produto.rating.rate}</span>
                        <span class="avaliacoes">(${produto.rating.count} reviews)</span>
                    </div>
                <div class="img-container">
                    <img src="${produto.image}" alt="${produto.title}">
                </div>
                <div class="info">
                    <h3>${produto.title}</h3>

                     <span class="categoria">${produto.category}</span>
                

                    <p class="preco">
                        ${produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                    <p class="estoque-texto">
                        ${estoque <= 10 ? `<strong>Corra!</strong> Restam apenas ${estoque} unidades!` : "Produto em estoque"} </p>
                    
                    <button class="btn-comprar">Comprar Agora</button>
                </div>
            `
            container.appendChild(card)
        })
    })