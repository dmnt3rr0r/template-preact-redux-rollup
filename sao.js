var exec = require('child_process').exec;
var path = require('path');

var installTypes = function(context, stream) {
  var root = path.join(process.cwd().replace(/\\/g, '/'), context.folderName);
  
  exec('node_modules/.bin/flow-typed install --ignoreDeps dev', { cwd: root }, function(err) {
    if (err) {
      console.log('There was a problem running flow-typed', JSON.stringify(err));
      return;
    }
    exec('node_modules/.bin/flow-typed create-stub preact', { cwd: root }, function(err) {
      if (err) {
        console.log('There was a problem running flow-typed', JSON.stringify(err));
        return;
      }
      
      console.log('Types installed');
      return;
    });
  });
};

module.exports = {
  prompts: {
    name: {
      message: 'Project Name:'
    },
    description: {
      message: 'Description:'
    },
    username: {
      message: 'GitHub Username:'
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: true,
  enforceNewFolder: true,
  post: installTypes
};
