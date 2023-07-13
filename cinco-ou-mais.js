precos = [100, 500, 100, 200, 50];

function solucao(precos) {
    //seu codigo aqui
    let soma = 0;

    if (precos.length >= 5) {

        let menor = Infinity;
        let indexMenor = 0;

        for (let i = 0; i < precos.length; i++) {
            if (precos[i] < menor) {
                menor = precos[i];
                indexMenor = i;
            }

        }

        precos[indexMenor] = 0;

    }

    for (item of precos) {
        soma += item;
    }

    console.log(soma);

}

solucao(precos);