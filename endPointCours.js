//middleware crée par nous memes, logger qui affiche url dans le terminal
// app.use((req, res, next) => {
//     console.log(`URL : ${req.url}`)
//     next()
// })


// app.get('/', (req,res) => res.send('Bonjour Express ! ;)'))

// //on retourne la liste  de tous les Pokémons
// app.get('/api/pokemons', (req,res) => {
//     const message = 'La liste de tous les pokemons au format json'
//     res.json(success(message, pokemons))
// })

// //on va utiliser la liste de pokémons dans notre endPoint
// app.get('/api/pokemons/:id', (req, res) =>{
// const id = parseInt(req.params.id)
// const pokemon = pokemons.find(pokemon => pokemon.id === id)
// const message = 'Un Pokémon a bien été trouvé pour cet Id'
// res.json(success(message, pokemon))
// })

// //Nouveau point de terminaison qui affiche le total de pokémon
// /*app.get('/api/pokemons', (req,res) => {
//     res.send(`Il y a ${pokemons.length} pokémons dans le pokédex pour le moment.`)
// })*/

// app.post('/api/pokemons', (req,res) => {
//     const id = getUniqueId(pokemons)
//     const pokemonCreated = { ...req.body, ...{id: id, created: new Date()} }
//     pokemons.push(pokemonCreated)
//     const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`
//     res.json(success(message, pokemonCreated))
// })

// // Request handler for updating a pokemon
// app.put('/api/pokemons/:id', (req, res) =>{
//     const id = parseInt(req.params.id)  // Get the pokemon id from the request
//     const pokemonUpdated = { ...req.body, id: id}  // Create a new pokemon object with updated information
//     pokemons = pokemons.map(pokemon =>{   // Iterate through the pokemons array
//         return pokemon.id === id ? pokemonUpdated : pokemon  // If the pokemon id matches, update it, otherwise keep it the same
//     })
//     const message = `Le pokémon ${pokemonUpdated.name} à bien été modifié.` // Create a success message
//     res.json(success(message, pokemonUpdated))  // Send the success message and updated pokemon object as a JSON response
// })

// // Request handler for deleting a pokemon
// app.delete('/api/pokemons/:id', (req, res) =>{
//     const id = parseInt(req.params.id)  // Get the pokemon id from the request
//     const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)  // Find the pokemon in the pokemons array
//     pokemons.filter(pokemon=> pokemon.id !== id)  // Filter the pokemons array to remove the pokemon with the specified id
//     const message = `Le pokémon ${pokemonDeleted.name} à bien été supprimé.`  // Create a success message
//     res.json(success(message, pokemonDeleted))
// })
