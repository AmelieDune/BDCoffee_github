"use strict";

// VARIABLES
var reclam = document.getElementById("id_reclam");
var reponse = document.getElementById("id_rep");
var regexNbr = /\d/;
var regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// FONCTIONS
function verifNom(event) {
    var nom = document.getElementById("idNom").value;
    if (regexNbr.test(nom)) {
        reponse.innerHTML = "<div class='alert alert-danger mx-auto'><strong>Attention!</strong>Votre nom ne doit pas contenir de chiffre.</div>";
        event.preventDefault();
        return false;
    }
    return true;
}

function verifPrenom(event) {
    var prenom = document.getElementById("idPrenom").value;
    if (regexNbr.test(prenom)) {
        reponse.innerHTML = "<div class='alert alert-danger mx-auto'><strong>Attention! </strong>Votre prenom ne doit pas contenir de chiffre.</div>";
        event.preventDefault();
        return false;
    }
    return true;
}

function verifMail(event) {
    var mail = document.getElementById("idEmail").value;
    if (!regexMail.test(mail)) {
        reponse.innerHTML = "<div class='alert alert-danger mx-auto'><strong>Attention ! </strong>Votre adresse mail doit être conforme à une adresse mail conventionnelle, ex : 'monmail@gmail.com' .</div>";
        event.preventDefault();
        return false;
    }
    return true;
}

// AJout .XX.
function verifTel(event) {
    var tel = document.getElementById("idTel").value;
    if (isNaN(tel) || tel.length !== 10) {
        reponse.innerHTML = "<div class='alert alert-danger mx-auto'><strong>Attention ! </strong>Votre numéro de téléphone doit contenir 10 chiffres. </div>";
        event.preventDefault();
        return false;
    }
    return true;
}

function sauvegarde(event) {
    var nom = document.getElementById("idNom").value;
    var prenom = document.getElementById("idPrenom").value;
    var mail = document.getElementById("idEmail").value;
    var tel = document.getElementById("idTel").value;
    var reclamation = document.getElementById("id_area").value;
    var reclamations = [];

    var demande = {
        nom: nom,
        prenom: prenom,
        email: mail,
        tel: tel,
        reclamation: reclamation
    };
    
    reclamations.push(demande);
    localStorage.setItem('reclamations', JSON.stringify(reclamations));
    document.getElementById("formulaireSAV").reset();
    document.getElementById("id_rep").innerHTML = "";
    reclam.innerHTML = "<div class='alert alert-warning mx-auto'>Votre réclamation a été envoyée. <br> Elle sera traitée sous peu par notre service clientèle.</div>";
}

// PROGRAMMES
window.addEventListener('load', (event) => {
    var btnSend = document.getElementById("btnSend");
    btnSend.addEventListener('click', function (event) {
        if (verifNom(event) && verifPrenom(event) && verifMail(event) && verifTel(event)) {
            sauvegarde(event);
        }
    });
});

