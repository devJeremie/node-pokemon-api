const { Pokemon } = require('../database/sequelize')

module.exports = (app) => {
    app.put('/api/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id).then(pokemon => {
            const pokemonDeleted = pokemon
            Pokemon.destroy({
                where: {
                    id: id
                }
            })
            .then(_ => {
            const message = `Le pokémon avec l'identifiant ${pokemonDeleted.id} à bien été supprimé.`
                res.json({message, data: pokemonDeleted})
            })
        })
    })
}