var nom = window.prompt("Saisissez votre nom");
var prenom = window.prompt("Saisissez votre prénom");
var sexe = "Femme"

if (window.confirm("Etes vous un homme?") == true) {
    sexe = "Homme";
}
if (sexe == "Homme") {
    window.alert("Bonjour Monsieur " + prenom + " " + nom + "\nBienvenue sur notre site web !")
} else {
    window.alert("Bonjour Madame " + prenom + " " + nom + "\nBienvenue sur notre site web !")
}