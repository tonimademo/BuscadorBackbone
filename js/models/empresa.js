/*global Backbone */
define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Empresa = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            nombre: "",
            cif: "",
            direccion: "",
            telefono: "",
            activo: true
        },

        // Comprueba si esta activada o no la empresa
        activado: function () {
            this.save({
                activo: this.get('activo')
            });
        }
    });

    return Empresa;
});