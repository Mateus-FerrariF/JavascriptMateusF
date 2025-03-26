

var RandInt = Math.floor(Math.random()*100);
let X = 0;

var T = 2;
let Reso = 0;

// Tabuada
for (let i = 0; i<=10; i++) {

    Reso = T*i;
    console.log(T,"*",i,"=", Reso);

}


// Apenas numeros pares
for(let i = 1; i<=10; i++) {

    if(i%2==0) {
        console.log(i)
    }

}
