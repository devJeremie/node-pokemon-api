const express = require('express')
const morgan =  require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const { success, getUniqueId} = require('./helper.js')
let pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

//middleware crée par nous memes, logger qui affiche url dans le terminal
// app.use((req, res, next) => {
//     console.log(`URL : ${req.url}`)
//     next()
// })

app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan("dev")) 
.use(bodyParser.json()) //permet de parser les données envoyées en json

app.get('/', (req,res) => res.send('Bonjour Express ! ;)'))

//on retourne la liste  de tous les Pokémons
app.get('/api/pokemons', (req,res) => {
    const message = 'La liste de tous les pokemons au format json'
    res.json(success(message, pokemons))
})

//on va utiliser la liste de pokémons dans notre endPoint
app.get('/api/pokemons/:id', (req, res) =>{
const id = parseInt(req.params.id)
const pokemon = pokemons.find(pokemon => pokemon.id === id)
const message = 'Un Pokémon a bien été trouvé pour cet Id'
res.json(success(message, pokemon))
})

//Nouveau point de terminaison qui affiche le total de pokémon
/*app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex pour le moment.`)
})*/

app.post('/api/pokemons', (req,res) => {
    const id = getUniqueId(pokemons)
    const pokemonCreated = { ...req.body, ...{id: id, created: new Date()} }
    pokemons.push(pokemonCreated)
    const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`
    res.json(success(message, pokemonCreated))
})

app.put('/api/pokemons/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const pokemonUpdated = { ...req.body, id: id}
    pokemons = pokemons.map(pokemon =>{
        return pokemon.id === id ? pokemonUpdated : pokemon
    })
    const message = `Le pokémon ${pokemonUpdated.name} à bien été modifié.`
    res.json(success(message, pokemonUpdated))
})
       
app.listen(port, () => console.log(`Votre application Node est démarré sur : http://localhost:${port}`))