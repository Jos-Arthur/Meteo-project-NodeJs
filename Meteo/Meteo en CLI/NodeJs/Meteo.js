/* Pour effectuer notre appel de l'api nous 
avons besoin d'installer et d'utiliser 
le module request de nodejs */

/* sudo npm install request --save */


const request = require('request');

/* pour utiliser un module de nodejs on doit utiliser 
le mot cle require() */

/* L'api de la meterologie est OpenWeatherMap  pour l'utiliser on a besoin d'un cle d'api
que j'ai  utiliser la variable  key_api*/

/* http://api.openweathermap.org/data/2.5/weather L'URL a également deux paramètres de requête requis. 
Les paramètres de requête sont des paires clé / valeur qui nous permettent de transmettre des données à une URL.
*/
const  argv  =  require ('yargs'). argv ; 
/* pour plus d'interactivité nous avons installer le module yargs
via npm install yargs --save*/

/* Yargs est un outil d'interface de ligne de commande interactive sur le thème des pirates. 
Ou plus simplement, cela nous permet de définir des variables à partir de la ligne de commande. */


let key_api = 'bc857b399ed73f4b2c00047711a002cd';
let ma_ville = argv.l || 'Bobo-Dioulasso';

/* Nous avons juste besoin de passer notre URL cible, et request retourne une fonction de rappel. 
*/
let url = `http://api.openweathermap.org/data/2.5/weather?q=${ma_ville}&appid=${key_api}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } /* Ce bloc retourne un code d'erreur en cas d'echec de la ville.
  Le code d'erreur est le suivant resultat: {"cod":"404","message":"city not found"}
  */

  /*else {
    console.log('resultat:', body);
  } // Cette bloc affiche de façon pele mele les resultats .
  */

  else {
    let weather = JSON.parse(body)
    let message = `Il fait ${weather.wind.deg} degrés avec comme taux d'humidité de ${weather.main.humidity} % à ${weather.name} qui est une ville du ${weather.sys.country}!`;
    console.log(message);
  } // cette fonction permet  de netoyer le resultats obtenue grace JSON.parse().

  
});

/* - const permet de declarer des constante en nodejs c-a-d des variable qui doivent etre initialiser 
   - let permet de declarer des avec une porté limite  entre accolade {} */


