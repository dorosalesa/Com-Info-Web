"use strict";

function emailSend() {
  var correo = document.getElementById("suscripcioncorreo").value;

  var mensaje = correo;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "drosalesa@ucenfotec.ac.cr",
    Password: "A92BFB1424DF5A3B7DA2196977E309F1BE7E",
    To: "drosalesa@ucenfotec.ac.cr",
    From: "drosalesa@ucenfotec.ac.cr",
    Subject: "Suscripción a lista de correos.",
    Body: mensaje,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        text: "Se ha agregado su correo electrónico a nuestra lista de distribución.",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "Verifique el correo electrónico ingresado.",
        icon: "error",
      });
    }
  });
}

AOS.init();
