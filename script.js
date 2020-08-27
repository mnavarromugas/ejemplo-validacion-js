let lista = [];

function mostrar_nombre() {
    event.preventDefault();

    let elemento = document.getElementById('txtNombre');

    let nombre = elemento.value;

    if(nombre=='') {
        alert('No puede ser vacio el nombre');
        return;
    }

    lista.push(nombre);
}

function mostrarReporte() {
    let elemento = document.getElementById('lista');

    let cadena = "";
    for(let i=0;i<lista.length;i++) {
        cadena += "<li>" + lista[i] + "</li>"
    }

    elemento.innerHTML = cadena;
}