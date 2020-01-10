const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index',{imc: null, error: null});
});

app.post('/', function(req, res) {
   let ma_taille = req.body.taille;
   let mon_poids = req.body.poids;
   let taille_reelle = ma_taille / 100;
   let mon_imc = (mon_poids / (taille_reelle * taille_reelle)).toFixed(2);

       if (mon_imc <= 16.5) {
        let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes en dénutrition !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else if(mon_imc > 16.5 && mon_imc <= 18.5) {
        let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes maigre et ça se voit !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else if(mon_imc > 18.5 && mon_imc <= 25) {
        let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes de corpulence normale !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else if(mon_imc > 25 && mon_imc <= 30) {
        let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes en surpoids mais ça va !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else if(mon_imc > 30 && mon_imc <= 35) {
       	let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes en obesité modéré !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else if(mon_imc > 35 && mon_imc <= 40) {
       	let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes en obesité sevère !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }

       else {
       	let imcText = `It's ${mon_imc} !`;
       	let imcExpanded = `Votre IMC est :${mon_imc}, Vous êtes en obesité Morbide !!`;
        res.render('index', {imc: imcExpanded , error: null});

       }
});

app.listen(port, function () {
  console.log('Le serveur écoute au port: '+port)
});