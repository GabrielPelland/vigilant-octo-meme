var root = document.querySelector(":root");

var userError;
var passwordError;
var numberError;

var lettreValidation = /^[a-zA-z]+$/;
var lettreNombreValidation = /^[a-zA-z0-9]+$/;
var numbers = /[0-9]/g;
//Attend que tout mon site web soit chargé avant de démarré ma fonction
$(document).ready(function () {
    
    ValiderUtilisateur();
    ValiderMotDePasse();
    ValiderNumero();

    $("#utilisateur, #password, #number").on("keyup", function () {  
    ValiderUtilisateur();
    ValiderMotDePasse();
    ValiderNumero();
    });
    
});

//Met à jour les vérifications du mot de passe
function ValiderNumero() {
     
  var numberValue = document.getElementById("number").value;

  if (!numberValue.match(numbers)) {
    $("#numeroConstraint")
      .html("Doit uniquement contenir des numéros")
      .css("color", "red");
      numberError = true;
  } else {
    $("#numeroConstraint") 
      .html("Contient uniquement des numéros")
      .css("color", "green");
      numberError = false;
  }
}

//Met à jour les vérifications de l'utilisateur
function ValiderUtilisateur() {
     
        var userValue = document.getElementById("utilisateur").value;
   
        if (userValue.length > 8) {
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

//Met à jour les vérifications du mot de passe
function ValiderMotDePasse() {
     
    var passwordValue = document.getElementById("password").value;

    if (!(passwordValue.length == 3)) {
      $("#passwordConstraint2")
        .html("Le mot de passe a 3 caratères de long")
        .css("color", "red");
      passwordError = true;
    } else {
      $("#passwordConstraint2") 
        .html("Le mot de passe doit avoir 3 caratères de long")
        .css("color", "green");
      passwordError = false;
    }

    if (!passwordValue.match(lettreNombreValidation)) {
        $("#passwordConstraint")
          .html("Le mot de passe ne contient pas uniquement des lettres et des chiffres")
          .css("color", "red");
          passwordError = true;
      } else {
        $("#passwordConstraint") 
          .html("Le mot de passe doit contenir seulement des nombres et des chiffres")
          .css("color", "green");
          passwordError = false;
      }
}


function ValidationMessage() {

  if(userError || passwordError || numberError) {
      if(userError) {
          alert("Erreur de validation dans l'utilisateur");
      }
      if (passwordError) {
          alert("Erreur de validation dans le mot de passe");
      } 
      if (numberError) {
        alert("Erreur de validation dans le numéro");
    }
  } else {
      alert("Aucune erreur de validation. Nous allons installer votre RAM");
  } 
    
}

  function UpdateTable() {

    var passwordValue = document.getElementById("password").value;
    var userValue = document.getElementById("utilisateur").value;
    var numberValue = document.getElementById("number").value;

    $("#userTable") 
      .html(userValue);

    $("#passwordTable") 
    .html(passwordValue);
    $("#numeroTable") 
    .html(numberValue);
      
  }
  