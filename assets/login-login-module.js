(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loginpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginpage.component */ "./src/app/login/loginpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _loginpage_component__WEBPACK_IMPORTED_MODULE_2__["LoginpageComponent"],
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var _loginpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginpage.component */ "./src/app/login/loginpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_services_webservices_service__WEBPACK_IMPORTED_MODULE_5__["WebservicesService"]],
            declarations: [_loginpage_component__WEBPACK_IMPORTED_MODULE_6__["LoginpageComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/loginpage.component.css":
/*!***********************************************!*\
  !*** ./src/app/login/loginpage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n.signin-content {\n  padding: 60px 1rem;\n}\n.full-width-input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW5wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ25pbi1jb250ZW50IHtcbiAgcGFkZGluZzogNjBweCAxcmVtO1xufVxuLmZ1bGwtd2lkdGgtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/loginpage.component.html":
/*!************************************************!*\
  !*** ./src/app/login/loginpage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"signin-content\" >\n    <mat-card>\n      <mat-card-content>\n          <img src=\"assets/logo.png\"/>\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <p>Please login to continue</p>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"isFieldInvalid('email')\">\n              Please enter a valid Email\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"isFieldInvalid('password')\">\n              Please enter password\n            </mat-error>\n          </mat-form-field>\n          <button mat-button color=\"primary\" type=\"submit\">Login</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  "

/***/ }),

/***/ "./src/app/login/loginpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/login/loginpage.component.ts ***!
  \**********************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var src_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/data.service */ "./src/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(data, router, _services, fb) {
        this.data = data;
        this.router = router;
        this._services = _services;
        this.fb = fb;
    }
    LoginpageComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    LoginpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    LoginpageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this._services.doLogin(this.form.value).subscribe(function (Response) {
                var result = Response.response.data;
                localStorage.setItem('token', result.token);
                _this.data.changeMessage('lodaer');
                _this.router.navigate(['/candidate/listing']);
            }, function (error) {
            });
        }
    };
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/login/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/login/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [src_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map