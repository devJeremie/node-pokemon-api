// // Function to return success response
// exports.success = (message, data) => { // Create response object with message and data
//     return { message, data}  // Return response object
                        
// }

// // Function to get unique id for a pokemon
// exports.getUniqueId = (pokemons) => {
//     const pokemonsIds = pokemons.map(pokemon =>  pokemon.id)// Get array of pokemon ids
//     const maxId = pokemonsIds.reduce((a,b) => Math.max(a,b))// Find the max id in the array
//     const uniqueId = maxId + 1 // Increment the max id by 1

//     return uniqueId // Return the unique id
// }