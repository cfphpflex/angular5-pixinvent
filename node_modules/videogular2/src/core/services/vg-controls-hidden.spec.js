"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var vg_controls_hidden_1 = require("./vg-controls-hidden");
describe('VgControlsHidden Service', function () {
    var controlsHidden;
    beforeEach(function () {
        controlsHidden = new vg_controls_hidden_1.VgControlsHidden();
    });
    it('Should provide an Observable', function () {
        expect(controlsHidden.isHidden).toEqual(jasmine.any(Observable_1.Observable));
    });
    it('Should set state to true', function () {
        controlsHidden.isHidden.subscribe(function (state) {
            expect(state).toBe(true);
        });
        controlsHidden.state(true);
    });
    it('Should set state to false', function () {
        controlsHidden.isHidden.subscribe(function (state) {
            expect(state).toBe(false);
        });
        controlsHidden.state(false);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMtaGlkZGVuLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1jb250cm9scy1oaWRkZW4uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QywyREFBd0Q7QUFFeEQsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLElBQUksY0FBZ0MsQ0FBQztJQUVyQyxVQUFVLENBQUM7UUFDUCxjQUFjLEdBQUcsSUFBSSxxQ0FBZ0IsRUFBRSxDQUFDO0tBQzNDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTtRQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3BFLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUMzQixjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM1QixjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4vdmctY29udHJvbHMtaGlkZGVuJztcblxuZGVzY3JpYmUoJ1ZnQ29udHJvbHNIaWRkZW4gU2VydmljZScsICgpID0+IHtcbiAgICBsZXQgY29udHJvbHNIaWRkZW46IFZnQ29udHJvbHNIaWRkZW47XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgY29udHJvbHNIaWRkZW4gPSBuZXcgVmdDb250cm9sc0hpZGRlbigpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBwcm92aWRlIGFuIE9ic2VydmFibGUnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChjb250cm9sc0hpZGRlbi5pc0hpZGRlbikudG9FcXVhbChqYXNtaW5lLmFueShPYnNlcnZhYmxlKSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIHNldCBzdGF0ZSB0byB0cnVlJywgKCkgPT4ge1xuICAgICAgICBjb250cm9sc0hpZGRlbi5pc0hpZGRlbi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgICAgICAgZXhwZWN0KHN0YXRlKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250cm9sc0hpZGRlbi5zdGF0ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgc2V0IHN0YXRlIHRvIGZhbHNlJywgKCkgPT4ge1xuICAgICAgICBjb250cm9sc0hpZGRlbi5pc0hpZGRlbi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgICAgICAgZXhwZWN0KHN0YXRlKS50b0JlKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udHJvbHNIaWRkZW4uc3RhdGUoZmFsc2UpO1xuICAgIH0pO1xufSk7XG4iXX0=