/*global define*/

define([
    
    'jquery',
    'backbone',
    'views/page',
    'models/page'

], function ($, Backbone, PageView, PageModel) {

    'use strict';

    var Router = Backbone.Router.extend({
        routes: {

                '/projects': 'showProjects',
                '/users': 'showUsers',

              // Default
              '*actions': 'defaultAction'

        },

        defaultAction : function(){
            
            var page = new PageView({
                model   : new PageModel(),
                el      : $('#container')
            });

            page.render();

            console.log('Invalid. You attempted to reach:');
        }

    });



    return Router;
});
