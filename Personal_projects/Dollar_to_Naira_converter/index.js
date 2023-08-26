document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');
    const dollarAmountInput = document.getElementById('dollarAmount');
    const resultElement = document.getElementById('result');
    const YOUR_API_KEY = '1f84f5560e25a241dfd2171fc317516f';
    const apiUrl = 'http://api.exchangeratesapi.io/v1/latest';

    convertButton.addEventListener('click', async () => {
        const dollarAmount = parseFloat(dollarAmountInput.value);
        if (isNaN(dollarAmount)) {
            resultElement.textContent = 'Please enter a valid dollar amount';
            return;
        }
        try {
            const response = await fetch(`${apiUrl}?base=USD&apikey=${YOUR_API_KEY}`);
            const data = await response.json();
            const exchangeRate = data.rates.NGN; // Exchange rate for USD to NGN
            const nairaAmount = dollarAmount * exchangeRate;
            resultElement.textContent = `${dollarAmount.toFixed(2)} dollars is approximately ${nairaAmount.toFixed(2)} naira.`;
            console.log(data);
        } catch (error) {
            resultElement.textContent = 'An error occurred while fetching the exchange rate.';
            console.log(error.message);
        }
    });
});









/*
const cbtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

cbtn.addEventListener('onclick', async () => {
    const inputid = document.getElementById("input").value;

    console.log(inputid);
})
*/