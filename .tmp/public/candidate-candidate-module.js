(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidate-candidate-module"],{

/***/ "./src/app/candidate/candidate-listing/candidate-listing.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/candidate/candidate-listing/candidate-listing.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  >\n    <mat-card>\n      <mat-card-content>\n   \n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n      </mat-form-field>\n\n  <table mat-table #table [dataSource]=\"candidatelist\"    >\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n      <td mat-cell *matCellDef=\"let index = index\"> {{index+1}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.candidate_name|uppercase}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.candidate_email}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"refrence\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Rrefrence </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.refrence}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"education\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>  Education</th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.education}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"experience\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Experience </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.experience}} months\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"phone\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.phone}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"resume\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Resume </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        <a *ngIf=\"element.resume\" [href]=\"element.resume\">\n          <mat-icon matTooltip=\"Download Resume\">cloud_download</mat-icon>\n        </a>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"skill\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Skill </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.skill}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"createdAt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>CreatedAt  </th>\n      <td mat-cell *matCellDef=\"let element\" > \n        {{element.createdAt|date}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n      <td mat-cell *matCellDef=\"let element;let index = index\"  > \n        <button mat-button  matTooltip=\"Candidate score board\" (click)=\"openDialog(element)\">Result</button>\n        <button mat-button  matTooltip=\"Edit\" [routerLink]=\"['/candidate']\" [queryParams]=\"{id: element.id}\"><mat-icon>edit</mat-icon></button>   \n        <button mat-button matTooltip=\"Delete\" color=\"warn\" (click)=\"deleteCandidate(element,index)\"> <mat-icon>delete_forever</mat-icon></button>   \n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </mat-card-content>\n      </mat-card>\n      </div>\n\n "

/***/ }),

/***/ "./src/app/candidate/candidate-listing/candidate-listing.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/candidate/candidate-listing/candidate-listing.component.ts ***!
  \****************************************************************************/
