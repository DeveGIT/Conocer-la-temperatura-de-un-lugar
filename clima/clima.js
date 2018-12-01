/**
 * 
 * 
 */

const axios = require('axios');

let getClima = async(lat, lon) => {

    let urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=09a503f91785e553529c8ec2e7cf2e0b&units=metric`;

    let peticion = await axios.get(urlClima);

    let temp = peticion.data.main.temp;

    //console.log(temp);

    return temp;

}

//api.openweathermap.org/data/2.5/weather?lat=28.5210773&lon=-81.46551939999999&appid=09a503f91785e553529c8ec2e7cf2e0b&units=metric
//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=09a503f91785e553529c8ec2e7cf2e0b&units=metric


getClima(28.5210773, -81.46551939999999);

module.exports = {
    getClima
}