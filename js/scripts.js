//IIFE function
let pokemonRepository = (function () {
    //list of pokemon Array
    let pokemonList = [
        {
            name: 'Charmander', 
            height: 0.6, 
            types: ['lizard', 'fire']
        },
        {
            name: 'Jigglypuff', 
            height: 0.5, 
            types: ['balloon', 'fairy']
        },
        {
            name: 'Growlithe', 
            height: 0.7, 
            types: ['puppy', 'fire']
        },
        {
            name: 'Rapidash', 
            height: 1.7, 
            types: ['horse', 'fire']
        },
        {
            name: 'Horsea', 
            height: 0.4, 
            types: ['dragon', 'water']
        },
        {
            name: 'Oddish', 
            height: 0.5, 
            types: ['weed', 'grass', 'poison']
        },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon){
        let listContainer = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        listContainer.appendChild(listPokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon){
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

//write all pokemon with its infos
pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
});