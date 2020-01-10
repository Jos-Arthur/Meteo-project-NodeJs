/* Pour effectuer notre appel de l'api nous 
avons besoin d'installer et d'utiliser 
le module request de nodejs */

/* sudo npm install request --save */
const request = require('request');

/* Pour le routage nous avons besoins du module 
express et de bodyParser */

/* sudo npm install express --save */
/* sudo npm install bodyParser --save */


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* On definit ici le port d'ecoute*/

const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
});

app.post('/', function (req, res) {
  let key_api = 'bc857b399ed73f4b2c00047711a002cd';
  let ma_ville = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${ma_ville}&appid=${key_api}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, Entrer encore une ville'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, Entrer encore une ville'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        let weatherTextExpanded = `Il fait ${weather.wind.deg} degrés avec comme taux d'humidité de ${weather.main.humidity} % à ${weather.name}!`;
        res.render('index', {weather: weatherTextExpanded, error: null});
      }
    }
  });
})

app.listen(port, function () {
  console.log('Le serveur écoute au port: '+port)
});