"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../../core/services/vg-api");
var VgScrubBarCurrentTime = (function () {
    function VgScrubBarCurrentTime(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBarCurrentTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCurrentTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-current-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div><span class=\"slider\" *ngIf=\"vgSlider\"></span>",
                    styles: ["\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: white;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCurrentTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCurrentTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
    };
    return VgScrubBarCurrentTime;
}());
exports.VgScrubBarCurrentTime = VgScrubBarCurrentTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1cnJlbnQtdGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsd0RBQXNEOztJQXVEbEQsK0JBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO3dCQVBqQixLQUFLOzZCQUtGLEVBQUU7UUFHOUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELDZDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUVELDZDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDakc7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTNFSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUscUhBQTZHO29CQUN2SCxNQUFNLEVBQUUsQ0FBRSxzaUNBcUNULENBQUU7aUJBQ047Ozs7Z0JBOUMwQixpQkFBVTtnQkFDNUIsY0FBSzs7OzBCQStDVCxZQUFLOzZCQUNMLFlBQUs7O2dDQWpEVjs7QUErQ2Esc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIiBbc3R5bGUud2lkdGhdPVwiZ2V0UGVyY2VudGFnZSgpXCI+PC9kaXY+PHNwYW4gY2xhc3M9XCJzbGlkZXJcIiAqbmdJZj1cInZnU2xpZGVyXCI+PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDNweCk7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUgLnNsaWRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJDdXJyZW50VGltZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gKCh0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgKiAxMDApIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKyAnJScgOiAnMCUnO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19