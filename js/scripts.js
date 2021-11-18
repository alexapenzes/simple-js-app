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

    return {
        getAll: getAll,
        add: add
    };
})();

//write all pokemon with its infos
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write('<p class="pokedex-style">' + pokemon.name + '<br>' + 'Height: ' + pokemon.height + 'm<br>' + 'Types: ' + pokemon.types + '</p>');
});