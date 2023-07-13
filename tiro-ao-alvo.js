

function solucao(disparos) {
    //seu codigo aqui

    let disparosCerteiros = [];

    for (disparo of disparos) {
        if (disparo > 70) {
            disparosCerteiros.push(disparo);
        }
    }

    if (disparosCerteiros.length >= 3) {
        console.log(disparosCerteiros.length);
    } else {
        console.log("ELIMINADO");
    }

}