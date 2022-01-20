

var should = require('chai').should(),
renameRepo = require('../repo-rename'),
getId = renameRepo.getRepoId,
rename = renameRepo.renameRepo,
assert = require('assert');

describe('#Rename', function() {
  // comprobamos si la función getRepoID funciona correctamentenpm
it('obtiene el ID', function() {
getId("ULL-ESIT-DMSI-1920", "pruebaTeresa").should.equal('R_kgDOGb2prw\n');
});
// comprobamos si renameRepo funciona correctamente
it('cambia el nombre del repo', function() {
  rename("R_kgDOGb2prw", "pruebaTeresaNuevo").should.equal("pruebaTeresaNuevo");
  });
// probamos que el id no sea diferente que el id correcto con assert 
it('El repositorio no tiene el id de otro repo', function(){
  let wrongid= "huujrurbjh"
    assert.notEqual(renameRepo.getRepoId("ULL-ESIT-DMSI-1920", "pruebaTeresa"), wrongid, "El id no es correcto")
});

});