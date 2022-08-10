// https://caspermetrics.io/

const element = document.querySelector('#price');
const updatePriceBtn = document.querySelector('#update-price-btn');

async function getCasperPrice() {
    const response = await fetch('https://mainnet.cspr.art3mis.net/price');
    const price = response.json();
    return price;
}

async function updatePrice() {
    const price = await getCasperPrice();

    element.innerText = price.toLocaleString('en-US', {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 5
    });
}


function getPrice(id) {
    updatePrice();

    if (id) { 
        clearInterval(id);
    }

    return setInterval(() => {
        updatePrice()
    }, 10000);
}

let intervalId = getPrice();

updatePriceBtn.addEventListener('click', () => {
    intervalId = getPrice(intervalId);
});