/* jshint node: true */
'use strict';

module.exports = {
  name: 'fs-branding',
  // TODO: Remove when done
  isDevelopingAddon: function() { return true; },

  included: function(app) {
    process.env.enableAssets = app.options.fsBranding.enableAssets || false;

    this._super.included(app);
  },

  treeForPublic: function(tree) {
    if(process.env.enableAssets !== 'false') {
      return tree;
    }
  }
};
