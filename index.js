/* jshint node: true */
'use strict';

module.exports = {
  name: 'fs-branding',
  // TODO: Remove when done
  isDevelopingAddon: function() { return true; },

  included: function(app) {
    this._super.included(app);
  }
};
