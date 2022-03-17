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
                var oModel = this.getView().getModel();
                oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
                oModel.updateBindings();
                this.getView().setModel(oModel);

                alert(oModel.getDefaultBindingMode());
            },

            changeModelToTwoWay: function(){
                var oModel = this.getView().getModel();
                oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                oModel.updateBindings();
                this.getView().setModel(oModel);

                alert(oModel.getDefaultBindingMode());
            }
        });
    });
