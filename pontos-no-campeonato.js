function solucao(resultados) {
    //seu codigo aqui

    let pontuacao = 0;

    for (partida of resultados) {
        if (partida == "V") {
            pontuacao += 3;
        } else if (partida == "E") {
            pontuacao++;
        }
    }
    console.log(pontuacao);
}