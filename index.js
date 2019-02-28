//npm install machinepack-zip-2
var Zip2 = require('machinepack-zip-2');

// Compactação dos arquivos e destino do .zip

Zip2.zip({

sources: [ '/Users/MatheusGlauber/Desktop/zip/' ],

destination: '/Users/MatheusGlauber/Desktop/compactado.zip',

}).exec({

// Um erro inesperado ocorreu na compactação.

error: function (err) {

},

// Sucesso.

success: function (result) {

},
});
