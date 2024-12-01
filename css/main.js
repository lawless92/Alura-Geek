productName =  document.getElementById("name");
price = document.getElementById("price");
file = document.getElementById("file");

const cardList = document.getElementById("[data-list]");

function createCard(productTitle, price, url) {
const card = document.createElement('div')
card.className = "product-card"; 
card.innerHTML = 
    `<img class="product-image src="${url}" alt="${textAlt}"></img>
    <div class="product-info">
        <h3 class="product-title">${productTitle}</h3>
        <p class="product-price">${price}</p>
    </div>`
    
    return card;
}
const listaAPI = ""
listaAPI.forEach(cardList => cardList.appendChild(createCard(title,imagen,precio,))); {
    
};