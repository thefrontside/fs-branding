/* jshint node: true */
'use strict';

module.exports = {
  name: 'fs-branding',
  // TODO: Remove when done
  isDevelopingAddon: function() { return true; },

  included: function(app) {
    this._super.included(app);
    process.env.enableAssets = app.options.fsBranding.enableAssets || false;

    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
  },

  treeForPublic: function(tree) {
    if(process.env.enableAssets !== 'false') {
      return tree;
    }
  }
};
