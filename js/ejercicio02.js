function evaluarQuiz() {
  let respuestasCorrectas = ["C", "C", "B", "C", "A", "D", "D", "A", "A", "B"]; //insertar respuestas correctas de cada pregunta
  let respuestasUsuario = new Array();
  let respuestasPregunta = new Array();
  let aciertos = 0;
  let countPreguntas = 0;
  let bien = "bien.png";
  let mal = "mal.png";
  let imagenesRespuestas = new Array();

  //en i < 4 usar el número de preguntas que haya
  for (let i = 0; i < 10; i++) {
    respuestasPregunta = document.getElementsByName('p' + (i + 1));
    //j <= 3 usar el numero de respuestas por cada pregunta -1
    for (let j = 0; j <= 3; j++) {
      if (respuestasPregunta[j].checked == true) {
        countPreguntas++;
        respuestasUsuario[i] = respuestasPregunta[j].value;
        if (respuestasPregunta[j].value == respuestasCorrectas[i]) {
          imagenesRespuestas[i] = bien;
          aciertos++;
        } else {
          imagenesRespuestas[i] = mal;
        }
      }
    }
  }
  //en i < 4 usar el número de preguntas que haya
  for (let i = 0; i < 10; i++) {
    console.log("Respuesta " + (i + 1) + " " + respuestasUsuario[i] + " Imagen " + imagenesRespuestas[i]);
  }
  //== 4 usar el número de preguntas que haya
  if (countPreguntas == 10) {
    
    html = "<table class='table'>";
    html += "<tr>";
    html += "<td>Ejercicio</td>";
    html += "<td>Respuesta Elegida</td>";
    html += "<td>Respuesta Correcta</td>";
    html += "<td>Resultado</td>";
    html += "<tr>";
    //en i < 4 usar el número de preguntas que haya
    for (let i = 0; i < 10; i++) {
      html += "<tr>";
      html += "<td>" + (i + 1) + "</td>";
      html += "<td>" + respuestasUsuario[i] + "</td>";
      html += "<td>" + respuestasCorrectas[i] + "</td>";
      html += "<td><img src='" + imagenesRespuestas[i] + "' width=30 heigth=30></td>";
      html += "<tr>";
    }
    html += "</table>";
    //2.5 * aciertos colocar el puntaje que recibe cada respuesta correcta
    html += "<span class='display-1'><h3>Calificación "+ 1 * aciertos +" (Máx. 10 pts.)</h3></span>"
    document.getElementById('resultado').innerHTML = html;
  } else {
    alert("falta contestar preguntas");
  }
}
function resetQuiz() {
    //en i < 10 usar el número de preguntas que haya
  for (let i = 0; i < 10; i++) {
    respuestasPregunta = document.getElementsByName('p' + (i + 1));
    //j <= 3 usar el numero de respuestas por cada pregunta -1
    for (let j = 0; j <= 3; j++) {
        respuestasPregunta[j].checked = false;
    }
  }
  document.getElementById('resultado').innerHTML = "";
}
