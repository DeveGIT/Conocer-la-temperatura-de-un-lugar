/**
 * 
 * 
 */

const axios = require('axios');



const getInfoLugar = async(direccion) => {

    let encoderUrl = encodeURI(direccion);

    let lugar = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encoderUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);


    if (lugar.data.status == 'ZERO_RESULTS') {
        throw new Error(`No se ha encontrado la dirección: ${ direccion }`);
    }

    //console.log(JSON.stringify(resp.data, undefined, 2));

    let location = lugar.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }


}



/**
 * 
// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8
 */



module.exports = {
    getInfoLugar
}