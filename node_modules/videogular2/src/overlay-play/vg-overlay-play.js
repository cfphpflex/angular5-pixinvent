"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../core/services/vg-api");
var vg_states_1 = require("../core/states/vg-states");
var vg_fullscreen_api_1 = require("../core/services/vg-fullscreen-api");
var vg_controls_hidden_1 = require("../core/services/vg-controls-hidden");
var VgOverlayPlay = (function () {
    function VgOverlayPlay(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgOverlayPlay.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgOverlayPlay.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgOverlayPlay.prototype.onChangeFullscreen = function (fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    };
    VgOverlayPlay.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = vg_states_1.VgStates.VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === vg_states_1.VgStates.VG_PLAYING) {
                        state = vg_states_1.VgStates.VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    };
    VgOverlayPlay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgOverlayPlay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-overlay-play',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-overlay-play\"\n                    [class.native-fullscreen]=\"isNativeFullscreen\"\n                    [class.controls-hidden]=\"areControlsHidden\">\n                   <div class=\"overlay-play-container\"\n                        [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n                   </div>\n               </div>",
                    styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgOverlayPlay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgOverlayPlay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return VgOverlayPlay;
}());
exports.VgOverlayPlay = VgOverlayPlay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctb3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFFcEQsd0VBQXFFO0FBQ3JFLDBFQUF1RTs7SUF1RW5FLHVCQUFZLEdBQWUsRUFBUyxHQUFVLEVBQVMsS0FBc0IsRUFBVSxjQUFnQztRQUFuRixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7a0NBUHpGLEtBQUs7aUNBQ04sS0FBSzs2QkFFRixFQUFFOzJCQUV3QixLQUFLO1FBRzNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxxQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENB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QUFLO2dCQUdMLG1DQUFlO2dCQUNmLHFDQUFnQjs7OzBCQTREcEIsWUFBSztnQ0FTTCxrQkFBVyxTQUFDLG9CQUFvQjs0QkF3Q2hDLG1CQUFZLFNBQUMsT0FBTzs7d0JBckh6Qjs7QUFtRWEsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LFxuICAgIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctb3ZlcmxheS1wbGF5JyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZnLW92ZXJsYXktcGxheVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5uYXRpdmUtZnVsbHNjcmVlbl09XCJpc05hdGl2ZUZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY29udHJvbHMtaGlkZGVuXT1cImFyZUNvbnRyb2xzSGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGxheS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tcGxheV9hcnJvd109XCJnZXRTdGF0ZSgpICE9PSAncGxheWluZydcIj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheS5pcy1idWZmZXJpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheS5uYXRpdmUtZnVsbHNjcmVlbi5jb250cm9scy1oaWRkZW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXkgLm92ZXJsYXktcGxheS1jb250YWluZXIudmctaWNvbi1wbGF5X2Fycm93IHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXk6aG92ZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXk6aG92ZXIgLm92ZXJsYXktcGxheS1jb250YWluZXIudmctaWNvbi1wbGF5X2Fycm93OmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdPdmVybGF5UGxheSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgaXNOYXRpdmVGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgYXJlQ29udHJvbHNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWJ1ZmZlcmluZycpIGlzQnVmZmVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSwgcHJpdmF0ZSBjb250cm9sc0hpZGRlbjogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2xzSGlkZGVuLmlzSGlkZGVuLnN1YnNjcmliZSh0aGlzLm9uSGlkZUNvbnRyb2xzLmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmJ1ZmZlckRldGVjdGVkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBpc0J1ZmZlcmluZyA9PiB0aGlzLm9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJpbmcgPSBpc0J1ZmZlcmluZztcbiAgICB9XG5cbiAgICBvbkNoYW5nZUZ1bGxzY3JlZW4oZnNTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5mc0FQSS5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlRnVsbHNjcmVlbiA9IGZzU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpZGVDb250cm9scyhoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcmVDb250cm9sc0hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUExBWUlORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BBVVNFRDpcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfRU5ERUQ6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5zdGF0ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnRhcmdldC5zdGF0ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnN0YXRlWyBpIF0gPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnRhcmdldC5zdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==