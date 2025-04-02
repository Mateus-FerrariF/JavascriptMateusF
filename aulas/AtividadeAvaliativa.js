
//QUESTÃO 1:
//Input aqui 
var HorarioEscolar = "N";
if (HorarioEscolar == "M") {
    console.log("Bom dia!");
} else if (HorarioEscolar == "V") {
    console.log("Boa tarde!");
} else if (HorarioEscolar == "N") {
    console.log("Boa noite!");
} else {
    console.log("Valor inválido!");
}


//QUESTÃO 2
var aumento = 10 //%
var salario = 1000.00
console.log(salario*(1+aumento/100))



//Input:      QUESTÃO 3:
var Sal =
if (Sal <= 280.00) {
    T = .2
    console.log("Salário antes do reajuste:", Sal)
    Aumento = Sal*T
    Sal = Sal*(1+T)
} else if (Sal < 700.00) {
    T = .15
    console.log("Salário antes do reajuste:", Sal)
    Aumento = Sal*T
    Sal = Sal*(1+T)
} else if (Sal < 1500.00) {
    T = .10
    console.log("Salário antes do reajuste:", Sal)
    Aumento = Sal*T
    Sal = Sal*(1+T)
} else if (Sal >= 1500.00) {
    T = .05
    console.log("Salário antes do reajuste:", Sal)
    Aumento = Sal*T
    Sal = Sal*(1+T)
}
console.log("Taxa de aumento:", T)  
    console.log("Valor incrementado: ", Aumento)
    console.log("Salário após o aumento:", Sal)


// Input aqui:      QUESTÃO 4:
var Numero1a7 = 1
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
} console.log(X)
 

//INput:         QUESTÃO 5:
var n1 = 8.5;
var n2 = 9.5;
var MD = (n1+n2)/2;
if (MD <= 10.0 && MD >= 9.0) {
    Conceito = "A";
} else if (MD < 9.0 && MD >= 7.5) {
    Conceito = "B";
} else if (MD < 7.5 && MD >= 6.0) {
    Conceito = "C";
} else if (MD < 6.0 && MD >= 4.0) {
    Conceito = "D";
} else if (MD < 4.0 && MD >= 0) {
    Conceito = "E";
}; 
if (Conceito == "A" || Conceito == "B" || Conceito == "C") {
    console.log("APROVADO");
    alert("APROVADO");
} else if (Conceito == "D" || Conceito == "E") {
    console.log("REPROVADO");
    alert("REPROVADO");
};


//           QUESTÃO 6:
//A e B)
var SalPorHora = 9.0;
var HorasTrabalhadas = 310.00;
var SalBruto = SalPorHora*HorasTrabalhadas;
var INSS = .1;
var FGTS = .11;
if (SalBruto <= 900.00) {
    IR = 0
    IR2 = "0%"
    Descontos = IR+INSS-FGTS
} else if (SalBruto <= 1500.00) {
    IR = .05
    IR2 = "5%"
    Descontos = IR+INSS-FGTS
} else if (SalBruto <= 2500.00) {
    IR = .1
    IR2 = "10%"
    Descontos = IR+INSS-FGTS
} else if (SalBruto > 2500.00) {
    IR = .2
    IR2 = "20%"
    Descontos = IR+INSS-FGTS
};
console.log("Salário Bruto: R$", SalBruto);
console.log("(-",IR2,")", "IR: R$", IR*SalBruto);
console.log("(- 10% )","INSS: R$", INSS*SalBruto);
console.log("(+ 11% )","FGTS: R$", FGTS*SalBruto);
console.log("Desconto total: R$", Descontos*SalBruto);
console.log("SalárioLiquido: R$", SalBruto-(SalBruto*Descontos));

//C)
for(let i = 1; i<=20; i++) {
        console.log(i)
}


// QUESTÃO 8:
var T = 8;
let Res = 0;
for (let i = 0; i<=10; i++) {
    Res = T*i;
    console.log(T,"*",i,"=", Res);
};


// QUESTÃO 7: 
for(let i = 1; i<=50; i++) {
    if(i%2!=0) {
        console.log(i);
    }
};

// QUESTÃO 9: 
var Numero = 4;
if (Numero%2>0) {
    console.log("Número Impar");
} else {
    console.log("Número par")
}

/* QUESTÃO 10 */
let N = 5
for(let i = N; i=1; i--) {
    console.log(i)
}
