const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const URL_BASE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

async function findPokemon(){
    var HTMLinputId = document.getElementById('inputPokemonID');
    const pokemonId = HTMLinputId.value;
    
    if(pokemonId.length > 0){
        // Vamos a llamar al API

        const response = await fetch(URL_BASE + pokemonId).then(response => response.json()).catch(error => {
            alert("Error buscando el pokemon con id: " + pokemonId);
            console.log(error);
        });

        if(response){
            localStorage.setItem('datosPokemon', JSON.stringify(response));

            localStorage.setItem('pokemonId', pokemonId);

            window.location.href = 'detalle.html';
        }

        console.log(response);

    } else {
        alert('Introduzca un identificador válido');
    }

}

function cargarPokemonData(){
    if(localStorage.getItem('datosPokemon') == null){
        alert('Pokemon no encontrado');

    } else{
        var contentHTML = document.getElementsByClassName('content')[0];

        var pokemon = JSON.parse(localStorage.getItem('datosPokemon'));
        var nombrePokemon = pokemon.name;

        var HTMLnombre = document.getElementById('pokemonNombre');
        HTMLnombre.innerHTML += nombrePokemon.toLocaleUpperCase();

        var HTMLimagen = document.getElementById('pokemonImagen');
        HTMLimagen.src = URL_BASE_IMG + (localStorage.getItem('pokemonId')) + '.png';

        var altura = pokemon.height;
        var HTMLaltura = document.createElement('h5');
        HTMLaltura.innerHTML = 'Altura: ' + altura;
        contentHTML.appendChild(HTMLaltura);

        var peso = pokemon.weight;
        var HTMLpeso = document.createElement('h5');
        HTMLpeso.innerHTML = 'Peso: ' + peso;
        contentHTML.appendChild(HTMLpeso);

        console.log(nombrePokemon);
    }
}