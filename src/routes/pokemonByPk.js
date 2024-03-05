const { Pokemon }  = require('../database/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons/:id', (req, res) =>{
        Pokemon.findByPk(req.params.id)
            .then(pokemons => {
                const message = 'Le pokémon a bien été récupéré.'
                res.json({ message, data: pokemons })
            })
    })
}
