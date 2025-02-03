// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

listaAmigos = [];

function asignarTexto(element, text){
    //Funcion para facilitar asignar textos a los elementos HTML
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text
}

function agregarLi(id, text){
    //Función para agregar elementos li
    let ul = document.getElementById(id);
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li)
}

function agregarAmigo(){
    //Guardamos el input en la variable amigo
    let amigo = document.getElementById('amigo').value;

    //Verificamos que no se esté intentando agregar un valor vacío
    if (amigo.trim() == ''){
        alert('Por favor, inserte un nombre.')
    } else {
        //Agregamos el amigo a la lista
        listaAmigos.push(amigo);
        agregarLi('listaAmigos', amigo)
        limpiarCaja()
    } 
}

function limpiarCaja(){
    //Función que limpia la caja para que el usuario no tenga que borrar lo que colocó anteriormente
    document.getElementById('amigo').value = "";
}

function sortearAmigo(){
    //Declaramos las variables que usaremos 
    let numeroPersonas = listaAmigos.length;
    console.log(numeroPersonas)
    let numeroAleatorio = Math.floor(Math.random() * numeroPersonas);
    console.log(numeroAleatorio)

    //Verificamos que hayan datos en la lista
    if (numeroPersonas == 0){
        alert('No hay amigos para sortear')
    } else{
        //Usamos el numero random que generamos para sortear un elemento de la lista
        let amigoSecreto = listaAmigos[numeroAleatorio]

        //Limpiamos 
        asignarTexto('ul', '');     

        //Resultado
        asignarTexto('#resultado', `El amigo secreto es: ${amigoSecreto}`)
    }
}