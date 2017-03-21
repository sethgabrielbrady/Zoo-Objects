module.exports = function karmaConfig( config ){

  config.set({
    frameworks:[ 'mocha', 'chai'],
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      'src/**/*.js',
      'test/specs/**/*.js'
    ]
  });

};
