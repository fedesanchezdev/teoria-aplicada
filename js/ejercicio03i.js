let imagenes = [
  {
    img: "SOL3.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Sol</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Re</label></p>",
  },
  {
    img: "FA3.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Sol</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Re</label></p>",
  },
  {
    img: "MI3.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Sol</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Re</label></p>",
  },
  {
    img: "RE3.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Sol</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Re</label></p>",
  },
  {
    img: "FA2.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Re</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Do</label></p>",
  },
  {
    img: "MI2.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Re</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Do</label></p>",
  },
  {
    img: "RE2.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Re</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Do</label></p>",
  },
  {
    img: "DO2.png",
    text: "<p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i1'><label class='ps-2' for='i1'> Fa</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i2'><label class='ps-2'  for='i2'> Mi</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Prueba otra vez!\"'><input type='radio' name='p1' id='i3'><label class='ps-2' for='i3'> Re</label></p> <p onclick='document.getElementById(\"res\").innerHTML = \"¡Muy bien!\"'><input type='radio' name='p1' id='i4'><label class='ps-2' for='i4'> Do</label></p>",
  },
];

window.addEventListener(
  "load",
  function load() {
    let i = Math.floor(Math.random() * imagenes.length);
    document.getElementById("box").innerHTML =
      "<img  class='img-fluid mb-4' src='./imagenes/" +
      imagenes[i].img +
      "' />" +
      imagenes[i].text;
  },
  false
);
