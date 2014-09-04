var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    
    if (/test\/spec/.test(file)) {
      tests.push(file);
      //console.log(file);
    }
  }
}


require.config({

    baseUrl : '/base/app/scripts',
    //urlArgs: 'cb=' + Math.random(),
    
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        templates: '../../.tmp/scripts/templates',

        spec: '../../test/spec/'
    },

    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },

     // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start

});




