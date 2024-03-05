const { Pokemon } = require("../database/sequelize")

//Récupere toute la liste des pokémons
module.exports = (app) => {
    app.get('/api/pokemons', (req, res) =>{
        Pokemon.findAll()
            .then(pokemons => {
                const message = 'La liste des pokémons a bien été récupéré.'
                res.json({ message, data: pokemons })
            })
    })
}