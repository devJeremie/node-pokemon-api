const { Pokemon } = require("../database/sequelize")
const auth = require ('../authentification/auth')


//Récupere toute la liste des pokémons
module.exports = (app) => {
    app.get('/api/pokemons', auth, (req, res) =>{
        Pokemon.findAll()
            .then(pokemons => {
                const message = 'La liste des pokémons a bien été récupéré.'
                res.json({ message, data: pokemons })
            })//gestion erreur 500
            .catch(error => {
                const message = `La liste des pokémons n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}