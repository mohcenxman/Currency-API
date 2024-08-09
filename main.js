fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=4f7e7cb8916849e0abf492da781bcc5a")
.then((result) => {
    let myData = result.json();
    return myData;
}).then((currency) => {
    let amount = document.querySelector(".amount");
    let cad = document.querySelector(".cad span");
    let btc = document.querySelector(".btc span");

    cad.innerHTML = Math.round(amount.innerHTML * currency.rates["CAD"]);
    btc.innerHTML = amount.innerHTML * currency.rates["BTC"];
});