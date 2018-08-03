"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_fullscreen_1 = require("./vg-fullscreen");
var vg_api_1 = require("../../core/services/vg-api");
var vg_fullscreen_api_1 = require("../../core/services/vg-fullscreen-api");
describe('Videogular Player', function () {
    var fullscreen;
    var ref;
    var api;
    var fsAPI;
    beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        api = new vg_api_1.VgAPI();
        fsAPI = new vg_fullscreen_api_1.VgFullscreenAPI();
        fullscreen = new vg_fullscreen_1.VgFullscreen(ref, api, fsAPI);
    });
    it('Should get media by id on init', function () {
        spyOn(api, 'getMediaById').and.callFake(function () { });
        fullscreen.vgFor = 'test';
        fullscreen.onPlayerReady();
        expect(api.getMediaById).toHaveBeenCalledWith('test');
    });
    describe('onClick', function () {
        beforeEach(function () {
            spyOn(fsAPI, 'toggleFullscreen');
        });
        it('Should call toggleFullscreen with null param if target is API', function () {
            fullscreen.target = api;
            fullscreen.onClick();
            expect(fsAPI.toggleFullscreen).toHaveBeenCalledWith(null);
        });
        it('Should call toggleFullscreen with target param if target', function () {
            fullscreen.target = 'test';
            fullscreen.onClick();
            expect(fsAPI.toggleFullscreen).toHaveBeenCalledWith('test');
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctZnVsbHNjcmVlbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQTZDO0FBQzdDLHFEQUFpRDtBQUVqRCwyRUFBc0U7QUFFdEUsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLElBQUksVUFBd0IsQ0FBQztJQUM3QixJQUFJLEdBQWMsQ0FBQztJQUNuQixJQUFJLEdBQVMsQ0FBQztJQUNkLElBQUksS0FBcUIsQ0FBQztJQUUxQixVQUFVLENBQUM7UUFDUCxHQUFHLEdBQUc7WUFDRixhQUFhLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLFVBQUMsSUFBSTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSixDQUFDO1FBRUYsR0FBRyxHQUFHLElBQUksY0FBSyxFQUFFLENBQUM7UUFDbEIsS0FBSyxHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO1FBQzlCLFVBQVUsR0FBRyxJQUFJLDRCQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNsRCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsS0FBSyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQVMsQ0FBQyxDQUFDO1FBRW5ELFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUzQixNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3pELENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDaEIsVUFBVSxDQUFDO1lBQ1AsS0FBSyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRTtZQUNoRSxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUV4QixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRTtZQUMzRCxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUUzQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmdGdWxsc2NyZWVufSBmcm9tIFwiLi92Zy1mdWxsc2NyZWVuXCI7XG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VmdGdWxsc2NyZWVuQVBJfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaVwiO1xuXG5kZXNjcmliZSgnVmlkZW9ndWxhciBQbGF5ZXInLCAoKSA9PiB7XG4gICAgbGV0IGZ1bGxzY3JlZW46IFZnRnVsbHNjcmVlbjtcbiAgICBsZXQgcmVmOkVsZW1lbnRSZWY7XG4gICAgbGV0IGFwaTpWZ0FQSTtcbiAgICBsZXQgZnNBUEk6VmdGdWxsc2NyZWVuQVBJO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHJlZiA9IHtcbiAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhcGkgPSBuZXcgVmdBUEkoKTtcbiAgICAgICAgZnNBUEkgPSBuZXcgVmdGdWxsc2NyZWVuQVBJKCk7XG4gICAgICAgIGZ1bGxzY3JlZW4gPSBuZXcgVmdGdWxsc2NyZWVuKHJlZiwgYXBpLCBmc0FQSSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCBtZWRpYSBieSBpZCBvbiBpbml0JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihhcGksICdnZXRNZWRpYUJ5SWQnKS5hbmQuY2FsbEZha2UoKCkgPT4geyB9KTtcblxuICAgICAgICBmdWxsc2NyZWVuLnZnRm9yID0gJ3Rlc3QnO1xuICAgICAgICBmdWxsc2NyZWVuLm9uUGxheWVyUmVhZHkoKTtcblxuICAgICAgICBleHBlY3QoYXBpLmdldE1lZGlhQnlJZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3Rlc3QnKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdvbkNsaWNrJywgKCkgPT4ge1xuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKGZzQVBJLCAndG9nZ2xlRnVsbHNjcmVlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnU2hvdWxkIGNhbGwgdG9nZ2xlRnVsbHNjcmVlbiB3aXRoIG51bGwgcGFyYW0gaWYgdGFyZ2V0IGlzIEFQSScsICgpID0+IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW4udGFyZ2V0ID0gYXBpO1xuXG4gICAgICAgICAgICBmdWxsc2NyZWVuLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KGZzQVBJLnRvZ2dsZUZ1bGxzY3JlZW4pLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnU2hvdWxkIGNhbGwgdG9nZ2xlRnVsbHNjcmVlbiB3aXRoIHRhcmdldCBwYXJhbSBpZiB0YXJnZXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuLnRhcmdldCA9ICd0ZXN0JztcblxuICAgICAgICAgICAgZnVsbHNjcmVlbi5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChmc0FQSS50b2dnbGVGdWxsc2NyZWVuKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgndGVzdCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19