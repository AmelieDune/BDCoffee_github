"use strict";

// VARIABLES
var reponseCreation = document.getElementById("id_crea");
var reponseConnexion = document.getElementById("id_connec");
var regexNbr = /\d/;
var regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

// FONCTIONS

// CREATION D'UN COMPTE
function verifCiv(event) {
    var civM = document.getElementById("idM").checked;
    var civMme = document.getElementById("idMme").checked;

    if (!civM && !civMme) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention!</strong> Veuillez sélectionner une civilité (M. ou Mme).</div>";
        event.preventDefault();
    }
}

function verifNom(event) {
    var nom = document.getElementById("idNom").value;
    if (regexNbr.test(nom)) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention!</strong>Votre nom ne doit pas contenir de chiffre.</div>";
        event.preventDefault();
    }
}

function verifPrenom(event) {
    var prenom = document.getElementById("idPrenom").value;
    if (regexNbr.test(prenom)) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention! </strong>Votre prenom ne doit pas contenir de chiffre.</div>";
        event.preventDefault();
    }
}

function verifAnniv(event) {
    var anniv = document.getElementById("idAnniv").value;
    var dateAnniv = new Date(anniv);
    var anneeAnniv = dateAnniv.getFullYear();
    var currentYear = new Date().getFullYear();

    if (anneeAnniv < 1900 || anneeAnniv >= currentYear) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention !</strong> L'année de naissance doit être entre 1900 et " + (currentYear - 1) + ".</div>";
        event.preventDefault();
    }
}

function verifMail1(event) {
    var mail = document.getElementById("idMail").value;
    if (!regexMail.test(mail)) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention ! </strong>Votre adresse mail doit contenir un '@' suivi d'un '.' </div>";
        event.preventDefault();
    }
}

function verifMdp1(event) {
    var mdp1 = document.getElementById("idMdp1").value;
    var mdp2 = document.getElementById("idMdp2").value;

    if (mdp1 !== mdp2) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention ! </strong>Vos mots de passe sont différents.</div>";
        event.preventDefault();
    } else if (!regexMdp.test(mdp1)) {
        reponseCreation.innerHTML = "<div class='alert alert-danger'><strong>Attention ! </strong>Votre mot de passe n'est pas assez fort.</div>";
        event.preventDefault();
    }
}

// CONNEXION
function verifMail2(event) {
    var mail = document.getElementById("idMailCo").value;
    if (!regexMail.test(mail)) {
        reponseConnexion.innerHTML = "<div class='alert alert-danger'><strong>Attention ! </strong>Votre adresse mail doit contenir un '@' suivi d'un '.' </div>";
        event.preventDefault();
    }
}

function verifMdp2(event) {
    var mdp = document.getElementById("idMdpCo").value;
    if (!regexMdp.test(mdp)) {
        reponseConnexion.innerHTML = "<div class='alert alert-danger'><strong>Attention ! </strong>Votre mot de passe est erroné.</div>";
        event.preventDefault();
    }
}

// PROGRAMME
window.addEventListener('load', (event) => {
    var btnEnr = document.getElementById("btnEnr");
    btnEnr.addEventListener('click', (event) => {
        verifCiv(event);
        verifNom(event);
        verifPrenom(event);
        verifAnniv(event);
        verifMail1(event);
        verifMdp1(event);
    }, false);
// retour sur cette page rechargée avec message "votre compte à bien été créé"

    var btnIdent = document.getElementById("btnIdent");
    btnIdent.addEventListener('click', (event) => {
        verifMail2(event);
        verifMdp2(event);
    }, false);
});
// retour sur page d'accueil avec le compte activé 