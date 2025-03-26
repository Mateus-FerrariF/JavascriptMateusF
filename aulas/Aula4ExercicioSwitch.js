// faça um programa onde a pessoa digite um numero e apareça qual dia da semana é

var Numero1a7 = 1;

var X;
switch(Numero1a7) {

    default:
        console.log("Insira apenas números de 1 a 7.")
    break;

    case 1:
        X = "Domingo"
    break;
    case 2:
        X = "Segunda-Feira"
    break;
    case 3:
        X = "Terça-Feira"
    break;
    case 4:
        X = "Quarta-Feira"
    break;
    case 5:
        X = "Quinta-Feira"
    break;
    case 6:
        X = "Sexta-Feira"
    break;
    case 7:
        X = "Sábado"
    break;

}

if (Numero1a7<8 && Numero1a7>0) {
    console.log("Hoje é",X)
}
