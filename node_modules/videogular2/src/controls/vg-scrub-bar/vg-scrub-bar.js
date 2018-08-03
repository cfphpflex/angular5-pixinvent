"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../core/services/vg-api");
var vg_controls_hidden_1 = require("./../../core/services/vg-controls-hidden");
var vg_states_1 = require("../../core/states/vg-states");
var VgScrubBar = (function () {
    function VgScrubBar(ref, API, vgControlsHiddenState) {
        var _this = this;
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(function (hide) { return _this.onHideScrubBar(hide); }));
    }
    VgScrubBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBar.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBar.prototype.seekStart = function () {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === vg_states_1.VgStates.VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    };
    VgScrubBar.prototype.seekMove = function (offset) {
        if (this.isSeeking) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = percentage * this.target.time.total / 100;
            this.target.seekTime(percentage, true);
        }
    };
    VgScrubBar.prototype.seekEnd = function (offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    };
    VgScrubBar.prototype.touchEnd = function () {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    };
    VgScrubBar.prototype.getTouchOffset = function (event) {
        var offsetLeft = 0;
        var element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    };
    VgScrubBar.prototype.onMouseDownScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onMouseMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onMouseUpScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onTouchStartScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onTouchMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    };
    VgScrubBar.prototype.onTouchCancelScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.onTouchEndScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.arrowAdjustVolume = function (event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    };
    VgScrubBar.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBar.prototype.onHideScrubBar = function (hide) {
        this.hideScrubBar = hide;
    };
    VgScrubBar.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBar.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"scrubBar\"\n             tabindex=\"0\"\n             role=\"slider\"\n             aria-label=\"scrub bar\"\n             aria-level=\"polite\"\n             [attr.aria-valuenow]=\"getPercentage()\"\n             aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n             [attr.aria-valuetext]=\"getPercentage() + '%'\">\n            <ng-content></ng-content>\n        </div>\n        \n    ",
                    styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBar.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgScrubBar.propDecorators = {
        "hideScrubBar": [{ type: core_1.HostBinding, args: ['class.hide',] },],
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
        "onMouseDownScrubBar": [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        "onMouseMoveScrubBar": [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] },],
        "onMouseUpScrubBar": [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] },],
        "onTouchStartScrubBar": [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] },],
        "onTouchMoveScrubBar": [{ type: core_1.HostListener, args: ['document:touchmove', ['$event'],] },],
        "onTouchCancelScrubBar": [{ type: core_1.HostListener, args: ['document:touchcancel', ['$event'],] },],
        "onTouchEndScrubBar": [{ type: core_1.HostListener, args: ['document:touchend', ['$event'],] },],
        "arrowAdjustVolume": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgScrubBar;
}());
exports.VgScrubBar = VgScrubBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDtBQUNuRCwrRUFBNEU7QUFDNUUseURBQXVEOztJQTBGbkQsb0JBQVksR0FBZSxFQUFTLEdBQVUsRUFBRSxxQkFBdUM7UUFBdkYsaUJBR0M7UUFIbUMsUUFBRyxHQUFILEdBQUcsQ0FBTzs0QkFaSyxLQUFLO3dCQUczQixJQUFJO3lCQUlaLEtBQUs7MEJBQ0osS0FBSzs2QkFFSyxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLENBQUM7S0FDeEc7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsa0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBRVMsOEJBQVMsR0FBbkI7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Q3JDLFFBQVEsRUFBRSw0YUFhVDtvQkFDRCxNQUFNLEVBQUUsQ0FBRSxvbURBdURULENBQUU7aUJBQ047Ozs7Z0JBakZjLGlCQUFVO2dCQUdoQixjQUFLO2dCQUNMLHFDQUFnQjs7O2lDQStFcEIsa0JBQVcsU0FBQyxZQUFZOzBCQUV4QixZQUFLOzZCQUNMLFlBQUs7d0NBMkVMLG1CQUFZLFNBQUMsV0FBVyxFQUFFLENBQUUsUUFBUSxDQUFFO3dDQWN0QyxtQkFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUUsUUFBUSxDQUFFO3NDQVMvQyxtQkFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUUsUUFBUSxDQUFFO3lDQVM3QyxtQkFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTt3Q0FjdkMsbUJBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTswQ0FTL0MsbUJBQVksU0FBQyxzQkFBc0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTt1Q0FTakQsbUJBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFFLFFBQVEsQ0FBRTtzQ0FTOUMsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3FCQTNPdkM7O0FBbUZhLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nLFxuICAgIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4vLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXNjcnViLWJhcicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NydWJCYXJcIlxuICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgcm9sZT1cInNsaWRlclwiXG4gICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNjcnViIGJhclwiXG4gICAgICAgICAgICAgYXJpYS1sZXZlbD1cInBvbGl0ZVwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJnZXRQZXJjZW50YWdlKClcIlxuICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJnZXRQZXJjZW50YWdlKCkgKyAnJSdcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgICB6LWluZGV4OiAyNTA7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAxcywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAgICAgLWtodG1sLXRyYW5zaXRpb246IGJvdHRvbSAxcywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAxcywgb3BhY2l0eSAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2Zy1zY3J1Yi1iYXIgLnNjcnViQmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgLWtodG1sLXRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1zY3J1Yi1iYXIuaGlkZSB7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLmhpZGUge1xuICAgICAgICAgICAgYm90dG9tOiBpbml0aWFsO1xuICAgICAgICAgICAgb3BhY2l0eTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1NjcnViQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZScpIGhpZGVTY3J1YkJhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2Z1NsaWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBpc1NlZWtpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB3YXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSwgdmdDb250cm9sc0hpZGRlblN0YXRlOiBWZ0NvbnRyb2xzSGlkZGVuKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh2Z0NvbnRyb2xzSGlkZGVuU3RhdGUuaXNIaWRkZW4uc3Vic2NyaWJlKGhpZGUgPT4gdGhpcy5vbkhpZGVTY3J1YkJhcihoaWRlKSkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlZWtTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNhblBsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORykge1xuICAgICAgICAgICAgICAgIHRoaXMud2FzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlZWtNb3ZlKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihvZmZzZXQgKiAxMDAgLyB0aGlzLmVsZW0uc2Nyb2xsV2lkdGgsIDk5LjkpLCAwKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCA9IHBlcmNlbnRhZ2UgKiB0aGlzLnRhcmdldC50aW1lLnRvdGFsIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2Vla1RpbWUocGVyY2VudGFnZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Vla0VuZChvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuY2FuUGxheSkge1xuICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihvZmZzZXQgKiAxMDAgLyB0aGlzLmVsZW0uc2Nyb2xsV2lkdGgsIDk5LjkpLCAwKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlZWtUaW1lKHBlcmNlbnRhZ2UsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMud2FzUGxheWluZykge1xuICAgICAgICAgICAgICAgIHRoaXMud2FzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b3VjaEVuZCgpIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMud2FzUGxheWluZykge1xuICAgICAgICAgICAgdGhpcy53YXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0VG91Y2hPZmZzZXQoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgb2Zmc2V0TGVmdDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGVsZW1lbnQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBvZmZzZXRMZWZ0O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlRG93blNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmdTbGlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVrRW5kKCRldmVudC5vZmZzZXRYKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vla1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uTW91c2VNb3ZlU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyICYmIHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWVrTW92ZSgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uTW91c2VVcFNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyAnJGV2ZW50JyBdKVxuICAgIG9uVG91Y2hTdGFydFNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmdTbGlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVrRW5kKHRoaXMuZ2V0VG91Y2hPZmZzZXQoJGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZWtTdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNobW92ZScsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoTW92ZVNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla01vdmUodGhpcy5nZXRUb3VjaE9mZnNldCgkZXZlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoY2FuY2VsJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uVG91Y2hDYW5jZWxTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGVuZCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoRW5kU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyICYmIHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgYXJyb3dBZGp1c3RWb2x1bWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlZWtUaW1lKCh0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgKyA1MDAwKSAvIDEwMDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgodGhpcy50YXJnZXQudGltZS5jdXJyZW50IC0gNTAwMCkgLyAxMDAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJjZW50YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgPyAoKHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCAqIDEwMCkgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSArICclJyA6ICcwJSc7XG4gICAgfVxuXG4gICAgb25IaWRlU2NydWJCYXIoaGlkZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhpZGVTY3J1YkJhciA9IGhpZGU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=