/**
 * 
 * 
 */

const getInfoLugar = require('./lugar/lugar').getInfoLugar;
const getClima = require('./clima/clima').getClima;

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let lat = "";
let lon = "";

let getInfo = async(direccion) => {

    try {
        let coord = await getInfoLugar(direccion);
        let tempClima = await getClima(coord.lat, coord.lng);

        return `La temperatura de ${ direccion } es de ${ tempClima }`;

    } catch {
        return `No se pudo determinar el clima en ${ direccion }`;
    }




}


getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));