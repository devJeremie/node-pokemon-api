const { User } = require('../database/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../authentification/privateKey')

module.exports = (app) => {
  app.post('/api/login', (req, res) => {

    User.findOne({ where: { username: req.body.username } }).then(user => {
//verifie si le user existe ou non 
      if(!user) {
        const message = `Aucun  utilisateur avec ce  nom n'a été trouvé.`
        return res.status(404).json({ message })
      }
//gestion du mot de passe invalide
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(!isPasswordValid) {
          const message = `Mot de passe incorrect.`
          return res.status(401).json({ message })
        }
      //si tout est bon on genere le token JWT
      const token = jwt.sign(
        {userId: user.id},
        privateKey,
        {expiresIn: '24h'}
      )
        
        const message = `L'utilisateur a été connecté avec succès`;
        return res.json({ message, data: user, token})
      })
    })
//cas d'erreur plus generique
    .catch(error => {
      const message = `L'utilisateur n'a pas pu se connectr. Réessayez dans quelques instants.`
      return res.json({ message, data: error })
    })
  })
}