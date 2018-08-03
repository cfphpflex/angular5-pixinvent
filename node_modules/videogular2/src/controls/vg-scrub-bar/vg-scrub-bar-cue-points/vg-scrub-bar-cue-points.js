"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../../core/services/vg-api");
var VgScrubBarCuePoints = (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                var end = (this.vgCuePoints[i].endTime >= 0) ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.vgCuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.vgCuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    };
    VgScrubBarCuePoints.prototype.updateCuePoints = function () {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['vgCuePoints'].currentValue) {
            this.updateCuePoints();
        }
    };
    VgScrubBarCuePoints.prototype.ngDoCheck = function () {
        if (this.vgCuePoints) {
            var changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCuePoints.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-cue-points',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\"\n                  class=\"cue-point\"></span>\n        </div>\n    ",
                    styles: ["\n        vg-scrub-bar-cue-points {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-cue-points .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls vg-scrub-bar-cue-points {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCuePoints.propDecorators = {
        "vgCuePoints": [{ type: core_1.Input },],
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarCuePoints;
}());
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1ZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQVN1QjtBQUN2Qix3REFBc0Q7O0lBOENsRCw2QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87c0NBUFosS0FBSzt5QkFDZixFQUFFOzZCQUVNLEVBQUU7eUJBRXRCLENBQUM7UUFHVCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsMkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFB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QUM7YUFDMUI7U0FDSjtLQUNKO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkF6SEosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDRPQUtUO29CQUNELE1BQU0sRUFBRSxDQUFFLDRnQkFtQlQsQ0FBRTtpQkFDTjs7OztnQkF4Q0csaUJBQVU7Z0JBUUwsY0FBSzs7O2dDQWtDVCxZQUFLOzBCQUNMLFlBQUs7OzhCQTdDVjs7QUEyQ2Esa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2UsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VlLXBvaW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGNwIG9mIGN1ZVBvaW50c1wiIFtzdHlsZS53aWR0aF09XCJjcC4kJHN0eWxlPy53aWR0aFwiIFtzdHlsZS5sZWZ0XT1cImNwLiQkc3R5bGU/LmxlZnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdWUtcG9pbnRcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyLWN1ZS1wb2ludHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXNjcnViLWJhci1jdWUtcG9pbnRzIC5jdWUtcG9pbnQtY29udGFpbmVyIC5jdWUtcG9pbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAwLCAwLjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWN1ZS1wb2ludHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDNweCk7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhckN1ZVBvaW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnQ3VlUG9pbnRzOiBUZXh0VHJhY2tDdWVMaXN0O1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBvbkxvYWRlZE1ldGFkYXRhQ2FsbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VlUG9pbnRzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgdG90YWxDdWVzID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcblxuICAgICAgICBsZXQgb25UaW1lVXBkYXRlID0gdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5sb2FkZWRNZXRhZGF0YTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gob25UaW1lVXBkYXRlLnN1YnNjcmliZSh0aGlzLm9uTG9hZGVkTWV0YWRhdGEuYmluZCh0aGlzKSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uTG9hZGVkTWV0YWRhdGFDYWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkZWRNZXRhZGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmdDdWVQb2ludHMpIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhbnNmb3JtIHRoZSBUZXh0VHJhY2tDdWVMaXN0IHRvIEFycmF5IG9yIGl0IGRvZXNuJ3Qgd29yayBvbiBJRTExL0VkZ2UuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2d1bGFyL3ZpZGVvZ3VsYXIyL2lzc3Vlcy8zNjlcbiAgICAgICAgICAgIHRoaXMuY3VlUG9pbnRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy52Z0N1ZVBvaW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gKHRoaXMudmdDdWVQb2ludHNbIGkgXS5lbmRUaW1lID49IDApID8gdGhpcy52Z0N1ZVBvaW50c1sgaSBdLmVuZFRpbWUgOiB0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uc3RhcnRUaW1lICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgY3VlUG9pbnREdXJhdGlvbiA9IChlbmQgLSB0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uc3RhcnRUaW1lKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gJzAnO1xuICAgICAgICAgICAgICAgIGxldCBwZXJjZW50V2lkdGggPSAnMCc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1ZVBvaW50RHVyYXRpb24gPT09ICdudW1iZXInICYmIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudFdpZHRoID0gKChjdWVQb2ludER1cmF0aW9uICogMTAwKSAvIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKHRoaXMudmdDdWVQb2ludHNbIGkgXS5zdGFydFRpbWUgKiAxMDAgLyAoTWF0aC5yb3VuZCh0aGlzLnRhcmdldC50aW1lLnRvdGFsIC8gMTAwMCkpKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMudmdDdWVQb2ludHNbIGkgXSkuJCRzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBlcmNlbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdWVQb2ludHMucHVzaCh0aGlzLnZnQ3VlUG9pbnRzWyBpIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VlUG9pbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkTWV0YWRhdGFDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICBpZiAoY2hhbmdlc1sgJ3ZnQ3VlUG9pbnRzJyBdLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdWVQb2ludHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmdDdWVQb2ludHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLnRvdGFsQ3VlcyAhPT0gdGhpcy52Z0N1ZVBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEN1ZXMgPSB0aGlzLnZnQ3VlUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=