const { Sequelize, DataTypes } = require('sequelize')
const pokemons = require('./mock-pokemon')
const PokemonModel = require("../models/pokemon")
const UserModel = require( "../models/user")

//create a new instance of sequelize
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
        logging: false
    }
)

const Pokemon = PokemonModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

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
            .then(pokemon => console.log(pokemon.toJSON())) // Log created Pokemon
        })  
            User.create({
                username:'jeremie',
                password: 'test'
            })
            .then(user => console.log(user.toJSON()))

        console.log('La bdd à bien été initialisé !!')
    })
}

module.exports = {
    initDatabase, Pokemon , User //permet de nous resservir de ces éléments ailleur dans notre code
}