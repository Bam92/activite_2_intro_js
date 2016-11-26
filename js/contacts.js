/* 
Activité : gestion des contacts par Abel Lifaefi Mbula alias Bam92
*/

// TODO : complétez le programme
console.log ("Bienvenur dans le gestionnaire des contacts!");
console.log ("1. Lister les contacts");
    console.log ("2. Ajouter un contact");
    console.log ("0. Quitter");

var userChoice; //Le choix de l'utilisateur sera stocke ici

//Boucle pour demander le choix de l'utilisateur
while (userChoice !== 0) {
    userChoice = Number (prompt("Que voulez vous ?"));
    console.log ("1. Lister les contacts");
    console.log ("2. Ajouter un contact");
    console.log ("0. Quitter");
    
    if (userChoice > 2) {
        console.log("Desolé, je ne sais pas déviner votre choix!\n"+
                    "Veillez choisir une valeur entre 0 et 2");
    }

    var Contact = {
    // Initialisation
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    // Renvoie la description du contact
    decrire: function () {
        var description = "Nom: " +this.nom + ", prenom: " + this.prenom + ".";
        return description;
    }
};

var contact1 = Object.create(Contact);
contact1.init("Carole", "Levisse");

var contact2 = Object.create(Contact);
contact2.init("Melodie", "Nelsonne");

//Creation de tableau objet
var contacts = [];
contacts.push (contact1);
contacts.push (contact2);


    
   
    //Si le choix de l'utilisateur est 1
    if (userChoice === 1) {
        console.log ("Voici la liste de tous les contacts");
        contacts.forEach(function (contact) {
            console.log (contact.decrire());
        });
    //Si le choix est 2    
    } if (userChoice === 2) {//Ajouter un nouveau contact
        var prenom = prompt ("Entrez le prenom:");
        var nom = prompt ("Entrez le nom:");
        
        var newContact = Object.create(Contact);
        newContact.init (prenom, nom);
        
        contacts.push (newContact);
        console.log ("Le nouveau contact a ete ajoute avec succes!");
        
        console.log ("Voici la liste de tous les contacts");
        contacts.forEach(function (contact) {
            console.log (contact.decrire());
        });
    }
    
    if (userChoice === 0) {
        console.log ("Bye");
    }
}

