function listePrenom() {
    let i = 0;
    let j = 0;
    let str = Array();

    while (str[i++] != "") {
        str[i] = prompt("Saisissez le prenom N° " + i);
    }
    while (j++ != i - 2) {
        console.log("Prénom : " + str[j] + " N° " + j + ".\n");
    }
}
/*_______________________________________________________________________________________*/
function entierInferieurN() {
    let N = prompt("Entrez une valeur N :");
    while (--N >= 0)
        console.log(N);
}
/*_______________________________________________________________________________________*/
function sommeEntierInferieurN() {
    let N = prompt("Entrez N");
    while (N-- > 0) {
        console.log(N + "\n");
    }
}
/*_______________________________________________________________________________________*/
function sommeIntervalle() {
    let n1 = parseInt(prompt("Nombre 1 :"));
    let n2 = parseInt(prompt("Nombre 2 :"));
    let res = 0;

    if (n1 < n2) {
        while (n1 <= n2) {
            res = res + n1;
            n1++;
        }
    } else {
        while (n2 < n1) {
            res = res + n2;
            n2++;
        }
    }
    console.log("La somme est de : " + res);
}
/*_______________________________________________________________________________________*/
function moyenne() {
    let N = 0;
    let i = 0;
    let tot = 0;

    while (++N != 0) {
        N = prompt("Saisissez le nombre n°" + (i++ + 1) + "\nSaisissez 0 pour arrêter");
        tot += N--;
    }
    console.log("Moyenne : " + (tot / (i - 1)));
}
/*_______________________________________________________________________________________*/
function minMax() {
    let min = -1;
    let max = 0;
    let i = 1;
    let tot = 0;
    let N = parseInt(prompt("Entrez la valeur"));
    while (N != 0) {
        tot += N;
        i++;
        N = parseInt(prompt("Entrez la valeur"));
        if (max < N)
            max = N;
        if (min > N && N != 0)
            min = N;
    }
    console.log("La moyenne est de " + tot / i + "\nMax : " + max + "\nMin : " + min);
}
/*_______________________________________________________________________________________*/
function multiples() {
    let i = 0;
    let n = prompt("Nombre de multiples :");
    let x = prompt("Pour le nombre entier :");

    while (++i <= n)
        console.log(i + "x" + x + "=" + (i * x));
}
/*_______________________________________________________________________________________*/
function nbVoyelles() {
    console.log(prompt("Entrez un mot en minuscule").match(/[aeiouy]/gi).length);
}
/*_______________________________________________________________________________________*/
function nbPersonne() {
    let age = 0;
    let jeune = 0;
    let moyen = 0;
    let vieux = 0;

    while (age < 100) {
        age = prompt("Age?");
        if (age < 20)
            jeune++;
        else if (age > 40)
            vieux++;
        else
            moyen++;
    }
    console.log("Nombre de jeune : " + jeune + "Nombre de moyen : " + moyen + "Nombre de vieux : " + vieux);
}
/*_______________________________________________________________________________________*/
function prime() {
    let nb = parseInt(prompt("entrez un nombre"));
    let i = 2;
    if (nb < 2)
        return ("pas premier");
    else {
        while (i < nb) {
            if (nb % i == 0)
                return ("pas premier");
            i++;
        }
        return ("premier");
    }
}
console.log(prime());
/*_______________________________________________________________________________________*/
function nbMagic() {
    let magic = parseInt(Math.random() * 100); //Nombre aléatoire
    let N = -1;
    if (confirm("Voulez vous jouer?")) {
        while (N != magic) {
            N = prompt("Donne une valeur entre 1 et 100");
            if (N < magic)
                console.log("Trop petit !");
            else
                console.log("Trop grand !");
        }
        console.log("bravo !");
    }
}