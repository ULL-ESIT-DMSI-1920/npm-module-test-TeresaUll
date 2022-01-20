

var expect = require('chai').expect(),
renameRepo = require('../repo-rename')

describe('#Rename', function() {
  // comprobamos si la función getRepoID funciona correctamente
it('obtiene el ID', function() {
renameRepo.getRepoID("ULL-ESIT-DMSI-1920", "pruebaTeresa").expect.equal('R_kgDOGb2prw\n');
});
// comprobamos si renameRepo funciona correctamente
it('cambia el nombre del repo', function() {
  renameRepo.renameRepo("R_kgDOGb2prw", "pruebaTeresaNuevo").expect.equal("pruebaTeresaNuevo");
  });
// probamos que el id no sea diferente que el id correcto con assert 
it('El repositorio no tiene el id de otro repo', function(){
    assert.notEqual(renameRepo.getRepoId("ULL-ESIT-DMSI-1920", "pruebaTeresa"), !"R_kgDOGb2prw", "El id no es correcto")
});

});