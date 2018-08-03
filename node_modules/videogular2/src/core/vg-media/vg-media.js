"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
var vg_states_1 = require("../states/vg-states");
var vg_api_1 = require("../services/vg-api");
var vg_events_1 = require("../events/vg-events");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/combineLatest");
var VgMedia = (function () {
    function VgMedia(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isMetadataLoaded = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.isBufferDetected = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new Subject_1.Subject();
    }
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ABORT),
            canPlay: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY),
            canPlayThrough: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_DURATION_CHANGE),
            emptied: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_EMPTIED),
            encrypted: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENCRYPTED),
            ended: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENDED),
            error: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ERROR),
            loadedData: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_DATA),
            loadedMetadata: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_METADATA),
            loadStart: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOAD_START),
            pause: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PAUSE),
            play: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAY),
            playing: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAYING),
            progress: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PROGRESS),
            rateChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_RATE_CHANGE),
            seeked: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKED),
            seeking: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKING),
            stalled: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_STALLED),
            suspend: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SUSPEND),
            timeUpdate: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_TIME_UPDATE),
            volumeChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_VOLUME_CHANGE),
            waiting: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_START_ADS),
            endAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: Observable_1.Observable.create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true, attributes: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: this.bufferDetected
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = Observable_1.Observable.combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = TimerObservable_1.TimerObservable.create(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] !== _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = (_this.state === vg_states_1.VgStates.VG_PLAYING);
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        // Detect changes only for source elements or src attribute
        for (var i = 0, l = mutations.length; i < l; i++) {
            var mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (mut.target['src'] && mut.target['src'].length > 0 && mut.target['src'].indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    };
    VgMedia.prototype.loadMedia = function () {
        var _this = this;
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout(function () { return _this.vgMedia.load(); }, 10);
    };
    VgMedia.prototype.play = function () {
        var _this = this;
        // short-circuit if already playing
        if (this.playPromise || (this.state !== vg_states_1.VgStates.VG_PAUSED && this.state !== vg_states_1.VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then(function () {
                _this.playPromise = null;
            })
                .catch(function () {
                // deliberately empty for the sake of eating console noise
            });
        }
        return this.playPromise;
    };
    VgMedia.prototype.pause = function () {
        var _this = this;
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise
                .then(function () {
                _this.vgMedia.pause();
            });
        }
        else {
            this.vgMedia.pause();
        }
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            // We should return undefined if vgMedia still doesn't exist
            var result = undefined;
            if (this.vgMedia) {
                result = this.vgMedia.id;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.vgMedia.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.vgMedia.currentTime;
        },
        set: function (seconds) {
            this.vgMedia.currentTime = seconds;
            // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.vgMedia.volume;
        },
        set: function (volume) {
            this.vgMedia.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.vgMedia.playbackRate;
        },
        set: function (rate) {
            this.vgMedia.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.vgMedia.buffered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "textTracks", {
        get: function () {
            return this.vgMedia.textTracks;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000
        };
        this.state = vg_states_1.VgStates.VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = (t === Infinity);
        this.ref.detectChanges();
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = vg_states_1.VgStates.VG_ENDED;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = vg_states_1.VgStates.VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    };
    // http://stackoverflow.com/a/23828241/779529
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = 
    // http://stackoverflow.com/a/23828241/779529
    function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < (this.lastPlayPos + offset)) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > (this.lastPlayPos + offset)) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = TimerObservable_1.TimerObservable.create(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    };
    VgMedia.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = this.duration;
        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    };
    VgMedia.prototype.addTextTrack = function (type, label, language, mode) {
        var newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    };
    VgMedia.prototype.ngOnDestroy = function () {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    };
    VgMedia.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgMedia]'
                },] },
    ];
    /** @nocollapse */
    VgMedia.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    VgMedia.propDecorators = {
        "vgMedia": [{ type: core_1.Input },],
        "vgMaster": [{ type: core_1.Input },],
    };
    return VgMedia;
}());
exports.VgMedia = VgMedia;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUVuRyw4Q0FBNkM7QUFDN0MsbUVBQWtFO0FBR2xFLGlEQUErQztBQUMvQyw2Q0FBMkM7QUFDM0MsaURBQStDO0FBQy9DLHdDQUF1QztBQUd2Qyx5Q0FBdUM7QUFDdkMsNkNBQTJDOztJQXNEdkMsaUJBQW9CLEdBQVUsRUFBVSxHQUFzQjtRQUExQyxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7cUJBM0M5QyxvQkFBUSxDQUFDLFNBQVM7b0JBRXRCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7c0JBQy9CLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTt1QkFJTCxLQUFLOzhCQUNFLEtBQUs7Z0NBQ0gsS0FBSzt5QkFDWixLQUFLOzJCQUNILEtBQUs7c0JBQ1YsS0FBSztnQ0FFSyxLQUFLOzZCQUVULEdBQUc7OEJBQ0YsQ0FBQzsyQkFDSixDQUFDOzZCQUtFLEtBQUs7OEJBZ0JLLElBQUksaUJBQU8sRUFBRTtLQU0vQztJQUVELDBCQUFRLEdBQVI7UUFBQSxpQkFtRkM7UUFsRkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztZQUV4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUI7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFFSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ2pDOztRQUdELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxhQUFhLEdBQUc7O1lBRWpCLEtBQUssRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDO1lBQzlELE9BQU8sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsV0FBVyxDQUFDO1lBQ25FLGNBQWMsRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsbUJBQW1CLENBQUM7WUFDbEYsY0FBYyxFQUFFLHVCQUFVLENBQUMsU0FBUyxDQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUNqRixPQUFPLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLFVBQVUsQ0FBQztZQUNsRSxTQUFTLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLFlBQVksQ0FBQztZQUN0RSxLQUFLLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5RCxLQUFLLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUM5RCxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLGNBQWMsQ0FBQztZQUN6RSxjQUFjLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQ2pGLFNBQVMsRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3ZFLEtBQUssRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDO1lBQzlELElBQUksRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVELE9BQU8sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xFLFFBQVEsRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3BFLFVBQVUsRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3pFLE1BQU0sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsU0FBUyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xFLE9BQU8sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xFLE9BQU8sRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xFLFVBQVUsRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3pFLFlBQVksRUFBRSx1QkFBVSxDQUFDLFNBQVMsQ0FBTSxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFDN0UsT0FBTyxFQUFFLHVCQUFVLENBQUMsU0FBUyxDQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQVEsQ0FBQyxVQUFVLENBQUM7O1lBR2xFLFFBQVEsRUFBRSx1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LENBQUEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7Z0JBcGZKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7aUJBQ3hCOzs7O2dCQVZRLGNBQUs7Z0JBUEwsd0JBQWlCOzs7NEJBcUJyQixZQUFLOzZCQUNMLFlBQUs7O2tCQXRCVjs7QUFrQmEsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVBsYXlhYmxlLCBJTWVkaWFTdWJzY3JpcHRpb25zIH0gZnJvbSBcIi4vaS1wbGF5YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFRpbWVyT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvVGltZXJPYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcbmltcG9ydCB7IFZnU3RhdGVzIH0gZnJvbSAnLi4vc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cy92Zy1ldmVudHMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBJTWVkaWFFbGVtZW50IH0gZnJvbSAnLi9pLW1lZGlhLWVsZW1lbnQnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmdNZWRpYV0nXG59KVxuZXhwb3J0IGNsYXNzIFZnTWVkaWEgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgSVBsYXlhYmxlIHtcbiAgICBlbGVtOiBhbnk7XG5cbiAgICBASW5wdXQoKSB2Z01lZGlhOiBJTWVkaWFFbGVtZW50O1xuICAgIEBJbnB1dCgpIHZnTWFzdGVyOiBib29sZWFuO1xuXG4gICAgc3RhdGU6IHN0cmluZyA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgIHRpbWU6IGFueSA9IHsgY3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDAgfTtcbiAgICBidWZmZXI6IGFueSA9IHsgZW5kOiAwIH07XG4gICAgdHJhY2s6IGFueTtcbiAgICBzdWJzY3JpcHRpb25zOiBJTWVkaWFTdWJzY3JpcHRpb25zIHwgYW55O1xuXG4gICAgY2FuUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhblBsYXlUaHJvdWdoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNZXRhZGF0YUxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzV2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNMaXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpc0J1ZmZlckRldGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjaGVja0ludGVydmFsOiBudW1iZXIgPSAyMDA7XG4gICAgY3VycmVudFBsYXlQb3M6IG51bWJlciA9IDA7XG4gICAgbGFzdFBsYXlQb3M6IG51bWJlciA9IDA7XG5cbiAgICBjaGVja0J1ZmZlclN1YnNjcmlwdGlvbjogYW55O1xuICAgIHN5bmNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5QWxsU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgcGxheUF0ZmVyU3luYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXV0YXRpb25PYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5T2JzOiBTdWJzY3JpcHRpb247XG4gICAgY2FuUGxheVRocm91Z2hPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBsb2FkZWRNZXRhZGF0YU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHdhaXRpbmdPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwcm9ncmVzc09iczogU3Vic2NyaXB0aW9uO1xuICAgIGVuZGVkT2JzOiBTdWJzY3JpcHRpb247XG4gICAgcGxheWluZ09iczogU3Vic2NyaXB0aW9uO1xuICAgIHBsYXlPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwYXVzZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHRpbWVVcGRhdGVPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICB2b2x1bWVDaGFuZ2VPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBlcnJvck9iczogU3Vic2NyaXB0aW9uO1xuXG4gICAgYnVmZmVyRGV0ZWN0ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcGxheVByb21pc2U6IFByb21pc2U8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBWZ0FQSSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmdNZWRpYS5ub2RlTmFtZSkge1xuICAgICAgICAgICAgLy8gSXQncyBhIG5hdGl2ZSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW0gPSB0aGlzLnZnTWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdCdzIGFuIEFuZ3VsYXIgQ2xhc3NcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IHRoaXMudmdNZWRpYS5lbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSnVzdCBpbiBjYXNlIHdlJ3JlIGNyZWF0aW5nIHRoaXMgdmdNZWRpYSBkeW5hbWljYWxseSByZWdpc3RlciBhZ2FpbiBpbnRvIEFQSVxuICAgICAgICB0aGlzLmFwaS5yZWdpc3Rlck1lZGlhKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIE5hdGl2ZSBldmVudHNcbiAgICAgICAgICAgIGFib3J0OiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQUJPUlQpLFxuICAgICAgICAgICAgY2FuUGxheTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0NBTl9QTEFZKSxcbiAgICAgICAgICAgIGNhblBsYXlUaHJvdWdoOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQ0FOX1BMQVlfVEhST1VHSCksXG4gICAgICAgICAgICBkdXJhdGlvbkNoYW5nZTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0RVUkFUSU9OX0NIQU5HRSksXG4gICAgICAgICAgICBlbXB0aWVkOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRU1QVElFRCksXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTkNSWVBURUQpLFxuICAgICAgICAgICAgZW5kZWQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTkRFRCksXG4gICAgICAgICAgICBlcnJvcjogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VSUk9SKSxcbiAgICAgICAgICAgIGxvYWRlZERhdGE6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19MT0FERURfREFUQSksXG4gICAgICAgICAgICBsb2FkZWRNZXRhZGF0YTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURFRF9NRVRBREFUQSksXG4gICAgICAgICAgICBsb2FkU3RhcnQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19MT0FEX1NUQVJUKSxcbiAgICAgICAgICAgIHBhdXNlOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUEFVU0UpLFxuICAgICAgICAgICAgcGxheTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BMQVkpLFxuICAgICAgICAgICAgcGxheWluZzogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BMQVlJTkcpLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QUk9HUkVTUyksXG4gICAgICAgICAgICByYXRlQ2hhbmdlOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUkFURV9DSEFOR0UpLFxuICAgICAgICAgICAgc2Vla2VkOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU0VFS0VEKSxcbiAgICAgICAgICAgIHNlZWtpbmc6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TRUVLSU5HKSxcbiAgICAgICAgICAgIHN0YWxsZWQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TVEFMTEVEKSxcbiAgICAgICAgICAgIHN1c3BlbmQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TVVNQRU5EKSxcbiAgICAgICAgICAgIHRpbWVVcGRhdGU6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19USU1FX1VQREFURSksXG4gICAgICAgICAgICB2b2x1bWVDaGFuZ2U6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19WT0xVTUVfQ0hBTkdFKSxcbiAgICAgICAgICAgIHdhaXRpbmc6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19XQUlUSU5HKSxcblxuICAgICAgICAgICAgLy8gQWR2ZXJ0aXNlbWVudCBvbmx5IGV2ZW50c1xuICAgICAgICAgICAgc3RhcnRBZHM6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+d2luZG93LCBWZ0V2ZW50cy5WR19TVEFSVF9BRFMpLFxuICAgICAgICAgICAgZW5kQWRzOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PndpbmRvdywgVmdFdmVudHMuVkdfRU5EX0FEUyksXG5cbiAgICAgICAgICAgIC8vIFNlZSBjaGFuZ2VzIG9uIDxzb3VyY2U+IGNoaWxkIGVsZW1lbnRzIHRvIHJlbG9hZCB0aGUgdmlkZW8gZmlsZVxuICAgICAgICAgICAgbXV0YXRpb246IE9ic2VydmFibGUuY3JlYXRlKFxuICAgICAgICAgICAgICAgIChvYnNlcnZlcjogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbU9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobXV0YXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9tT2JzLm9ic2VydmUoPGFueT50aGlzLmVsZW0sIHsgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21PYnMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIEN1c3RvbSBidWZmZXJpbmcgZGV0ZWN0aW9uXG4gICAgICAgICAgICBidWZmZXJEZXRlY3RlZDogdGhpcy5idWZmZXJEZXRlY3RlZFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubXV0YXRpb25PYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMubXV0YXRpb24uc3Vic2NyaWJlKHRoaXMub25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5T2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmNhblBsYXkuc3Vic2NyaWJlKHRoaXMub25DYW5QbGF5LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhblBsYXlUaHJvdWdoT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmNhblBsYXlUaHJvdWdoLnN1YnNjcmliZSh0aGlzLm9uQ2FuUGxheVRocm91Z2guYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubG9hZGVkTWV0YWRhdGFPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMubG9hZGVkTWV0YWRhdGEuc3Vic2NyaWJlKHRoaXMub25Mb2FkTWV0YWRhdGEuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMud2FpdGluZ09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy53YWl0aW5nLnN1YnNjcmliZSh0aGlzLm9uV2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wcm9ncmVzcy5zdWJzY3JpYmUodGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVuZGVkT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmVuZGVkLnN1YnNjcmliZSh0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGxheWluZ09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wbGF5aW5nLnN1YnNjcmliZSh0aGlzLm9uU3RhcnRQbGF5aW5nLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBsYXlPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucGxheS5zdWJzY3JpYmUodGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGF1c2VPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucGF1c2Uuc3Vic2NyaWJlKHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aW1lVXBkYXRlT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnRpbWVVcGRhdGUuc3Vic2NyaWJlKHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZvbHVtZUNoYW5nZU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy52b2x1bWVDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZXJyb3JPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZXJyb3Iuc3Vic2NyaWJlKHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZiAodGhpcy52Z01hc3Rlcikge1xuICAgICAgICAgICAgdGhpcy5hcGkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVTeW5jKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBhcmVTeW5jKCkge1xuICAgICAgICBsZXQgY2FuUGxheUFsbDogQXJyYXk8T2JzZXJ2YWJsZTxhbnk+PiA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IG1lZGlhIGluIHRoaXMuYXBpLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXSkge1xuICAgICAgICAgICAgICAgIGNhblBsYXlBbGwucHVzaCh0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uc3Vic2NyaXB0aW9ucy5jYW5QbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuUGxheUFsbFN1YnNjcmlwdGlvbiA9IE9ic2VydmFibGUuY29tYmluZUxhdGVzdChjYW5QbGF5QWxsLFxuICAgICAgICAgICAgKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbGxSZWFkeTogYm9vbGVhbiA9IHBhcmFtcy5zb21lKGV2ZW50ID0+IGV2ZW50LnRhcmdldC5yZWFkeVN0YXRlID09PSA0KTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxSZWFkeSAmJiAhdGhpcy5zeW5jU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzdGFydFN5bmMoKSB7XG4gICAgICAgIHRoaXMuc3luY1N1YnNjcmlwdGlvbiA9IFRpbWVyT2JzZXJ2YWJsZS5jcmVhdGUoMCwgMTAwMCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG1lZGlhIGluIHRoaXMuYXBpLm1lZGlhcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZjogbnVtYmVyID0gdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lIC0gdGhpcy5jdXJyZW50VGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAtMC4zIHx8IGRpZmYgPiAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBdGZlclN5bmMgPSAodGhpcy5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlBdGZlclN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF0ZmVyU3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbk11dGF0aW9uKG11dGF0aW9uczogQXJyYXk8TXV0YXRpb25SZWNvcmQ+KSB7XG4gICAgICAgIC8vIERldGVjdCBjaGFuZ2VzIG9ubHkgZm9yIHNvdXJjZSBlbGVtZW50cyBvciBzcmMgYXR0cmlidXRlXG4gICAgICAgIGZvciAobGV0IGk9MCwgbD1tdXRhdGlvbnMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IG11dDogTXV0YXRpb25SZWNvcmQgPSBtdXRhdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChtdXQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dC5hdHRyaWJ1dGVOYW1lID09PSAnc3JjJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgbG9hZCBzcmMgZmlsZSBpZiBpdCdzIG5vdCBhIGJsb2IgKGZvciBEQVNIIC8gSExTIHNvdXJjZXMpXG4gICAgICAgICAgICAgICAgaWYgKG11dC50YXJnZXRbJ3NyYyddICYmIG11dC50YXJnZXRbJ3NyYyddLmxlbmd0aCA+IDAgJiYgbXV0LnRhcmdldFsnc3JjJ10uaW5kZXhPZignYmxvYjonKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVkaWEoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0LnJlbW92ZWROb2Rlcy5sZW5ndGggJiYgbXV0LnJlbW92ZWROb2Rlc1swXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc291cmNlJykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lZGlhKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkTWVkaWEoKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5wYXVzZSgpO1xuICAgICAgICB0aGlzLnZnTWVkaWEuY3VycmVudFRpbWUgPSAwO1xuXG4gICAgICAgIC8vIFN0YXJ0IGJ1ZmZlcmluZyB1bnRpbCB3ZSBjYW4gcGxheSB0aGUgbWVkaWEgZmlsZVxuICAgICAgICB0aGlzLnN0b3BCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcblxuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIHVnbHksIHdlIHNob3VsZCBmaW5kIHNvbWV0aGluZyBjbGVhbmVyLiBGb3Igc29tZSByZWFzb24gYSBUaW1lck9ic2VydmFibGUgZG9lc24ndCB3b3Jrcy5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZnTWVkaWEubG9hZCgpLCAxMCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgLy8gc2hvcnQtY2lyY3VpdCBpZiBhbHJlYWR5IHBsYXlpbmdcbiAgICAgICAgaWYgKHRoaXMucGxheVByb21pc2UgfHwgKHRoaXMuc3RhdGUgIT09IFZnU3RhdGVzLlZHX1BBVVNFRCAmJiB0aGlzLnN0YXRlICE9PSBWZ1N0YXRlcy5WR19FTkRFRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheVByb21pc2UgPSB0aGlzLnZnTWVkaWEucGxheSgpO1xuXG4gICAgICAgIC8vIGJyb3dzZXIgaGFzIGFzeW5jIHBsYXkgcHJvbWlzZVxuICAgICAgICBpZiAodGhpcy5wbGF5UHJvbWlzZSAmJiB0aGlzLnBsYXlQcm9taXNlLnRoZW4gJiYgdGhpcy5wbGF5UHJvbWlzZS5jYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5UHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWxpYmVyYXRlbHkgZW1wdHkgZm9yIHRoZSBzYWtlIG9mIGVhdGluZyBjb25zb2xlIG5vaXNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5UHJvbWlzZTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgLy8gYnJvd3NlciBoYXMgYXN5bmMgcGxheSBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLnBsYXlQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZnTWVkaWEucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmdNZWRpYS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICAvLyBXZSBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBpZiB2Z01lZGlhIHN0aWxsIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgbGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy52Z01lZGlhKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnZnTWVkaWEuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBkdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUoc2Vjb25kcykge1xuICAgICAgICB0aGlzLnZnTWVkaWEuY3VycmVudFRpbWUgPSBzZWNvbmRzO1xuICAgICAgICAvLyB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVmdFdmVudHMuVkdfU0VFSykpO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS5jdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBzZXQgdm9sdW1lKHZvbHVtZSkge1xuICAgICAgICB0aGlzLnZnTWVkaWEudm9sdW1lID0gdm9sdW1lO1xuICAgIH1cblxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEudm9sdW1lO1xuICAgIH1cblxuICAgIHNldCBwbGF5YmFja1JhdGUocmF0ZSkge1xuICAgICAgICB0aGlzLnZnTWVkaWEucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLnBsYXliYWNrUmF0ZTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEuYnVmZmVyZWQ7XG4gICAgfVxuXG4gICAgZ2V0IHRleHRUcmFja3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEudGV4dFRyYWNrcztcbiAgICB9XG5cbiAgICBvbkNhblBsYXkoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC5uZXh0KHRoaXMuaXNCdWZmZXJEZXRlY3RlZCk7XG4gICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkNhblBsYXlUaHJvdWdoKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgICAgICB0aGlzLmNhblBsYXlUaHJvdWdoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uTG9hZE1ldGFkYXRhKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc01ldGFkYXRhTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRpbWUgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLmR1cmF0aW9uICogMTAwMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgLy8gTGl2ZSBzdHJlYW1pbmcgY2hlY2tcbiAgICAgICAgbGV0IHQ6bnVtYmVyID0gTWF0aC5yb3VuZCh0aGlzLnRpbWUudG90YWwpO1xuICAgICAgICB0aGlzLmlzTGl2ZSA9ICh0ID09PSBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbldhaXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzV2FpdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19FTkRFRDtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uU3RhcnRQbGF5aW5nKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BMQVlJTkc7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblBsYXkoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcblxuICAgICAgICBpZiAodGhpcy52Z01hc3Rlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN5bmNTdWJzY3JpcHRpb24gfHwgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0QnVmZmVyQ2hlY2soKTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uUGF1c2UoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWFzdGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheUF0ZmVyU3luYykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9wQnVmZmVyQ2hlY2soKTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uVGltZVVwZGF0ZShldmVudDogYW55KSB7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmJ1ZmZlcmVkLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy50aW1lID0ge1xuICAgICAgICAgICAgY3VycmVudDogdGhpcy5jdXJyZW50VGltZSAqIDEwMDAsXG4gICAgICAgICAgICB0b3RhbDogdGhpcy50aW1lLnRvdGFsLFxuICAgICAgICAgICAgbGVmdDogKHRoaXMuZHVyYXRpb24gLSB0aGlzLmN1cnJlbnRUaW1lKSAqIDEwMDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0geyBlbmQ6IHRoaXMuYnVmZmVyZWQuZW5kKGVuZCkgKiAxMDAwIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3MoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgZW5kID0gdGhpcy5idWZmZXJlZC5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSB7IGVuZDogdGhpcy5idWZmZXJlZC5lbmQoZW5kKSAqIDEwMDAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Wb2x1bWVDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBUT0RPOiBTYXZlIHRvIGxvY2Fsc3RvcmFnZSB0aGUgY3VycmVudCB2b2x1bWVcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uRXJyb3IoZXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzODI4MjQxLzc3OTUyOVxuICAgIGJ1ZmZlckNoZWNrKCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAxIC8gdGhpcy5jaGVja0ludGVydmFsO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5UG9zID0gdGhpcy5jdXJyZW50VGltZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNCdWZmZXJEZXRlY3RlZCAmJiB0aGlzLmN1cnJlbnRQbGF5UG9zIDwgKHRoaXMubGFzdFBsYXlQb3MgKyBvZmZzZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCdWZmZXJEZXRlY3RlZCAmJiB0aGlzLmN1cnJlbnRQbGF5UG9zID4gKHRoaXMubGFzdFBsYXlQb3MgKyBvZmZzZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgY2FsbHMgdG8gYnVmZmVyQ2hlY2sgYWZ0ZXIgbmdPbkRlc3Ryb3kgaGF2ZSBiZWVuIGNhbGxlZFxuICAgICAgICBpZiAoIXRoaXMuYnVmZmVyRGV0ZWN0ZWQuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFBsYXlQb3MgPSB0aGlzLmN1cnJlbnRQbGF5UG9zO1xuICAgIH1cblxuICAgIHN0YXJ0QnVmZmVyQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24gPSBUaW1lck9ic2VydmFibGUuY3JlYXRlKDAsIHRoaXMuY2hlY2tJbnRlcnZhbCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdG9wQnVmZmVyQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICB9XG5cbiAgICBzZWVrVGltZSh2YWx1ZTpudW1iZXIsIGJ5UGVyY2VudDpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNlY29uZDpudW1iZXI7XG4gICAgICAgIGxldCBkdXJhdGlvbjpudW1iZXIgPSB0aGlzLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmIChieVBlcmNlbnQpIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlICogZHVyYXRpb24gLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBzZWNvbmQ7XG4gICAgfVxuXG4gICAgYWRkVGV4dFRyYWNrKHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nLCBtb2RlPzonZGlzYWJsZWQnIHwgJ2hpZGRlbicgfCAnc2hvd2luZycpOiBUZXh0VHJhY2sge1xuICAgICAgICBjb25zdCBuZXdUcmFjazpUZXh0VHJhY2sgPSB0aGlzLnZnTWVkaWEuYWRkVGV4dFRyYWNrKHR5cGUsIGxhYmVsLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgIG5ld1RyYWNrLm1vZGUgPSBtb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUcmFjaztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnNyYyA9ICcnO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2FuUGxheU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNhblBsYXlUaHJvdWdoT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubG9hZGVkTWV0YWRhdGFPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy53YWl0aW5nT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lbmRlZE9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnBsYXlpbmdPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wbGF5T2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGF1c2VPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aW1lVXBkYXRlT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudm9sdW1lQ2hhbmdlT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuZXJyb3JPYnMudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zeW5jU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuYXBpLnVucmVnaXN0ZXJNZWRpYSh0aGlzKTtcbiAgICB9XG59XG4iXX0=