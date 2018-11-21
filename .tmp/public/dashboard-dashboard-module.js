(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-wig/ngx-wig.umd.js":
/*!*********************************************!*\
  !*** ./node_modules/ngx-wig/ngx-wig.umd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js")) :
	undefined;
}(this, (function (exports,core,common,forms) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxWigToolbarService = (function () {
    function NgxWigToolbarService() {
        this._buttonLibrary = {
            list1: { title: 'Unordered List', command: 'insertunorderedlist', styleClass: 'list-ul' },
            list2: { title: 'Ordered List', command: 'insertorderedlist', styleClass: 'list-ol' },
            bold: { title: 'Bold', command: 'bold', styleClass: 'bold' },
            italic: { title: 'Italic', command: 'italic', styleClass: 'italic' },
            link: { title: 'Link', command: 'createlink', styleClass: 'link' },
            underline: { title: 'Underline', command: 'underline', styleClass: 'format-underlined' }
        };
        this._defaultButtonsList = ['list1', 'list2', 'bold', 'italic', 'link'];
    }
    /**
     * @param {?} buttons
     * @return {?}
     */
    NgxWigToolbarService.prototype.setButtons = /**
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        // if(!angular.isArray(buttons)) {
        //   throw 'Argument "buttons" should be an array';
        // }
        this._defaultButtonsList = buttons;
    };
    
    /**
     * @param {?} name
     * @param {?} title
     * @param {?} command
     * @param {?} styleClass
     * @return {?}
     */
    NgxWigToolbarService.prototype.addStandardButton = /**
     * @param {?} name
     * @param {?} title
     * @param {?} command
     * @param {?} styleClass
     * @return {?}
     */
    function (name, title, command, styleClass) {
        if (!name || !title || !command) {
            throw 'Arguments "name", "title" and "command" are required';
        }
        styleClass = styleClass || '';
        this._buttonLibrary[name] = { title: title, command: command, styleClass: styleClass };
        this._defaultButtonsList.push(name);
    };
    /**
     * @param {?} name
     * @param {?} pluginName
     * @return {?}
     */
    NgxWigToolbarService.prototype.addCustomButton = /**
     * @param {?} name
     * @param {?} pluginName
     * @return {?}
     */
    function (name, pluginName) {
        if (!name || !pluginName) {
            throw 'Arguments "name" and "pluginName" are required';
        }
        this._buttonLibrary[name] = { pluginName: pluginName, isComplex: true };
        this._defaultButtonsList.push(name);
    };
    /**
     * @param {?=} buttonsList
     * @return {?}
     */
    NgxWigToolbarService.prototype.getToolbarButtons = /**
     * @param {?=} buttonsList
     * @return {?}
     */
    function (buttonsList) {
        var _this = this;
        var /** @type {?} */ buttons = this._defaultButtonsList;
        var /** @type {?} */ toolbarButtons = [];
        if (typeof buttonsList !== 'undefined') {
            buttons = string2array(buttonsList);
        }
        buttons.forEach(function (buttonKey) {
            if (!buttonKey) {
                return;
            }
            if (!_this._buttonLibrary[buttonKey]) {
                throw 'There is no "' + buttonKey + '" in your library. Possible variants: ' + Object.keys(_this._buttonLibrary);
            }
            var /** @type {?} */ button = Object.assign({}, _this._buttonLibrary[buttonKey]);
            // button.isActive = () => {return !!this.command && document.queryCommandState(this.command);}
            toolbarButtons.push(button);
        });
        return toolbarButtons;
    };
    return NgxWigToolbarService;
}());
/**
 * @param {?} keysString
 * @return {?}
 */
