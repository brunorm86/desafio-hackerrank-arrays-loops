//de um array, exclua a menor e a maior e faça a média aritimética das demais

function solucao(notas) {
    //seu codigo aqui

    let maior = notas[0];
    let indexMaior = 0;

    let menor = notas[0];
    let indexMenor = 0;

    let soma = 0;
    let mediaAritmetica = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maior) {
            maior = notas[i];
            indexMaior = i;
        }
        if (notas[i] < menor) {
            menor = notas[i];
            indexMenor = i;
        }
    }

    notas[indexMaior] = 0;
    notas[indexMenor] = 0;

    for (nota of notas) {
        soma += nota;
    }

    mediaAritmetica = soma / (notas.length - 2);

    console.log(mediaAritmetica);

}