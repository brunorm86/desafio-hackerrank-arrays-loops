function solucao(palpite, palavra) {
    // seu codigo aqui
    let contador = 0;
    for (letra of palavra) {
        if (letra == palpite) {
            contador++;
        }
    }
    console.log(contador);
}