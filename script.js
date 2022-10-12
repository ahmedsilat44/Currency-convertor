
const selectbox = document.getElementById('selectbox');
const selectbox2 = document.getElementById('selectbox2');
getSymbols()

async function getSymbols(){
  const response = await fetch('https://api.exchangerate.host/symbols?format=csv');
  const data = await response.text();
  const table = data.split(/\n/).slice(1, 171);
  table.forEach(row =>{
    const col = row.split(/,/);
    const year = document.createElement('option')
    value = col[1];
    year.value = value.slice(1,4);
    year.innerText = value.slice(1,4);
    const year2 = document.createElement('option')
    year2.value = value.slice(1,4);
    year2.innerText = value.slice(1,4);
    selectbox.appendChild(year);
    selectbox2.appendChild(year2);
  });
}



const fromInput = document.getElementById('selectbox');
const toInput = document.getElementById('selectbox2');
const amountInput = document.getElementById('amount');


function setValue(){
    let fromCurr = fromInput.value;
    let toCurr = toInput.value;
    let amount = amountInput.value;

    let requestURL = `https://api.exchangerate.host/convert?from=${fromCurr}&to=${toCurr}&amount=${amount}`;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const h3 = document.getElementById('h3');
        const head = document.getElementById('heading');
        head.innerText = fromCurr + " TO " + toCurr;
        let response = request.response;
        h3.innerText = (Math.floor(parseFloat(response.result)*100)/100);
    }
}

