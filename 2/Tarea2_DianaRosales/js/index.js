function directorio() {
  var provincia = document.getElementById("provincia");
  var provinciaselec = provincia.value;

  switch (provinciaselec) {
    case "alajuela":
      window.open(
        "https://actualidadeducativa.com/provincias/alajuela/",
        "_blank"
      );
      break;
    case "cartago":
      window.open(
        "https://actualidadeducativa.com/provincias/cartago/",
        "_blank"
      );
      break;
    case "guanacaste":
      window.open(
        "https://actualidadeducativa.com/provincias/guanacaste/",
        "_blank"
      );
      break;
    case "heredia":
      window.open(
        "https://actualidadeducativa.com/provincias/heredia/",
        "_blank"
      );
      break;
    case "limon":
      window.open(
        "https://actualidadeducativa.com/provincias/limon/",
        "_blank"
      );
      break;
    case "puntarenas":
      window.open(
        "https://actualidadeducativa.com/provincias/puntarenas/",
        "_blank"
      );
      break;
    case "sanJose":
      window.open(
        "https://actualidadeducativa.com/provincias/san-jose/",
        "_blank"
      );
      break;
    default:
      window.open(
        "https://actualidadeducativa.com/centros-educativos-privados/"
      );
  }
}
