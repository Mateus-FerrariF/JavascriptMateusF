/*
//Exercicio 1:
for(let i=1;i<=10; i++){
    console.log(i);
};
*/

/*
//Exercicio 2:
var N=0;
for(let i=1;i<=100;i++){
    N = N+i;
};
console.log(N)
*/

/*
//Exercicio 3:
var N=7;
var tb = 0;
for(let i=0;i<=10;i++){
    tb = N*i;
    console.log(N,"*",i,"=",tb);
};
*/

/*
//Exercicio 4:
var N = 0;
for(let i=1;i<=50;i++){
    if(i%2==0) {
        console.log(i);
        N = N+1;
    };
    
};
console.log("\nPares:", N);
*/

/*
//Exercicio 5:
var N = 5;
for(let i=1;i<5;i++){
    N = N*i;
};
console.log(N);
*/

/*
//Exercicio 6:
var HQ = ['Mami Tomoe', 'Kyoko Sakura', 'Madoka Kaname', 'Sayaka Miki', 'Homura Akemi<3'];
console.log(HQ);
*/

/*
//Exercicio 7:
let Ar = [5,7,9,11,13];
let N = 0;
for(let i = 0; i<Ar.length;i++){
    N = N+Ar[i];
};
console.log(N);
*/

/*
//Exercicio 8:
let Ar = [0, 0, 0, 1, 0, 0];
let N = 0;
let P = 0;
for(let i = 0; i<Ar.length;i++){
    if(Ar[i]>N){
        P = Ar[i];
    };
    N=Ar[i];
};
console.log(P);
*/

/*
//Exercicio 9:
let Ar = [1, 10, 100, 1000, 1001];
let N = 0;
for(let i = 0; i<Ar.length;i++){
    if (Ar[i]>10) {
        N = N+1;
    };
};
console.log(N);
*/

/*
//Exercicio 10:
let Ar = [5, 7, 9, 11, 13, 15];
let mult = Ar.map(function(num){
    return num*2;
});
console.log(mult);
*/