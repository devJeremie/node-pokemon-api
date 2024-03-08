const jwt = require('jsonwebtoken')
const privateKey = require('../authentification/privateKey')

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization

  if(!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
    return res.status(401).json({ message })
  }
  
  const token = authorizationHeader.split(' ')[1]
  const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
    if(error) {
      const message = `Vous n'etes pas autorisé à accèder à cette ressource.`
      return res.status(401).json({ message, data: error })
    }

    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant est invalide.`
      res.status(401).json({ message })
    } else {
      next()
    }
  })
}