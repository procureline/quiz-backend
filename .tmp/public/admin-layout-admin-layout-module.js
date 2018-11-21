(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-admin-layout-module"],{

/***/ "./src/app/admin-layout/admin-layout-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-layout/admin-layout-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutingModule", function() { return AdminLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/admin-layout/admin-layout.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _admin_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutComponent"],
        children: [
            { path: '', redirectTo: 'result' },
            {
                path: 'result',
                loadChildren: '../result/result.module#ResultModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: 'add-question',
                loadChildren: '../dashboard/dashboard.module#DashboardModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: 'question-listing',
                loadChildren: '../questionlisting/questionlisting.module#QuestionlistingModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: 'candidate',
                loadChildren: '../candidate/candidate.module#CandidateModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: 'candidate/listing',
                loadChildren: '../candidate/candidate.module#CandidateModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: 'change-password',
                loadChildren: '../changepassword/changepassword.module#ChangepasswordModule',
                canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
        ]
    }];
var AdminLayoutRoutingModule = /** @class */ (function () {
    function AdminLayoutRoutingModule() {
    }
    AdminLayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminLayoutRoutingModule);
    return AdminLayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin-layout/admin-layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-layout/admin-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidemenu></app-sidemenu>\n"

/***/ }),

/***/ "./src/app/admin-layout/admin-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.component.ts ***!
  \********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.css */ "./src/app/admin-layout/admin-layout.component.css")]
        })
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin-layout/admin-layout.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout-routing.module */ "./src/app/admin-layout/admin-layout-routing.module.ts");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/admin-layout/admin-layout.component.ts");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidemenu/sidemenu.component */ "./src/app/sidemenu/sidemenu.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"]],
            exports: [_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__["SidemenuComponent"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n      router-outlet ~ * {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGFBQWE7T0FDZCIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuICAgICAgcm91dGVyLW91dGxldCB+ICoge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.html":
/*!**************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"sidenav-container\" >\n  <mat-sidenav\n  #drawer\n  class=\"sidenav\"\n  fixedInViewport=\"true\"\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n  [mode]=\"(isHandset$ | async) ? 'push' : 'side'\"\n  [opened]=\"!(isHandset$ | async)\">\n        <mat-toolbar color=\"primary\">PTS Exam Portal</mat-toolbar>\n        <mat-nav-list>\n\n            <a mat-list-item  routerLink=\"/candidate\" >\n              <mat-icon>group_add</mat-icon>\n  \n              \n           Add Candidate</a>\n          <a mat-list-item  routerLink=\"/candidate/listing\" >\n            <mat-icon>group</mat-icon>\n            Candidate listing</a>\n            <a mat-list-item  routerLink=\"/add-question\" >\n              <mat-icon>add</mat-icon>\n  \n              \n              Add-question</a>\n          <a mat-list-item  routerLink=\"/question-listing\" >\n            <mat-icon>list_alt</mat-icon>\n\n            Question listing</a>\n          <a mat-list-item  routerLink=\"/result\" >\n            <mat-icon>list</mat-icon>\n\n            Result management</a>\n            <a mat-list-item  routerLink=\"/change-password\"  >\n              <mat-icon>refresh</mat-icon>\n  \n              Change password</a>\n          <a mat-list-item   (click)=\"Logout()\" >\n              <mat-icon>settings_power</mat-icon>\n\n            Logout</a>\n         \n          <a mat-list-item  routerLink=\"/exam\" target=\"_blank\" >\n            <mat-icon>import_contacts</mat-icon>\n\n            Exam site</a>\n        \n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <mat-toolbar color=\"primary\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <span>{{setTitle|uppercase}}</span>\n        </mat-toolbar>\n        <mat-progress-bar color=\"warn\"[mode]=\"loader\"></mat-progress-bar>\n\n         <main [@fadeAnimation]=\"getRouterOutletState(o)\">\n            <router-outlet #o=\"outlet\"></router-outlet>\n          </main>\n\n          \n              </mat-sidenav-content>\n    </mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.ts ***!
  \************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(router, data, route, Auth, breakpointObserver) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.route = route;
        this.Auth = Auth;
        this.breakpointObserver = breakpointObserver;
        this.hidesidebar = true;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
        this.hidesidebar = this.Auth.checkLogin();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                var url = event.url;
                _this.setTitle = url.replace(/[^a-zA-Z ]/g, ' ');
            }
        });
    }
    SidemenuComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SidemenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) {
            if (message === 'indeterminate' || message === 'determinate') {
                _this.loader = message;
            }
            if (message === 'login') {
                _this.hidesidebar = true;
            }
        });
    };
    SidemenuComponent.prototype.getTitle = function (title) {
        this.setTitle = title;
    };
    SidemenuComponent.prototype.Logout = function () {
        localStorage.clear();
        this.hidesidebar = false;
        this.router.navigate(['/login']);
    };
    SidemenuComponent.prototype.goToPage = function (page) {
        this.router.navigate([page]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuComponent.prototype, "isUserLoggedIn", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/sidemenu/sidemenu.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_5__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-layout-admin-layout-module.js.map