sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("cl.POReportForSCM.controller.V_POItem", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cl.POReportForSCM.view.V_POItem
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Target_POItem").attachMatched(this._onRouteFound, this);
			//debugger;
		},

		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function (oEvt) {
			//debugger;
			var oArgument = oEvt.getParameter("arguments");
			var selectPO = oArgument.SelectedPO;
			//console.log("PO to:" + selectPO);

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZGW_PO_SRV/", true);
			this.getView().setModel(oModel);

			var filters = new sap.ui.model.Filter({
				and: true,
				filters: [new sap.ui.model.Filter("Ebeln", sap.ui.model.FilterOperator.EQ, selectPO)]
			});

			//var binding = this.byId("it_item").getBinding("items");
			var binding = this.getView().byId("it_item").getBinding("items");
			// console.log("Binding:" + this.byId("it_item").getBindingContext("items"));
			// console.log("Binding:" + this.byId("it_item").getBindingInfo("items"));
			// console.log("Binding:" + this.byId("it_item").getBindingPath("items"));
			binding.filter(filters);
		},

		/**
		 *@memberOf cl.POReportForSCM.controller.V_POItem
		 */
		GoToFirstView: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Target_POHeader");
		}
	});
});