function string2array(keysString) {
    return keysString.split(',').map(Function.prototype.call, String.prototype.trim);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxWigComponent = (function () {
    function NgxWigComponent(_ngWigToolbarService) {
        this._ngWigToolbarService = _ngWigToolbarService;
        this.isSourceModeAllowed = false;
        this.contentChange = new core.EventEmitter();
        this.editMode = false;
        this.toolbarButtons = [];
        this.hasFocus = false;
        this.propagateChange = function (_) { };
        this.propagateTouched = function () { };
        // hardcoded icons theme for now
        this.iconsTheme = "nw-button-mdi";
    }
    /**
     * @return {?}
     */
    NgxWigComponent.prototype.toggleEditMode = /**
     * @return {?}
     */
    function () {
        this.editMode = !this.editMode;
    };
    /**
     * @param {?} command
     * @param {?} options
     * @return {?}
     */
    NgxWigComponent.prototype.execCommand = /**
     * @param {?} command
     * @param {?} options
     * @return {?}
     */
    function (command, options) {
        if (this.editMode) {
            return false;
        }
        if (document.queryCommandSupported && !document.queryCommandSupported(command)) {
            throw 'The command "' + command + '" is not supported';
        }
        if (command === 'createlink' || command === 'insertImage') {
            options = window.prompt('Please enter the URL', 'http://');
            if (!options) {
                return;
            }
        }
        this.container.focus();
        // use insertHtml for `createlink` command to account for IE/Edge purposes, in case there is no selection
        var /** @type {?} */ selection = document.getSelection().toString();
        if (command === 'createlink' && selection === '') {
            document.execCommand('insertHtml', false, '<a href="' + options + '">' + options + '</a>');
        }
        else {
            document.execCommand(command, false, options);
        }
        this.onContentChange(this.container.innerHTML);
    };
    /**
     * @return {?}
     */
    NgxWigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toolbarButtons = this._ngWigToolbarService.getToolbarButtons(this.buttons);
        this.container = this.ngxWigEditable.nativeElement;
        if (this.content) {
            this.container.innerHTML = this.content;
        }
    };
    /**
     * @param {?} newContent
     * @return {?}
     */
    NgxWigComponent.prototype.onContentChange = /**
     * @param {?} newContent
     * @return {?}
     */
    function (newContent) {
        this.content = newContent;
        this.contentChange.emit(this.content);
        this.propagateChange(this.content);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxWigComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.container && changes['content']) {
            // clear the previous content
            this.container.innerHTML = '';
            // add the new content
            this.pasteHtmlAtCaret(changes['content'].currentValue);
        }
    };
    /**
     * @param {?} newContent
     * @return {?}
     */
    NgxWigComponent.prototype.onTextareaChange = /**
     * @param {?} newContent
     * @return {?}
     */
    function (newContent) {
        // model -> view
        this.container.innerHTML = newContent;
        this.onContentChange(newContent);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxWigComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            value = '';
        }
        this.container.innerHTML = value;
        this.onContentChange(value);
    };
    /**
     * @return {?}
     */
    NgxWigComponent.prototype.shouldShowPlaceholder = /**
     * @return {?}
     */
    function () {
        return this.placeholder
            && !this.container.innerText;
    };
    /**
     * @param {?} html
     * @return {?}
     */
    NgxWigComponent.prototype.pasteHtmlAtCaret = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        var /** @type {?} */ sel, /** @type {?} */ range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                // append the content in a temporary div
                var /** @type {?} */ el = document.createElement('div');
                el.innerHTML = html;
                var /** @type {?} */ frag = document.createDocumentFragment(), /** @type {?} */ node = void 0, /** @type {?} */ lastNode = void 0;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);
                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxWigComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxWigComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateTouched = fn;
    };
    /**
     * @return {?}
     */
    NgxWigComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.propagateTouched();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxWigComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgxWigComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-wig',
                    template: "<div class=\"ng-wig\"> <ul *ngIf=\"toolbarButtons.length\" class=\"nw-toolbar\"> <li *ngFor=\"let button of toolbarButtons\" class=\"nw-toolbar__item\"> <div *ngIf=\"!button.isComplex\"> <button type=\"button\" class=\"nw-button\" [ngClass]=\"[button.styleClass, iconsTheme]\" [title]=\"button.title\" (click)=\"execCommand(button.command)\" [disabled]=\"disabled\" tabindex=\"-1\"> {{ button.title }} </button> </div> </li><!-- --><li class=\"nw-toolbar__item\"> <button type=\"button\" class=\"nw-button nw-button--source\" title=\"Edit HTML\" [class.nw-button--active] = \"editMode\" [ngClass]=\"iconsTheme\" *ngIf=\"isSourceModeAllowed\" (click)=\"toggleEditMode()\" [disabled]=\"disabled\" tabindex=\"-1\"> Edit HTML </button> </li> </ul> <div class=\"nw-editor-container\" (click)=\"container.focus()\" [ngClass]=\"{ 'nw-editor-container--with-toolbar': toolbarButtons.length }\"> <div *ngIf=\"editMode\" class=\"nw-editor__src-container\"> <textarea [ngModel]=\"content\" (ngModelChange)=\"onTextareaChange($event)\" (blur)=\"propagateTouched()\" class=\"nw-editor__src\"> </textarea> </div> <div class=\"nw-editor\" [ngClass]=\"{ 'nw-disabled': disabled,'nw-invisible': editMode }\"> <div *ngIf=\"shouldShowPlaceholder()\" class=\"nw-editor__placeholder\" [innerText]=\"placeholder\"> </div> <div #ngWigEditable class=\"nw-editor__res\" [attr.contenteditable]=\"!disabled\" [ngClass]=\"{ disabled: disabled}\" (focus)=\"hasFocus = true\" (blur)=\"onBlur()\" (input)=\"onContentChange(ngWigEditable.innerHTML)\"><!-- --></div> </div> </div> </div> ",
                    styles: ["/* -------- NG-WIG -------- */ /** * *  RESET BOX MODEL * */ .ng-wig, [class^=\"nw-\"] { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -o-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; } /** *   main wrapper for the editor * *  .ngx-wig * */ .ng-wig { display: block; padding: 0; margin: 0; } /** *  styling for toolbar and its items * *  .nw-toolbar *    &__item * */ .nw-toolbar { display: block; margin: 0; padding: 0; list-style: none; font-size: 12px; color: #6B7277; background: -webkit-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%); background: -moz-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%); background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%); border: 1px solid #CCCCCC; border-radius: 3px 3px 0 0; } .nw-toolbar__item { display: inline-block; vertical-align: top; margin: 0; border-right: 1px solid #DEDEDE; } .nw-toolbar label { line-height: 30px; display: inline-block; padding: 0 6px 0 3px; } .nw-toolbar input[type=checkbox] { vertical-align: -3px; margin-right: -1px; } /** *  styling for the editor part: source code (original textarea) and resulting div * *  .nw-editor *    &__src *    &__res * */ .nw-editor { /* Default when height is not set */ display: block; position: relative; height: 300px; background: #fff; cursor: text; width: 100%; overflow-y: auto; } .nw-editor-container { border: 1px solid #CCCCCC; border-radius: 0 0 3px 3px; position: relative; } .nw-editor-container--with-toolbar { border-top: none; } .nw-editor__res { display: block; min-height: 100%; padding: 1px 8px; } .nw-editor__placeholder { display: block; position: absolute; padding: 1px 8px; color: lightgray; width: 100%; } .nw-editor__src, .nw-editor__res { width: 100%; outline: none; box-sizing: border-box; border: none; margin: 0; } .nw-editor__res.disabled { opacity: 0.5; } .nw-editor__src-container { position: absolute; left: 0; top: 0; right: 0; bottom: 0; } .nw-editor__src { height: 100%; resize: none; padding: 1px 8px; } .nw-editor--fixed .nw-editor { display: block; overflow-y: auto; } .nw-editor--fixed .nw-editor__res { padding: 1px 8px; display: block; } .nw-invisible { visibility: hidden; } .nw-editor--fixed .nw-invisible { display: none; } .nw-editor.nw-disabled { cursor: default; } /** *  styling for toolbar button, has two modifiers: active and type of icon for background * *  .nw-button *    &--active *    &--{button type} * */ .nw-button { -webkit-appearance: none; -moz-appearance: none; appearance: none; display: block; width: 30px; height: 30px; margin: 0; padding: 0; opacity: 0.5; line-height: 30px; background-color: transparent; background-position: center center; background-repeat: no-repeat; border: none; border-radius: 2px; font-size: 0; cursor: pointer; } .nw-button-fa:before { font-size: 12px; font-family: FontAwesome; } .nw-button-fa.bold:before { content: '\\f032'; } .nw-button-fa.italic:before { content: '\\f033'; } .nw-button-fa.list-ul:before { content: '\\f0ca'; } .nw-button-fa.list-ol:before { content: '\\f0cb'; } .nw-button-fa.link:before { content: '\\f0c1'; } .nw-button-fa.format-underlined:before { content: '\\f0cd'; } .nw-button-fa.font-color:before { content: '\\f031'; } .nw-button-fa.nw-button--source:before { content: '\\f040'; } .nw-button-fa.clear-styles:before { content: '\\f12d'; } .nw-button-mdi:before { vertical-align: middle; font-size: 14px; font-family: \"Material Design Icons\"; } .nw-button-mdi.bold:before { content: '\\f264'; } .nw-button-mdi.italic:before { content: '\\f277'; } .nw-button-mdi.list-ul:before { content: '\\f279'; } .nw-button-mdi.list-ol:before { content: '\\f27B'; } .nw-button-mdi.link:before { content: '\\f339'; } .nw-button-mdi.format-underlined:before { content: '\\f287'; } .nw-button-mdi.font-color:before { content: '\\f6D5'; } .nw-button-mdi.nw-button--source:before { content: '\\f3EB'; } .nw-button-mdi.clear-styles:before { content: '\\f1fE'; } .nw-button:focus { outline: none; } .nw-button:hover, .nw-button.nw-button--active { opacity: 1 } .nw-button--active { background-color: #EEEEEE; } .nw-button:disabled { cursor: default; } .nw-button:disabled:hover { opacity: 0.5; } /** *  styling & formatting of content inside contenteditable div * *  .nw-content * */ .nw-content { padding: 12px; margin: 0; font-family: sans-serif; font-size: 14px; line-height: 24px; } .nw-select { height: 30px; padding: 6px; color: #555; background-color: inherit; border: 0; } .nw-select:disabled { opacity: 0.5; } .nw-select:focus { outline: none; } .nw-button:focus { border-color: lightgray; border-style: solid; } [contenteditable]:empty:before { content: attr(placeholder); color: grey; display: inline-block; } "],
                    providers: [
                        NgxWigToolbarService,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return NgxWigComponent; }),
                            multi: true
                        }
                    ],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    NgxWigComponent.ctorParameters = function () { return [
        { type: NgxWigToolbarService, },
    ]; };
    NgxWigComponent.propDecorators = {
        "content": [{ type: core.Input },],
        "placeholder": [{ type: core.Input },],
        "buttons": [{ type: core.Input },],
        "disabled": [{ type: core.Input },],
        "isSourceModeAllowed": [{ type: core.Input },],
        "contentChange": [{ type: core.Output },],
        "ngxWigEditable": [{ type: core.ViewChild, args: ['ngWigEditable',] },],
    };
    return NgxWigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxWigModule = (function () {
    function NgxWigModule() {
    }
    NgxWigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule
                    ],
                    declarations: [
                        NgxWigComponent,
                    ],
                    exports: [
                        NgxWigComponent,
                    ],
                    providers: [NgxWigToolbarService]
                },] },
    ];
    return NgxWigModule;
}());

