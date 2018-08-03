"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../core/services/vg-api");
var VgTrackSelector = (function () {
    function VgTrackSelector(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTrackSelector.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTrackSelector.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var subs = Array.from(this.API.getMasterMedia().elem.children)
            .filter(function (item) { return item.tagName === 'TRACK'; })
            .filter(function (item) { return item.kind === 'subtitles'; })
            .map(function (item) {
            return ({
                label: item.label,
                selected: item.default === true,
                id: item.srclang
            });
        });
        this.tracks = subs.concat([
            {
                id: null,
                label: 'Off',
                selected: subs.every(function (item) { return item.selected === false; })
            }
        ]);
        var track = this.tracks.filter(function (item) { return item.selected === true; })[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    };
    VgTrackSelector.prototype.selectTrack = function (trackId) {
        var _this = this;
        this.trackSelected = (trackId === 'null') ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(this.API.getMasterMedia().elem.textTracks)
            .forEach(function (item) {
            if (item.language === trackId) {
                _this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        });
    };
    VgTrackSelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTrackSelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-track-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"track-selected\"\n                 [class.vg-icon-closed_caption]=\"!trackSelected\">\n                {{ trackSelected || '' }}\n            </div>\n            \n            <select class=\"trackSelector\" \n                    (change)=\"selectTrack($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"track selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let track of tracks\"\n                    [value]=\"track.id\"\n                    [selected]=\"track.selected === true\">\n                    {{ track.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector select.trackSelector::-ms-expand {\n            display: none;\n        }\n        vg-track-selector select.trackSelector option {\n            color: #000;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTrackSelector.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTrackSelector.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgTrackSelector;
}());
exports.VgTrackSelector = VgTrackSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdHJhY2stc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy10cmFjay1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxREFBbUQ7O0lBc0cvQyx5QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87NkJBSmQsRUFBRTtRQUs5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQU0sSUFBSSxHQUFrQixLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxRQUFRLENBQUM7YUFDaEcsTUFBTSxDQUFDLFVBQUMsSUFBaUIsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUF4QixDQUF3QixDQUFDO2FBQ3ZELE1BQU0sQ0FBQyxVQUFDLElBQXNCLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FBQzthQUM3RCxHQUFHLENBQUMsVUFBQyxJQUFzQjtZQUFLLE9BQUEsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO2dCQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDbkIsQ0FBQztRQUorQixDQUkvQixDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsTUFBTSxHQUNKLElBQUk7WUFDUDtnQkFDSSxFQUFFLEVBQUUsSUFBSTtnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDO2FBQ2xFO1VBQ0osQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQXRCLENBQXNCLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ2hDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQWU7UUFBM0IsaUJBY0M7UUFiRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7UUFFM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxVQUFVLENBQUM7YUFDdEUsT0FBTyxDQUFDLFVBQUMsSUFBZTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7YUFDekI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUN4QjtTQUNKLENBQUMsQ0FBQztLQUNWO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkF0SkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHd3QkFvQlQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsK3BEQXVEVCxDQUFFO2lCQUNOOzs7O2dCQTFGbUIsaUJBQVU7Z0JBQ3JCLGNBQUs7OzswQkEyRlQsWUFBSzs7MEJBNUZWOztBQTJGYSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctdHJhY2stc2VsZWN0b3InLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWNrLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tY2xvc2VkX2NhcHRpb25dPVwiIXRyYWNrU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICB7eyB0cmFja1NlbGVjdGVkIHx8ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInRyYWNrU2VsZWN0b3JcIiBcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxlY3RUcmFjaygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0cmFjayBzZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmFjayBvZiB0cmFja3NcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHJhY2suaWRcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwidHJhY2suc2VsZWN0ZWQgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdHJhY2subGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3RvciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3Rvcjo6LW1zLWV4cGFuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIHNlbGVjdC50cmFja1NlbGVjdG9yIG9wdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciAudHJhY2stc2VsZWN0ZWQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC52Zy1pY29uLWNsb3NlZF9jYXB0aW9uOmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1RyYWNrU2VsZWN0b3IgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuICAgIHRyYWNrczogQXJyYXk8T3B0aW9uPjtcbiAgICB0cmFja1NlbGVjdGVkOiBzdHJpbmc7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgY29uc3Qgc3ViczogQXJyYXk8T3B0aW9uPiA9IEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS5jaGlsZHJlbilcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IEhUTUxFbGVtZW50KSA9PiBpdGVtLnRhZ05hbWUgPT09ICdUUkFDSycpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBIVE1MVHJhY2tFbGVtZW50KSA9PiBpdGVtLmtpbmQgPT09ICdzdWJ0aXRsZXMnKVxuICAgICAgICAgICAgLm1hcCgoaXRlbTogSFRNTFRyYWNrRWxlbWVudCkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXRlbS5kZWZhdWx0ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLnNyY2xhbmdcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnRyYWNrcyA9IFtcbiAgICAgICAgICAgIC4uLnN1YnMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdPZmYnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdWJzLmV2ZXJ5KChpdGVtOiBPcHRpb24pID0+IGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHRyYWNrOiBPcHRpb24gPSB0aGlzLnRyYWNrcy5maWx0ZXIoKGl0ZW06IE9wdGlvbikgPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSlbIDAgXTtcbiAgICAgICAgdGhpcy50cmFja1NlbGVjdGVkID0gdHJhY2suaWQ7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdHJhY2subGFiZWw7XG4gICAgfVxuXG4gICAgc2VsZWN0VHJhY2sodHJhY2tJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHJhY2tTZWxlY3RlZCA9ICh0cmFja0lkID09PSAnbnVsbCcpID8gbnVsbCA6IHRyYWNrSWQ7XG5cbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSAnTm8gdHJhY2sgc2VsZWN0ZWQnO1xuXG4gICAgICAgIEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS50ZXh0VHJhY2tzKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW06IFRleHRUcmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxhbmd1YWdlID09PSB0cmFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJpYVZhbHVlID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tb2RlID0gJ3Nob3dpbmcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19