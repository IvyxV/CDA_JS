/*function _produit(x, y) {
    var res = x * y;
    return res;
}

function _afficheImg(image) {
    document.querySelector("#test").innerHTML = `<img src="${image}">`
}
var produit = _produit(3, 5);
document.querySelector("#test1").innerHTML = `Le cube de 3 est 27 <br> Le produit de 3 x 5 est égal à ${produit}`

/*_______________________________________________________________________________________*/

/*function tableMult(N) {
    let i = 0;
    while (i++ < 10) {
        console.log(i + " x " + N + " = " + (i * N));
    }
}


/*_______________________________________________________________________________________*/

// function countLetter(phrase, lettre) {
//     let i = 0;
//     let j = 0;

//     while (i++ < phrase.length) {
//         if (phrase[i] == lettre) {
//             j++;
//         }
//     }
//     console.log("Il y a " + j + " fois la lettre " + lettre + " dans la phrase.");
// }

// /*_______________________________________________________________________________________*/

// function multiples() {
//     var i = 0;
//     var x = prompt("Pour le nombre que vous voulez multiplier :");
//     var n = prompt("Nombre de fois que vous voulez le multiplier :");

//     while (++i <= n) {
//         console.log(i + "x" + x + "=" + (i * x));
//     }
// }

// function sommeEtMoyenne() {
//     var N = 0;
//     var i = 0;
//     var tot = 0;

//     while (++N != 0) {
//         N = prompt("Saisissez le nombre n°" + (i++ + 1) + "\nSaisissez 0 pour arrêter");
//         tot += N--;
//     }
//     console.log("Somme : " + tot + "\nMoyenne : " + (tot / (i - 1)));
// }

// function nbVoyelles() {
//     console.log(prompt("Entrez un mot en minuscule").match(/[aeiouy]/gi).length);
// }

// function rechercheLettre(lettre, phrase) {
//     let i = 0;
//     let j = 0;

//     while (i++ < phrase.length) {
//         if (phrase[i] == lettre) {
//             j++;
//         }
//     }
//     console.log(j);
// }

// function menu() {
//     console.log("1 - Multiples");
//     console.log("2 - Sommes et moyenne");
//     console.log("3 - Recherche nu nombre de voyelles");
//     console.log("4 - Recherche du nombre des caracteres suivants");
//     let choix = prompt("Entrez votre option :");
//     switch (choix) {
//         case choix = 1:
//             multiples();
//             break;
//         case choix = 2:
//             sommeEtMoyenne();
//             break;
//         case choix = 3:
//             nbVoyelles();
//             break;
//         case choix = 4:
//             rechercheLettre();
//             break;
//         default:
//             break;
//     }
// }
/*_______________________________________________________________________________________*/

/*tableMult(7);
_afficheImg("papillon.jpg");
_produit(3, 3);
*/
//countLetter("Salut la famille !", "a");
/*_______________________________________________________________________________________*/

//rechercheLettre("a", "Salut la famille !");

// function strtok(str1, str2, n) {
//     let i = 0;
//     let j = 0;
//     var result = "";

//     while (j < n - 1) {
//         if (str1[i] == str2) {
//             j++;
//         }
//         i++;
//     }
//     while (str1[i] != str2) {
//         result += str1[i];
//         i++;
//     }
//     return result;
// }

// var str1 = "robert;dupont;amiens;80000";
// var str2 = ";";
// var n = 3;
// console.log(strtok(str1, str2, n));
/*_______________________________________________________________________________________*/

var PU = parseInt(prompt("Saisissez le prix d'un produit"));
var QTECOM = parseInt(prompt("Saisissez la quantité"));
var TOT = PU * QTECOM;
var PORT = 0; /* Valeur par défaut */
var REM; /* Valeur par défaut */
var PAP;

/* Calcul de REM */
if (TOT >= 100 && TOT <= 200) {
    REM = (TOT * 0.05);
} else if (TOT > 200) {
    REM = (TOT * 0.1);
} else {
    REM = 0;
}

TOT = TOT - REM;
console.log("REM = " + REM);

if (TOT <= 500) {
    PORT = TOT * 0.02;
    if (PORT < 6) {
        PORT = 6;
    }
}

// Calcul Prix à payer
PAP = TOT + PORT;
alert("Le prix à payer est de : " + PAP.toFixed(2)); // .toFixed bloque la décimale à 2 chiffre après la virgule.
console.log("TOT = " + TOT);
console.log("REM = " + REM);