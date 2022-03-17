sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("fioridatabinding1.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel({
                    "FirstName": "John",
                    "LastName": "Wick"
                });
                oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

                this.getView().setModel(oModel);
            },

            showDataFromModel: function(){
                var oModel = this.getView().getModel();
                alert(oModel.getProperty("/FirstName")+" "+oModel.getProperty("/LastName"));
            },

            changeFirstName: function(){
                var oModel = this.getView().getModel();
                oModel.setProperty("/FirstName","Neo");
                this.getView().setModel(oModel);
            },

            changeModelToOneWay: function(){
                // obtendo model atual
                var oModel = this.getView().getModel();

                // criando um novo model
                var oModel2 = new JSONModel();

                // copiando os dados
                oModel2.setData(oModel.getData());

                // definindo o modo
                oModel2.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

                // colocando na view
                this.getView().setModel(oModel2);
            },

            changeModelToTwoWay: function(){
                // obtendo model atual
                var oModel = this.getView().getModel();

                // criando um novo model
                var oModel2 = new JSONModel();

                // copiando os dados
                oModel2.setData(oModel.getData());

                // definindo o modo
                oModel2.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);

                // colocando na view
                this.getView().setModel(oModel2);
            }
        });
    });
