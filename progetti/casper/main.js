const element = document.querySelector('#price');

async function getCasperPrice() {
    const response = await fetch('https://mainnet.cspr.art3mis.net/price');
    const price = response.json();
    return price;
}

async function updatePrice() {
    const price = await getCasperPrice();
    element.innerText = price.toPrecision(4);
}

updatePrice();