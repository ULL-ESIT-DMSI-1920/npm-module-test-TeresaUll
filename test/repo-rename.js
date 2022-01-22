

var should = require('chai').should(),
renameRepo = require('../repo-rename'),
getId = renameRepo.getRepoID,
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
  it('cambia el nombre del repo otra vez', function() {
    rename("R_kgDOGb2prw", "pruebaTeresa").should.equal("pruebaTeresa");
    });


});