const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Bonjour Express ! ;)'))

app.listen(port, () => console.log(`Votre application Node est démarré sur : http://localhost:${port}`))