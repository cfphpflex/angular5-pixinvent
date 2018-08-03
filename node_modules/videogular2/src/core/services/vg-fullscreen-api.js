"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_utils_1 = require("./vg-utils");
var Observable_1 = require("rxjs/Observable");
var VgFullscreenAPI = (function () {
    function VgFullscreenAPI() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new core_1.EventEmitter();
    }
    VgFullscreenAPI.prototype.init = function (elem, medias) {
        var _this = this;
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (vg_utils_1.VgUtils.isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = (this.polyfill != null);
        if (this.polyfill == null) {
            return;
        }
        var fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = Observable_1.Observable.fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(function () {
            _this.onFullscreenChange();
        });
    };
    VgFullscreenAPI.prototype.onFullscreenChange = function () {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.next(this.isFullscreen);
    };
    VgFullscreenAPI.prototype.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.prototype.request = function (elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.next(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (vg_utils_1.VgUtils.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) || vg_utils_1.VgUtils.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.prototype.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.prototype.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.next(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgFullscreenAPI.ctorParameters = function () { return []; };
    return VgFullscreenAPI;
}());
exports.VgFullscreenAPI = VgFullscreenAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSx1Q0FBcUM7QUFHckMsOENBQTZDOztJQWdCekM7Z0NBVDRCLElBQUk7NEJBQ1IsS0FBSztrQ0FNVyxJQUFJLG1CQUFZLEVBQUU7S0FHekQ7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBaUIsRUFBRSxNQUEwQjtRQUFsRCxpQkE4RkM7UUE3RkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFNLElBQUksR0FBRztZQUNULEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsT0FB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QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDNUMsUUFBUSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQztTQUNwQztLQUNKOztnQkFyS0osaUJBQVU7Ozs7MEJBTlg7O0FBT2EsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdVdGlscyB9IGZyb20gJy4vdmctdXRpbHMnO1xuaW1wb3J0IHsgVmdNZWRpYSB9IGZyb20gJy4uL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuQVBJIHtcbiAgICBwb2x5ZmlsbDogYW55O1xuICAgIG9uY2hhbmdlOiBzdHJpbmc7XG4gICAgb25lcnJvcjogc3RyaW5nO1xuICAgIG5hdGl2ZUZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQXZhaWxhYmxlOiBib29sZWFuO1xuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIGZzQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGluaXQoZWxlbTogSFRNTEVsZW1lbnQsIG1lZGlhczogUXVlcnlMaXN0PFZnTWVkaWE+KSB7XG4gICAgICAgIHRoaXMudmlkZW9ndWxhckVsZW1lbnQgPSBlbGVtO1xuICAgICAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcblxuICAgICAgICBjb25zdCBBUElzID0ge1xuICAgICAgICAgICAgdzM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnZnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdmdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnZXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ2Z1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXdXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbGRXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0SXNGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBvbmNoYW5nZTogJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW96OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21vekZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnbW96ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0RW50ZXJGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZW5kZnVsbHNjcmVlbicsIC8vIEhhY2sgZm9yIGlPUzogd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBpdCdzIG5vdCBmaXJpbmdcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnTVNGdWxsc2NyZWVuRXJyb3InXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYnJvd3NlciBpbiBBUElzKSB7XG4gICAgICAgICAgICBpZiAoQVBJc1sgYnJvd3NlciBdLmVuYWJsZWQgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlmaWxsID0gQVBJc1sgYnJvd3NlciBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZnVXRpbHMuaXNpT1NEZXZpY2UoKSkge1xuICAgICAgICAgICAgdGhpcy5wb2x5ZmlsbCA9IEFQSXMuaW9zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gKHRoaXMucG9seWZpbGwgIT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9seWZpbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZzRWxlbURpc3BhdGNoZXI7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnBvbHlmaWxsLm9uY2hhbmdlKSB7XG4gICAgICAgICAgICAvLyBNb3ppbGxhIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gZG9jdW1lbnQsIG5vdCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MjQ4MTYjYzNcbiAgICAgICAgICAgIGNhc2UgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnOlxuICAgICAgICAgICAgICAgIGZzRWxlbURpc3BhdGNoZXIgPSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gaU9TIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdmlkZW8gZWxlbWVudFxuICAgICAgICAgICAgY2FzZSAnd2Via2l0ZW5kZnVsbHNjcmVlbic6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIEhUTUw1IGltcGxlbWVudGF0aW9uIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZzQ2hhbmdlU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZnNFbGVtRGlzcGF0Y2hlciwgdGhpcy5wb2x5ZmlsbC5vbmNoYW5nZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GdWxsc2NyZWVuQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSAhIWRvY3VtZW50WyB0aGlzLnBvbHlmaWxsLmVsZW1lbnQgXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4ubmV4dCh0aGlzLmlzRnVsbHNjcmVlbik7XG4gICAgfVxuXG4gICAgdG9nZ2xlRnVsbHNjcmVlbihlbGVtZW50OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0KGVsZW06IGFueSkge1xuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIGVsZW0gPSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5uZXh0KHRydWUpO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gbmF0aXZlIGZ1bGwgc2NyZWVuIHN1cHBvcnRcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAvLyBGdWxsc2NyZWVuIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgICAgICAgaWYgKFZnVXRpbHMuaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBtYWtlIGZ1bGxzY3JlZW4gdGhlIHZpZGVvIG9iamVjdCBpZiBpdCBkb2Vzbid0IGhhdmUgbmF0aXZlIGZ1bGxzY3JlZW4gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrISBXZSBjYW4ndCBzZXQgdmctcGxheWVyIG9uIGZ1bGxzY3JlZW4sIG9ubHkgdmlkZW8vYXVkaW8gb2JqZWN0c1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMucG9seWZpbGwuZW5hYmxlZCAmJiBlbGVtID09PSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KSB8fCBWZ1V0aWxzLmlzaU9TRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlckVsZW1lbnRJbkZ1bGxTY3JlZW4oZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyRWxlbWVudEluRnVsbFNjcmVlbih0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyRWxlbWVudEluRnVsbFNjcmVlbihlbGVtOiBhbnkpIHtcbiAgICAgICAgZWxlbVsgdGhpcy5wb2x5ZmlsbC5yZXF1ZXN0IF0oKTtcbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5uZXh0KGZhbHNlKTtcblxuICAgICAgICAvLyBFeGl0IGZyb20gbmF0aXZlIGZ1bGxzY3JlZW5cbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudFsgdGhpcy5wb2x5ZmlsbC5leGl0IF0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==