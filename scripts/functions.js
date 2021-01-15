const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const URL_BASE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function findPokemon(){
    var HTMLinputId = document.getElementById('inputPokemonID');
    const pokemonId = HTMLinputId.value;
    
    if(pokemonId.length > 0){
        // Vamos a llamar al API

        const response = fetch(URL_BASE + pokemonId).then(

            (response) => {
                console.log(response.json());
            }

        );

    }else{
        alert("El campo de texto está vacío");
    }
}