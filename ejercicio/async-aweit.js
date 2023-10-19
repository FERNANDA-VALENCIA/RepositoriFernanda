

   //se crea la funcion
    const getAllPokemon = async ()=>{

    const pokemons= await fetch("https://pokeapi.co/api/v2/pokemon")

    const pokemonJs= await pokemons.json()

    pokemonJs.results.forEach(async(pokemon) => {// se esta usando u  foreach

    const pokemonsData= await fetch(pokemon.url)

    //console.log(pokemon.url)
    const pokemonsDatajs= await pokemonsData.json()
    
    console.log(pokemonsDatajs) // se esta imprimiendo el resltado 
    });
    console.log()
    }

    getAllPokemon(); // se realiza el llamado a la funcion