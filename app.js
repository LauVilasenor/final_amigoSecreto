let amigos = [];

console.log("Amigo sorteado");
//Funcion para agregar a un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


    //Validar que el campo no esté vacío
    if(nombreAmigo === "") {
        alert("Por favor, agrega un nombre");
        return; //Detiene la ejecución si el campo está vacío
    }

    //Validar que el nombre no esté repetido
    if(amigos.includes(nombreAmigo)){
        alert(`Este nombre "${nombreAmigo}" ya está en la lista`);
        return; //Detiene la ejecución si el nombre ya existe
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);  

    //Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actualizar la lista de amigos en la interfaz
    actualizarLista();

}
//Funcion para actualizar la lista de amigos en la interfaz         
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar la lista actual
    listaAmigos.innerHTML = ""; 

    //Recorrer el array con un ciclo for
    for (let i = 0; i < amigos.length; i++) {   
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    
}

    function sortearAmigo() {

        //Validar que haya amigos en la lista
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return; 
        }
    
    
   
    
    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //generar un número aleatorio entre 0 y la longitud del array de amigos
    const amigoSorteado = amigos[indiceAleatorio]; //Seleccionar un amigo aleatorio usando el índice generado

    //Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</atrong>`; // es diferente resultado.innerHTML = 'El amigo seleccionado es: <strong>' + amigoSeleccionado + '</strong>';
    
}




