// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Npm.depends({
  'mtgjson': '2.14.0'
});

Package.describe({
  name: 'mtg:json',  // http://atmospherejs.com/mtg/json
  summary: 'Scalable vector icons for Magic the Gathering symbols.',
  version: '0.0.1',
  git: 'https://github.com/freeall/mtgjson.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('mtgjson.js', 'server');
  api.export('MTGjson');
});
