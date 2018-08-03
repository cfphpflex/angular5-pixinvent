"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_states_1 = require("../states/vg-states");
var VgAPI = (function () {
    function VgAPI() {
        this.medias = {};
        this.playerReadyEvent = new core_1.EventEmitter(true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgAPI.ctorParameters = function () { return []; };
    return VgAPI;
}());
exports.VgAPI = VgAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELGlEQUE2Qzs7SUFXekM7c0JBTmdCLEVBQUU7Z0NBRW9CLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUM7NkJBQ25DLEtBQUs7S0FLN0I7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELCtCQUFlLEdBQWY7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0lBRUQsOEJBQWMsR0FBZDtRQUNJLElBQUksTUFBVSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUM7YUFDVDtTQUNKO1FBQ0QsTUFBTSxDQUFD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QUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQzs7Z0JBbFFKLGlCQUFVOzs7O2dCQUxYOztBQU1hLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJUGxheWFibGV9IGZyb20gXCIuLi92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuLWFwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIGlzUGxheWVyUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmc0FQSTogVmdGdWxsc2NyZWVuQVBJO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEkpIHtcbiAgICAgICAgdGhpcy5mc0FQSSA9IGZzQVBJO1xuICAgICAgICB0aGlzLmlzUGxheWVyUmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXllclJlYWR5RXZlbnQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0TWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXNbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXN0ZXJNZWRpYSgpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtYXN0ZXI6YW55O1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS52Z01lZGlhID09PSAndHJ1ZScgfHwgdGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0aGlzLm1lZGlhc1tpZF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hc3RlciB8fCB0aGlzLmdldERlZmF1bHRNZWRpYSgpO1xuICAgIH1cblxuICAgIGlzTWFzdGVyRGVmaW5lZCgpOmJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09ICd0cnVlJyB8fCB0aGlzLm1lZGlhc1tpZF0udmdNZWRpYSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRNZWRpYUJ5SWQoaWQ6c3RyaW5nID0gbnVsbCk6SVBsYXlhYmxlIHtcbiAgICAgICAgbGV0IG1lZGlhID0gdGhpcy5tZWRpYXNbaWRdO1xuXG4gICAgICAgIGlmICghaWQgfHwgaWQgPT09ICcqJykge1xuICAgICAgICAgICAgbWVkaWEgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbIGlkIF0ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnZHVyYXRpb24nKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUoc2Vjb25kcykge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnKTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ3N0YXRlJywgc3RhdGUpO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScpO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndm9sdW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnLCByYXRlKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3BsYXliYWNrUmF0ZScpO1xuICAgIH1cblxuICAgIGdldCBjYW5QbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXknKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheVRocm91Z2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY2FuUGxheVRocm91Z2gnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNZXRhZGF0YUxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01ldGFkYXRhTG9hZGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzV2FpdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc1dhaXRpbmcnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNDb21wbGV0ZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNMaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzTGl2ZScpO1xuICAgIH1cblxuICAgIGdldCBpc01hc3RlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01hc3RlcicpO1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3RpbWUnKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2J1ZmZlcicpO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXJlZCcpO1xuICAgIH1cblxuICAgIGdldCBzdWJzY3JpcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3N1YnNjcmlwdGlvbnMnKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dFRyYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCd0ZXh0VHJhY2tzJyk7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUodmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNlZWsodGhpcy5tZWRpYXNbIGlkIF0sIHZhbHVlLCBieVBlcmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCRzZWVrKG1lZGlhOklQbGF5YWJsZSwgdmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzZWNvbmQ6bnVtYmVyO1xuICAgICAgICBsZXQgZHVyYXRpb246bnVtYmVyID0gbWVkaWEuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGJ5UGVyY2VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXN0ZXJEZWZpbmVkKCkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZ2V0TWFzdGVyTWVkaWEoKS5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWUgKiBkdXJhdGlvbiAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVkaWEuY3VycmVudFRpbWUgPSBzZWNvbmQ7XG4gICAgfVxuXG4gICAgYWRkVGV4dFRyYWNrKHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJGFkZFRleHRUcmFjayh0aGlzLm1lZGlhc1sgaWQgXSwgdHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAkJGFkZFRleHRUcmFjayhtZWRpYTpJUGxheWFibGUsIHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIG1lZGlhLmFkZFRleHRUcmFjayh0eXBlLCBsYWJlbCwgbGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgICQkZ2V0QWxsUHJvcGVydGllcyhwcm9wZXJ0eTpzdHJpbmcpe1xuICAgICAgICBjb25zdCBtZWRpYXMgPSB7fTtcbiAgICAgICAgbGV0IHJlc3VsdDphbnk7XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBtZWRpYXNbIGlkIF0gPSB0aGlzLm1lZGlhc1sgaWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5NZWRpYXMgPSBPYmplY3Qua2V5cyhtZWRpYXMpLmxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChuTWVkaWFzKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWVzIHVudGlsIHZnTWVkaWEgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXliYWNrUmF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7Y3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtZWRpYSBlbGVtZW50IHRoZW4gcmV0dXJuIHRoZSBwbGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TWVkaWFJZCA9IE9iamVjdC5rZXlzKG1lZGlhcylbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbWVkaWFzW2ZpcnN0TWVkaWFJZF1bcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gJ21hc3RlcicgdmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgbWFzdGVyID0gdGhpcy5nZXRNYXN0ZXJNZWRpYSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1ttYXN0ZXIuaWRdW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAkJHNldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nLCB2YWx1ZTphbnkpe1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzWyBpZCBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckVsZW1lbnQoZWxlbTpIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50ID0gZWxlbTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck1lZGlhKG1lZGlhOklQbGF5YWJsZSkge1xuICAgICAgICB0aGlzLm1lZGlhc1ttZWRpYS5pZF0gPSBtZWRpYTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyTWVkaWEobWVkaWE6SVBsYXlhYmxlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lZGlhc1ttZWRpYS5pZF07XG4gICAgfVxuXG5cbn1cbiJdfQ==