exports.NgxWigModule = NgxWigModule;
exports.NgxWigComponent = NgxWigComponent;
exports.NgxWigToolbarService = NgxWigToolbarService;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/app/dashboard/dahboardpage.component.css":
/*!******************************************************!*\
  !*** ./src/app/dashboard/dahboardpage.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.full-width-input {\n  width: 50%;\n}\n\nmat-card-content{\n  width:45%;\n}\n\n.w-47{\n  width:47% !important;\n}\n\n.m-r-25{\n  margin-right:26px;\n}\n\n.mat-form-field{\n  width:100%;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 97%;\n  padding: 10px;\n}\n\n.CodeMirror {\n  min-height: 100px !important;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.mat-form-field{\n  width:100%;\n}\n\n.mat-card{\n  padding:5px 5px 0px 10px;\n}\n\nmat-radio-group{\n  float: right;\n  margin-top: 16px;\n}\n\n.rightbtn{\n  float: right;\n  bottom: 7px;\n}\n\ninput.mat-input-element{\n  width:70%;\n}\n\n/*.next{\n  float: left;\n  margin-top: 10px;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2RhaGJvYXJkcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2RhaGJvYXJkcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5mdWxsLXdpZHRoLWlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxubWF0LWNhcmQtY29udGVudHtcbiAgd2lkdGg6NDUlO1xufVxuXG4udy00N3tcbiAgd2lkdGg6NDclICFpbXBvcnRhbnQ7XG59XG5cbi5tLXItMjV7XG4gIG1hcmdpbi1yaWdodDoyNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogOTclO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLkNvZGVNaXJyb3Ige1xuICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDoxMDAlO1xufVxuXG4ubWF0LWNhcmR7XG4gIHBhZGRpbmc6NXB4IDVweCAwcHggMTBweDtcbn1cblxubWF0LXJhZGlvLWdyb3Vwe1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yaWdodGJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3R0b206IDdweDtcbn1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnR7XG4gIHdpZHRoOjcwJTtcbn1cblxuLyoubmV4dHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dahboardpage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dahboardpage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"signin-content\" *ngIf=\"!showForm\"  >\n    <mat-card>\n        <mat-card-title>\n          <p>Add Question</p>\n        </mat-card-title>\n        <mat-card-content>\n            <mat-form-field class=\"w-47 m-r-25\">\n                <mat-select matTooltip=\"Select exam category\" placeholder=\"Select category\" [(ngModel)]=\"quiz.skill\">\n                    <mat-option   *ngFor=\"let item of categoryList ;let i =index\" [value]=\"item.id\">{{item.title}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"w-47\">\n                <mat-select matTooltip=\"Select Difficulty level \" placeholder=\"Select Difficulty level\" [(ngModel)]=\"quiz.level\">\n                    <mat-option    value=\"easy\">easy</mat-option>\n                    <mat-option    value=\"easy\">medium</mat-option>\n                    <mat-option    value=\"easy\">difficulty</mat-option>\n                </mat-select>\n            </mat-form-field>\n\n\n\n            <ngx-wig [content]=\"text1\" matTooltip=\"Enter the question\" [(ngModel)]=\"quiz.question\"></ngx-wig>\n\n\n            <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Add code\" matTooltip=\"Add source code\"  [(ngModel)]=\"quiz.code\"></textarea>\n            </mat-form-field>\n            <button matTooltip=\"Add more answer\" mat-button color=\"primary\" (click)=\"addAnswer()\">\n                <mat-icon>add</mat-icon>\n                Add answer</button>\n                <div *ngFor=\"let item of answerlist ;let i =index\" class=\"animated slideInDown\">\n                    {{i+1 }}  <mat-form-field >\n                        <input class=\"txtbx\" matInput placeholder=\"Answer\" matTooltip=\"Enter answer here\" [(ngModel)]=\"item.answer\">\n                        <mat-radio-group  matTooltip=\"select the correct answer\" [(ngModel)]=\"quiz.correct_answer\">\n                            <mat-radio-button   [value]=\"i\">Correct answer </mat-radio-button>\n                        </mat-radio-group>\n                        <button matTooltip=\"Delete this answer\" mat-button color=\"primary\" (click)=\"removeAnswer(i)\" class=\"rightbtn\"><mat-icon>delete_forever</mat-icon>\n                        </button>\n                    </mat-form-field>\n                </div>\n                <button mat-button color=\"primary\"  (click)=\"addQuestion()\" class=\"next\" >\n                    Next\n                </button>\n            </mat-card-content></mat-card></div>\n\n\n\n            <div class=\"signin-content\" *ngIf=\"showForm\">\n                <mat-card>\n                    <mat-card-content>\n                        <p>Add Question</p>\n                        <input\n                        style=\"display: none\"\n                        type=\"file\" (change)=\"addImage($event)\"\n                        #fileInput>\n                        <button mat-icon-button (click)=\"fileInput.click()\">Upload Image\n                          <mat-icon >cloud_upload</mat-icon>\n                        </button>\n\n                        <img *ngIf=\"url!=null\" [src]=\"url\" mat-card-sm-image> <br/>\n                        <button mat-button color=\"primary\"  (click)=\"goToListing()\" >\n                            Save\n                        </button>\n                    </mat-card-content></mat-card></div>\n"

/***/ }),

