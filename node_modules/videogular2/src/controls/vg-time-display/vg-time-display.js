"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../core/services/vg-api");
// Workaround until we can use UTC with Angular Date Pipe
var VgUtcPipe = (function () {
    function VgUtcPipe() {
    }
    VgUtcPipe.prototype.transform = function (value, format) {
        var date = new Date(value);
        var result = format;
        var ss = date.getUTCSeconds();
        var mm = date.getUTCMinutes();
        var hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, ss);
        result = result.replace(/mm/g, mm);
        result = result.replace(/hh/g, hh);
        return result;
    };
    VgUtcPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'vgUtc' },] },
    ];
    return VgUtcPipe;
}());
exports.VgUtcPipe = VgUtcPipe;
var VgTimeDisplay = (function () {
    function VgTimeDisplay(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    VgTimeDisplay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTimeDisplay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-time-display',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc:vgFormat }}</span>\n        <ng-content></ng-content>\n    ",
                    styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTimeDisplay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTimeDisplay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgProperty": [{ type: core_1.Input },],
        "vgFormat": [{ type: core_1.Input },],
    };
    return VgTimeDisplay;
}());
exports.VgTimeDisplay = VgTimeDisplay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdGltZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdGltZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdIO0FBQ3hILHFEQUFtRDs7Ozs7SUFNL0MsNkJBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFjO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFrQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsSUFBSSxFQUFFLEdBQWtCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBVSxFQUFFLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOztnQkF4QkosV0FBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7b0JBTHZCOztBQU1hLDhCQUFTOztJQStEbEIsdUJBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPOzBCQVJoQixTQUFTO3dCQUNYLE9BQU87NkJBS0gsRUFBRTtRQUc5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNaO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFuRUosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdMQUlUO29CQUNELE1BQU0sRUFBRSxDQUFFLG9pQkFpQlQsQ0FBRTtpQkFDTjs7OztnQkExRDBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBMkRULFlBQUs7K0JBQ0wsWUFBSzs2QkFDTCxZQUFLOzt3QkE5RFY7O0FBMkRhLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBQaXBlVHJhbnNmb3JtLCBQaXBlLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuLy8gV29ya2Fyb3VuZCB1bnRpbCB3ZSBjYW4gdXNlIFVUQyB3aXRoIEFuZ3VsYXIgRGF0ZSBQaXBlXG5AUGlwZSh7IG5hbWU6ICd2Z1V0YycgfSlcbmV4cG9ydCBjbGFzcyBWZ1V0Y1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZvcm1hdDtcbiAgICAgICAgbGV0IHNzOiBzdHJpbmd8bnVtYmVyID0gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgICAgIGxldCBtbTogc3RyaW5nfG51bWJlciA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgICAgICBsZXQgaGg6IHN0cmluZ3xudW1iZXIgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG5cbiAgICAgICAgaWYgKHNzIDwgMTApIHtcbiAgICAgICAgICAgIHNzID0gJzAnICsgc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1tIDwgMTApIHtcbiAgICAgICAgICAgIG1tID0gJzAnICsgbW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhoIDwgMTApIHtcbiAgICAgICAgICAgIGhoID0gJzAnICsgaGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvc3MvZywgPHN0cmluZz5zcyk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9tbS9nLCA8c3RyaW5nPm1tKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL2hoL2csIDxzdHJpbmc+aGgpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXRpbWUtZGlzcGxheScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiAqbmdJZj1cInRhcmdldD8uaXNMaXZlXCI+TElWRTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGFyZ2V0Py5pc0xpdmVcIj57eyBnZXRUaW1lKCkgfCB2Z1V0Yzp2Z0Zvcm1hdCB9fTwvc3Bhbj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctdGltZS1kaXNwbGF5IHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdUaW1lRGlzcGxheSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnUHJvcGVydHk6IHN0cmluZyA9ICdjdXJyZW50JztcbiAgICBASW5wdXQoKSB2Z0Zvcm1hdDogc3RyaW5nID0gJ21tOnNzJztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBnZXRUaW1lKCkge1xuICAgICAgICBsZXQgdCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0ID0gTWF0aC5yb3VuZCh0aGlzLnRhcmdldC50aW1lWyB0aGlzLnZnUHJvcGVydHkgXSk7XG4gICAgICAgICAgICB0ID0gaXNOYU4odCkgfHwgdGhpcy50YXJnZXQuaXNMaXZlID8gMCA6IHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==