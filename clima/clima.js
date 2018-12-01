/**
 * 
 * 
 */

const axios = require('axios');
const apiWheather = require('../api-keys/api-keys').apiWheather();

let getClima = async(lat, lon) => {

    let urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ apiWheather }=metric`;

    let peticion = await axios.get(urlClima);

    let temp = peticion.data.main.temp;

    return temp;

}


module.exports = {
    getClima
}