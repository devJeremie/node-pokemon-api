const express = require('express')
let pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Bonjour Express ! ;)'))
//on va utiliser la liste de pokémons dans notre endPoint
app.get('/api/pokemon/:id', (req, res) =>{
const id = parseInt(req.params.id)
const pokemon = pokemons.find(pokemon => pokemon.id === id)
res.send(`Salut vous avez récupéré le pokémon n°${pokemon.name}.`)
})

//Nouveau point de terminaison qui affiche le total de pokémon
app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex pour le moment.`)
})

app.listen(port, () => console.log(`Votre application Node est démarré sur : http://localhost:${port}`))