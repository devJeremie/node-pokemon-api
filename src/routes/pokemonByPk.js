const { Pokemon }  = require('../database/sequelize')
const auth = require('../authentification/auth')

module.exports = (app) => {
    app.get('/api/pokemons/:id', auth,  (req, res) =>{
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                if(pokemon === null ){
                    const message = `Le pokémon n'existe pas, réessayer avec un identifiant valide.`
                    return res.status(404).json({message})
                }
            const message = 'Le pokémon a bien été récupéré.'
                res.json({ message, data: pokemons })
            })
            .catch(error => {
                const message = `Le pokémon na pas pu etre récupéré, ressayez dans quelques instants.`
                return res.status(500).json({message, data: error})
            })  
    })
}
