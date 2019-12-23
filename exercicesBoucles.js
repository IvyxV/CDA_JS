/*var i = 0;
var j = 0;
var str = Array();

while (str[i++] != "") {
    str[i] = prompt("Saisissez le prenom N° " + i);
}
while (j++ != i - 2) {
    console.log("Prénom : " + str[j] + " N° " + j + ".\n");
}

/*_______________________________________________________________________________________*/

/*var N = prompt("Entrez une valeur :");
while (--N >= 0)
    console.log(N);

    /*_______________________________________________________________________________________*/

/*var N = prompt("Entrez N");

while (N-- > 0) {
    console.log(N + "\n");
}

/*_______________________________________________________________________________________*/

/*var n1 = parseInt(prompt("Nombre 1 :"));
var n2 = parseInt(prompt("Nombre 2 :"));
var res = 0;

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

/*_______________________________________________________________________________________*/

/*var N = 0;
var i = 0;
var tot = 0;

while (++N != 0) {
    N = prompt("Saisissez le nombre n°" + (i++ + 1) + "\nSaisissez 0 pour arrêter");
    tot += N--;
}
console.log("Moyenne : " + (tot / (i - 1)));

/*_______________________________________________________________________________________*/

/*var min = -1;
var max = 0;
var i = 1;
var tot = 0;
var N = parseInt(prompt("Entrez la valeur"));
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

/*_______________________________________________________________________________________*/

/*var i = 0;
var n = prompt("Nombre de multiples :");
var x = prompt("Pour le nombre entier :");

while (++i <= n)
    console.log(i + "x" + x + "=" + (i * x));
/*_______________________________________________________________________________________*/

//console.log(prompt("Entrez un mot en minuscule").match(/[aeiouy]/gi).length);

/*_______________________________________________________________________________________*/
/*var age = 0;
var jeune = 0;
var moyen = 0;
var vieux = 0;

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

/*_______________________________________________________________________________________*/

function prime() {
    var nb = parseInt(prompt("entrez un nombre"));
    let i = 2;
    if (nb < 2)
    return ("pas premier");
    while (i < nb) {
        if (nb % i == 0) {
            return ("pas premier");
        }
        i++;
    }
    return ("premier");
}
var i = prime();
console.log(i);
// var nb = parseInt(prompt("Entrez un nombre"));
// var premier = true;
// for (i = 0; i < nb; i++) {
//     for (j = 0; j < nb; j++) {
//         if (nb % j == 0) {
//             premier = false;
//         }
//         if (nb % j != 0) {
//             premier = true;
//         }
//     }
// }...var nb = parseInt(prompt("Entrez un nombre"));
// var premier = true;


// for (i = nb; i > 0; i--) {
//     for (j = 2; j < nb; j++) {
//         if (nb % j == 0) {
//             premier = false;
//           console.log("Le nombre " + nb+ " n'est pas premier !");
//         }
//     }
// }
//         if (premier == true) {
//             console.log("Le nombre " + nb+ " est premier !");
//         }

/*_______________________________________________________________________________________*/


// var magic = parseInt(Math.random() * 100); //Nombre aléatoire
// var N = -1;
// if (confirm("Voulez vous jouer?")) {
//     while (N != magic) {
//         N = prompt("Donne une valeur entre 1 et 100");
//         if (N < magic) {
//             console.log("Trop petit !");
//         } else {
//             console.log("Trop grand !");
//         }
//     }
//     console.log("bravo !");
// }