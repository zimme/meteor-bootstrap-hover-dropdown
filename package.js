Package.describe({
  git: 'https://github.com/zimme/meteor-bootstrap-hover-dropdown.git',
  name: 'zimme:bootstrap-hover-dropdown',
  summary: 'Bootstrap plugin to enable Bootstrap dropdowns to activate on' +
    'hover and provide a nice user experience',
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('meteor-bootstrap-hover-dropdown.js');
});
