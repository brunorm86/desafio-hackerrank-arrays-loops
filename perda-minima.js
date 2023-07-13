let precos = [30, 10, 54, 76, 1, 4, 35];

function solucao(precos) {
    // seu codigo aqui
    let menorPrejuizo = Infinity;

    for (let i = 0; i < precos.length - 1; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            if (precos[i] > precos[j]) {
                let prejuizoRelativo = precos[i] - precos[j];
                if (prejuizoRelativo < menorPrejuizo) {
                    menorPrejuizo = prejuizoRelativo;
                }
            }
        }
    }
    if (menorPrejuizo == Infinity) {
        menorPrejuizo = 0;
    }
    console.log(menorPrejuizo);

}

solucao(precos);