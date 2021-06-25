function validar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var pais = document.getElementById("pais").value;
    var sexo = [document.getElementById("masc").checked, document.getElementById("fem").checked, document.getElementById("otro").checked];
    var hobbies = [document.getElementById("futbol").checked, document.getElementById("basquet").checked, document.getElementById("tenis").checked, document.getElementById("beisbol").checked, document.getElementById("otro").checked]

    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(pais);
    console.log(sexo);
    console.log(hobbies);
}