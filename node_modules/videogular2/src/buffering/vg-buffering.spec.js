"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_buffering_1 = require("./vg-buffering");
var vg_api_1 = require("../core/services/vg-api");
describe('Buffering', function () {
    var vgBuffering;
    var ref;
    var api;
    beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        api = new vg_api_1.VgAPI();
        vgBuffering = new vg_buffering_1.VgBuffering(ref, api);
    });
    describe('onPlayerReady', function () {
        it('should subscribe to bufferDetected media events', function () {
            spyOn(api, 'getMediaById').and.returnValue({
                subscriptions: {
                    bufferDetected: { subscribe: jasmine.createSpy('bufferDetected') }
                }
            });
            vgBuffering.onPlayerReady();
            expect(vgBuffering.target.subscriptions.bufferDetected.subscribe).toHaveBeenCalled();
        });
    });
    describe('isBuffering', function () {
        it('should show if buffer is detected', function () {
            vgBuffering.onUpdateBuffer(true);
            expect(vgBuffering.isBuffering).toBe(true);
        });
        it('should hide if buffer is not detected', function () {
            vgBuffering.onUpdateBuffer(false);
            expect(vgBuffering.isBuffering).toBe(false);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1idWZmZXJpbmcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUEyQztBQUMzQyxrREFBOEM7QUFLOUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNsQixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxHQUFjLENBQUM7SUFDbkIsSUFBSSxHQUFTLENBQUM7SUFFZCxVQUFVLENBQUM7UUFDUCxHQUFHLEdBQUc7WUFDRixhQUFhLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLFVBQUMsSUFBSTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSixDQUFDO1FBRUYsR0FBRyxHQUFHLElBQUksY0FBSyxFQUFFLENBQUM7UUFDbEIsV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN0QixFQUFFLENBQUMsaURBQWlELEVBQUU7WUFDbEQsS0FBSyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxhQUFhLEVBQUU7b0JBQ1gsY0FBYyxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtpQkFDcEU7YUFDSixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3hGLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUU7UUFDcEIsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO1lBQ3BDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1lBQ3hDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWZ0J1ZmZlcmluZ30gZnJvbSBcIi4vdmctYnVmZmVyaW5nXCI7XG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7SVBsYXlhYmxlfSBmcm9tIFwiLi4vY29yZS92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gXCIuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXNcIjtcblxuZGVzY3JpYmUoJ0J1ZmZlcmluZycsICgpID0+IHtcbiAgICBsZXQgdmdCdWZmZXJpbmc6VmdCdWZmZXJpbmc7XG4gICAgbGV0IHJlZjpFbGVtZW50UmVmO1xuICAgIGxldCBhcGk6VmdBUEk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgcmVmID0ge1xuICAgICAgICAgICAgbmF0aXZlRWxlbWVudDoge1xuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZTogKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFwaSA9IG5ldyBWZ0FQSSgpO1xuICAgICAgICB2Z0J1ZmZlcmluZyA9IG5ldyBWZ0J1ZmZlcmluZyhyZWYsIGFwaSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnb25QbGF5ZXJSZWFkeScsICgpPT57XG4gICAgICAgIGl0KCdzaG91bGQgc3Vic2NyaWJlIHRvIGJ1ZmZlckRldGVjdGVkIG1lZGlhIGV2ZW50cycsICgpPT57XG4gICAgICAgICAgICBzcHlPbihhcGksICdnZXRNZWRpYUJ5SWQnKS5hbmQucmV0dXJuVmFsdWUoe1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyRGV0ZWN0ZWQ6IHtzdWJzY3JpYmU6IGphc21pbmUuY3JlYXRlU3B5KCdidWZmZXJEZXRlY3RlZCcpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZnQnVmZmVyaW5nLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgICAgIGV4cGVjdCh2Z0J1ZmZlcmluZy50YXJnZXQuc3Vic2NyaXB0aW9ucy5idWZmZXJEZXRlY3RlZC5zdWJzY3JpYmUpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnaXNCdWZmZXJpbmcnLCAoKT0+IHtcbiAgICAgICAgaXQoJ3Nob3VsZCBzaG93IGlmIGJ1ZmZlciBpcyBkZXRlY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHZnQnVmZmVyaW5nLm9uVXBkYXRlQnVmZmVyKHRydWUpO1xuICAgICAgICAgICAgZXhwZWN0KHZnQnVmZmVyaW5nLmlzQnVmZmVyaW5nKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoJ3Nob3VsZCBoaWRlIGlmIGJ1ZmZlciBpcyBub3QgZGV0ZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB2Z0J1ZmZlcmluZy5vblVwZGF0ZUJ1ZmZlcihmYWxzZSk7XG4gICAgICAgICAgICBleHBlY3QodmdCdWZmZXJpbmcuaXNCdWZmZXJpbmcpLnRvQmUoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19