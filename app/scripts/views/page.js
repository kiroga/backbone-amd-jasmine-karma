/*global define*/

define([
    
    'jquery',
    'underscore',
    'backbone',
    'templates'

], function ($, _, Backbone, JST) {
    'use strict';

    var PageView = Backbone.View.extend({

        template: JST['app/scripts/templates/page.ejs'],

        id: '',
        className: '',

        events: {},

        initialize: function () {
            
            console.log('page/initialize');
        },

        render: function () {

            console.log('page/render');
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

    return PageView;
});
