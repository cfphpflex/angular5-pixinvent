webpackJsonp(["taskboard-ngrx.module"],{

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddTodo; });
var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__ = __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskboard_actions__ = __webpack_require__("./src/app/taskboard-ngrx/store/taskboard.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    todo: [
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')
    ],
    inProcess: [
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process')
    ],
    backLog: [
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending')
    ],
    completed: [
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new __WEBPACK_IMPORTED_MODULE_0__taskboard_ngrx_model__["a" /* Task */]('Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_1__taskboard_actions__["a" /* ADD_TODO */]):
            var todo = state.todo.slice();
            return __assign({}, state, { todo: state.todo.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskboard_ngrx_component__ = __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__taskboard_ngrx_component__["a" /* TaskboardNGRXComponent */],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Task Board NgRx</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Taskboard Starts -->\r\n<section id=\"taskboard\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-list mr-1\"></i> To Dos</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\r\n        <div *ngFor='let todo of todo'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{todo.taskMessage}}</p>\r\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"primary\">{{todo.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-trending-up mr-1\"></i> In Progress</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\r\n        <div *ngFor='let inProcess of inProcess'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{inProcess.taskMessage}}</p>\r\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"info\">{{inProcess.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-thumbs-up mr-1\"></i>Completed</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\r\n        <div *ngFor='let completed of completed'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{completed.taskMessage}}</p>\r\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"success\">{{completed.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-alert-octagon mr-1\"></i>On Hold</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\r\n        <div *ngFor='let backLog of backLog'>\r\n          <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{backLog.taskMessage}}</p>\r\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span class=\"warning\">{{backLog.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block pt-3\">\r\n        <h5 class=\"text-bold-500\">Create new Task</h5>\r\n        <form class=\"taskboard-app-input row\">\r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-4 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\"\r\n              #todoTitle>\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image\"></i>\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-6 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\" (keydown.enter)=\"$event.preventDefault()\"\r\n              #todoMessage>\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image\"></i>\r\n            </div>\r\n          </fieldset>\r\n         \r\n          <fieldset class=\"form-group position-relative has-icon-left col-md-2 col-12 mb-1\">\r\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onAddTask()\">\r\n              <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Create</button>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</section>\r\n<!-- Taskboard Ends -->\r\n\r\n"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss":
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 25%;\r\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskboardNGRXComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskboard_ngrx_model__ = __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_taskboard_actions__ = __webpack_require__("./src/app/taskboard-ngrx/store/taskboard.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_taskboard_actions__["b" /* AddTodo */](new __WEBPACK_IMPORTED_MODULE_1__taskboard_ngrx_model__["a" /* Task */](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('todoTitle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('todoMessage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.component.html"),
            styles: [__webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskboard_ngrx_routing_module__ = __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taskboard_ngrx_component__ = __webpack_require__("./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taskboard_ngrx_store_taskboard_reducers__ = __webpack_require__("./src/app/taskboard-ngrx/store/taskboard.reducers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__taskboard_ngrx_routing_module__["a" /* TaskboardNGRXRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].forFeature('task', __WEBPACK_IMPORTED_MODULE_6__taskboard_ngrx_store_taskboard_reducers__["a" /* taskReducer */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__taskboard_ngrx_component__["a" /* TaskboardNGRXComponent */]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

});
//# sourceMappingURL=taskboard-ngrx.module.chunk.js.map