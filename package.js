Package.describe({
  git: 'https://github.com/zimme/meteor-bootstrap-hover-dropdown.git',
  name: 'zimme:bootstrap-hover-dropdown',
  summary: 'Enable Bootstrap dropdowns to activate on hover',
  version: '2.0.11'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.3');

  api.use('jquery', 'client');

  api.addFiles('bootstrap-hover-dropdown/bootstrap-hover-dropdown.js', 'client');
});
