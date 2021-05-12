const { Router } = require('express')
const router = Router()

router.use('/hello', (req, res) => {
  res.json({nome: 'allc.dev'})
})

module.exports = router