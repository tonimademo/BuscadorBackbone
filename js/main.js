/*global require*/
'use strict';

require.config({
    shim : {
        jquery : {
            exports : 'jquery'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        }
    },
    paths : {
        jquery : 'jquery',
        underscore : 'underscore',
        backbone : 'backbone'
    }
});

require([
    'backbone',
    'views/app-view'
], function(Backbone, AppView) {
    new AppView();
});