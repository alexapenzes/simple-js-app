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

for (let i = 0; i < pokemonList.length; i++){
    document.write('<p id="pokedex-style">' + pokemonList[i].name + ' (height: ' + pokemonList[i].height +'m)' + '</p>');

    if(pokemonList[i].height > 1){
        document.write(' - Wow, that\'s big!')
    }
}