const { ValidationError } = require('sequelize')
const { Pokemon } = require('../database/sequelize')

module.exports = (app) => {
    app.put('/api/pokemons/:id', (req, res) => {
        const id = req.params.id
        Pokemon.update(req.body, {
            where: {
                id: id
            }
        })
        .then(_ => {
            return Pokemon.findByPk(id).then(pokemon => {
                if (pokemon === null) {
                    const message = `Le pokémon n\'existe pas, réessayer avec un autre identifiant.`
                    return res.status(404).json({message})
                }
                const message = `Le pokémon ${pokemon.name} à bien été modifié.`
                res.json({message, data: pokemon})
            })
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({message: error.message, data:error})
            }
            const message = `Le pokémon na pas pu etre modifié, réessayez dans quelques instants.`
            return res.status(500).json({message, data: error})
        })   
        
    })
}
