const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Alhamdolillah, This is my Fisrt Node + Express app')
})


app.get('/settings', (req, res) =>{
    res.send('This is settings page')
})


app.get('/contact', (req, res) =>{
    res.send('This is contact page')
})

app.listen(port, ()=>{
    console.log(`booker is running on port ${port}`)
})