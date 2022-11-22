const express = require('express');
const router = express.Router();
const fs = require('fs')


const PATH_ROUTES = __dirname;
const ARRAY_ROUTES = fs.readdirSync(PATH_ROUTES);

const removeExtension = (fileName) => {

    return fileName.split('.').shift()
    
}


ARRAY_ROUTES.forEach((file) =>{
    const name = removeExtension(file)// ["index", "tracks", "storage"]

    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`)) // router.use('/tracks', require('/tracks.js')) || router.use('/storage', require('/storage.js'))
    }
})


module.exports = router;

