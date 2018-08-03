webpackJsonp(["inbox.module"],{

/***/ "./src/app/inbox/inbox-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxRoutingModule; });
/* unused harmony export routedComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__inbox_component__["a" /* InboxComponent */],
        data: {
            title: 'Inbox'
        },
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], InboxRoutingModule);
    return InboxRoutingModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__inbox_component__["a" /* InboxComponent */]];


/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"email-application\">\r\n    <div class=\"content-overlay\"></div>\r\n    <div class=\"email-app-sidebar float-left d-none d-xl-block\">\r\n        <div class=\"email-app-sidebar-content\">\r\n            <div class=\"email-app-menu\">\r\n                <div class=\"form-group form-group-compose text-center\">\r\n                    <button type=\"button\" class=\"btn btn-raised btn-danger btn-block my-2\" (click)=\"open(content)\">\r\n                        <i class=\"ft-mail\"></i> Compose</button>\r\n                </div>\r\n                <h6 class=\"text-muted text-bold-500 mb-1\">Messages</h6>\r\n                <div class=\"list-group list-group-messages\">\r\n                    <a class=\"list-group-item active no-border\" (click)=\"GetEmailsByType($event, 'Inbox')\">\r\n                        <i class=\"ft-inbox mr-1\"></i> Inbox\r\n                        <span class=\"badge badge-dark badge-pill float-right\">8</span>\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByType($event, 'Sent')\">\r\n                        <i class=\"fa fa-paper-plane-o mr-1\"></i> Sent</a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByType($event, 'Work')\">\r\n                        <i class=\"ft-file mr-1\"></i> Draft</a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetStarredEmails($event)\">\r\n                        <i class=\"ft-star mr-1\"></i> Starred\r\n                        <span class=\"badge badge-danger badge-pill float-right\">3</span>\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByType($event, 'Trash')\">\r\n                        <i class=\"ft-trash-2 mr-1\"></i> Trash</a>\r\n                </div>\r\n                <h6 class=\"text-muted text-bold-500 mt-1 mb-1\">Labels</h6>\r\n                <div class=\"list-group list-group-messages\">\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByLabel($event, 'Work')\">\r\n                        <i class=\"ft-circle mr-1 warning\"></i> Work\r\n                        <span class=\"badge badge-warning badge-pill float-right\">5</span>\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByLabel($event, 'Family')\">\r\n                        <i class=\"ft-circle mr-1 danger\"></i> Family</a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByLabel($event, 'Friends')\">\r\n                        <i class=\"ft-circle mr-1 primary\"></i> Friends</a>\r\n                    <a class=\"list-group-item list-group-item-action no-border\" (click)=\"GetEmailsByLabel($event, 'Private')\">\r\n                        <i class=\"ft-circle mr-1 success\"></i> Private\r\n                        <span class=\"badge badge-success badge-pill float-right\">3</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"email-app-content row\">\r\n        <div class=\"email-search-box w-100 bg-white p-2\">\r\n            <div class=\"media\">\r\n                <span class=\"email-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none\"></span>\r\n                <div class=\"media-body\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"search for emails\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"email-app-content-area w-100\">\r\n            <div class=\"email-app-list-mails p-0\">\r\n                <div class=\"email-app-list\">\r\n                    <div id=\"users-list\">\r\n                        <div class=\"list-group\">\r\n                            <div class=\"users-list-padding\">\r\n                                <a [ngClass]=\"!mail.isDefault ? 'list-group-item list-group-item-action no-border' : 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2'\"  *ngFor=\"let mail of mail\" (click)=\"DisplayMessage($event, [mail.mailId])\">\r\n                                    <span class=\"media\">\r\n                                        <span class=\"avatar avatar-md mr-2\">\r\n                                            <span *ngIf=\"!mail.hasImage\" class=\"media-object rounded-circle text-circle d-flex mr-2 justify-content-center align-items-center + ' ' + {{mail.imageClass}}\">{{ mail.imageText }}</span>\r\n                                            <img *ngIf=\"mail.hasImage\" class=\"media-object rounded-circle\" [src]=\"mail.imagePath\" alt=\"Generic placeholder image\">\r\n                                        </span>\r\n                                        <div class=\"media-body\">\r\n                                            <h6 [ngClass]=\"mail.isRead === false ? 'list-group-item-heading text-bold-400' : 'list-group-item-heading' \">{{ mail.mailFrom }}\r\n                                                <span class=\"float-right\">\r\n                                                    <i class=\"fa-paperclip fa\" *ngIf=\"mail.hasAttachment\"></i>\r\n                                                    <span [ngClass]=\"mail.isRead === false ? 'font-small-2 primary' : 'font-small-2 float-right'\">{{ mail.time }}</span>\r\n                                                </span>\r\n                                            </h6>\r\n                                            <p [ngClass]=\"mail.isRead === false ? 'list-group-item-text text-truncate text-bold-500' : 'list-group-item-text text-truncate' \">{{ mail.subject }}</p>\r\n                                            <p class=\"list-group-item-text\">{{ mail.body }}\r\n                                                <span class=\"float-right primary\" *ngIf=\"mail.hasLabel\">\r\n                                                    <span class=\"badge mr-1 + ' ' + {{mail.labelClass}}\">{{ mail.labelType }}</span>\r\n                                                    <i [ngClass]=\"mail.isImportant === false ? 'font-medium-1 ft-star blue-grey lighten-3' : 'font-medium-1 ft-star warning'\"></i>\r\n                                                </span>\r\n                                                <span class=\"float-right primary\" *ngIf=\"!mail.hasLabel\">\r\n                                                    <i class=\"font-medium-1 ft-star blue-grey lighten-3\"></i>\r\n                                                </span>\r\n                                            </p>\r\n\r\n                                        </div>\r\n                                    </span>\r\n                                </a>\r\n                                <p class=\"primary text-center\" *ngIf=\"mail.length === 0\">There are no messages!</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"email-app-mail-content\">\r\n                <div class=\"email-app-mail-content-detail\" *ngIf=\"isMessageSelected\">\r\n                    <div class=\"email-app-options card-block\">\r\n                        <div class=\"row d-md-none\">\r\n                            <button class=\"btn btn-raised btn-primary ml-2 back-to-inbox\">\r\n                                <i class=\"fa fa-angle-left\"></i> Back to inbox</button>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6 col-12\">\r\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Replay\">\r\n                                        <i class=\"fa fa-reply\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Replay All\">\r\n                                        <i class=\"fa fa-reply-all\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Report SPAM\">\r\n                                        <i class=\"ft-alert-octagon\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Delete\">\r\n                                        <i class=\"ft-trash-2\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-12 text-right\">\r\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Previous\">\r\n                                        <i class=\"fa fa-angle-left\"></i>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Next\">\r\n                                        <i class=\"fa fa-angle-right\"></i>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"btn-group ml-1\">\r\n                                    <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\r\n                                        <button class=\"btn btn-sm btn-outline-secondary\" id=\"dropdownBasic1\" ngbDropdownToggle>More</button>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                            <button class=\"dropdown-item\">Mark as unread</button>\r\n                                            <button class=\"dropdown-item\">Mark as unimportant</button>\r\n                                            <button class=\"dropdown-item\">Add star</button>\r\n                                            <button class=\"dropdown-item\">Add to task</button>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <button class=\"dropdown-item\">Filter mail</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"email-app-title card-block\">\r\n                        <h3 class=\"list-group-item-heading\">{{message.subject}}</h3>\r\n                        <p class=\"list-group-item-text\">\r\n                            <span class=\"primary\">\r\n                                <span class=\"badge badge-primary\">Previous</span>\r\n                                <i class=\"float-right font-medium-3 ft-star warning\"></i>\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div *ngFor=\"let messageDetail of message.messages\">\r\n\r\n                        <div id=\"headingCollapse2\" class=\"card-header p-0\">\r\n                            <a (click)=\"messageDetail.collapsed = !messageDetail.collapsed\" [attr.aria-expanded]=\"!messageDetail.collapsed\" [attr.aria-controls]=\"messageDetail.messageId\">\r\n                                <div class=\"email-app-sender list-group-item list-group-item-action no-border\">\r\n                                    <div class=\"media\">\r\n                                        <span class=\"avatar avatar-md mr-2\">\r\n                                            <span *ngIf=\"!messageDetail.hasAvatar\" class=\"media-object rounded-circle text-circle d-flex mr-2 justify-content-center align-items-center + ' ' + {{messageDetail.avatarClass}}\">{{ messageDetail.avatarText }}</span>\r\n                                            <img *ngIf=\"messageDetail.hasAvatar\" class=\"media-object rounded-circle\" [src]=\"messageDetail.avatarPath\" alt=\"Generic placeholder image\">\r\n                                        </span>\r\n                                        <div class=\"media-body\">\r\n                                            <h6 class=\"list-group-item-heading\">{{messageDetail.mailFrom}}</h6>\r\n                                            <p class=\"list-group-item-text\">to {{messageDetail.mailTo}}\r\n                                                <span class=\"primary\">{{messageDetail.time}}</span>\r\n                                                <span class=\"float-right\">\r\n                                                    <i class=\"fa fa-reply mr-1\"></i>\r\n                                                    <i class=\"fa fa-arrow-right mr-1\"></i>\r\n                                                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                                                </span>\r\n                                            </p>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div [id]=\"messageDetail.messageId\" [ngbCollapse]=\"messageDetail.collapsed\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"email-app-text card-block\">\r\n                                    <div class=\"email-app-message\">\r\n                                        <div [innerHTML]=\"messageDetail.body\">\r\n                                        </div>\r\n                                        <div *ngIf=\"messageDetail.hasAttachment\">\r\n                                            <p class=\"primary\">Attachments:</p>\r\n                                            <div *ngFor=\"let attachment of messageDetail.attachments\" class=\"float-left mr-2\">\r\n                                                <img class=\"media-object width-100\" [src]=\"attachment.url\" alt=\"Generic placeholder image\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"email-app-text-action card-block\">\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"email-app-mail-content-detail\" *ngIf=\"!isMessageSelected\">\r\n                    <p class=\"primary text-center\">Select a message to read</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header px-4\">\r\n            <h4 class=\"modal-title\">Compose Email</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body px-4\">\r\n            <form role=\"form\" class=\"form form-horizontal\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-2 label-control\" for=\"emailTo\">To </label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" id=\"emailTo\" class=\"form-control\" name=\"emailTo\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-2 label-control\" for=\"emailCC\">Cc / Bcc </label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" id=\"emailCC\" class=\"form-control\" name=\"emailCC\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-2 label-control\" for=\"emailSubject\">Subject </label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" id=\"emailSubject\" class=\"form-control\" name=\"emailSubject\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-2 label-control\">Message</label>\r\n                    <div class=\"col-md-10\">\r\n                        <quill-editor [style]=\"{height: '200px'}\"></quill-editor>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer px-4\">\r\n            <i class=\"fa-paperclip fa font-large-1 mr-3\"></i>\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"c('Close click')\">Save as Draft</button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"c('Close click')\">Send</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_service__ = __webpack_require__("./src/app/inbox/inbox.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = /** @class */ (function () {
    function InboxComponent(elRef, modalService, inboxService) {
        this.elRef = elRef;
        this.modalService = modalService;
        this.inboxService = inboxService;
        this.isCollapsed = true;
        this.isCollapsed1 = false;
        this.isMessageSelected = true;
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === 'Inbox'; });
        this.message = this.inboxService.message.filter(function (message) { return message.mailId === 4; })[0];
    }
    InboxComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/inbox.js');
    };
    //inbox user list click event function
    InboxComponent.prototype.DisplayMessage = function (event, mailId) {
        this.message = this.inboxService.message.filter(function (message) { return message.mailId.toString() === mailId.toString(); })[0];
        this.isMessageSelected = true;
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.users-list-padding > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item 
        event.currentTarget.setAttribute('class', 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    };
    //compose popup start
    InboxComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    InboxComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //compose popup ends
    //inbox labels click event function
    InboxComponent.prototype.GetEmailsByLabel = function (event, labelType) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.labelType === labelType; });
        this.SetItemActive(event);
    };
    //inbox type click event function
    InboxComponent.prototype.GetEmailsByType = function (event, type) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === type; });
        this.SetItemActive(event);
    };
    //inbox Starred click event function
    InboxComponent.prototype.GetStarredEmails = function (event) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.isImportant === true; });
        this.SetItemActive(event);
    };
    InboxComponent.prototype.SetItemActive = function (event) {
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.list-group-messages > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item 
        event.currentTarget.setAttribute('class', 'list-group-item active no-border');
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("./src/app/inbox/inbox.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__inbox_service__["a" /* InboxService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__inbox_service__["a" /* InboxService */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MessageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachments; });
var Mail = /** @class */ (function () {
    function Mail(mailId, mailFrom, subject, body, time, isRead, isImportant, hasAttachment, hasImage, imagePath, imageText, imageClass, mailType, hasLabel, labelType, labelClass, isDefault) {
        this.mailId = mailId;
        this.mailFrom = mailFrom;
        this.subject = subject;
        this.body = body;
        this.time = time;
        this.isRead = isRead;
        this.isImportant = isImportant;
        this.hasAttachment = hasAttachment;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageText = imageText;
        this.imageClass = imageClass;
        this.mailType = mailType;
        this.hasLabel = hasLabel;
        this.labelType = labelType;
        this.labelClass = labelClass;
        this.isDefault = isDefault;
    }
    return Mail;
}());

var Message = /** @class */ (function () {
    function Message(mailId, subject, messagesCount, messages) {
        this.mailId = mailId;
        this.subject = subject;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    return Message;
}());

var MessageDetail = /** @class */ (function () {
    function MessageDetail(messageId, mailFrom, mailTo, body, time, collapsed, hasAttachment, hasAvatar, avatarPath, avatarText, avatarClass, attachments) {
        this.messageId = messageId;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.body = body;
        this.time = time;
        this.collapsed = collapsed;
        this.hasAttachment = hasAttachment;
        this.hasAvatar = hasAvatar;
        this.avatarPath = avatarPath;
        this.avatarText = avatarText;
        this.avatarClass = avatarClass;
        this.attachments = attachments;
    }
    return MessageDetail;
}());

var Attachments = /** @class */ (function () {
    function Attachments(attachmentId, url) {
        this.attachmentId = attachmentId;
        this.url = url;
    }
    return Attachments;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_routing_module__ = __webpack_require__("./src/app/inbox/inbox-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_quill__ = __webpack_require__("./node_modules/ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__inbox_routing_module__["a" /* InboxRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_quill__["a" /* QuillModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__inbox_component__["a" /* InboxComponent */]
            ]
        })
    ], InboxModule);
    return InboxModule;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inbox_model__ = __webpack_require__("./src/app/inbox/inbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxService = /** @class */ (function () {
    function InboxService() {
        this.inbox = [
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](1, 'Tonny Deep', 'PixInvent, I found you...', 'I would be good.', '4:14 AM', false, false, false, false, '', 'T', 'bg-info', 'Inbox', true, 'Family', 'badge badge-danger mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](2, 'Louis Welch', 'Thanks, Let us do it.', 'Can we connect today...', '2:15 AM', false, false, true, false, '', 'L', 'bg-danger', 'Inbox', false, '', '', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](3, 'Envato Market', 'You have new comment...', 'Hi Pixinvent...', '11:18 PM', false, false, false, false, '', 'E', 'bg-warning', 'Inbox', true, 'Work', 'badge badge-warning mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](4, 'Wayne Burton', 'Project ABC Status...', 'Andy, Let us...', 'Today', true, true, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', 'Inbox', true, 'Private', 'badge badge-success mr-1', true),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](5, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', 'Inbox', true, 'Friends', 'badge badge-primary mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](6, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, false, true, false, '', 'H', 'bg-success', 'Inbox', false, '', '', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](7, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Inbox', true, 'Work', 'badge badge-warning mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](8, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Sent', true, 'Friends', 'badge badge-primary mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](9, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Sent', false, '', '', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](10, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', 'Sent', true, 'Work', 'badge badge-warning mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](11, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, true, false, false, '', 'H', 'bg-success', 'Sent', true, 'Private', 'badge badge-success mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](12, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Trash', true, 'Work', 'badge badge-warning mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](13, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Trash', true, 'Friends', 'badge badge-primary mr-1', false),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["b" /* Mail */](14, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Trash', false, '', '', false),
        ];
        this.message = [
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](1, 'PixInvent, I found you...', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Tonny Deep', "<p>Hi Tonny,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Tonny Deep', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Today', false, false, false, '', 'T', 'bg-info', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](2, 'Thanks, Let us do it.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Louis Welch', "<p>Hi Louis,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Louis Welch', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '2:15 AM', false, true, false, '', 'L', 'bg-danger', [
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](1, 'assets/img/gallery/1.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](2, 'assets/img/gallery/3.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](3, 'You have a new comment...', 1, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'Envato Market', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11:18 PM', false, false, false, '', 'E', 'bg-warning', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](4, 'Project ABC Status Report', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Wayne Burton', "<p>Hi Wayne,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Wayne Burton', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](5, 'Your New UI', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Yesterday', false, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](6, 'Thanks, Let us do it.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Heather Howell', "<p>Hi Heather,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '13 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Heather Howell', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '15 July', false, true, false, '', 'H', 'bg-success', [
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](1, 'assets/img/gallery/16.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](2, 'assets/img/gallery/17.jpg')
                ]),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](7, 'I paid it, Thanks.', 1, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '12 July', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](8, 'Where are you John?', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 August', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](9, 'Okay, I will call you.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '31 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '8 July', false, false, false, '', 'E', 'bg-info', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](10, 'Your New UI.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Yesterday', false, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', [
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](1, 'assets/img/gallery/1.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](2, 'assets/img/gallery/3.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](11, 'Thanks, Let us do it.', 1, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'Heather Howell', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '15 July', false, false, false, '', 'H', 'bg-success', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](12, 'I paid it, Thanks.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Kelly Reyes', "<p>Hi Kelly,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](13, 'Where are you John?', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '21 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["c" /* Message */](14, 'Okay, I will call you.', 2, [
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["d" /* MessageDetail */]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '8 July', false, true, false, '', 'E', 'bg-info', [
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](1, 'assets/img/gallery/1.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](2, 'assets/img/gallery/3.jpg'),
                    new __WEBPACK_IMPORTED_MODULE_1__inbox_model__["a" /* Attachments */](3, 'assets/img/gallery/21.jpg')
                ]),
            ])
        ];
    }
    InboxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InboxService);
    return InboxService;
}());



/***/ })

});
//# sourceMappingURL=inbox.module.chunk.js.map