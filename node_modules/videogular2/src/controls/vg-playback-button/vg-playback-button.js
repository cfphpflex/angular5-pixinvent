"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_api_1 = require("../../core/services/vg-api");
var VgPlaybackButton = (function () {
    function VgPlaybackButton(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.updatePlaybackSpeed();
    };
    VgPlaybackButton.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    };
    VgPlaybackButton.prototype.updatePlaybackSpeed = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof vg_api_1.VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.vgFor] = (this.playbackValues[this.playbackIndex]);
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    };
    VgPlaybackButton.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlaybackButton.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-playback-button',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <span class=\"button\"\n          tabindex=\"0\"\n          role=\"button\"\n          aria-label=\"playback speed button\"\n          [attr.aria-valuetext]=\"ariaValue\">\n        {{getPlaybackRate()}}x\n    </span>",
                    styles: ["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlaybackButton.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgPlaybackButton.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "playbackValues": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgPlaybackButton;
}());
exports.VgPlaybackButton = VgPlaybackButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWJhY2stYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlIO0FBQ2pILHFEQUFtRDs7SUFvRC9DLDBCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFKZCxFQUFFO3lCQUV0QixDQUFDO1FBR1QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztLQUMxQjtJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFHRCxrQ0FBTztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztJQUkvQixvQ0FBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCOztJQUdMLDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDeEY7S0FDSjtJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3pCO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFwR0osZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdPQU9GO29CQUNSLE1BQU0sRUFBRSxDQUFFLHFyQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkF2QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBd0NULFlBQUs7bUNBS0wsWUFBSzs0QkEwQkwsbUJBQVksU0FBQyxPQUFPOzhCQUtwQixtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7MkJBN0V2Qzs7QUF3Q2EsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXliYWNrLWJ1dHRvbicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwbGF5YmFjayBzcGVlZCBidXR0b25cIlxuICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICB7e2dldFBsYXliYWNrUmF0ZSgpfX14XG4gICAgPC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctcGxheWJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheWJhY2stYnV0dG9uIC5idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheWJhY2tCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgQElucHV0KCkgcGxheWJhY2tWYWx1ZXM6IEFycmF5PHN0cmluZz47XG4gICAgcGxheWJhY2tJbmRleDogbnVtYmVyO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZSA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBsYXliYWNrVmFsdWVzID0gWyAnMC41JywgJzEuMCcsICcxLjUnLCAnMi4wJyBdO1xuICAgICAgICB0aGlzLnBsYXliYWNrSW5kZXggPSAxO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWJhY2tTcGVlZCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBPbiBwcmVzcyBFbnRlciAoMTMpIG9yIFNwYWNlICgzMilcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1NwZWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQbGF5YmFja1NwZWVkKCkge1xuICAgICAgICB0aGlzLnBsYXliYWNrSW5kZXggPSArK3RoaXMucGxheWJhY2tJbmRleCAlIHRoaXMucGxheWJhY2tWYWx1ZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCBpbnN0YW5jZW9mIFZnQVBJKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5YmFja1JhdGUgPSAodGhpcy5wbGF5YmFja1ZhbHVlc1sgdGhpcy5wbGF5YmFja0luZGV4IF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheWJhY2tSYXRlWyB0aGlzLnZnRm9yIF0gPSAodGhpcy5wbGF5YmFja1ZhbHVlc1sgdGhpcy5wbGF5YmFja0luZGV4IF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGxheWJhY2tSYXRlKCkge1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQucGxheWJhY2tSYXRlIDogMS4wO1xuICAgICAgICByZXR1cm4gdGhpcy5hcmlhVmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=