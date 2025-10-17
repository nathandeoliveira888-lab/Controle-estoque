document.getElementById('CalcularFrete').addEventListener ('click', function(event) {
  event.preventDefault();
})

const largura = parseFloat(document.getElementById('LarguraDoPacote').value);

const altura = parseFloat(document.getElementById('AlturaDoPacote').value);

const profundidade = parseFloat(document.getElementById('ProfundidadeDoPacote').value);

const peso = parseFloat(document.getElementById('PesoDoPacote').value);

let frete;

if (peso <= 0.30) {
  frete = 8.00;
} else if (peso <= 1.00 && (largura < 50 || profundidade < 50)) {
  frete = 15.00;
} else {
  frete = 30.00;
}

alert("Frete: R$" + frete.toFixed(2));
