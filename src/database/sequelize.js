const { Sequelize, DataTypes } = require('sequelize')
const pokemons = require('./mock-pokemon')
const PokemonModel = require("../models/pokemon")

const sequelize = new Sequelize(
    'pokedex',
    'root',
    '',
    {
        host: "localhost",
        dialect: "mariadb",
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: true
    }
)

const Pokemon = PokemonModel(sequelize, DataTypes);

const initDatabase = () => {
    return sequelize.sync({force: true}).then(_ => {
        pokemons.map(pokemon => {
            Pokemon.create({  // Create new Pokemon
                name: pokemon.name,
                hp: pokemon.hp,
                cp: pokemon.cp,
                picture: pokemon.picture,
                types: pokemon.types // Types joined as string
            })
            .then(bulbizarre => console.log(bulbizarre.toJSON())) // Log created Pokemon
        })  
        console.log('La bdd à bien été initialisé !!')
    })
}

module.exports = {
    initDatabase, Pokemon  //permet de nous resservir de ces éléments ailleur dans notre code
}