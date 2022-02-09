var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//start app
const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// designates what port the app will listen to for incoming requests
const port = 8081
app.listen(port, ()=>{
    console.log(`Server running on localhost: ${port}`)
})

projectData = {};

app.post('/add', message)

function message(req, res){
    postData = {
        temp: req.body.temp,
        minTemp: req.body.minTemp,
        maxTemp: req.body.maxTemp,
        icon: req.body.icon,
        days: req.body.days,
        description: req.body.description
    }
    Object.assign(projectData, postData);
    console.log(projectData)
    res.send(projectData);
}

const ImageData = {};

app.post('/img', image)

function image(req, res){
    postData = {
        img: req.body.img
    }
    Object.assign(ImageData, postData);
    console.log(ImageData)
    res.send(ImageData);
}

const allData = [];

app.get('/all', sendData);

function sendData(req, res){
    allData.push(projectData, ImageData);
    console.log(allData)
    res.send(allData);
}