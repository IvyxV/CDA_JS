function nbMagic() {
    let magic = parseInt(Math.random() * 100);
    let n = 0;
    let replay = true;

    while (replay = true) {
        while (n != magic) // condition de sorti
        {
            n = parseInt(prompt("Saisissez un nombre: "));
            if (n > magic) {
                alert("trop grand ");
            } else if (n < magic) {
                alert("trop petit ");
            } else {
                alert("BRAVO !");
                if (confirm("voulez vous rejouez?")) {
                    nbMagic();
                } else {
                    replay = false;
                }
            }
        }
    }
}
nbMagic();
//Math.random genère un nombre aleatoire *100