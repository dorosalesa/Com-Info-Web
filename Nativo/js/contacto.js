"use strict";

function contactoSend() {
  var nombre = document.getElementById("nombreform").value;
  var email = document.getElementById("emailform").value;
  var tema = document.getElementsByName("temaform").value;
  var mensaje = document.getElementById("mensajeform").value;

  var informacion =
    "Nombre: " +
    nombre +
    "<br/>Correo electrónico: " +
    email +
    "<br/>Tema: " +
    tema +
    "<br/>Mensaje: " +
    mensaje;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "drosalesa@ucenfotec.ac.cr",
    Password: "A92BFB1424DF5A3B7DA2196977E309F1BE7E",
    To: "drosalesa@ucenfotec.ac.cr",
    From: "drosalesa@ucenfotec.ac.cr",
    Subject: "Solicitud de contacto",
    Body: informacion,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        text: "¡Su información se ha enviado con éxito, gracias por contactarnos!",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "Por favor, verifique la información ingresada",
        icon: "error",
      });
    }
  });
}
