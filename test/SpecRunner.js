require.config({

    baseUrl : '../app/scripts',
    urlArgs: 'cb=' + Math.random(),
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jasmine: {
          exports: 'jasmine'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'jasmine'
        }
  },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        templates: '../../.tmp/scripts/templates',

        jasmine: '../../test/bower_components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../../test/bower_components/jasmine/lib/jasmine-core/jasmine-html',
        spec: '../../test/spec/'
    }
});


require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/views/page');


  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});