/***/ "./src/app/dashboard/dahboardpage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/dahboardpage.component.ts ***!
  \*****************************************************/
/*! exports provided: DahboardpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DahboardpageComponent", function() { return DahboardpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data.service */ "./src/data.service.ts");
/* harmony import */ var _services_webservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/webservices.service */ "./src/app/services/webservices.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DahboardpageComponent = /** @class */ (function () {
    function DahboardpageComponent(_services, router, msg, route) {
        var _this = this;
        this._services = _services;
        this.router = router;
        this.msg = msg;
        this.route = route;
        this.answerlist = [{ answer: '' }];
        this.quiz = {};
        this.options = { lineWrapping: true, toolbar: false };
        this.categoryList = [];
        this.name = '';
        this.route.queryParams.subscribe(function (params) {
            _this.param1 = params['id'];
            if (_this.param1 === undefined) {
                _this.edit = false;
            }
            else {
                _this.edit = true;
                _this.getQuestion();
            }
        });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    DahboardpageComponent.prototype.ngAfterViewInit = function () {
        this.getCategory();
    };
    DahboardpageComponent.prototype.getCategory = function () {
        var _this = this;
        this._services.getCategory().subscribe(function (response) {
            var result = response.response.data;
            _this.categoryList = result;
        }, function (error) { });
    };
    DahboardpageComponent.prototype.addAnswer = function () {
        this.answerlist.push({ answer: '' });
    };
    DahboardpageComponent.prototype.removeAnswer = function (i) {
        this.answerlist.splice(i, 1);
    };
    DahboardpageComponent.prototype.getQuestion = function () {
        var _this = this;
        var obj = {
            id: this.param1
        };
        this._services.getQuestion(obj).subscribe(function (response) {
            var result = response.response.data;
            _this.quiz = result;
            _this.answerlist = result.answer;
            _this.url = result.image;
        });
    };
    DahboardpageComponent.prototype.openInput = function () {
        // your can use ElementRef for this later
        document.getElementById('fileInput').click();
    };
    DahboardpageComponent.prototype.fileChange = function (files) {
        if (files.length > 0) {
            this.ourFile = files[0];
        }
    };
    DahboardpageComponent.prototype.onSelectFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.ourFile = event.target.files[0];
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            // tslint:disable-next-line:no-shadowed-variable
            reader.onload = function (event) {
                // called once readAsDataURL is completed
                //  this.url = event.target.result;
            };
        }
    };
    /**
     * this is used to perform the actual upload
     */
    DahboardpageComponent.prototype.upload = function () {
        this.image = document.getElementById('fileInput');
    };
    DahboardpageComponent.prototype.addQuestion = function () {
        var _this = this;
        if (!this.quiz.skill) {
            this.msg.openSnackBar('Please select skill');
            return false;
        }
        if (!this.quiz.level) {
            this.msg.openSnackBar('Please select level');
            return false;
        }
        if (!this.quiz.question) {
            this.msg.openSnackBar('Please enter question');
            return false;
        }
        this.answerlist.forEach(function (element) {
            if (element.answer === '') {
                _this.msg.openSnackBar('Please enter some answer');
                return false;
            }
        });
        this.quiz.answer = this.answerlist;
        this.quiz.status = 1;
        var cond = this.edit ? 'update' : 'add';
        // const uploadData = new FormData();
        // if (this.ourFile) {
        //   uploadData.append('question_file', this.ourFile, this.ourFile.name);
        //   this.quiz.image_available = true;
        // } else {
        //   this.quiz.image_available = false;
        // }
        // uploadData.append('param', JSON.stringify(this.quiz));
        this._services.addQuestion(this.quiz, cond).subscribe(function (response) {
            _this.quiz = [];
            _this.showForm = true;
        });
    };
    DahboardpageComponent.prototype.clearCache = function () {
        this._services.clearCache();
    };
    DahboardpageComponent.prototype.goToListing = function () {
        this.router.navigate(['/question-listing']);
    };
    DahboardpageComponent.prototype.addImage = function (event) {
        var item = {
            id: this.param1
        };
        var uploadData = new FormData();
        this.selectedFile = event.target.files;
        for (var i = 0; i < this.selectedFile.length; i++) {
            uploadData.append('question_file', this.selectedFile[i], this.selectedFile[i]['name']);
        }
        uploadData.append('param', JSON.stringify(item));
        this._services.uploadQuestionImage(uploadData).subscribe(function (Response) {
        }, function (Error) { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textEditor'),
        __metadata("design:type", String)
    ], DahboardpageComponent.prototype, "name", void 0);
    DahboardpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dahboardpage',
            template: __webpack_require__(/*! ./dahboardpage.component.html */ "./src/app/dashboard/dahboardpage.component.html"),
            styles: [__webpack_require__(/*! ./dahboardpage.component.css */ "./src/app/dashboard/dahboardpage.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_services_webservices_service__WEBPACK_IMPORTED_MODULE_3__["WebservicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DahboardpageComponent);
    return DahboardpageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dahboardpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dahboardpage.component */ "./src/app/dashboard/dahboardpage.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _dahboardpage_component__WEBPACK_IMPORTED_MODULE_2__["DahboardpageComponent"],
        canLoad: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_wig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wig */ "./node_modules/ngx-wig/ngx-wig.umd.js");
/* harmony import */ var ngx_wig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_wig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _dahboardpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dahboardpage.component */ "./src/app/dashboard/dahboardpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"], ngx_wig__WEBPACK_IMPORTED_MODULE_2__["NgxWigModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
            ],
            declarations: [_dahboardpage_component__WEBPACK_IMPORTED_MODULE_7__["DahboardpageComponent"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map