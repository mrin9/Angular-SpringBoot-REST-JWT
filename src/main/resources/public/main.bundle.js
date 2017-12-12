webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/**
 * This is a singleton class
 */
var AppConfig = (function () {
    function AppConfig() {
        //Provide all the Application Configs here
        this.version = "1.0.0";
        this.locale = "en-US";
        this.currencyFormat = { style: "currency", currency: "USD" };
        this.dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        // API Related configs
        this.apiPort = "9119";
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName === undefined) {
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        }
        if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
        }
        else {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
        }
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
    return AppConfig;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_logout_logout_component__ = __webpack_require__("../../../../../src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_product_stats_product_stats_component__ = __webpack_require__("../../../../../src/app/pages/product_stats/product_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_order_stats_order_stats_component__ = __webpack_require__("../../../../../src/app/pages/order_stats/order_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_customers_customers_component__ = __webpack_require__("../../../../../src/app/pages/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders_component__ = __webpack_require__("../../../../../src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_order_details_order_details_component__ = __webpack_require__("../../../../../src/app/pages/order_details/order_details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_employees_employees_component__ = __webpack_require__("../../../../../src/app/pages/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_404_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/404/page-not-found.component.ts");













var routes = [
    //Important: The sequence of path is important as the router go over then in sequential manner
    { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full', data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }],
                children: [
                    { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
                    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_5__pages_order_stats_order_stats_component__["a" /* OrderStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] },
                    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_4__pages_product_stats_product_stats_component__["a" /* ProductStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] }
                ]
            },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders_component__["a" /* OrdersComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            { path: 'orders/:id', component: __WEBPACK_IMPORTED_MODULE_9__pages_order_details_order_details_component__["a" /* OrderDetailsComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__["a" /* ProductsComponent */], data: [{ selectedHeaderItemIndex: 2, selectedSubNavItemIndex: -1 }] },
            { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_7__pages_customers_customers_component__["a" /* CustomersComponent */], data: [{ selectedHeaderItemIndex: 3, selectedSubNavItemIndex: -1 }] },
            { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_10__pages_employees_employees_component__["a" /* EmployeesComponent */], data: [{ selectedHeaderItemIndex: 4, selectedSubNavItemIndex: -1 }] },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



var styles_AppComponent = [];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["q" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], [], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("app-root", __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__ = __webpack_require__("../../../../clarity-angular/clarity-angular.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component_ngfactory__ = __webpack_require__("../../../../../src/app/home.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_stats_order_stats_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/order_stats/order_stats.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_stats_product_stats_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/product_stats/product_stats.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/orders/orders.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_details_order_details_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/order_details/order_details.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_products_products_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_customers_customers_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/customers/customers.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_employees_employees_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/employees/employees.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/logout/logout.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_404_page_not_found_component_ngfactory__ = __webpack_require__("../../../../../src/app/pages/404/page-not-found.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component_ngfactory__ = __webpack_require__("../../../../../src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__ = __webpack_require__("../../../animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/tooltip/injection.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/tooltip/tooltip.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__ = __webpack_require__("../../../../../src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__ = __webpack_require__("../../../../../src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__ = __webpack_require__("../../../../../src/app/services/api/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__ = __webpack_require__("../../../../../src/app/services/api/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/datatable.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/axes/axes.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/tooltip/tooltip.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/common/chart-common.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/area-chart/area-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bar-chart/bar-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bubble-chart/bubble-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/force-directed-graph/force-directed-graph.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/heat-map/heat-map.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/line-chart/line-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/pie-chart/pie-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/polar-chart/polar-chart.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/number-card/number-card.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/tree-map/tree-map.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/gauge/gauge.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/ngx-charts.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_order_stats_order_stats_component__ = __webpack_require__("../../../../../src/app/pages/order_stats/order_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_product_stats_product_stats_component__ = __webpack_require__("../../../../../src/app/pages/product_stats/product_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_orders_orders_component__ = __webpack_require__("../../../../../src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_order_details_order_details_component__ = __webpack_require__("../../../../../src/app/pages/order_details/order_details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_products_products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_customers_customers_component__ = __webpack_require__("../../../../../src/app/pages/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_employees_employees_component__ = __webpack_require__("../../../../../src/app/pages/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_logout_logout_component__ = __webpack_require__("../../../../../src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_404_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/404/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_3__node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__["a" /* TooltipContentComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["i" /* ɵdbNgFactory */], __WEBPACK_IMPORTED_MODULE_5__home_component_ngfactory__["a" /* HomeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component_ngfactory__["a" /* DashboardComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__pages_order_stats_order_stats_component_ngfactory__["a" /* OrderStatsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__pages_product_stats_product_stats_component_ngfactory__["a" /* ProductStatsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders_component_ngfactory__["a" /* OrdersComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__pages_order_details_order_details_component_ngfactory__["a" /* OrderDetailsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__pages_products_products_component_ngfactory__["a" /* ProductsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_12__pages_customers_customers_component_ngfactory__["a" /* CustomersComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_13__pages_employees_employees_component_ngfactory__["a" /* EmployeesComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component_ngfactory__["a" /* LoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_15__pages_logout_logout_component_ngfactory__["a" /* LogoutComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_16__pages_404_page_not_found_component_ngfactory__["a" /* PageNotFoundComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_17__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵm"], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_18__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_18__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵf"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵk"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵl"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵe"], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], null, [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["DomSanitizer"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["HammerGestureConfig"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomEventsPlugin"](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵKeyEventsPlugin"](p1_0), new __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵHammerGesturesPlugin"](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["HAMMER_GESTURE_CONFIG"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["EventManager"], [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomSharedStylesHost"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomSharedStylesHost"], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomRendererFactory2"], [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["EventManager"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomRendererFactory2"], __WEBPACK_IMPORTED_MODULE_20__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵSharedStylesHost"], null, [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵDomSharedStylesHost"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["Meta"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["Meta"], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["Title"], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["v" /* ɵi */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["v" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["j" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["o" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["m" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["p" /* ɵh */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["p" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["j" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["n" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["p" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["l" /* ɵd */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["l" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["k" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["l" /* ɵd */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["i" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["i" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["k" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["i" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["q" /* ɵinterceptingHandler */], [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpBackend */], [2, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HTTP_INTERCEPTORS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */], __WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__["a" /* TooltipService */], __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_charts_release_common_tooltip_tooltip_service__["a" /* TooltipService */], [__WEBPACK_IMPORTED_MODULE_26__swimlane_ngx_charts_release_common_tooltip_injection_service__["a" /* InjectionService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_13" /* ÇlrFocusTrapTracker */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_13" /* ÇlrFocusTrapTracker */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_45" /* ɵcv */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_46" /* ɵcy */], [[3, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_45" /* ɵcv */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["z" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_29__angular_router__["g" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_29__angular_router__["r" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["r" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["g" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__angular_router__["f" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["f" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29__angular_router__["i" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["C" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["A" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_29__angular_router__["i" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], [__WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */], [__WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_33__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_30__services_user_info_service__["a" /* UserInfoService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */], [__WEBPACK_IMPORTED_MODULE_31__app_config__["a" /* AppConfig */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_36__services_api_order_service__["a" /* OrderService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_37__services_api_product_service__["a" /* ProductService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_38__services_api_customer_service__["a" /* CustomerService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_39__services_api_employee_service__["a" /* EmployeeService */], [__WEBPACK_IMPORTED_MODULE_32__services_api_api_request_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_35__services_api_translate_service__["a" /* TranslateService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_18__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵa"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], function () { return [__WEBPACK_IMPORTED_MODULE_29__angular_router__["v" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["A" /* ɵg */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["A" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["ɵh"](p0_0), __WEBPACK_IMPORTED_MODULE_29__angular_router__["B" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"]], __WEBPACK_IMPORTED_MODULE_29__angular_router__["A" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["BrowserModule"], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["BrowserModule"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["t" /* ɵba */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["t" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["g" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["g" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["p" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["p" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__["NgxDatatableModule"], __WEBPACK_IMPORTED_MODULE_40__swimlane_ngx_datatable_release_datatable_module__["NgxDatatableModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__["a" /* AxesModule */], __WEBPACK_IMPORTED_MODULE_41__swimlane_ngx_charts_release_common_axes_axes_module__["a" /* AxesModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_42__swimlane_ngx_charts_release_common_tooltip_tooltip_module__["a" /* TooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__["a" /* ChartCommonModule */], __WEBPACK_IMPORTED_MODULE_43__swimlane_ngx_charts_release_common_chart_common_module__["a" /* ChartCommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__["a" /* AreaChartModule */], __WEBPACK_IMPORTED_MODULE_44__swimlane_ngx_charts_release_area_chart_area_chart_module__["a" /* AreaChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__["a" /* BarChartModule */], __WEBPACK_IMPORTED_MODULE_45__swimlane_ngx_charts_release_bar_chart_bar_chart_module__["a" /* BarChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__["a" /* BubbleChartModule */], __WEBPACK_IMPORTED_MODULE_46__swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__["a" /* BubbleChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__["a" /* ForceDirectedGraphModule */], __WEBPACK_IMPORTED_MODULE_47__swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__["a" /* ForceDirectedGraphModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__["a" /* HeatMapModule */], __WEBPACK_IMPORTED_MODULE_48__swimlane_ngx_charts_release_heat_map_heat_map_module__["a" /* HeatMapModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__["a" /* LineChartModule */], __WEBPACK_IMPORTED_MODULE_49__swimlane_ngx_charts_release_line_chart_line_chart_module__["a" /* LineChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__["a" /* PieChartModule */], __WEBPACK_IMPORTED_MODULE_50__swimlane_ngx_charts_release_pie_chart_pie_chart_module__["a" /* PieChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__["a" /* PolarChartModule */], __WEBPACK_IMPORTED_MODULE_51__swimlane_ngx_charts_release_polar_chart_polar_chart_module__["a" /* PolarChartModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__["a" /* NumberCardModule */], __WEBPACK_IMPORTED_MODULE_52__swimlane_ngx_charts_release_number_card_number_card_module__["a" /* NumberCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__["a" /* TreeMapModule */], __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_charts_release_tree_map_tree_map_module__["a" /* TreeMapModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__["a" /* GaugeModule */], __WEBPACK_IMPORTED_MODULE_54__swimlane_ngx_charts_release_gauge_gauge_module__["a" /* GaugeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__["a" /* NgxChartsModule */], __WEBPACK_IMPORTED_MODULE_55__swimlane_ngx_charts_release_ngx_charts_module__["a" /* NgxChartsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["o" /* ClrIconModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["o" /* ClrIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_15" /* ɵb */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_15" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_75" /* ɵk */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_75" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["l" /* ClrDropdownModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["l" /* ClrDropdownModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["g" /* ClrAlertModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["g" /* ClrAlertModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["m" /* ClrEmphasisModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["m" /* ClrEmphasisModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["n" /* ClrFormsModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["n" /* ClrFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["r" /* ClrLoadingModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["r" /* ClrLoadingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_81" /* ɵu */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_81" /* ɵu */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_34" /* ɵce */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_34" /* ɵce */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["k" /* ClrDatagridModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["k" /* ClrDatagridModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["w" /* ClrStackViewModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["w" /* ClrStackViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["A" /* ClrTreeViewModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["A" /* ClrTreeViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["j" /* ClrDataModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["j" /* ClrDataModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_37" /* ɵcl */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_37" /* ɵcl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["t" /* ClrModalModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["t" /* ClrModalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["q" /* ClrLoadingButtonModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["q" /* ClrLoadingButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["h" /* ClrButtonGroupModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["h" /* ClrButtonGroupModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["i" /* ClrButtonModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["i" /* ClrButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["x" /* ClrSyntaxHighlightModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["x" /* ClrSyntaxHighlightModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_44" /* ɵcu */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_44" /* ɵcu */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["s" /* ClrMainContainerModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["s" /* ClrMainContainerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["u" /* ClrNavigationModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["u" /* ClrNavigationModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_47" /* ɵcz */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_47" /* ɵcz */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["y" /* ClrTabsModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["y" /* ClrTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_56" /* ɵdj */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_56" /* ɵdj */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["p" /* ClrLayoutModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["p" /* ClrLayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_65" /* ɵdu */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["_65" /* ɵdu */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["z" /* ClrTooltipModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["z" /* ClrTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["v" /* ClrPopoverModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["v" /* ClrPopoverModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["B" /* ClrWizardModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["B" /* ClrWizardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["f" /* ClarityModule */], __WEBPACK_IMPORTED_MODULE_28_clarity_angular__["f" /* ClarityModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["u" /* ɵa */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["x" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["t" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */], { useHash: true }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_18__angular_common__["LocationStrategy"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["w" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["PlatformLocation"], [2, __WEBPACK_IMPORTED_MODULE_18__angular_common__["APP_BASE_HREF"]], __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_18__angular_common__["Location"], [__WEBPACK_IMPORTED_MODULE_18__angular_common__["LocationStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoader"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoaderConfig"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["j" /* ROUTES */], function () { return [[{ path: "", redirectTo: "/home/dashboard/order", pathMatch: "full" }, { path: "home", component: __WEBPACK_IMPORTED_MODULE_56__home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */]], children: [{ path: "", redirectTo: "/home/dashboard/order", pathMatch: "full", data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }, { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_57__pages_dashboard_dashboard_component__["a" /* DashboardComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }], children: [{ path: "", redirectTo: "/home/dashboard/order", pathMatch: "full" }, { path: "order", component: __WEBPACK_IMPORTED_MODULE_58__pages_order_stats_order_stats_component__["a" /* OrderStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] }, { path: "product", component: __WEBPACK_IMPORTED_MODULE_59__pages_product_stats_product_stats_component__["a" /* ProductStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] }] }, { path: "orders", component: __WEBPACK_IMPORTED_MODULE_60__pages_orders_orders_component__["a" /* OrdersComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }, { path: "orders/:id", component: __WEBPACK_IMPORTED_MODULE_61__pages_order_details_order_details_component__["a" /* OrderDetailsComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] }, { path: "products", component: __WEBPACK_IMPORTED_MODULE_62__pages_products_products_component__["a" /* ProductsComponent */], data: [{ selectedHeaderItemIndex: 2, selectedSubNavItemIndex: -1 }] }, { path: "customers", component: __WEBPACK_IMPORTED_MODULE_63__pages_customers_customers_component__["a" /* CustomersComponent */], data: [{ selectedHeaderItemIndex: 3, selectedSubNavItemIndex: -1 }] }, { path: "employees", component: __WEBPACK_IMPORTED_MODULE_64__pages_employees_employees_component__["a" /* EmployeesComponent */], data: [{ selectedHeaderItemIndex: 4, selectedSubNavItemIndex: -1 }] }] }, { path: "login", component: __WEBPACK_IMPORTED_MODULE_65__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }, { path: "logout", component: __WEBPACK_IMPORTED_MODULE_66__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }, { path: "**", component: __WEBPACK_IMPORTED_MODULE_67__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["y" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["t" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_18__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_29__angular_router__["j" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["h" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["s" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["k" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["p" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["p" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["u" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_68__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_68__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["m" /* ɵe */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["n" /* ɵf */], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/badge/badge.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_BadgeComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_BadgeComponent_0;
/* unused harmony export View_BadgeComponent_Host_0 */
/* unused harmony export BadgeComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__badge_component__ = __webpack_require__("../../../../../src/app/components/badge/badge.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 


var styles_BadgeComponent = [];
var RenderType_BadgeComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_BadgeComponent, data: {} });

function View_BadgeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "s-badge ", _co.badgeCls, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.text; _ck(_v, 1, 0, currVal_1); }); }
function View_BadgeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "s-badge", [], null, null, null, View_BadgeComponent_0, RenderType_BadgeComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_1__badge_component__["a" /* BadgeComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BadgeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("s-badge", __WEBPACK_IMPORTED_MODULE_1__badge_component__["a" /* BadgeComponent */], View_BadgeComponent_Host_0, { text: "text", badgeCls: "badgeCls" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
var BadgeComponent = (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    return BadgeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/legend/legend.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_LegendComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_LegendComponent_0;
/* unused harmony export View_LegendComponent_Host_0 */
/* unused harmony export LegendComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__legend_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/legend/legend.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__legend_component__ = __webpack_require__("../../../../../src/app/components/legend/legend.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 




var styles_LegendComponent = [__WEBPACK_IMPORTED_MODULE_0__legend_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LegendComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LegendComponent, data: {} });

function View_LegendComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 14, "div", [["class", "s-legend-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 2, "div", [["class", "s-legend-color"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgStyle"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](4, { "background-color": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 7, "div", [["class", "s-legend-value-wrap"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "div", [["class", "s-legend-value"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "div", [["class", "s-legend-label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](12, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit.color); _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.value; _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.name; _ck(_v, 12, 0, currVal_2); }); }
function View_LegendComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 4, "div", [["class", "s-legend-wrap"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LegendComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.legend; _ck(_v, 4, 0, currVal_0); }, null); }
function View_LegendComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-legend", [], null, null, null, View_LegendComponent_0, RenderType_LegendComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__legend_component__["a" /* LegendComponent */], [], null, null)], null, null); }
var LegendComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-legend", __WEBPACK_IMPORTED_MODULE_3__legend_component__["a" /* LegendComponent */], View_LegendComponent_Host_0, { legend: "legend" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/legend/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
var LegendComponent = (function () {
    function LegendComponent() {
    }
    return LegendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/legend/legend.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".s-legend-wrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 5px 0; }\n  .s-legend-wrap[_ngcontent-%COMP%]   .s-legend-item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 32px;\n    margin-right: 20px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .s-legend-wrap[_ngcontent-%COMP%]   .s-legend-item[_ngcontent-%COMP%]   .s-legend-color[_ngcontent-%COMP%] {\n      width: 5px; }\n    .s-legend-wrap[_ngcontent-%COMP%]   .s-legend-item[_ngcontent-%COMP%]   .s-legend-value-wrap[_ngcontent-%COMP%] {\n      margin: 0px 3px; }\n    .s-legend-wrap[_ngcontent-%COMP%]   .s-legend-item[_ngcontent-%COMP%]   .s-legend-label[_ngcontent-%COMP%] {\n      font-size: 12px;\n      height: 14px;\n      line-height: 15px; }\n    .s-legend-wrap[_ngcontent-%COMP%]   .s-legend-item[_ngcontent-%COMP%]   .s-legend-value[_ngcontent-%COMP%] {\n      font-size: 18px;\n      height: 18px; }"];



/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_LogoComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_LogoComponent_0;
/* unused harmony export View_LogoComponent_Host_0 */
/* unused harmony export LogoComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 


var styles_LogoComponent = [];
var RenderType_LogoComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_LogoComponent, data: {} });

function View_LogoComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 19, ":svg:svg", [["style", "width:100%; height:100%"], ["viewBox", "0 0 80 100"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 0, ":svg:path", [["d", "M-1-1h82v102H-1z"], ["fill", "none"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 14, ":svg:g", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 11, ":svg:g", [["stroke", "null"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 0, ":svg:path", [["d", "M77.7 40.2c0 20.2-16.4 36.6-36.7 36.6-20.3 0-36.8-16.4-36.8-36.6C4.2 20 20.7 3.5 41 3.5c20.3 0 36.7 16.4 36.7 36.7z"], ["fill", "#FECD57"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](11, 0, null, null, 0, ":svg:path", [["d", "M53.6 31.6l-9.3 2.8-8 7V50l3.3 7.4 8.5 2.3 9.7-3.5 5-10.6V29.3z"], ["fill", "#9ED36A"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 0, ":svg:path", [["d", "M36.3 50.4L37 40l-3-1.3-12.3-2.5.6 10 3 7.2 4 3.7 5.4 1.6 3.5-2z"], ["fill", "#8AC054"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](15, 0, null, null, 0, ":svg:path", [["d", "M29.2 76.5h20.4v17.3H29.2z"], ["fill", "#CBD0D8"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 0, ":svg:path", [["d", "M79.5 40.3C79.5 18.6 61.8 1 40 1S.5 18.6.5 40.3C.5 58 12 72.7 28 77.8h-.4-.2c-1 .3-1.8 1.4-1.5 2.5 0 1 1 1.5 1.8 1.6v3.8h-.2-.2c-1 .4-1.8 1.5-1.5 2.6 0 1 1 1.5 1.8 1.5v4h-.2-.2c-1 .2-1.8 1.3-1.5 2.4.2 1 1.2 1.7 2.2 1.5l9.7-1.5v.2c0 1 1 2 2.2 1.8 1 0 2-1 1.8-2.2V96l10.4-1.7h.2c1-.3 1.7-1.4 1.5-2.5-.2-1-1-1.5-1.8-1.5v-4h.4c1-.3 1.7-1.4 1.5-2.5-.2-1-1-1.5-1.8-1.6v-4.5c15.8-5 27.3-20 27.3-37.4zM15 65.3c-3.3-3.3-5.8-7-7.6-11.2-2-4.3-2.8-9-2.8-13.7 0-4.7 1-9.3 2.8-13.7 1.8-4.2 4.3-8 7.6-11.2 3.2-3.2 7-5.8 11.2-7.6C30.6 6 35.2 5 40 5c4.8 0 9.4 1 13.8 2.8 4.2 1.8 8 4.4 11.2 7.6 3.3 3.2 5.8 7 7.6 11.2 1.8 4.4 2.8 9 2.8 13.7 0 4.8-1 9.4-2.8 13.8-1.8 4.3-4.3 8-7.6 11.3-3.2 3.2-7 5.8-11.2 7.5-3 1.3-6.2 2-9.4 2.5H44c-1.2.2-2.6.3-4 .3h-1.2C37.6 70 38 64.3 40.3 59c2.4 1.6 5.2 2.4 8 2.4 4.5 0 9-2 11.8-5.8 8.3-10.6 4.7-30.2 4.7-30.2S45.7 27 37 36.8C30.8 33.4 22.3 33 19.6 33h-1s-1 15.6 6.4 23c2.2 2.4 5.2 3.5 8.2 3.5 1 0 1.8 0 2.7-.3-.4.8-.6 1.5-.8 2.3-1.2 4.5-1.4 9-.6 13.7-3-.4-5.7-1.2-8.4-2.4-4.2-1.7-8-4.3-11.2-7.5zM53 43c.6-.5 1-1.3.8-2-.2-1.2-1.3-2-2.4-1.8-.3 0-.5.2-.8.4-.2 0-5.3 3.6-9.8 10L39 52.2c-.6-1.3-1-2.7-1.3-4.2-.4-3 .4-5.7 2-8 3.6-4.6 10-7.2 15-8.6 2.4-.7 4.7-1 6.5-1.4 0 1.8.3 4 .2 6.6 0 5-1 12-4.5 16.5-2 2.8-5.3 4.3-8.7 4.3-2.2 0-4.4-.7-6.3-2l2-3.2c4-5.7 9-9 9-9zm-19.5 3l-1-1.2c-.5-.4-1-.6-1.5-.7-1.2 0-2 1-2.2 2 0 .6.2 1 .5 1.5C31.6 50 34 53 35.6 55c-.8.3-1.6.5-2.4.5-2 0-4-.8-5.4-2.3-2.3-2.4-4-6.5-4.7-11.8 0-1.5-.3-3-.3-4 1.7 0 3.7.3 5.8.7 2.5.7 4.6 1.4 6.4 2.3-1 1.8-1.4 3.8-1.5 5.8zM48 91L32 93.3v-4L48 87v3.8zm0-8L32 85.2v-4l13-1.8 3.3-.6v4z"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_LogoComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "s-logo", [], null, null, null, View_LogoComponent_0, RenderType_LogoComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], [], null, null)], null, null); }
var LogoComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("s-logo", __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], View_LogoComponent_Host_0, { fontColor: "fontColor", iconColor: "iconColor" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var LogoComponent = (function () {
    function LogoComponent() {
        this.fontColor = "#63666A";
        this.iconColor = "#E3642B";
    }
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/track_scroll/track_scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var TrackScrollDirective = (function () {
    function TrackScrollDirective(document) {
        this.document = document;
        this.bottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TrackScrollDirective.prototype.track = function () {
        if (document.body.scrollHeight == window.scrollY + window.innerHeight) {
            this.bottom.emit(true);
        }
    };
    return TrackScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/home.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_HomeComponent */
/* unused harmony export View_HomeComponent_0 */
/* unused harmony export View_HomeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_scss_ngstyle__ = __webpack_require__("../../../../../src/app/home.scss.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_clarity_angular_clarity_angular_ngfactory__ = __webpack_require__("../../../../clarity-angular/clarity-angular.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_logo_logo_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 











var styles_HomeComponent = [__WEBPACK_IMPORTED_MODULE_0__home_scss_ngstyle__["a" /* styles */]];
var RenderType_HomeComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 20, "div", [["class", "alert alert-app-level "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeAppAlert() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "clr-icon", [["aria-hidden", "true"], ["shape", "close"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_14" /* ɵa */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 11, "div", [["class", "alert-item alert-item"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_clarity_angular_clarity_angular_ngfactory__["e" /* View_AlertItem_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_clarity_angular_clarity_angular_ngfactory__["a" /* RenderType_AlertItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["b" /* AlertItem */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_79" /* ɵs */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, 0, 1, "div", [["class", "alert-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                Alert Type: Info\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, 0, 4, "div", [["class", "alert-actions"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "button", [["class", "btn alert-action"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Action"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], null, null); }
function View_HomeComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["o" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "span", [["class", "nav-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.href; _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.label; _ck(_v, 6, 0, currVal_4); }); }
function View_HomeComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["o" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["n" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.href; _ck(_v, 3, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.label; _ck(_v, 7, 0, currVal_4); }); }
function View_HomeComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, "nav", [["class", "subnav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "ul", [["class", "nav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.appHeaderItems[_co.selectedHeaderItemIndex].subNav; _ck(_v, 5, 0, currVal_0); }, null); }
function View_HomeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 46, "div", [["class", "no-margin"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 30, "header", [["class", "header header-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 9, "div", [["class", "branding"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 2, "div", [["style", "width:40px;margin-right:10px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "s-logo", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__components_logo_logo_component_ngfactory__["b" /* View_LogoComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__components_logo_logo_component_ngfactory__["a" /* RenderType_LogoComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__components_logo_logo_component__["a" /* LogoComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["SprinGular"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 4, "div", [["class", "header-nav"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](24, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 10, "div", [["class", "header-actions"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](29, 0, null, null, 1, "label", [["style", "line-height: 60px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](30, null, [" ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](32, 0, null, null, 4, "a", [["class", "nav-link nav-text"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["o" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 1, "clr-icon", [["shape", "power"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](36, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_14" /* ɵa */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](42, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](45, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["q" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showAppAlert; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.appHeaderItems; _ck(_v, 24, 0, currVal_1); var currVal_5 = "/logout"; _ck(_v, 33, 0, currVal_5); var currVal_6 = (_co.appHeaderItems[_co.selectedHeaderItemIndex].subNav && (_co.appHeaderItems[_co.selectedHeaderItemIndex].subNav.length > 0)); _ck(_v, 42, 0, currVal_6); _ck(_v, 45, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.userName; _ck(_v, 30, 0, currVal_2); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).target; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).href; _ck(_v, 32, 0, currVal_3, currVal_4); }); }
function View_HomeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "home-comp", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_9__services_api_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_10__services_user_info_service__["a" /* UserInfoService */]], null, null)], null, null); }
var HomeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("home-comp", __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");







var HomeComponent = (function () {
    function HomeComponent(router, activeRoute, loginService, userInfoService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
        this.showAppAlert = false;
        this.appHeaderItems = [
            {
                label: 'Dashboard',
                href: '/home/dashboard',
                subNav: [
                    { label: "Order Stats", href: "/home/dashboard/order" },
                    { label: "Product Stats", href: "/home/dashboard/product" }
                ]
            },
            { label: 'Orders', href: '/home/orders', subNav: [] },
            { label: 'Products', href: '/home/products', subNav: [] },
            { label: 'Customers', href: '/home/customers', subNav: [] },
            { label: 'Employees', href: '/home/employees', subNav: [] }
        ];
        this.selectedHeaderItemIndex = 0;
        this.selectedSubNavItemIndex = 1;
        this.userName = "";
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            ;
            return route;
        })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (data) {
            console.log("Route data===: ", data[0]);
            _this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
            _this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
        });
        this.userName = this.userInfoService.getUserName();
    }
    HomeComponent.prototype.navbarSelectionChange = function (val) {
        // console.log(val);
    };
    HomeComponent.prototype.closeAppAlert = function () {
        this.showAppAlert = false;
    };
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home.scss.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/pages/404/page-not-found.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PageNotFoundComponent */
/* unused harmony export View_PageNotFoundComponent_0 */
/* unused harmony export View_PageNotFoundComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/404/page-not-found.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/404/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 




var styles_PageNotFoundComponent = [__WEBPACK_IMPORTED_MODULE_0__page_not_found_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_PageNotFoundComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_PageNotFoundComponent, data: {} });

function View_PageNotFoundComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "s-page-not-found"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 404 Page Not Found "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_PageNotFoundComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "page-not-found", [], null, null, null, View_PageNotFoundComponent_0, RenderType_PageNotFoundComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__["a" /* PageNotFoundComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]], null, null)], null, null); }
var PageNotFoundComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("page-not-found", __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__["a" /* PageNotFoundComponent */], View_PageNotFoundComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/404/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        console.log("404 : %s", router.url);
    }
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/404/page-not-found.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".s-page-not-found[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background-color: #005d84;\n  color: #eee;\n  font-size: 24px; }"];



/***/ }),

/***/ "../../../../../src/app/pages/customers/customers.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_CustomersComponent */
/* unused harmony export View_CustomersComponent_0 */
/* unused harmony export View_CustomersComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customers_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/customers/customers.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_track_scroll_track_scroll_directive__ = __webpack_require__("../../../../../src/app/directives/track_scroll/track_scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customers_component__ = __webpack_require__("../../../../../src/app/pages/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_customer_service__ = __webpack_require__("../../../../../src/app/services/api/customer.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 










var styles_CustomersComponent = [__WEBPACK_IMPORTED_MODULE_0__customers_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_CustomersComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomersComponent, data: {} });

function View_CustomersComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "spinner spinner-lg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Loading..."]))], null, null); }
function View_CustomersComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 21, "div", [["class", "pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Lazy Loading Data "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "p", [["style", "width:1000px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" This is an example of lazy loading data. There are about 100 customer and\n        the page initially loads 10 customer.\n        When you scroll to bottom it loads another 10, till it loads all the 100 customer\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 7, "ngx-datatable", [["class", "ngx-datatable"], ["style", "width:1000px;"], ["trackScroll", ""]], [[2, "fixed-header", null], [2, "fixed-row", null], [2, "scroll-vertical", null], [2, "scroll-horz", null], [2, "selectable", null], [2, "checkbox-selection", null], [2, "cell-selection", null], [2, "single-selection", null], [2, "multi-selection", null], [2, "multi-click-selection", null]], [[null, "bottom"], ["window", "resize"], ["document", "scroll"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onWindowResize() !== false);
        ad = (pd_0 && ad);
    } if (("document:scroll" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).track() !== false);
        ad = (pd_1 && ad);
    } if (("bottom" === en)) {
        var pd_2 = (_co.onScroll() !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["b" /* View_DatatableComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["a" /* RenderType_DatatableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 4571136, null, 4, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__["DatatableComponent"], [__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"]], { rows: [0, "rows"], columns: [1, "columns"], scrollbarV: [2, "scrollbarV"], rowHeight: [3, "rowHeight"], columnMode: [4, "columnMode"], headerHeight: [5, "headerHeight"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { columnTemplates: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { rowDetail: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { groupHeader: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 4, { footer: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__directives_track_scroll_track_scroll_directive__["a" /* TrackScrollDirective */], [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"]], null, { bottom: "bottom" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_CustomersComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.rows; var currVal_11 = _co.columns; var currVal_12 = false; var currVal_13 = "auto"; var currVal_14 = "standard"; var currVal_15 = 45; _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.isLoading; _ck(_v, 20, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isFixedHeader; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isFixedRow; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isVertScroll; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isHorScroll; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isSelectable; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isCheckboxSelection; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isCellSelection; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isSingleSelection; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isMultiSelection; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).isMultiClickSelection; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_CustomersComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-customers-pg", [], null, null, null, View_CustomersComponent_0, RenderType_CustomersComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__customers_component__["a" /* CustomersComponent */], [__WEBPACK_IMPORTED_MODULE_8__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_9__services_api_customer_service__["a" /* CustomerService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomersComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-customers-pg", __WEBPACK_IMPORTED_MODULE_7__customers_component__["a" /* CustomersComponent */], View_CustomersComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_customer_service__ = __webpack_require__("../../../../../src/app/services/api/customer.service.ts");


var CustomersComponent = (function () {
    function CustomersComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.pageSize = 10;
        this.currentPage = 0;
        this.isLastPageLoaded = false;
        this.isLoading = false;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "id", name: "ID", width: 50 },
            { prop: "firstName", name: "First Name", width: 120 },
            { prop: "lastName", name: "Last Name", width: 120 },
            { prop: "company", name: "Company", width: 120 },
            { prop: "email", name: "Email", width: 200 },
            { prop: "phone", name: "Phone", width: 160 },
            { prop: "address", name: "Address", width: 220 },
        ];
    };
    CustomersComponent.prototype.getPageData = function (isAppend) {
        if (isAppend === void 0) { isAppend = false; }
        if (this.isLastPageLoaded === false) {
            var me_1 = this;
            me_1.isLoading = true;
            this.customerService.getCustomers(this.currentPage, this.pageSize).subscribe(function (data) {
                me_1.isLastPageLoaded = data.last;
                me_1.currentPage = data.currentPageNumber + 1;
                if (isAppend === true) {
                    me_1.rows = me_1.rows.concat(data.items);
                }
                else {
                    me_1.rows = data.items;
                }
                me_1.isLoading = false;
            });
        }
    };
    CustomersComponent.prototype.onScroll = function () {
        console.log("bottom");
        if (this.isLoading === false) {
            this.getPageData(true);
        }
    };
    return CustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/customers/customers.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DashboardComponent */
/* unused harmony export View_DashboardComponent_0 */
/* unused harmony export View_DashboardComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 




var styles_DashboardComponent = [__WEBPACK_IMPORTED_MODULE_0__dashboard_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_DashboardComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["q" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_DashboardComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-dashboard-pg", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], [], null, null)], null, null); }
var DashboardComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-dashboard-pg", __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".s-dashboard-pg[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-dashboard-pg[_ngcontent-%COMP%]   .chart-box[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }"];



/***/ }),

/***/ "../../../../../src/app/pages/employees/employees.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EmployeesComponent */
/* unused harmony export View_EmployeesComponent_0 */
/* unused harmony export View_EmployeesComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employees_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/employees/employees.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees_component__ = __webpack_require__("../../../../../src/app/pages/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_employee_service__ = __webpack_require__("../../../../../src/app/services/api/employee.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 








var styles_EmployeesComponent = [__WEBPACK_IMPORTED_MODULE_0__employees_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_EmployeesComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_EmployeesComponent, data: {} });

function View_EmployeesComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 9, "div", [["class", "pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 6, "ngx-datatable", [["class", "ngx-datatable"], ["style", "width:900px;"]], [[2, "fixed-header", null], [2, "fixed-row", null], [2, "scroll-vertical", null], [2, "scroll-horz", null], [2, "selectable", null], [2, "checkbox-selection", null], [2, "cell-selection", null], [2, "single-selection", null], [2, "multi-selection", null], [2, "multi-click-selection", null]], [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).onWindowResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["b" /* View_DatatableComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["a" /* RenderType_DatatableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 4571136, null, 4, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__["DatatableComponent"], [__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"]], { rows: [0, "rows"], columns: [1, "columns"], scrollbarV: [2, "scrollbarV"], rowHeight: [3, "rowHeight"], columnMode: [4, "columnMode"], headerHeight: [5, "headerHeight"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { columnTemplates: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { rowDetail: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { groupHeader: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 4, { footer: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.rows; var currVal_11 = _co.columns; var currVal_12 = false; var currVal_13 = "auto"; var currVal_14 = "standard"; var currVal_15 = 45; _ck(_v, 3, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isFixedHeader; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isFixedRow; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isVertScroll; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isHorScroll; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isSelectable; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isCheckboxSelection; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isCellSelection; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isSingleSelection; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isMultiSelection; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).isMultiClickSelection; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_EmployeesComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-employees-pg", [], null, null, null, View_EmployeesComponent_0, RenderType_EmployeesComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__employees_component__["a" /* EmployeesComponent */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_7__services_api_employee_service__["a" /* EmployeeService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmployeesComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-employees-pg", __WEBPACK_IMPORTED_MODULE_5__employees_component__["a" /* EmployeesComponent */], View_EmployeesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_employee_service__ = __webpack_require__("../../../../../src/app/services/api/employee.service.ts");


var EmployeesComponent = (function () {
    function EmployeesComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "id", name: "ID", width: 50 },
            { prop: "firstName", name: "First Name", width: 120 },
            { prop: "lastName", name: "Last Name", width: 120 },
            { prop: "email", name: "Email", width: 250 },
            { prop: "phone", name: "Phone", width: 160 },
            { prop: "department", name: "Department", width: 220 }
        ];
    };
    EmployeesComponent.prototype.getPageData = function () {
        var _this = this;
        var me = this;
        this.employeeService.getEmployees().subscribe(function (data) {
            _this.rows = data.items;
        });
    };
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/employees/employees.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginComponent */
/* unused harmony export View_LoginComponent_0 */
/* unused harmony export View_LoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/login/login.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 









var styles_LoginComponent = [__WEBPACK_IMPORTED_MODULE_0__login_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LoginComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["style", "color:indianred; font-weight: bold"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errMsg; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 45, "div", [["class", "s-login-pg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 8, "div", [["class", "s-login-pg-head"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 2, "div", [["style", "width:100px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "s-logo", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__["b" /* View_LogoComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__components_logo_logo_component_ngfactory__["a" /* RenderType_LogoComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__components_logo_logo_component__["a" /* LogoComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "p", [["style", "text-align: center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Sample app done with SpringBoot backend and Angular frontend "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 26, "form", [["class", "s-login-pg-form"], ["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.login() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["u" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 4210688, [["f", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 7, "input", [["name", "username"], ["placeholder", "Username (demo)"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 671744, [["username", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 7, "input", [["name", "password"], ["placeholder", "Password (demo)"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 671744, [["password", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["LOG IN"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 4, "div", [["class", "s-login-pg-foot"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 20, 0, currVal_15); var currVal_16 = "username"; var currVal_17 = _co.model.username; _ck(_v, 23, 0, currVal_16, currVal_17); var currVal_26 = ""; _ck(_v, 29, 0, currVal_26); var currVal_27 = "password"; var currVal_28 = _co.model.password; _ck(_v, 32, 0, currVal_27, currVal_28); var currVal_29 = _co.errMsg; _ck(_v, 43, 0, currVal_29); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).required ? "" : null); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassUntouched; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassTouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassPristine; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassDirty; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassValid; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassInvalid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 18, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).required ? "" : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 27, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); }); }
function View_LoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-login-pg", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_8__services_api_login_service__["a" /* LoginService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-login-pg", __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");


var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {};
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.getToken(this.model.username, this.model.password)
            .subscribe(function (resp) {
            if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID") {
                _this.errMsg = 'Username or password is incorrect';
                return;
            }
            _this.router.navigate([resp.landingPage]);
        }, function (errResponse) {
            switch (errResponse.status) {
                case 401:
                    _this.errMsg = 'Username or password is incorrect';
                    break;
                case 404:
                    _this.errMsg = 'Service not found';
                case 408:
                    _this.errMsg = 'Request Timedout';
                case 500:
                    _this.errMsg = 'Internal Server Error';
                default:
                    _this.errMsg = 'Server Error';
            }
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['signup']);
    };
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.s-login-pg[_ngcontent-%COMP%] {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  margin: 48px 16px 16px 16px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15); }\n  .s-login-pg[_ngcontent-%COMP%]   .s-login-pg-head[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 220px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #998;\n    padding: 16px;\n    color: white; }\n  .s-login-pg[_ngcontent-%COMP%]   .s-login-pg-form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 24px 16px; }\n    .s-login-pg[_ngcontent-%COMP%]   .s-login-pg-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      margin: 16px; }\n  .s-login-pg[_ngcontent-%COMP%]   .s-login-pg-foot[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }"];



/***/ }),

/***/ "../../../../../src/app/pages/logout/logout.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LogoutComponent */
/* unused harmony export View_LogoutComponent_0 */
/* unused harmony export View_LogoutComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logout_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/logout/logout.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_component__ = __webpack_require__("../../../../../src/app/pages/logout/logout.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





var styles_LogoutComponent = [__WEBPACK_IMPORTED_MODULE_0__logout_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LogoutComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LogoutComponent, data: {} });

function View_LogoutComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 10, "div", [["class", "tile column center white"], ["style", "width:500px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" You are now signed out "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" You may "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["o" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Sign in again "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_2 = "/login"; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).href; _ck(_v, 7, 0, currVal_0, currVal_1); }); }
function View_LogoutComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-logout-pg", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__logout_component__["a" /* LogoutComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]], null, null)], null, null); }
var LogoutComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-logout-pg", __WEBPACK_IMPORTED_MODULE_4__logout_component__["a" /* LogoutComponent */], View_LogoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

var LogoutComponent = (function () {
    function LogoutComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        localStorage.clear();
    }
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/logout/logout.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fafafa; }"];



/***/ }),

/***/ "../../../../../src/app/pages/order_details/order_details.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_OrderDetailsComponent */
/* unused harmony export View_OrderDetailsComponent_0 */
/* unused harmony export View_OrderDetailsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_details_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/order_details/order_details.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clarity_angular__ = __webpack_require__("../../../../clarity-angular/clarity-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__ = __webpack_require__("../../../../clarity-angular/clarity-angular.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_details_component__ = __webpack_require__("../../../../../src/app/pages/order_details/order_details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 









var styles_OrderDetailsComponent = [__WEBPACK_IMPORTED_MODULE_0__order_details_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_OrderDetailsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_OrderDetailsComponent, data: {} });

function View_OrderDetailsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 27, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "td", [["class", "left"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 1, "td", [["class", "left"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "td", [["class", "left"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "td", [["class", "left"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](12, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "td", [["class", "right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](15, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 1, "td", [["class", "right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](18, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 2, "td", [["style", "width:40px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 1, "clr-icon", [["class", "is-info"], ["shape", "edit"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_14" /* ɵa */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 2, "td", [["style", "width:40px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 1, "clr-icon", [["class", "is-error"], ["shape", "trash"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_14" /* ɵa */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.productCode; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.orderItemStatus; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.productName; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.category; _ck(_v, 12, 0, currVal_3); var currVal_4 = _v.context.$implicit.quantity; _ck(_v, 15, 0, currVal_4); var currVal_5 = _v.context.$implicit.unitPrice; _ck(_v, 18, 0, currVal_5); }); }
function View_OrderDetailsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 241, "div", [["class", "order-detail-pg pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 229, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormGroupDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](9, null, [" Order:", " "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 217, "clr-tabs", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["h" /* View_Tabs_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["d" /* RenderType_Tabs */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_70" /* ɵe */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_70" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_53" /* ɵdg */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_53" /* ɵdg */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_51" /* ɵdd */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_52" /* ɵde */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 1097728, null, 1, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_3" /* Tabs */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_70" /* ɵe */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_53" /* ɵdg */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_51" /* ɵdd */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { tabLinkDirectives: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 8404992, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_54" /* ɵdh */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, 0, 79, "clr-tab", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["g" /* View_Tab_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["b" /* RenderType_Tab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_77" /* ɵp */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](24, 180224, null, 2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["Z" /* Tab */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_53" /* ɵdg */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { tabLink: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { tabContent: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](29, 16777216, null, 0, 3, "button", [["clrTabLink", ""], ["role", "presentation"]], [[8, "id", 0], [1, "aria-selected", 0], [1, "aria-controls", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [2, "nav-item", null], [2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).activate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 16384, [[2, 4], [1, 4]], 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_1" /* TabLinkDirective */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_51" /* ɵdd */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 2244608, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_55" /* ɵdi */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_54" /* ɵdh */]], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Order Line"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, 0, 66, "clr-tab-content", [["role", "tabpanel"]], [[8, "id", 0], [1, "aria-labelledby", 0], [1, "aria-hidden", 0], [1, "data-hidden", 0]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["f" /* View_TabContent_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["c" /* RenderType_TabContent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](35, 49152, [[3, 4]], 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_0" /* TabContent */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](36, 2244608, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_55" /* ɵdi */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_54" /* ɵdh */]], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, 0, 23, "table", [["class", "s-order-header"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 21, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](43, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 1, "td", [["style", "width:125px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Customer     "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](47, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](48, null, [" ", " (", ") "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](50, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](51, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](54, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](55, null, [" ", " "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](57, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](58, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Order Status "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](62, null, [" ", " "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](65, 0, null, 0, 34, "table", [["class", "s-order-line table"], ["style", "width:100%;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, null, 25, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](69, 0, null, null, 22, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 1, "th", [["class", "left"], ["style", "width:60px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Code"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](74, 0, null, null, 1, "th", [["class", "left"], ["style", "width:110px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Line Status"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](77, 0, null, null, 1, "th", [["class", "left"], ["style", "width:200px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Product Name"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](80, 0, null, null, 1, "th", [["class", "left"], ["style", "width:150px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Category"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, null, 1, "th", [["class", "right"], ["style", "width:90px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Quantity"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 1, "th", [["class", "right"], ["style", "width:90px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Unit Price"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](89, 0, null, null, 1, "th", [["colspan", "2"], ["style", "width:50px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Actions"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](94, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_OrderDetailsComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](97, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](103, 0, null, 0, 126, "clr-tab", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["g" /* View_Tab_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["b" /* RenderType_Tab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_77" /* ɵp */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](105, 180224, null, 2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["Z" /* Tab */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_53" /* ɵdg */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 4, { tabLink: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 5, { tabContent: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](512, null, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](110, 16777216, null, 0, 3, "button", [["clrTabLink", ""], ["role", "presentation"]], [[8, "id", 0], [1, "aria-selected", 0], [1, "aria-controls", 0], [2, "btn", null], [2, "btn-link", null], [2, "nav-link", null], [2, "nav-item", null], [2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).activate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](111, 16384, [[4, 4], [1, 4]], 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_1" /* TabLinkDirective */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_51" /* ɵdd */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](112, 2244608, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_55" /* ɵdi */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_54" /* ɵdh */]], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Shipping Info"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](115, 0, null, 0, 113, "clr-tab-content", [["role", "tabpanel"]], [[8, "id", 0], [1, "aria-labelledby", 0], [1, "aria-hidden", 0], [1, "data-hidden", 0]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["f" /* View_TabContent_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_clarity_angular_clarity_angular_ngfactory__["c" /* RenderType_TabContent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](116, 49152, [[5, 4]], 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_0" /* TabContent */], [__WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_50" /* ɵdc */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](117, 2244608, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_55" /* ɵdi */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_54" /* ɵdh */]], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_76" /* ɵo */], __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_78" /* ɵr */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](119, 0, null, 0, 108, "section", [["class", "form-block"], ["style", "margin-top:32px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](121, 0, null, null, 105, "table", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](123, 0, null, null, 103, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](124, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](126, 0, null, null, 1, "td", [["style", "width:125px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Shipped Date "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](129, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](130, 0, null, null, 5, "input", [["colspan", "2"], ["formControlName", "shippedDate"], ["style", "width:120px"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 131)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 131).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 131)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 131)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](131, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](133, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](135, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](138, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](140, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Fee"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](143, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](144, 0, null, null, 5, "input", [["formControlName", "shippedFee"], ["style", "width:60px"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 145)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 145).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 145)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 145)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](145, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](147, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](149, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](153, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](155, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Address"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](158, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](159, 0, null, null, 5, "input", [["formControlName", "shipAddress1"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](160, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](162, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](164, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](168, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](170, 0, null, null, 0, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](172, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](173, 0, null, null, 5, "input", [["formControlName", "shipAddress2"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 174)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 174).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 174)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 174)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](174, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](176, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](178, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](182, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](184, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["City"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](187, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](188, 0, null, null, 5, "input", [["formControlName", "shipCity"], ["style", "width:150px"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 189)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 189).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 189)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 189)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](189, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](191, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](193, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](197, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](199, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["State"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](202, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](203, 0, null, null, 5, "input", [["formControlName", "shipState"], ["style", "width:150px"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 204)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 204).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 204)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 204)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](204, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](206, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](208, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](212, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](214, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Country"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](217, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](218, 0, null, null, 5, "input", [["formControlName", "shipCountry"], ["style", "width:150px"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 219)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 219).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 219)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 219)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](219, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](221, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */], [[3, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControlName */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](223, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](233, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](235, 0, null, null, 5, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 236).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](236, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_router__["m" /* RouterLink */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](238, 0, null, null, 1, "clr-icon", [["shape", "caret left"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](239, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2_clarity_angular__["_14" /* ɵa */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Back to Orders\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.frmOrderDetail; _ck(_v, 4, 0, currVal_7); var currVal_25 = _co.orderDetailsRec.orderLine; _ck(_v, 97, 0, currVal_25); var currVal_45 = "shippedDate"; _ck(_v, 133, 0, currVal_45); var currVal_53 = "shippedFee"; _ck(_v, 147, 0, currVal_53); var currVal_61 = "shipAddress1"; _ck(_v, 162, 0, currVal_61); var currVal_69 = "shipAddress2"; _ck(_v, 176, 0, currVal_69); var currVal_77 = "shipCity"; _ck(_v, 191, 0, currVal_77); var currVal_85 = "shipState"; _ck(_v, 206, 0, currVal_85); var currVal_93 = "shipCountry"; _ck(_v, 221, 0, currVal_93); var currVal_94 = "/home/orders"; _ck(_v, 236, 0, currVal_94); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _co.orderId; _ck(_v, 9, 0, currVal_8); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).tabLinkId; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).active; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).ariaControls; var currVal_12 = true; var currVal_13 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).inOverflow; var currVal_14 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).inOverflow; var currVal_15 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).inOverflow; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).active; _ck(_v, 29, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).tabContentId; var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ariaLabelledBy; var currVal_19 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).active; var currVal_20 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).active; _ck(_v, 34, 0, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = _co.orderDetailsRec.customerName; var currVal_22 = _co.orderDetailsRec.customerId; _ck(_v, 48, 0, currVal_21, currVal_22); var currVal_23 = _co.orderDetailsRec.customerEmail; _ck(_v, 55, 0, currVal_23); var currVal_24 = _co.orderDetailsRec.orderStatus; _ck(_v, 62, 0, currVal_24); var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).tabLinkId; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).active; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).ariaControls; var currVal_29 = true; var currVal_30 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).inOverflow; var currVal_31 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).inOverflow; var currVal_32 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).inOverflow; var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 111).active; _ck(_v, 110, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 116).tabContentId; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 116).ariaLabelledBy; var currVal_36 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 116).active; var currVal_37 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 116).active; _ck(_v, 115, 0, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassUntouched; var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassTouched; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassPristine; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassDirty; var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassValid; var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassInvalid; var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 135).ngClassPending; _ck(_v, 130, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassUntouched; var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassTouched; var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassPristine; var currVal_49 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassDirty; var currVal_50 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassValid; var currVal_51 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassInvalid; var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 149).ngClassPending; _ck(_v, 144, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52); var currVal_54 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassUntouched; var currVal_55 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassTouched; var currVal_56 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassPristine; var currVal_57 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassDirty; var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassValid; var currVal_59 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassInvalid; var currVal_60 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 164).ngClassPending; _ck(_v, 159, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_62 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassUntouched; var currVal_63 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassTouched; var currVal_64 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassPristine; var currVal_65 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassDirty; var currVal_66 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassValid; var currVal_67 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassInvalid; var currVal_68 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 178).ngClassPending; _ck(_v, 173, 0, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68); var currVal_70 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassUntouched; var currVal_71 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassTouched; var currVal_72 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassPristine; var currVal_73 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassDirty; var currVal_74 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassValid; var currVal_75 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassInvalid; var currVal_76 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 193).ngClassPending; _ck(_v, 188, 0, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_78 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassUntouched; var currVal_79 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassTouched; var currVal_80 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassPristine; var currVal_81 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassDirty; var currVal_82 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassValid; var currVal_83 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassInvalid; var currVal_84 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 208).ngClassPending; _ck(_v, 203, 0, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84); var currVal_86 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassUntouched; var currVal_87 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassTouched; var currVal_88 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassPristine; var currVal_89 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassDirty; var currVal_90 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassValid; var currVal_91 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassInvalid; var currVal_92 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 223).ngClassPending; _ck(_v, 218, 0, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92); }); }
function View_OrderDetailsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-orders-pg", [], null, null, null, View_OrderDetailsComponent_0, RenderType_OrderDetailsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__order_details_component__["a" /* OrderDetailsComponent */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__services_api_order_service__["a" /* OrderService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OrderDetailsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-orders-pg", __WEBPACK_IMPORTED_MODULE_7__order_details_component__["a" /* OrderDetailsComponent */], View_OrderDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/order_details/order_details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");




var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(route, router, formBuilder, orderService) {
        /*
        this.frmOrderDetail = this.formBuilder.group({
            customerName   : ['',Validators.required],
            customerEmail  : ['',Validators.required],
            customerCompany: ['',Validators.required],
            orderStatus    : ['',Validators.required],
            orderDate      : ['',Validators.required],
            paymentType    : [''],
            paidDate       : [''],
            shipAddress1   : ['',Validators.required],
            shipAddress2   : ['',Validators.required],
            shipCity       : ['',Validators.required],
            shipCountry    : ['',Validators.required],
            shipState      : ['',Validators.required],
            shippedDate    : ['',Validators.required],
            shippedFee     : ['',Validators.required],
        });

        this.route.params.subscribe((p: Params) => {
            this.orderId = p["id"];
            this.orderService.getOrderDetails(this.orderId).subscribe( resp => {
                //this.orderRecord = resp[0];
                this.frmOrderDetail.setValue({
                    customerName   : [resp[0].customerName],
                    customerEmail  : [resp[0].customerEmail],
                    customerCompany: [resp[0].customerCompany],
                    orderStatus    : [resp[0].orderStatus],
                    orderDate      : [resp[0].orderDate],
                    paymentType    : [resp[0].paymentType],
                    paidDate       : [resp[0].paidDate],
                    shipAddress1   : [resp[0].shipAddress1],
                    shipAddress2   : [resp[0].shipAddress2],
                    shipCity       : [resp[0].shipCity],
                    shipCountry    : [resp[0].shipCountry],
                    shipState      : [resp[0].shipState],
                    shippedDate    : [resp[0].shippedDate],
                    shippedFee     : [resp[0].shippedFee]
                });
                this.frmOrderDetail = resp[0];
                //this.isOrderOnHold  = resp[0].policyState.toUpperCase()==="ACTIVE"?true:false;

                console.log(this.orderRecord );

            });

        });
        */
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.orderDetailsRec = { id: '', orderLine: [] };
        this.isOrderOnHold = false;
        this.rows = [];
        this.columns = [
            { prop: "productName", name: "Product", width: 200 },
            { prop: "productCode", name: "Code", width: 70 },
            { prop: "category", name: "Category", width: 100 },
            { prop: "listPrice", name: "List Price", width: 70 }
        ];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.frmOrderDetail = this.formBuilder.group({
            customerName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            customerEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            customerCompany: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            orderStatus: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            orderDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            paymentType: [''],
            paidDate: [''],
            shipAddress1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shipAddress2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shipCity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shipCountry: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shipState: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shippedDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
            shippedFee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["s" /* Validators */].required],
        });
        this.getData();
    };
    OrderDetailsComponent.prototype.getData = function () {
        var me = this;
        this.route.params
            .switchMap(function (params) {
            me.orderId = params['id'];
            return me.orderService.getOrderDetails(params['id']);
        })
            .subscribe(function (resp) {
            console.log("Order details", resp[0]);
            me.frmOrderDetail.setValue({
                customerName: [resp[0].customerName],
                customerEmail: [resp[0].customerEmail],
                customerCompany: [resp[0].customerCompany],
                orderStatus: [resp[0].orderStatus],
                orderDate: [resp[0].orderDate],
                paymentType: [resp[0].paymentType],
                paidDate: [resp[0].paidDate],
                shipAddress1: [resp[0].shipAddress1],
                shipAddress2: [resp[0].shipAddress2],
                shipCity: [resp[0].shipCity],
                shipCountry: [resp[0].shipCountry],
                shipState: [resp[0].shipState],
                shippedDate: [resp[0].shippedDate],
                shippedFee: [resp[0].shippingFee]
            });
            me.orderDetailsRec = resp[0];
        });
    };
    OrderDetailsComponent.prototype.goBack = function () {
        console.log("Back");
    };
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/order_details/order_details.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".order-detail-pg[_ngcontent-%COMP%] {\n  width: 750px; }"];



/***/ }),

/***/ "../../../../../src/app/pages/order_stats/order_stats.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_OrderStatsComponent */
/* unused harmony export View_OrderStatsComponent_0 */
/* unused harmony export View_OrderStatsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_stats_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/order_stats/order_stats.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/pie-chart/advanced-pie-chart.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/pie-chart/advanced-pie-chart.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bar-chart/bar-vertical.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_bar_chart_bar_vertical_component__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bar-chart/bar-vertical.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_stats_component__ = __webpack_require__("../../../../../src/app/pages/order_stats/order_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 









var styles_OrderStatsComponent = [__WEBPACK_IMPORTED_MODULE_0__order_stats_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_OrderStatsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_OrderStatsComponent, data: {} });

function View_OrderStatsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 36, "div", [["class", "s-order-dash-pg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 9, "div", [["class", "chart-box"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Orders by Status "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 3, "ngx-charts-advanced-pie-chart", [["style", "position:relative"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component_ngfactory__["b" /* View_AdvancedPieChartComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component_ngfactory__["a" /* RenderType_AdvancedPieChartComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 4898816, null, 1, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component__["a" /* AdvancedPieChartComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { results: [0, "results"], view: [1, "view"], scheme: [2, "scheme"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { tooltipTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 9, "div", [["class", "chart-box"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Orders By Payment Type "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 3, "ngx-charts-advanced-pie-chart", [["style", "position:relative"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component_ngfactory__["b" /* View_AdvancedPieChartComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component_ngfactory__["a" /* RenderType_AdvancedPieChartComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 4898816, null, 1, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release_pie_chart_advanced_pie_chart_component__["a" /* AdvancedPieChartComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { results: [0, "results"], view: [1, "view"], scheme: [2, "scheme"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { tooltipTemplate: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 10, "div", [["class", "chart-box"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Orders By Country "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](29, 0, null, null, 4, "ngx-charts-bar-vertical", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__["b" /* View_BarVerticalComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__["a" /* RenderType_BarVerticalComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 4898816, null, 1, __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts_release_bar_chart_bar_vertical_component__["a" /* BarVerticalComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { results: [0, "results"], view: [1, "view"], scheme: [2, "scheme"], legend: [3, "legend"], xAxis: [4, "xAxis"], yAxis: [5, "yAxis"], showGridLines: [6, "showGridLines"], barPadding: [7, "barPadding"], roundDomains: [8, "roundDomains"], roundEdges: [9, "roundEdges"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { tooltipTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](32, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ordersByStatusData; var currVal_1 = _co.view; var currVal_2 = _co.colorScheme; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.ordersByPaymentData; var currVal_4 = _co.view; var currVal_5 = _co.colorScheme; _ck(_v, 19, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.ordersByCountryData; var currVal_7 = _ck(_v, 32, 0, 990, 270); var currVal_8 = _co.barColorScheme; var currVal_9 = false; var currVal_10 = true; var currVal_11 = true; var currVal_12 = true; var currVal_13 = 1; var currVal_14 = true; var currVal_15 = false; _ck(_v, 30, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }, null); }
function View_OrderStatsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-order_stats-pg", [], null, null, null, View_OrderStatsComponent_0, RenderType_OrderStatsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__order_stats_component__["a" /* OrderStatsComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_8__services_api_order_service__["a" /* OrderService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OrderStatsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-order_stats-pg", __WEBPACK_IMPORTED_MODULE_6__order_stats_component__["a" /* OrderStatsComponent */], View_OrderStatsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/order_stats/order_stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");



var OrderStatsComponent = (function () {
    function OrderStatsComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.view = [460, 180];
        this.ordersByStatusData = [];
        this.ordersByPaymentData = [];
        this.ordersByCountryData = [];
        this.colorScheme = {
            domain: ['#007cbb', '#61c673', '#ff8e28', '#ef2e2e']
        };
        this.barColorScheme = {
            domain: ['#007cbb']
        };
    }
    OrderStatsComponent.prototype.ngOnInit = function () {
        var me = this;
        this.getPageData();
    };
    OrderStatsComponent.prototype.getPageData = function () {
        var me = this;
        /**
         * This is an Example of sequencing RxJS observable using mergeMap
         * (We are sequencing the API calls as the H2 DB used by the backend is failing to serve multiple request at once)
         */
        me.orderService.getOrderStats("status")
            .mergeMap(function (statusData) {
            me.ordersByStatusData = statusData.items;
            console.log("Received Orders By Status");
            return me.orderService.getOrderStats("paytype");
        }).mergeMap(function (payTypeData) {
            me.ordersByPaymentData = payTypeData.items;
            console.log("Received Orders By Payment Type");
            return me.orderService.getOrderStats("country");
        }).subscribe(function (countryData) {
            me.ordersByCountryData = countryData.items;
            console.log("Received Orders By Country");
        });
    };
    return OrderStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/order_stats/order_stats.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["h4[_ngcontent-%COMP%] {\n  margin-top: 16px; }\n\n.s-order-dash-pg[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-order-dash-pg[_ngcontent-%COMP%]   .chart-box[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }"];



/***/ }),

/***/ "../../../../../src/app/pages/orders/orders.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_OrdersComponent */
/* unused harmony export View_OrdersComponent_0 */
/* unused harmony export View_OrdersComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orders_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/orders/orders.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_badge_badge_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/badge/badge.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_badge_badge_component__ = __webpack_require__("../../../../../src/app/components/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_legend_legend_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/legend/legend.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_legend_legend_component__ = __webpack_require__("../../../../../src/app/components/legend/legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable_release_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable_release_components_datatable_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable_release_components_datatable_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orders_component__ = __webpack_require__("../../../../../src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 













var styles_OrdersComponent = [__WEBPACK_IMPORTED_MODULE_0__orders_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_OrdersComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_OrdersComponent, data: {} });

function View_OrdersComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "spinner spinner-md"], ["style", "margin:0 10px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Loading..."]))], null, null); }
function View_OrdersComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "data-itemid", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["o" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "/home/orders/", _v.context.value, ""); _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", _v.context.value, ""); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.value; _ck(_v, 3, 0, currVal_4); }); }
function View_OrdersComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 1, "s-badge", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__components_badge_badge_component_ngfactory__["b" /* View_BadgeComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__components_badge_badge_component_ngfactory__["a" /* RenderType_BadgeComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__components_badge_badge_component__["a" /* BadgeComponent */], [], { text: [0, "text"], badgeCls: [1, "badgeCls"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = _v.context.value; var currVal_1 = ("s-badge-" + _v.context.value.toLowerCase().replace(" ", "")); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_OrdersComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](402653184, 1, { statusCellTpl: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](402653184, 2, { orderIdTpl: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 36, "div", [["class", "pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Large Dataset with - Dynamic DOM"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "p", [["style", "width:1140px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Here we are loading about 600 rows in one ajax call.\n    However to keep the DOM footprint low we don not create those many DOM elements.\n    As the user scrolls up and down , DOM elements are added and removed based on the data in memory.\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 27, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 24, "div", [["class", "col-lg-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 21, "div", [["style", "width:1140px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 10, "div", [["class", "s-info-bar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 0, "div", [["style", "flex:1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_OrdersComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 1, "s-legend", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__components_legend_legend_component_ngfactory__["b" /* View_LegendComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__components_legend_legend_component_ngfactory__["a" /* RenderType_LegendComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__components_legend_legend_component__["a" /* LegendComponent */], [], { legend: [0, "legend"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 6, "ngx-datatable", [["class", "ngx-datatable"], ["style", "height:450px; width:100%;"]], [[2, "fixed-header", null], [2, "fixed-row", null], [2, "scroll-vertical", null], [2, "scroll-horz", null], [2, "selectable", null], [2, "checkbox-selection", null], [2, "cell-selection", null], [2, "single-selection", null], [2, "multi-selection", null], [2, "multi-click-selection", null]], [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).onWindowResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["b" /* View_DatatableComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["a" /* RenderType_DatatableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 4571136, null, 4, __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable_release_components_datatable_component__["DatatableComponent"], [__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"]], { rows: [0, "rows"], columns: [1, "columns"], scrollbarV: [2, "scrollbarV"], rowHeight: [3, "rowHeight"], columnMode: [4, "columnMode"], headerHeight: [5, "headerHeight"], footerHeight: [6, "footerHeight"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { columnTemplates: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 4, { rowDetail: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 5, { groupHeader: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 6, { footer: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [[2, 2], ["orderIdTpl", 2]], null, 0, null, View_OrdersComponent_2)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [[1, 2], ["orderStatusCellTpl", 2]], null, 0, null, View_OrdersComponent_3)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 22, 0, currVal_0); var currVal_1 = _co.orderByStatusData; _ck(_v, 25, 0, currVal_1); var currVal_12 = _co.rows; var currVal_13 = _co.columns; var currVal_14 = true; var currVal_15 = 36; var currVal_16 = "standard"; var currVal_17 = 45; var currVal_18 = 45; _ck(_v, 29, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isFixedHeader; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isFixedRow; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isVertScroll; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isHorScroll; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isSelectable; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isCheckboxSelection; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isCellSelection; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isSingleSelection; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isMultiSelection; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).isMultiClickSelection; _ck(_v, 28, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_OrdersComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-orders-pg", [], null, null, null, View_OrdersComponent_0, RenderType_OrdersComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__orders_component__["a" /* OrdersComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_12__services_api_order_service__["a" /* OrderService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OrdersComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-orders-pg", __WEBPACK_IMPORTED_MODULE_11__orders_component__["a" /* OrdersComponent */], View_OrdersComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__ = __webpack_require__("../../../../../src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");




var OrdersComponent = (function () {
    function OrdersComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.orderByStatusData = [];
        this.isLoading = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "orderId", name: "ID", width: 65, cellTemplate: this.orderIdTpl },
            { prop: "orderDate", name: "Order Date", width: 105 },
            { prop: "orderStatus", name: "Status", width: 85, cellTemplate: this.statusCellTpl },
            { prop: "customerName", name: "Name", width: 150 },
            { prop: "customerEmail", name: "Email", width: 200 },
            { prop: "customerCompany", name: "Company", width: 110 },
            { prop: "paymentType", name: "Pay Type", width: 80 },
            { prop: "paidDate", name: "Pay Date", width: 105 },
            { prop: "shippedDate", name: "Ship Date", width: 105 },
            { prop: "shipCountry", name: "Ship Country", width: 110 }
        ];
    };
    OrdersComponent.prototype.getPageData = function () {
        var me = this;
        var legendColors = { "On Hold": '#ef2e2e', "Shipped": '#ff8e28', "Complete": '#61c673', "New": '#007cbb' };
        me.isLoading = true;
        me.orderService.getOrderStats("status")
            .mergeMap(function (statusData) {
            me.orderByStatusData = statusData.items.map(function (v, i, a) {
                return { name: v.name, value: v.value, color: legendColors[v.name] };
            });
            console.log("Got Order Stats");
            return me.orderService.getOrderInfo();
        })
            .subscribe(function (orderData) {
            me.rows = orderData;
            me.isLoading = false;
            console.log("Got Order Data");
        });
    };
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/orders/orders.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".s-info-bar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .s-info-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    outline: none; }"];



/***/ }),

/***/ "../../../../../src/app/pages/product_stats/product_stats.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ProductStatsComponent */
/* unused harmony export View_ProductStatsComponent_0 */
/* unused harmony export View_ProductStatsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStatsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_stats_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/product_stats/product_stats.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bar-chart/bar-vertical.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release_bar_chart_bar_vertical_component__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/bar-chart/bar-vertical.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_stats_component__ = __webpack_require__("../../../../../src/app/pages/product_stats/product_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_product_service__ = __webpack_require__("../../../../../src/app/services/api/product.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 







var styles_ProductStatsComponent = [__WEBPACK_IMPORTED_MODULE_0__product_stats_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ProductStatsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductStatsComponent, data: {} });

function View_ProductStatsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 13, "div", [["class", "s-product-dash-pg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 10, "div", [["class", "chart-box"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Products By Quantity Ordered"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 4, "ngx-charts-bar-vertical", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__["b" /* View_BarVerticalComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_charts_release_bar_chart_bar_vertical_component_ngfactory__["a" /* RenderType_BarVerticalComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 4898816, null, 1, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts_release_bar_chart_bar_vertical_component__["a" /* BarVerticalComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { results: [0, "results"], view: [1, "view"], scheme: [2, "scheme"], legend: [3, "legend"], xAxis: [4, "xAxis"], yAxis: [5, "yAxis"], showGridLines: [6, "showGridLines"], barPadding: [7, "barPadding"], roundDomains: [8, "roundDomains"], roundEdges: [9, "roundEdges"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { tooltipTemplate: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](10, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.productByQuantityData; var currVal_1 = _ck(_v, 10, 0, 990, 270); var currVal_2 = _co.barColorScheme; var currVal_3 = false; var currVal_4 = true; var currVal_5 = true; var currVal_6 = true; var currVal_7 = 1; var currVal_8 = true; var currVal_9 = false; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, null); }
function View_ProductStatsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-product_stats-pg", [], null, null, null, View_ProductStatsComponent_0, RenderType_ProductStatsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__product_stats_component__["a" /* ProductStatsComponent */], [__WEBPACK_IMPORTED_MODULE_5__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_api_product_service__["a" /* ProductService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductStatsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-product_stats-pg", __WEBPACK_IMPORTED_MODULE_4__product_stats_component__["a" /* ProductStatsComponent */], View_ProductStatsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/product_stats/product_stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_product_service__ = __webpack_require__("../../../../../src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");


var ProductStatsComponent = (function () {
    function ProductStatsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.productByQuantityData = [];
        this.barColorScheme = { domain: ['#007cbb'] };
    }
    ProductStatsComponent.prototype.ngOnInit = function () {
        var me = this;
        this.getPageData();
    };
    ProductStatsComponent.prototype.getPageData = function () {
        var me = this;
        me.productService.getProductStatsByQuantityOrdered()
            .subscribe(function (countryData) {
            me.productByQuantityData = countryData.items;
            console.log("Received Orders By Country");
        });
    };
    return ProductStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/product_stats/product_stats.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["h4[_ngcontent-%COMP%] {\n  margin-top: 16px; }\n\n.s-product-dash-pg[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-product-dash-pg[_ngcontent-%COMP%]   .chart-box[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }"];



/***/ }),

/***/ "../../../../../src/app/pages/products/products.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ProductsComponent */
/* unused harmony export View_ProductsComponent_0 */
/* unused harmony export View_ProductsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/pages/products/products.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/components/datatable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_product_service__ = __webpack_require__("../../../../../src/app/services/api/product.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 








var styles_ProductsComponent = [__WEBPACK_IMPORTED_MODULE_0__products_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ProductsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductsComponent, data: {} });

function View_ProductsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 5, "div", [["class", "toggle-switch"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 0, "input", [["checked", ""], ["type", "checkbox"]], [[1, "checked", 0], [8, "id", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 0, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n   "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) { var currVal_0 = ((_v.context.value == 1) ? true : null); var currVal_1 = _v.context.row.productCode; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _v.context.row.productCode; _ck(_v, 5, 0, currVal_2); }); }
function View_ProductsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](402653184, 1, { productDiscontinuedTpl: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 9, "div", [["class", "pad-16"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 6, "ngx-datatable", [["class", "ngx-datatable"], ["style", "width:1000px;"]], [[2, "fixed-header", null], [2, "fixed-row", null], [2, "scroll-vertical", null], [2, "scroll-horz", null], [2, "selectable", null], [2, "checkbox-selection", null], [2, "cell-selection", null], [2, "single-selection", null], [2, "multi-selection", null], [2, "multi-click-selection", null]], [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).onWindowResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["b" /* View_DatatableComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_swimlane_ngx_datatable_release_components_datatable_component_ngfactory__["a" /* RenderType_DatatableComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 4571136, null, 4, __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable_release_components_datatable_component__["DatatableComponent"], [__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable_release_services_scrollbar_helper_service__["ScrollbarHelper"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"]], { rows: [0, "rows"], columns: [1, "columns"], scrollbarV: [2, "scrollbarV"], rowHeight: [3, "rowHeight"], columnMode: [4, "columnMode"], headerHeight: [5, "headerHeight"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { columnTemplates: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { rowDetail: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 4, { groupHeader: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 5, { footer: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](0, [[1, 2], ["productDiscontinuedTpl", 2]], null, 0, null, View_ProductsComponent_1)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.rows; var currVal_11 = _co.columns; var currVal_12 = false; var currVal_13 = "auto"; var currVal_14 = "standard"; var currVal_15 = 45; _ck(_v, 4, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isFixedHeader; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isFixedRow; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isVertScroll; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isHorScroll; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isSelectable; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isCheckboxSelection; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isCellSelection; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isSingleSelection; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isMultiSelection; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).isMultiClickSelection; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_ProductsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "s-products-pg", [], null, null, null, View_ProductsComponent_0, RenderType_ProductsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__products_component__["a" /* ProductsComponent */], [__WEBPACK_IMPORTED_MODULE_6__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_7__services_api_product_service__["a" /* ProductService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProductsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("s-products-pg", __WEBPACK_IMPORTED_MODULE_5__products_component__["a" /* ProductsComponent */], View_ProductsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_product_service__ = __webpack_require__("../../../../../src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");



var ProductsComponent = (function () {
    function ProductsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPolicyData();
        this.columns = [
            { prop: "productCode", name: "Code", width: 60 },
            { prop: "productName", name: "Name", width: 200 },
            { prop: "standardCost", name: "Standard Cost", width: 100 },
            { prop: "listPrice", name: "List Price", width: 100 },
            { prop: "category", name: "Category", width: 100 },
            { prop: "targetLevel", name: "Target Level", width: 100 },
            { prop: "reorderLevel", name: "Reorder Level", width: 100 },
            { prop: "minimumReorderQuantity", name: "Min Order", width: 100 },
            { prop: "discontinued", name: "Discontinued", width: 90, cellTemplate: this.productDiscontinuedTpl }
        ];
    };
    ProductsComponent.prototype.getPolicyData = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (policyData) {
            _this.rows = policyData;
        });
    };
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/products/products.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/services/api/api-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");






var ApiRequestService = (function () {
    function ApiRequestService(appConfig, http, router, userInfoService) {
        this.appConfig = appConfig;
        this.http = http;
        this.router = router;
        this.userInfoService = userInfoService;
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["g" /* HttpHeaders */]();
        var token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        return this.http.get(this.appConfig.baseApiPath + url, { headers: this.getHeaders(), params: urlParams })
            .catch(function (error) {
            console.log("Some error in catch");
            if (error.status === 401 || error.status === 403) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var me = this;
        return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        return this.http.delete(this.appConfig.baseApiPath + url, { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    return ApiRequestService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("../../../../../src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");




var CustomerService = (function () {
    function CustomerService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    CustomerService.prototype.getCustomers = function (page, size) {
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var customerListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/customers', params)
            .subscribe(function (jsonResp) {
            var items = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    address: v.address1 + ", <br/> " + v.city + ", " + v.state + " " + v.postalCode + " <br/> " + v.country
                });
                return newRow;
            });
            var returnObj = Object.assign({}, jsonResp, {
                items: items
            });
            customerListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return customerListSubject;
    };
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("../../../../../src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");



var EmployeeService = (function () {
    function EmployeeService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    EmployeeService.prototype.getEmployees = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        return this.apiRequest.get('api/employees', params);
    };
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");






var LoginService = (function () {
    function LoginService(router, userInfoService, apiRequest) {
        this.router = router;
        this.userInfoService = userInfoService;
        this.apiRequest = apiRequest;
        this.landingPage = "/home/dashboard/order";
    }
    LoginService.prototype.getToken = function (username, password) {
        var _this = this;
        var me = this;
        var bodyData = {
            "username": username,
            "password": password,
        };
        var loginDataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Will use this subject to emit data that we want after ajax login attempt
        var loginInfoReturn; // Object that we want to send back to Login Page
        this.apiRequest.post('session', bodyData)
            .subscribe(function (jsonResp) {
            if (jsonResp !== undefined && jsonResp !== null && jsonResp.operationStatus === "SUCCESS") {
                //Create a success object that we want to send back to login page
                loginInfoReturn = {
                    "success": true,
                    "message": jsonResp.operationMessage,
                    "landingPage": _this.landingPage,
                    "user": {
                        "userId": jsonResp.item.userId,
                        "email": jsonResp.item.emailAddress,
                        "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
                        "token": jsonResp.item.token,
                    }
                };
                // store username and jwt token in session storage to keep user logged in between page refreshes
                _this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
            }
            else {
                //Create a faliure object that we want to send back to login page
                loginInfoReturn = {
                    "success": false,
                    "message": jsonResp.msgDesc,
                    "landingPage": "/login"
                };
            }
            loginDataSubject.next(loginInfoReturn);
        });
        return loginDataSubject;
    };
    LoginService.prototype.logout = function (navigatetoLogout) {
        if (navigatetoLogout === void 0) { navigatetoLogout = true; }
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if (navigatetoLogout) {
            this.router.navigate(["logout"]);
        }
    };
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("../../../../../src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");




var OrderService = (function () {
    function OrderService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    /**
     * Gets List of orders
     */
    OrderService.prototype.getOrderInfo = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var orderListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/orders', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderListSubject;
    };
    /**
     * Gets Orders and Order Lines (Products in each order)
     */
    OrderService.prototype.getOrderDetails = function (orderId) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        if (orderId) {
            params = params.append('orderid', orderId.toString());
        }
        var orderDetailSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/order-details', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderDetailSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderDetailSubject;
    };
    OrderService.prototype.getOrderStats = function (field) {
        return this.apiRequest.get('api/order-stats/' + field);
    };
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("../../../../../src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_request_service__ = __webpack_require__("../../../../../src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");




var ProductService = (function () {
    function ProductService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    ProductService.prototype.getProducts = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["h" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var productList = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/products', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    listPrice: me.translate.getCurrencyString(v.listPrice),
                    standardCost: me.translate.getCurrencyString(v.standardCost)
                });
                return newRow;
            });
            productList.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return productList;
    };
    ProductService.prototype.getProductStatsByQuantityOrdered = function () {
        return this.apiRequest.get('api/product-stats-by-quantity');
    };
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");

var TranslateService = (function () {
    function TranslateService(appConfig) {
        this.appConfig = appConfig;
        // Code to get Locale Info from Session Storage
    }
    TranslateService.prototype.getDateString = function (datenum) {
        return new Date(datenum).toLocaleDateString(this.appConfig.locale, this.appConfig.dateFormat);
    };
    TranslateService.prototype.getCurrencyString = function (number) {
        return number.toLocaleString(this.appConfig.locale, this.appConfig.currencyFormat);
    };
    return TranslateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth_guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_info_service__ = __webpack_require__("../../../../../src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_login_service__ = __webpack_require__("../../../../../src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");



var AuthGuard = (function () {
    function AuthGuard(router, loginService, userInfoService) {
        this.router = router;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
        //return true;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userInfoService.isLoggedIn()) {
            return true;
        }
        //Store the original url in login service and then redirect to login page
        this.loginService.landingPage = url;
        this.router.navigate(['login',]);
        return false;
    };
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
var UserInfoService = (function () {
    function UserInfoService() {
        this.currentUserKey = "currentUser";
        this.storage = sessionStorage; // <--- you may switch between sessionStorage or LocalStrage (only one place to change)
    }
    //Store userinfo from session storage
    UserInfoService.prototype.storeUserInfo = function (userInfoString) {
        this.storage.setItem(this.currentUserKey, userInfoString);
    };
    //Remove userinfo from session storage
    UserInfoService.prototype.removeUserInfo = function () {
        this.storage.removeItem(this.currentUserKey);
    };
    //Get userinfo from session storage
    UserInfoService.prototype.getUserInfo = function () {
        try {
            var userInfoString = this.storage.getItem(this.currentUserKey);
            if (userInfoString) {
                var userObj = JSON.parse(this.storage.getItem(this.currentUserKey));
                return userObj;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    UserInfoService.prototype.isLoggedIn = function () {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    };
    //Get User's Display name from session storage
    UserInfoService.prototype.getUserName = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.displayName;
        }
        return "no-user";
    };
    UserInfoService.prototype.getStoredToken = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.token;
        }
        return null;
    };
    return UserInfoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("../../../../../src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["platformBrowser"]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map