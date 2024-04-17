const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require(path.join(__dirname, 'routes', 'root')))

app.all('*', (req,res) => {
    res.status(404)

    req.accepts('html') ? res.sendFile(path.join(__dirname, 'views', '404.html')) 
        : req.accepts('json') ? res.json({message:'404 Resource not found'}) 
            : res.type('txt').send('404 Resource not found')

})

app.listen(PORT, () => console.log('Server running and listening on port : ' + PORT))