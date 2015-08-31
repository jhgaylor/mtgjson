// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'mtg:json',  // http://atmospherejs.com/freeall/mtgjson
  summary: 'Scalable vector icons for Magic the Gathering symbols.',
  version: '0.0.1',
  git: 'https://github.com/freeall/mtgjson.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
  ], 'client', { isAsset: true });
  api.addFiles([
  ], 'client');
});
