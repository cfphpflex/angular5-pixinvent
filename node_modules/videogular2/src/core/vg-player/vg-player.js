"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../services/vg-api");
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
var vg_utils_1 = require("../services/vg-utils");
var vg_media_1 = require("../vg-media/vg-media");
var vg_controls_hidden_1 = require("../services/vg-controls-hidden");
var VgPlayer = (function () {
    function VgPlayer(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.next(this.api);
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    };
    VgPlayer.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgPlayer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-player',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "],
                    providers: [vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgPlayer.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgPlayer.propDecorators = {
        "isFullscreen": [{ type: core_1.HostBinding, args: ['class.fullscreen',] },],
        "isNativeFullscreen": [{ type: core_1.HostBinding, args: ['class.native-fullscreen',] },],
        "areControlsHidden": [{ type: core_1.HostBinding, args: ['class.controls-hidden',] },],
        "zIndex": [{ type: core_1.HostBinding, args: ['style.z-index',] },],
        "onPlayerReady": [{ type: core_1.Output },],
        "onMediaReady": [{ type: core_1.Output },],
        "medias": [{ type: core_1.ContentChildren, args: [vg_media_1.VgMedia,] },],
    };
    return VgPlayer;
}());
exports.VgPlayer = VgPlayer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBU3VCO0FBQ3ZCLDZDQUEyQztBQUMzQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQyxxRUFBa0U7O0lBZ0Q5RCxrQkFBWSxHQUFlLEVBQVMsR0FBVSxFQUFTLEtBQXNCLEVBQVUsY0FBZ0M7UUFBbkYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWtCOzRCQWhCOUQsS0FBSztrQ0FDUSxLQUFLO2lDQUNSLEtBQUs7NkJBSXJDLElBQUksbUJBQVksRUFBRTs0QkFHbkIsSUFBSSxtQkFBWSxFQUFFOzZCQUtwQixFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxrQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNuRTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztTQUNyQztLQUNKO0lBRUQsaUNBQWMsR0FBZCxVQUFlLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztLQUNuQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBakZKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBRSw0ZEFvQlQsQ0FBRTtvQkFDSCxTQUFTLEVBQUUsQ0FBRSxjQUFLLEVBQUUsbUNBQWUsRUFBRSxxQ0FBZ0IsQ0FBRTtpQkFDMUQ7Ozs7Z0JBdkNHLGlCQUFVO2dCQU1MLGNBQUs7Z0JBQ0wsbUNBQWU7Z0JBSWYscUNBQWdCOzs7aUNBZ0NwQixrQkFBVyxTQUFDLGtCQUFrQjt1Q0FDOUIsa0JBQVcsU0FBQyx5QkFBeUI7c0NBQ3JDLGtCQUFXLFNBQUMsdUJBQXVCOzJCQUNuQyxrQkFBVyxTQUFDLGVBQWU7a0NBRTNCLGFBQU07aUNBR04sYUFBTTsyQkFHTixzQkFBZSxTQUFDLGtCQUFPOzttQkExRDVCOztBQTRDYSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgT3V0cHV0LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5pbXBvcnQgeyBWZ1V0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdmctdXRpbHMnO1xuaW1wb3J0IHsgVmdNZWRpYSB9IGZyb20gJy4uL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXllcicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXBsYXllciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3ZpZGVvZ3VsYXInO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheWVyLmZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXllci5uYXRpdmUtZnVsbHNjcmVlbi5jb250cm9scy1oaWRkZW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0FQSSwgVmdGdWxsc2NyZWVuQVBJLCBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdQbGF5ZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsc2NyZWVuJykgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYXRpdmUtZnVsbHNjcmVlbicpIGlzTmF0aXZlRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbHMtaGlkZGVuJykgYXJlQ29udHJvbHNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnotaW5kZXgnKSB6SW5kZXg6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uUGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25NZWRpYVJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVmdNZWRpYSlcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBhcGk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSwgcHJpdmF0ZSBjb250cm9sc0hpZGRlbjogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmFwaS5yZWdpc3RlckVsZW1lbnQodGhpcy5lbGVtKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMubWVkaWFzLnRvQXJyYXkoKS5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGkucmVnaXN0ZXJNZWRpYShtZWRpYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnNBUEkuaW5pdCh0aGlzLmVsZW0sIHRoaXMubWVkaWFzKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2xzSGlkZGVuLmlzSGlkZGVuLnN1YnNjcmliZSh0aGlzLm9uSGlkZUNvbnRyb2xzLmJpbmQodGhpcykpKTtcblxuICAgICAgICB0aGlzLmFwaS5vblBsYXllclJlYWR5KHRoaXMuZnNBUEkpO1xuICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkubmV4dCh0aGlzLmFwaSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gZnNTdGF0ZSA/IFZnVXRpbHMuZ2V0WkluZGV4KCkudG9TdHJpbmcoKSA6ICdhdXRvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmVGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGlkZUNvbnRyb2xzKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFyZUNvbnRyb2xzSGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19