/*! exports provided: CandidateListingComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateListingComponent", function() { return CandidateListingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data.service */ "./src/data.service.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CandidateListingComponent = /** @class */ (function () {
    function CandidateListingComponent(_services, route, msg, dialog) {
        this._services = _services;
        this.route = route;
        this.msg = msg;
        this.dialog = dialog;
        this.candidatelist = [];
        this.displayedColumns = ['position', 'name', 'email',
            'education', 'experience', 'phone', 'refrence', 'resume', 'skill', 'createdAt', 'action'];
    }
    CandidateListingComponent.prototype.applyFilter = function (filterValue) {
        this.candidatelist.filter = filterValue.trim().toLowerCase();
    };
    CandidateListingComponent.prototype.openDialog = function (item) {
        this.dialog.open(DialogDataExampleDialog, {
            data: item
        });
    };
    CandidateListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._services.getCandidate().subscribe(function (response) {
            var result = response.response.data;
            var candidate = [];
            result.forEach(function (data) {
                var element = data.candidate;
                var resultdata = data.result;
                var obj = Object.assign({});
                obj.address = element.address;
                obj.candidate_email = element.candidate_email;
                obj.candidate_name = element.candidate_name;
                obj.createdAt = element.createdAt;
                obj.education = element.education;
                obj.experience = element.experience;
                obj.id = element.id;
                obj.phone = element.phone;
                obj.refrence = element.refrence;
                obj.resume = (element.resume) ? src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].cv_endpoint + "/cv/" + element.resume : '';
                obj.updatedAt = element.updatedAt;
                obj.result = resultdata;
                candidate.push(obj);
            });
            candidate.sort(function (a, b) {
                var date1 = new Date(a.createdAt);
                var date2 = new Date(b.createdAt);
                return date2.getTime() - date1.getTime();
            });
            _this.candidatelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](candidate);
            _this.candidatelist.paginator = _this.paginator;
        });
    };
    CandidateListingComponent.prototype.deleteCandidate = function (item, index) {
        var _this = this;
        var confirmAlert = confirm('Are you sure want to this item ?');
        if (confirmAlert === true) {
            var obj = {
                id: item.id
            };
            this._services.deleteCandidate(obj).subscribe(function (response) {
                _this.candidatelist.splice(index, 1);
                _this.table.renderRows();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], CandidateListingComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CandidateListingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CandidateListingComponent.prototype, "sort", void 0);
    CandidateListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-listing',
            template: __webpack_require__(/*! ./candidate-listing.component.html */ "./src/app/candidate/candidate-listing/candidate-listing.component.html"),
            styles: [__webpack_require__(/*! ../candidate.component.css */ "./src/app/candidate/candidate.component.css")]
        }),
        __metadata("design:paramtypes", [_services_webservices_service__WEBPACK_IMPORTED_MODULE_2__["WebservicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CandidateListingComponent);
    return CandidateListingComponent;
}());

var DialogDataExampleDialog = /** @class */ (function (_super) {
    __extends(DialogDataExampleDialog, _super);
    function DialogDataExampleDialog(data, options) {
        var _this = _super.call(this, options._services, options.route, options.msg, options.dialog) || this;
        _this.data = data;
        _this.resultListing = [];
        _this.score = [];
        return _this;
    }
    DialogDataExampleDialog.prototype.ngOnInit = function () {
        var examcode = [];
        var result = this.data['result'];
        result.forEach(function (element) {
            var object = Object.assign({});
            if (examcode.findIndex(function (i) { return i.examination_code === element.examination_code; }) === -1) {
                object.examination_code = element.examination_code;
                object.createdAt = element.createdAt;
                object.exam_over = element.exam_over;
                examcode.push(object);
            }
        });
        this.resultListing = examcode;
    };
    DialogDataExampleDialog.prototype.getScore = function (code) {
        var re = [];
        var result = this.data['result'];
        result.forEach(function (element) {
            var object = Object.assign({});
            if (element.examination_code === code) {
                object.skill = element.skill_id;
                object.percentage = element.percentage;
                re.push(object);
            }
        });
        this.score = re;
    };
    DialogDataExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'result',
            template: __webpack_require__(/*! ./result.html */ "./src/app/candidate/candidate-listing/result.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, CandidateListingComponent])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}(CandidateListingComponent));



/***/ }),

/***/ "./src/app/candidate/candidate-listing/result.html":
/*!*********************************************************!*\
  !*** ./src/app/candidate/candidate-listing/result.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Result</h1>\n <div style=\"height:230px;overflow: auto\">\n  <mat-list *ngFor=\"let item of resultListing ;let i=index\"  >\n    <mat-list-item (click)=\"getScore(item.examination_code)\">\n      {{i+1}}.\n      \n       {{item.createdAt|date:'medium' }}\n    \n       <mat-divider></mat-divider>\n\n<small >{{(item.exam_over==1)?'Completed':'pending'}}</small>\n     </mat-list-item>\n    \n    <mat-divider></mat-divider>\n   \n  </mat-list>\n </div>\n\n <h1 mat-dialog-title>Score</h1>\n\n\n    <mat-list *ngFor=\"let item of score\" class=\"animated fadeIn\">\n        <mat-list-item  >{{item.skill.title\n          }} {{item.percentage \n          }}  %</mat-list-item>\n        \n        <mat-divider></mat-divider>\n       \n      </mat-list>\n "

/***/ }),

