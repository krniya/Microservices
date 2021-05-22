const express = require("express")
const { randomBytes } = require("crypto")
const bodyParser = require("body-parser")
const app = express()
const posts = {}

app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(post)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log("At 4000")
})