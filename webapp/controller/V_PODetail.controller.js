sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("cl.POReportForSCM.controller.V_PODetail", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cl.POReportForSCM.view.V_PODetail
		 */
		onInit: function () {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Target_PODetail").attachMatched(this._onRouteFound, this);
		},

		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function (oEvt) {
			var oArgument = oEvt.getParameter("arguments");
			var oView = this.getView();
			oView.bindElement({
				path: "/POHeaderSet('" + oArgument.SelectedItem + "')"
			});
		},

		/**
		 *@memberOf cl.POReportForSCM.controller.V_PODetail
		 */
		GoToPOHeader: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Target_POHeader");
		},

		/**
		 *@memberOf cl.POReportForSCM.controller.V_PODetail
		 */
		GoToPOItem: function (oEvent) {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("Target_POItem");
			//debugger;

			var selectPO = oEvent.getSource().getParent().getBindingContext().getObject().Ebeln;
		    //console.log("PO from:" + selectPO);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Target_POItem", {SelectedPO: selectPO});
		}
	});
});