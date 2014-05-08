var produtos = document.getElementsByClassName("produto");
console.log(produtos);
var notebook = document.getElementById("notebook");
var smartphone = document.getElementById("smartphone");
var total = moneyTextToFloatText(notebook.innerHTML) + moneyTextToFloatText(smartphone.innerHTML);
var totalScreen = document.getElementById("total");
totalScreen.innerHTML = floatToReais(total);

function moneyTextToFloatText(text) {
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(cleanText);
}

function floatToReais(value) {
    var money = (value < 1 ? "0" : "") + (Math.floor(value * 100));
    money = "R$ " + money;
    return money.substr(0, money.length - 2) + "," + money.substr(-2);
}

function floatToDollar(value) {
    var money = (value < 1 ? "0" : "") + (Math.floor(value * 100));
    money = "$ " + money;
    return money.substr(0, money.length - 2) + "," + money.substr(-2);
}