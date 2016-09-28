/*jshint node:true*/
module.exports = {
  description: 'Install bootstrap',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('bootstrap', 'v4.0.0-alpha.4');
  }
};
