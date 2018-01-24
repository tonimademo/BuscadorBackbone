var app = app || {};

require([
    'jquery',
    'backbone',
    'models/empresa',
    'collections/empresas',
    'views/app-view',
    'views/empresa-view'
], function($, Backbone, AppView) {
    var Router = Backbone.Router.extend({
        routes: {
            "": "main"
        },
        main: function(){
            new AppView();
        }
    });
});