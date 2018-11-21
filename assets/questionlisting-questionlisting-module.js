(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionlisting-questionlisting-module"],{

/***/ "./src/app/questionlisting/questionlisting-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/questionlisting/questionlisting-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionlistingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionlistingRoutingModule", function() { return QuestionlistingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questionlisting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionlisting.component */ "./src/app/questionlisting/questionlisting.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _questionlisting_component__WEBPACK_IMPORTED_MODULE_2__["QuestionlistingComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }];
var QuestionlistingRoutingModule = /** @class */ (function () {
    function QuestionlistingRoutingModule() {
    }
    QuestionlistingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuestionlistingRoutingModule);
    return QuestionlistingRoutingModule;
}());



/***/ }),

/***/ "./src/app/questionlisting/questionlisting.component.css":
/*!***************************************************************!*\
  !*** ./src/app/questionlisting/questionlisting.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-select\n{width: 26%;\npadding-left:1%;\n}\n\nmat-form-field{\n  padding: 5px;\n  width:45%;\n}\n\n.pleft{\n  padding-left:2%;\n  padding-right:2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25saXN0aW5nL3F1ZXN0aW9ubGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0NBQ0MsV0FBVztBQUNaLGdCQUFnQjtDQUNmOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbmxpc3RpbmcvcXVlc3Rpb25saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc2VsZWN0XG57d2lkdGg6IDI2JTtcbnBhZGRpbmctbGVmdDoxJTtcbn1cblxubWF0LWZvcm0tZmllbGR7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6NDUlO1xufVxuXG4ucGxlZnR7XG4gIHBhZGRpbmctbGVmdDoyJTtcbiAgcGFkZGluZy1yaWdodDoyJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/questionlisting/questionlisting.component.html":
/*!****************************************************************!*\
  !*** ./src/app/questionlisting/questionlisting.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <mat-slide-toggle class=\"pleft\"matTooltip=\"View code\" [(ngModel)]=\"checked\">View</mat-slide-toggle>\n    Choose category : <mat-select placeholder=\"Select category\" matTooltip=\"Select exam category\" [(ngModel)]=\"category\"  (ngModelChange)=\"getQuestion()\" >\n      <mat-option *ngFor=\"let item of categoryList ;let i =index\" [value]=\"item.id\"> {{item.title}}</mat-option>\n    </mat-select>\n\n\n  <table mat-table #table [dataSource]=\"QuestionListing\" matSort   >\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n      <td mat-cell *matCellDef=\"let index = index\"> {{index+1}} </td>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"question\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Question </th>\n      <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"element.question|slice:0:50\">\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>  </th>\n      <td mat-cell *matCellDef=\"let element\" >\n        <pre *ngIf=\"checked\"  class=\"language-java\"> {{element.code}}</pre>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"createdAt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> CreatedAt </th>\n      <td mat-cell *matCellDef=\"let element\" >\n        {{element.createdAt|date}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n      <td mat-cell *matCellDef=\"let element;let index = index\"  >\n        <mat-slide-toggle matTooltip=\"Active and deactivate question\" (change)=\"onStatusChange(element)\" [(ngModel)]=\"element.status\">{{(element.status==1)?'Active':'Deactive'}} </mat-slide-toggle>\n        <button matTooltip=\"Edit\" mat-button [routerLink]=\"['/add-question']\" [queryParams]=\"{id: element.id}\"><mat-icon>edit</mat-icon></button>\n        <button matTooltip=\"Delete\" mat-button color=\"warn\" (click)=\"deleteQuestion(element,index)\"> <mat-icon>delete_forever</mat-icon></button>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n"

/***/ }),

/***/ "./src/app/questionlisting/questionlisting.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/questionlisting/questionlisting.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionlistingComponent", function() { return QuestionlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionlistingComponent = /** @class */ (function () {
    function QuestionlistingComponent(_services, msg, router) {
        this._services = _services;
        this.msg = msg;
        this.router = router;
        this.displayedColumns = ['position', 'question', 'code', 'action', 'createdAt'];
        this.checked = false;
        this.QuestionListing = [];
        this.categoryList = [];
        this.dataSource = [];
    }
    QuestionlistingComponent.prototype.applyFilter = function (filterValue) {
        this.QuestionListing.filter = filterValue.trim().toLowerCase();
    };
    QuestionlistingComponent.prototype.getCategory = function () {
        var _this = this;
        this._services.getCategory().subscribe(function (response) {
            var result = response.response.data;
            result.sort(function (a, b) {
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
            _this.categoryList = result;
            _this.category = result[0].id;
            _this.getQuestion();
        }, function (error) {
        });
    };
    QuestionlistingComponent.prototype.ngAfterViewInit = function () {
        this.getCategory();
    };
    QuestionlistingComponent.prototype.getQuestion = function () {
        var _this = this;
        var obj = {
            skill: this.category
        };
        this._services.getQuestionListing(obj).subscribe(function (response) {
            var result = response.response.data;
            _this.QuestionListing = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](result);
            _this.QuestionListing.paginator = _this.paginator;
        });
    };
    QuestionlistingComponent.prototype.deleteQuestion = function (item, index) {
        var _this = this;
        var confirmAlert = confirm('Are you sure want to this item ?');
        if (confirmAlert === true) {
            var obj = {
                id: item.id
            };
            this._services.deleteQuestion(obj).subscribe(function (response) {
                _this.QuestionListing.splice(index, 1);
                _this.table.renderRows();
            });
        }
    };
    QuestionlistingComponent.prototype.onStatusChange = function (event) {
        var _this = this;
        this._services.updateStatusQuestion(event).subscribe(function (response) {
            var msg = response.response.message;
            _this.msg.openSnackBar(msg);
        }, function (error) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], QuestionlistingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], QuestionlistingComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], QuestionlistingComponent.prototype, "sort", void 0);
    QuestionlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionlisting',
            template: __webpack_require__(/*! ./questionlisting.component.html */ "./src/app/questionlisting/questionlisting.component.html"),
            styles: [__webpack_require__(/*! ./questionlisting.component.css */ "./src/app/questionlisting/questionlisting.component.css")]
        }),
        __metadata("design:paramtypes", [_services_webservices_service__WEBPACK_IMPORTED_MODULE_2__["WebservicesService"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionlistingComponent);
    return QuestionlistingComponent;
}());



/***/ }),

/***/ "./src/app/questionlisting/questionlisting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/questionlisting/questionlisting.module.ts ***!
  \***********************************************************/
/*! exports provided: QuestionlistingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionlistingModule", function() { return QuestionlistingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _questionlisting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionlisting-routing.module */ "./src/app/questionlisting/questionlisting-routing.module.ts");
/* harmony import */ var _questionlisting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionlisting.component */ "./src/app/questionlisting/questionlisting.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var QuestionlistingModule = /** @class */ (function () {
    function QuestionlistingModule() {
    }
    QuestionlistingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _questionlisting_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionlistingRoutingModule"]
            ],
            declarations: [_questionlisting_component__WEBPACK_IMPORTED_MODULE_4__["QuestionlistingComponent"]],
        })
    ], QuestionlistingModule);
    return QuestionlistingModule;
}());



/***/ })

}]);
//# sourceMappingURL=questionlisting-questionlisting-module.js.map