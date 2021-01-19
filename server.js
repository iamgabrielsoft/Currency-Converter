const { homepage} = require('./routes/homepage')
const path = require('path')
var express = require('express')
const app = express()
const PORT = 5000 || process.env


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'));
app.use('/public', express.static('public'))
app.use('/js', express.static('js'))

app.use('/', homepage)




app.listen(PORT, () => {
    console.log(`Listening at https://localhost${PORT}`)
})



module.exports = express