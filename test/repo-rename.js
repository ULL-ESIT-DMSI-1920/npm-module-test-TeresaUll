

var expect = require('chai').expect(),
renameRepo = require('../repo-rename')

describe('#Rename', function() {
it('obtiene el ID', function() {
renameRepo.getRepoID("ULL-ESIT-DMSI-1920", "pruebaTeresa").expect.equal('431860143\n');
});
it('cambia el nombre del repo', function() {
  renameRepo.renameRepo("431860143", "pruebaTeresa-nuevo").expect.equal("pruebaTeresa-nuevo");
  });
});