const { Pokemon } = require('../database/sequelize')
const auth = require('../authentification/auth')

module.exports = (app) => {
    app.put('/api/pokemons/:id',auth,  (req, res) => {
        Pokemon.findByPk(req.params.id).then(pokemon => {
            if (pokemon === null) {
                const message = `Le pokémon demandé n\'existe pas, Réessayer avec un autre identifiant`
                return res.status(404).json({message})
            } 
            const pokemonDeleted = pokemon
            return Pokemon.destroy({
                where: {
                    id: pokemon.id
                }
            })
            .then(_ => {
            const message = `Le pokémon avec l'identifiant ${pokemonDeleted.id} à bien été supprimé.`
                res.json({message, data: pokemonDeleted})
            })
        })
        .catch(error => {
            const message = `Le pokémon n\'a pas pu être supprimé, réessayer dans qulques instants.`
            res.status(500).json({message, data:error})
        })
    })
}