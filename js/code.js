var root = document.querySelector(":root");

var userError;
var passwordError;
var numberError;

var lettreValidation = /^[a-zA-z]+$/;
//Attend que tout mon site web soit chargé avant de démarré ma fonction
$(document).ready(function () {
    
    ValiderUtilisateur();

    $("#utilisateur").on("keyup", function () {  
    ValiderUtilisateur();
    });
    
});

//Met à jour les vérifications de l'utilisateur
function ValiderUtilisateur() {
     
        var userValue = document.getElementById("utilisateur").value;
   
        if (userValue.length < 8) {
          $("#userConstraint")
            .html("Le nom d'utilisateur ne peut pas avoir plus de 8 caractères")
            .css("color", "red");
          userError = true;
        } else {
          $("#userConstraint") 
            .html("Le nom d'utilisateur à un maximum de 8 caractères")
            .css("color", "green");
          userError = false;
        }

        if (!userValue.match(lettreValidation)) {
            $("#userConstraint2")
              .html("Le mot de passe ne peut pas contenir des lettres")
              .css("color", "red");
            userError = true;
          } else {
            $("#userConstraint2") 
              .html("Le mot de passe contient uniquement des lettres")
              .css("color", "green");
            userError = false;
          }
}

//Met à jour les vérifications de l'utilisateur
function ValiderUtilisateur() {
     
    var userValue = document.getElementById("utilisateur").value;

    if (userValue.length < 8) {
      $("#userConstraint")
        .html("Le nom d'utilisateur ne peut pas avoir plus de 8 caractères")
        .css("color", "red");
      userError = true;
    } else {
      $("#userConstraint") 
        .html("Le nom d'utilisateur à un maximum de 8 caractères")
        .css("color", "green");
      userError = false;
    }

    if (!userValue.match(lettreValidation)) {
        $("#userConstraint2")
          .html("Le mot de passe ne peut pas contenir des lettres")
          .css("color", "red");
        userError = true;
      } else {
        $("#userConstraint2") 
          .html("Le mot de passe contient uniquement des lettres")
          .css("color", "green");
        userError = false;
      }
}

//Met à jour les vérifications de du mot de passe
function ValiderMotDePasse() {
     
    var passwordValue = document.getElementById("password").value;

    if (passwordValue.length < 8) {
      $("#userConstraint")
        .html("Le nom d'utilisateur ne peut pas avoir plus de 8 caractères")
        .css("color", "red");
      userError = true;
    } else {
      $("#userConstraint") 
        .html("Le nom d'utilisateur à un maximum de 8 caractères")
        .css("color", "green");
      userError = false;
    }

    if (!userValue.match(lettreValidation)) {
        $("#userConstraint2")
          .html("Le mot de passe ne peut pas contenir des lettres")
          .css("color", "red");
        userError = true;
      } else {
        $("#userConstraint2") 
          .html("Le mot de passe contient uniquement des lettres")
          .css("color", "green");
        userError = false;
      }

}

  function ValidationMessage() {

    if(userError || passwordError || numberError) {
        if(userError) {
            alert("Erreur de validation dans l'utilisateur");
        } else if (passwordError) {
            alert("Erreur de validation dans le mot de passe");
        } else if (numberError) {
          alert("Erreur de validation dans le numéro");
      }
    } else {
        alert("Aucune erreur de validation.");
    }
      
      
  }
  