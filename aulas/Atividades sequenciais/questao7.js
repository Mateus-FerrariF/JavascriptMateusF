
function notasAluno(nota1, nota2, nota3) {
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3

    this.médiaNotas = function() {
        return (this.nota1 + this.nota2 + this.nota3)/3;
  };
}

/*User input aqui*/
var al = new notasAluno(10, 8, 6);

console.log(al.médiaNotas());