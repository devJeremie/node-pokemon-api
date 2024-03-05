const express = require('express')
const morgan =  require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const sequelize = require('./src/database/sequelize')

const app = express()
const port = 3000

app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan("dev")) 
.use(bodyParser.json()) //permet de parser les données envoyées en json
 
sequelize.initDatabase()

//On placera nos endPoint ici
require('./src/routes/allPokemons')(app)
require('./src/routes/pokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)
app.listen(port, () => console.log(`Votre application Node est démarré sur : http://localhost:${port}`))