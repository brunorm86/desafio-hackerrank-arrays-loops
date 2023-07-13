
const stringCorrompida = '*Canis %lupus )familiaris';

function solucao(stringCorrompida) {
    // seu codigo aqui
    let listaCaracteresRuins = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];
    let stringPurificada = '';

    for (char of stringCorrompida) {
        if (listaCaracteresRuins.includes(char)) {

        } else {
            stringPurificada += char;
        }
    }

    console.log(stringPurificada);
}











console.log(solucao(stringCorrompida));