/***/ "./src/app/candidate/candidate-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/candidate/candidate-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CandidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRoutingModule", function() { return CandidateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate-listing/candidate-listing.component */ "./src/app/candidate/candidate-listing/candidate-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _candidate_component__WEBPACK_IMPORTED_MODULE_2__["CandidateComponent"],
    },
    {
        path: 'listing',
        component: _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_3__["CandidateListingComponent"],
        data: {
            title: 'Candidate Listing '
        }
    },
];
var CandidateRoutingModule = /** @class */ (function () {
    function CandidateRoutingModule() {
    }
    CandidateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CandidateRoutingModule);
    return CandidateRoutingModule;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.component.css":
/*!***************************************************!*\
  !*** ./src/app/candidate/candidate.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-chip-lis{\n  width: 100%;\n}\n\nmat-form-field{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNoaXAtbGlze1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/candidate/candidate.component.html":
/*!****************************************************!*\
  !*** ./src/app/candidate/candidate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!uploadResume\">\n  <mat-card >\n    <mat-card-content>\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <p>Add candidate</p>\n        <mat-form-field>\n          <input matInput matTooltip=\"Enter candidate name\" placeholder=\"Candidate Name\" formControlName=\"candidate_name\" required>\n          <mat-error *ngIf=\"isFieldInvalid('candidate_name')\">\n            Please enter a valid candidate_name\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput matTooltip=\"Enter candidate phone number\" placeholder=\"Phone\" formControlName=\"phone\" required>\n          <mat-error *ngIf=\"isFieldInvalid('phone')\">\n            Please enter a valid phone\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" matTooltip=\"Enter candidate email\" formControlName=\"candidate_email\" required>\n          <mat-error *ngIf=\"isFieldInvalid('candidate_email')\">\n            Please enter a valid Email\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field  >\n          <mat-chip-list #chipList matTooltip=\"Enter skill and press enter\">\n            <mat-chip  selected *ngFor=\"let requirement of form.get('skill').controls; let i = index;\" [selectable]=\"selectable\"\n            [removable]=\"removable\"   [color]=\"i%2==0?'accent':primary\"  >\n            {{requirement.value}}\n            <mat-icon matChipRemove (click)=\"remove(i)\">cancel{{removable}}</mat-icon>\n          </mat-chip>\n          <input placeholder=\"Skill...\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"add($event)\"  required/>\n        </mat-chip-list>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Experience in months\" matTooltip=\"Enter experience in number Ex:60\" formControlName=\"experience\" required>\n        <mat-error *ngIf=\"isFieldInvalid('experience')\">\n          Please enter a valid experience\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Education\" matTooltip=\"Enter highest education\" formControlName=\"education\" required>\n        <mat-error *ngIf=\"isFieldInvalid('education')\">\n          Please enter a valid education\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" matTooltip=\"Enter candidate address\" formControlName=\"address\" required>\n        <mat-error *ngIf=\"isFieldInvalid('address')\">\n          Please enter a valid address\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"text\"  matTooltip=\"Enter reference name if not present type na\" placeholder=\"Reference (Enter reference name if not present type na)\" formControlName=\"refrence\">\n      </mat-form-field>\n      <button mat-button color=\"primary\" type=\"submit\">Next</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n</div>\n<div class=\"signin-content\"  *ngIf=\"uploadResume\">\n  <mat-card>\n    <mat-card-content>\n\n      <input\n      style=\"display: none\"\n      type=\"file\" (change)=\"addImage($event,item._id)\"\n      #fileInput>\n      <button mat-icon-button (click)=\"fileInput.click()\">Upload Resume\n        <mat-icon >cloud_upload</mat-icon>\n      </button>\n\n    </mat-card-content>\n    <button   mat-raised-button color=\"accent\"  (click)=\"goToCandidateListing()\" >Done</button>\n\n  </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/candidate/candidate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/candidate/candidate.component.ts ***!
  \**************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.service */ "./src/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CandidateComponent = /** @class */ (function () {
    function CandidateComponent(data, route, router, _services, fb) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.router = router;
        this._services = _services;
        this.fb = fb;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.uploadResume = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.item = [];
        this.route.queryParams.subscribe(function (params) {
            _this.param1 = params['id'];
            if (_this.param1 === undefined) {
                _this.edit = false;
            }
            else {
                _this.edit = true;
                _this.getCandidate();
            }
        });
    }
    CandidateComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            candidate_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            candidate_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            refrence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            skill: this.fb.array([])
        });
    };
    CandidateComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    CandidateComponent.prototype.onSubmit = function () {
        var _this = this;
        var obj = {
            type: (this.edit) ? 'update' : 'add',
            id: this.param1
        };
        if (this.form.valid) {
            this._services.addCandidate(this.form.value, obj).subscribe(function (Response) {
                var msg = 'Added succesfully';
                _this.data.openSnackBar(msg);
                _this.uploadResume = true;
                _this.item = Response.response.data;
            }, function (error) {
                //   this.data.openSnackBar(error.response.message);
            });
        }
    };
    CandidateComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our requirement
        if ((value || '').trim()) {
            var skill = this.form.get('skill');
            skill.push(this.fb.control(value.trim()));
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    CandidateComponent.prototype.remove = function (index) {
        var skill = this.form.get('skill');
        if (index >= 0) {
            skill.removeAt(index);
        }
    };
    CandidateComponent.prototype.getCandidate = function () {
        var _this = this;
        var obj = {
            id: this.param1
        };
        this._services.getCandidateById(obj).subscribe(function (response) {
            var result = response.response.data[0];
            _this.form.patchValue({
                candidate_name: result.candidate_name,
                phone: result.phone,
                candidate_email: result.candidate_email,
                experience: result.experience,
                education: result.education,
                refrence: result.refrence,
                address: result.address,
            });
            var skilled = result.skill;
            var skill = _this.form.get('skill');
            skilled.forEach(function (element) {
                skill.push(_this.fb.control(element.trim()));
            });
        });
    };
    CandidateComponent.prototype.goToCandidateListing = function () {
        this.router.navigate(['/candidate/listing']);
    };
    CandidateComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    CandidateComponent.prototype.addImage = function (event) {
        var _this = this;
        var uploadData = new FormData();
        this.selectedFile = event.target.files;
        for (var i = 0; i < this.selectedFile.length; i++) {
            uploadData.append('resume', this.selectedFile[i], this.selectedFile[i]['name']);
        }
        uploadData.append('param', JSON.stringify(this.item));
        this._services.uploadResumeImage(uploadData).subscribe(function (Response) {
            if (Response.success === false) {
                _this.data.openSnackBar(Response.message.message);
            }
            else {
                _this.data.openSnackBar(Response.message);
                _this.ngOnInit();
            }
        }, function (Error) {
        });
    };
    CandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-candidate',
            template: __webpack_require__(/*! ./candidate.component.html */ "./src/app/candidate/candidate.component.html"),
            styles: [__webpack_require__(/*! ./candidate.component.css */ "./src/app/candidate/candidate.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_webservices_service__WEBPACK_IMPORTED_MODULE_2__["WebservicesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.module.ts":
/*!***********************************************!*\
  !*** ./src/app/candidate/candidate.module.ts ***!
  \***********************************************/
/*! exports provided: CandidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateModule", function() { return CandidateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate-routing.module */ "./src/app/candidate/candidate-routing.module.ts");
/* harmony import */ var _candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./candidate-listing/candidate-listing.component */ "./src/app/candidate/candidate-listing/candidate-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CandidateModule = /** @class */ (function () {
    function CandidateModule() {
    }
    CandidateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _candidate_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [
                _candidate_component__WEBPACK_IMPORTED_MODULE_3__["CandidateComponent"],
                _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__["CandidateListingComponent"],
                _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataExampleDialog"],
                _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__["CandidateListingComponent"]
            ],
            entryComponents: [
                _candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataExampleDialog"]
            ],
            providers: [_candidate_listing_candidate_listing_component__WEBPACK_IMPORTED_MODULE_7__["CandidateListingComponent"]]
        })
    ], CandidateModule);
    return CandidateModule;
}());



/***/ })

}]);
//# sourceMappingURL=candidate-candidate-module.js.map