const express = require('express')




const port = process.env.PORT || 3000

const app = express()

app.use(express.static("public"))

app.use((req, res, next) => {
  res.locals.url = req.originalUrl
  next()
})




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
