/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    // Todo Item View
    // --------------

    // The DOM element for a todo item...
    var EmpresaView = Backbone.View.extend({
        //... is a list tag.
        tagName:  'tr',

        // Cache the template function for a single item.
        template: _.template($('#item-template').html()),

        // The DOM events specific to an item.
        // events: {
        //     'click .toggle': 'toggleCompleted',
        //     'dblclick label': 'edit',
        //     'click .destroy': 'clear',
        //     'keypress .edit': 'updateOnEnter',
        //     'keydown .edit': 'revertOnEscape',
        //     'blur .edit': 'close'
        // },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            //this.listenTo(this.model, 'destroy', this.remove);
            //this.listenTo(this.model, 'visible', this.toggleVisible);
        },

        // Re-render the titles of the todo item.
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

        // Remove the item, destroy the model from *localStorage* and delete its view.
        // clear: function () {
        //     this.model.destroy();
        // }
    });
    return EmpresaView;
});