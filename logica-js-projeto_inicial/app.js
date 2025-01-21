alert('Boas vindas ao jogo do número secreto!');
let faixaNumero = 5000;
let numeroSecreto = Math.floor(Math.random() * faixaNumero)+1;
console.log(numeroSecreto);
let tentativa
let contador = 1;

while(tentativa != numeroSecreto){
  tentativa = prompt(`Escolha um numero entre 1 e ${faixaNumero}`);
  if(numeroSecreto == NULL) break;
  if (numeroSecreto == tentativa){
    break;
   
  }else{
      if(numeroSecreto > tentativa){
        alert(`O numero secreto é maior que ${tentativa}`);
      }else{
        alert(`O numero secreto é menor que ${tentativa}`);
      }
    contador++;
  }
  
}

let umaTentativa = contador > 1 ? 'tentativas' : 'tentativa';

alert(`Parabens!!! Você descobriu o numero secreto: ${numeroSecreto} em somente ${contador} ${umaTentativa}!`);
 