"use strict";
//VARIABLES
    var album = document.getElementById("id_titre").value;
    var auteur = document.getElementById("id_auteur").value;
    var serie = document.getElementById("id_serie").value;
    var btnVal = document.getElementById("btn_valider");
    var divRep = document.getElementById("id_rep");

//FONCTIONS
function rechAlbum(query) {
    const results = [];
    for (const [id, album] of albums) {
        if (album.titre.toLowerCase().includes(query.toLowerCase()) ||
            album.numero.toLowerCase().includes(query.toLowerCase()) ||
            album.idSerie.toLowerCase().includes(query.toLowerCase()) ||
            album.idAuteur.toLowerCase().includes(query.toLowerCase()) ||
            album.prix.toLowerCase().includes(query.toLowerCase())) {
            results.push({ id, ...album });
        }
    }
    return results;
}

// Fonction pour rechercher un auteur
function rechAuteur(query) {
    const results = [];
    for (const [id, auteur] of auteurs) {
        if (auteur.nom.toLowerCase().includes(query.toLowerCase())) {
            results.push({ id, ...auteur });
        }
    }
    return results;
}

// Fonction pour rechercher une série
function rechSerie(query) {
    const results = [];
    for (const [id, serie] of series) {
        if (serie.nom.toLowerCase().includes(query.toLowerCase())) {
            results.push({ id, ...serie });
        }
    }
    return results;
}

// PROGRAMME 
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM: ok");

    var btnVal = document.getElementById("btn_valider");
    btnVal.addEventListener('click', function (event) {
        if (album !== "") {
            rechAlbum();
            divRep.innerHTML = results;
        } else if (auteur !== "") {
            rechAuteur();
            divRep.innerHTML = results;
        } else if (serie !== "") {
            rechSerie();
            divRep.innerHTML = results;
        }
    });
});

