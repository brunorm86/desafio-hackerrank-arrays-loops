function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    let temPalavra = false;
    for (palavra of palavras) {
        if (palavra[0] + palavra[1] == primeiraLetra + segundaLetra) {
            console.log(palavra);
            temPalavra = true;
        }
    }

    if (!temPalavra) {
        console.log("NENHUMA");
    }
}