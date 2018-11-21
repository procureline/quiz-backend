(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instruction-instruction-module"],{

/***/ "./src/app/instruction/instruction-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/instruction/instruction-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InstructionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionRoutingModule", function() { return InstructionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _instruction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction.component */ "./src/app/instruction/instruction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _instruction_component__WEBPACK_IMPORTED_MODULE_2__["InstructionComponent"],
    }];
var InstructionRoutingModule = /** @class */ (function () {
    function InstructionRoutingModule() {
    }
    InstructionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InstructionRoutingModule);
    return InstructionRoutingModule;
}());



/***/ }),

/***/ "./src/app/instruction/instruction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/instruction/instruction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n   width: 50%;\n   margin: 10% auto;\n}\n\nmat-checkbox{\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n\n.mat-raised-button{\n left:45%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rpb24vaW5zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxpQkFBaUI7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtDQUNyQjs7QUFHRDtDQUNDLFFBQVE7Q0FDUiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9uL2luc3RydWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgIHdpZHRoOiA1MCU7XG4gICBtYXJnaW46IDEwJSBhdXRvO1xufVxuXG5tYXQtY2hlY2tib3h7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4ubWF0LXJhaXNlZC1idXR0b257XG4gbGVmdDo0NSVcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/instruction/instruction.component.html":
/*!********************************************************!*\
  !*** ./src/app/instruction/instruction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h1 id=\"quiz_title\">\n    Quiz Instructions\n  </h1>\n  <h2>Instructions</h2>\n  <p>This quiz consists of  multiple-choice questions. </p>\n  <ul>\n    <li>\n      <strong>Timing</strong> - You will need to complete each of your attempts in one sitting, as you are allotted   minutes to complete each attempt.</li>\n      <li>\n        <strong>Answers</strong> - You may review your answer-choices and compare them to the correct answers after your final attempt.</li>\n        <p>To start, Accept the terms and condtion then click the <strong>\"Take the Quiz\"</strong> button. When finished,  answer will be automatic submitted</p>\n      </ul>\n      <mat-checkbox [(ngModel)]=\"disabled\">I accept the terms and condtion </mat-checkbox>\n    <button mat-raised-button block large routerLink=\"/quiz\" [disabled]=\"!disabled\" class=\"btn\" >Take the Quiz</button>\n    </mat-card>\n\n\n\n"

/***/ }),

/***/ "./src/app/instruction/instruction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstructionComponent = /** @class */ (function () {
    function InstructionComponent(router) {
        this.router = router;
    }
    InstructionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('color'),
        __metadata("design:type", String)
    ], InstructionComponent.prototype, "color", void 0);
    InstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instruction',
            template: __webpack_require__(/*! ./instruction.component.html */ "./src/app/instruction/instruction.component.html"),
            styles: [__webpack_require__(/*! ./instruction.component.css */ "./src/app/instruction/instruction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InstructionComponent);
    return InstructionComponent;
}());



/***/ }),

/***/ "./src/app/instruction/instruction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/instruction/instruction.module.ts ***!
  \***************************************************/
/*! exports provided: InstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionModule", function() { return InstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction-routing.module */ "./src/app/instruction/instruction-routing.module.ts");
/* harmony import */ var _instruction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instruction.component */ "./src/app/instruction/instruction.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InstructionModule = /** @class */ (function () {
    function InstructionModule() {
    }
    InstructionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["InstructionRoutingModule"]
            ],
            declarations: [_instruction_component__WEBPACK_IMPORTED_MODULE_3__["InstructionComponent"]],
        })
    ], InstructionModule);
    return InstructionModule;
}());



/***/ })

}]);
//# sourceMappingURL=instruction-instruction-module.js.map