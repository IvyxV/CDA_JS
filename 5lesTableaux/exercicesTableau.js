//EX01
function printTab() {
    let i = 0;
    sizeTab = prompt("Taille du tableau?");
    var tab = [sizeTab];
    while (i++ < sizeTab) {
        tab[i] = prompt("Saisir la valeur " + (i + 1) + " du tableau.")
    }
    i = 0;
    while (i++ < sizeTab) {
        console.log(tab[i]);
    }
}

/*_______________________________________________________________________________________*/
//EX02

function GetInteger() {
    return (parseInt(prompt("Saisir la valeur du tableau.")));
}

function InitTab() {
    return [parseInt(prompt("Nombre de postes?"))];
}

function SaisieTab(tab) {
    let i = 0;
    while (i++ < sizeTab) {
        tab[i] = GetInteger();
    }
    return tab;
}

function AfficheTab(tableau) {
    let i = 0;
    while (i++ < sizeTab) {
        console.log("Case " + i + " : " + tableau[i]);
    }
}

function RechercheTab(tableau) {
    console.log("Valeur du tableau à la case saisie " + tableau[prompt("Saisir le rang du contenu d’un poste.")]);
}

function InfoTab(tableau) {
    let i = 0;
    var tot = 0;
    var max = 0;
    while (i++ < tableau.length - 1) {
        tot += tableau[i];
        if (max < tableau[i]) {
            max = tableau[i];
        }
    }
    console.log("Moyenne : " + tot / i);
    console.log("Max = " + max);
}

/*_______________________________________________________________________________________*/
//EX03

function RecherchePrenom(tab) {
    let i = 0;
    var prenom = prompt("Prénom à retrouver?");
    while (i++ < tab.length) {
        if (prenom == tab[i]) {
            while (i++ < tab
                .length) {
                tab[i] = tab[i + 1];
            }
        }
    }
    return tab;
}
/*_______________________________________________________________________________________*/
//EX04

function triABulles(tab) {
    let i = 0;
    let j = 0;
    let temp;
    while (i < tab.length) {
        while (j < tab.length) {
            if (tab[j] > tab[j + 1]) {
                temp = tab[j];
                tab[j] = tab[j + 1]
                tab[j + 1] = temp;
            }
            j++;
        }
        i++;
        j = 0;
    }
    return tab;
}

/*_____________________APPEL DE FONCTION__________________________________________________________________*/
/*printTab();
var tableau = SaisieTab(InitTab());
RechercheTab(tableau);
AfficheTab(tableau);
InfoTab(tableau);

console.log(RecherchePrenom(["Laëtitia", "Vincent", "Cédric", "Solène", "Clémence", "Sophie"]));
console.log(triABulles([1, 5, 4,9, 2, 6, 3, 1, 0]));

*/