function pairImpaire() {
    var nb = window.prompt("Saisissez votre nombre :");
    if (nb % 2 == 0) {
        window.alert("Le nombre est pair");
    } else {
        window.alert("Le nombre est impair");
    }
}
/*_______________________________________________________________________________________*/
function mineurMajeur() {
    var adn = window.prompt("Saisissez votre année de naissance :");
    var ladate = new Date();
    var age = ladate.getFullYear() - adn;
    if (age >= 18) {
        window.alert("Vous avez " + age + " et vous êtes majeur");
    } else {
        window.alert("Vous avez " + age + " et vous êtes mineur");
    }
}   
/*_______________________________________________________________________________________*/
function miniCalculatrice() {
    var nb1 = window.prompt("Saisissez la première valeur");
    var sym = window.prompt("Saisissez le symbole");
    var nb2 = window.prompt("Saisissez la deuxième valeur");
    var result;
    
    if (sym == '+') {
        result = nb1 + nb2;
    } else if (sym == '-') {
        result = nb1 - nb2;
    } else if (sym == '*') {
        result = nb1 * nb2;
    } else if (sym == '/') {
        if (nb2 == 0) {
            result = "division par 0 impossible";
        } else {
            result = nb1 / nb2;
        }
    }
    window.alert(result);
}
/*_______________________________________________________________________________________*/
function commande() {
    var PU = window.prompt("Saisissez  prix unitaire");
    var QTECOM = window.prompt("Saisissez la quantité commandée");
    var PAP;
    var TOT = 0;
    var PORT = 0;
    var REM = 0;
    
    TOT = PU * QTECOM;
    if (TOT >= 100 && TOT <= 200) {
        REM = TOT / 100 * 5;
    } else if (TOT > 200) {
        REM = TOT / 100 * 10;
    }
    if (TOT < 500) {
        PORT = TOT / 100 * 2
        if (PORT < 6) {
            PORT = 6;
        }
    }
    PAP = TOT - REM + PORT;
    window.alert("Le prix total à payer est de " + PAP + "€.\nRemise : " + REM + "\nFrais de port : " + PORT);
}
/*_______________________________________________________________________________________*/
function partRepas() {
    var part = window.prompt("Saisissez le montant de la participation");
    var salaire = window.prompt("Saisissez le montant du salaire");
    var nbEnf = window.prompt("Combien avez vous d'enfant?");
    var remise = 0;
    
    if (window.confirm("Etes vous célibataire?") == true) {
        remise = part / 100 * 80;
    } else {
        remise = part / 100 * 75;
    }
    if (nbEnf > 0) {
        remise = remise + part / (100 * (10 * nbEnf));
    }
    if (salaire < 1200) {
        remise = remise + part / (100 * 10);
    }
    if (remise > part / 2) {
        remise = part / 2;
    }
    part = part - remise;
    window.alert("Le salarié paiera : " + part + "€ de participation.");
}