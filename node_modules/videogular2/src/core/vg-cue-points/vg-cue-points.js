"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_events_1 = require("../events/vg-events");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var VgCuePoints = (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new core_1.EventEmitter();
        this.onUpdateCuePoint = new core_1.EventEmitter();
        this.onExitCuePoint = new core_1.EventEmitter();
        this.onCompleteCuePoint = new core_1.EventEmitter();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    VgCuePoints.prototype.ngOnInit = function () {
        var onLoad = Observable_1.Observable.fromEvent(this.ref.nativeElement, vg_events_1.VgEvents.VG_LOAD);
        this.subscriptions.push(onLoad.subscribe(this.onLoad.bind(this)));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    };
    VgCuePoints.prototype.updateCuePoints = function (cues) {
        this.cuesSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        for (var i = 0, l = cues.length; i < l; i++) {
            var onEnter = Observable_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(onEnter.subscribe(this.onEnter.bind(this)));
            var onExit = Observable_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(onExit.subscribe(this.onExit.bind(this)));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.next(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.next(event.target);
    };
    VgCuePoints.prototype.ngDoCheck = function () {
        if (this.ref.nativeElement.cues) {
            var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    };
    VgCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgCuePoints.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgCuePoints]'
                },] },
    ];
    /** @nocollapse */
    VgCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    VgCuePoints.propDecorators = {
        "onEnterCuePoint": [{ type: core_1.Output, args: ['onEnterCuePoint',] },],
        "onUpdateCuePoint": [{ type: core_1.Output, args: ['onUpdateCuePoint',] },],
        "onExitCuePoint": [{ type: core_1.Output, args: ['onExitCuePoint',] },],
        "onCompleteCuePoint": [{ type: core_1.Output, args: ['onCompleteCuePoint',] },],
    };
    return VgCuePoints;
}());
exports.VgCuePoints = VgCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWN1ZS1wb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3Qyx5Q0FBdUM7O0lBaUJuQyxxQkFBbUIsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7K0JBVjhCLElBQUksbUJBQVksRUFBRTtnQ0FDaEIsSUFBSSxtQkFBWSxFQUFFOzhCQUN0QixJQUFJLG1CQUFZLEVBQUU7a0NBQ1YsSUFBSSxtQkFBWSxFQUFFOzZCQUV4RCxFQUFFO2lDQUNFLEVBQUU7eUJBRTFCLENBQUM7S0FHWjtJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO0lBRUQsNEJBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLElBQUksR0FBbUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELHFDQUFlLEdBQWYsVUFBZ0IsSUFBb0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztRQUVyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEUsSUFBSSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBRSxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtLQUNKO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQVU7UUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0M7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0Q7U0FDSjtLQUNKO0lBRUQsaUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFoRUosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozs7Z0JBUm1CLGlCQUFVOzs7b0NBVXpCLGFBQU0sU0FBQyxpQkFBaUI7cUNBQ3hCLGFBQU0sU0FBQyxrQkFBa0I7bUNBQ3pCLGFBQU0sU0FBQyxnQkFBZ0I7dUNBQ3ZCLGFBQU0sU0FBQyxvQkFBb0I7O3NCQWJoQzs7QUFTYSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cy92Zy1ldmVudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmdDdWVQb2ludHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBWZ0N1ZVBvaW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBAT3V0cHV0KCdvbkVudGVyQ3VlUG9pbnQnKSBvbkVudGVyQ3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29uVXBkYXRlQ3VlUG9pbnQnKSBvblVwZGF0ZUN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvbkV4aXRDdWVQb2ludCcpIG9uRXhpdEN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvbkNvbXBsZXRlQ3VlUG9pbnQnKSBvbkNvbXBsZXRlQ3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBjdWVzU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHRvdGFsQ3VlcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBvbkxvYWQgPSBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnJlZi5uYXRpdmVFbGVtZW50LCBWZ0V2ZW50cy5WR19MT0FEKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gob25Mb2FkLnN1YnNjcmliZSh0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGN1ZXM6IFRleHRUcmFja0N1ZVtdID0gZXZlbnQudGFyZ2V0LnRyYWNrLmN1ZXM7XG5cbiAgICAgICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jdWVzID0gY3VlcztcblxuICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cyhjdWVzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDdWVQb2ludHMoY3VlczogVGV4dFRyYWNrQ3VlW10pIHtcbiAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGN1ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb25FbnRlciA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGN1ZXNbIGkgXSwgVmdFdmVudHMuVkdfRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5wdXNoKG9uRW50ZXIuc3Vic2NyaWJlKHRoaXMub25FbnRlci5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgICAgIGxldCBvbkV4aXQgPSBPYnNlcnZhYmxlLmZyb21FdmVudChjdWVzWyBpIF0sIFZnRXZlbnRzLlZHX0VYSVQpO1xuICAgICAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5wdXNoKG9uRXhpdC5zdWJzY3JpYmUodGhpcy5vbkV4aXQuYmluZCh0aGlzKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbnRlcihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMub25FbnRlckN1ZVBvaW50Lm5leHQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBvbkV4aXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLm9uRXhpdEN1ZVBvaW50Lm5leHQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmN1ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLnRvdGFsQ3VlcyAhPT0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ3VlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3Vlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jdWVzID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VlUG9pbnRzKHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3Vlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==