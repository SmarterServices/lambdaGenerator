'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ultimate ' + chalk.red('DeployableLambda') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your lambda name',
      default: this.appname // Default to current folder name
    },
      {
        type: 'input',
        name: 'env',
        message: 'Your env for this worker',
        default: 'dev' // Default to current folder name
      },
      {
        type: 'input',
        name: 'profile',
        message: 'Your aws profile to publish your lambda',
        default: 'Profile-name' // Default to current folder name
      },
      {
        type: 'confirm',
        name: 'alias',
        message: 'Add alias to worker?',
        default: true // Default to current folder name
      }, {
        when: function (res) {
          return res.alias
        },
        type: 'input',
        name: 'aliasName',
        message: 'What is your alias name?',
        default: 'Alias-name' // Default to current folder name
      },
      {
        when: function (res) {
          return res.alias
        },
        type: 'input',
        name: 'version',
        message: 'version to use with alias, first time publishing needs to be set to $LATEST (current|$LATEST|[0-9])',
        default: '$LATEST' // Default to current folder name
      },
      {
        when: function (res) {
          return res.alias
        },
        type: 'input',
        name: 'aliasDescription',
        message: 'alias description',
        default: 'alias description' // Default to current folder name
      },
      {
        type: 'confirm',
        name: 'iot',
        message: 'Set up iot rule for worker?',
        default: true // Default to current folder name
      },
      {
        when: function (res) {
          return res.iot
        },
        type: 'input',
        name: 'RuleName',
        message: 'What is your iot rule',
        default: 'IotRuleName' // Default to current folder name
      },
      {
        when: function (res) {
          return res.iot
        },
        type: 'input',
        name: 'sql',
        message: 'Whats the sql for your rule?',
        default: "SELECT * FROM '#' WHERE type='TYPE_TO_CATCH'" // Default to current folder name
      },
      {
        when: function (res) {
          return res.iot
        },
        type: 'input',
        name: 'iotDescription',
        message: 'What is your iot rule description',
        default: "Iot rule description" // Default to current folder name
      }
    ];


    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('lambda-config.js'),
        this.destinationPath('lambda-config.js'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        this.props
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('index.js')
      );
    },

    projectfiles: function () {

    }
  },

  install: function () {
    this.npmInstall();
  }
});
