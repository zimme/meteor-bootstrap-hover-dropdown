Package.describe({
  git: 'https://github.com/zimme/meteor-bootstrap-hover-dropdown.git',
  name: 'zimme:bootstrap-hover-dropdown',
  summary: 'Enable Bootstrap dropdowns to activate on hover',
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('meteor-bootstrap-hover-dropdown.js');
});
