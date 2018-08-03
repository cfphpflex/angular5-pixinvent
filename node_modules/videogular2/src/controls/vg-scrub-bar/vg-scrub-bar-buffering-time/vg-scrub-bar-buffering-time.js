"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../../core/services/vg-api");
var VgScrubBarBufferingTime = (function () {
    function VgScrubBarBufferingTime(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarBufferingTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarBufferingTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarBufferingTime.prototype.getBufferTime = function () {
        var bufferTime = "0%";
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime = ((this.target.buffer.end / this.target.time.total) * 100) + '%';
            }
        }
        return bufferTime;
    };
    VgScrubBarBufferingTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarBufferingTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-buffering-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
                    styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarBufferingTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarBufferingTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarBufferingTime;
}());
exports.VgScrubBarBufferingTime = VgScrubBarBufferingTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1HO0FBQ25HLHdEQUFzRDs7SUF3Q2xELGlDQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFGZCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNoRjtTQUNKO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNyQjtJQUVELDZDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBdkVKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxvRUFBZ0U7b0JBQzFFLE1BQU0sRUFBRSxDQUFFLHVvQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkFoQzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBaUNULFlBQUs7O2tDQWxDVjs7QUFpQ2EsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiIFtzdHlsZS53aWR0aF09XCJnZXRCdWZmZXJUaW1lKClcIj48L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0QnVmZmVyVGltZSgpIHtcbiAgICAgICAgbGV0IGJ1ZmZlclRpbWUgPSBcIjAlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmJ1ZmZlciAmJiB0aGlzLnRhcmdldC5idWZmZXJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC50aW1lLnRvdGFsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVGltZSA9ICcwJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXJUaW1lID0gKCh0aGlzLnRhcmdldC5idWZmZXIuZW5kIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKiAxMDApICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlclRpbWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=