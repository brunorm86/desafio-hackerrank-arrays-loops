let sequencia = '<';

function solucao(sequencia) {
    let progressao = 0;
    for (item of sequencia) {
        if (item === '>') {
            progressao++;
        }
        else {
            progressao--
        };
    }
    progressao = progressao % 7;
    if (progressao < 0) {
        progressao += 7;
    }
    console.log(progressao);
}

solucao(sequencia);