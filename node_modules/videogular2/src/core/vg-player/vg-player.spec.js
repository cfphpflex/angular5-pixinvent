"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var vg_player_1 = require("./vg-player");
var vg_api_1 = require("../services/vg-api");
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
describe('Videogular Player', function () {
    var player;
    var ref;
    var api;
    var fsAPI;
    var controlsHidden;
    beforeEach(function () {
        ref = {
            nativeElement: {
                querySelectorAll: function () {
                    return [{}];
                }
            }
        };
        controlsHidden = {
            isHidden: {
                subscribe: function () { }
            }
        };
        api = new vg_api_1.VgAPI();
        fsAPI = new vg_fullscreen_api_1.VgFullscreenAPI();
        player = new vg_player_1.VgPlayer(ref, api, fsAPI, controlsHidden);
    });
    it('Should handle native fullscreen', function () {
        fsAPI.nativeFullscreen = true;
        player.onChangeFullscreen(true);
        expect(player.isFullscreen).toBeFalsy();
    });
    it('Should handle emulated fullscreen enabled', function () {
        fsAPI.nativeFullscreen = false;
        player.onChangeFullscreen(true);
        expect(player.isFullscreen).toBeTruthy();
        expect(player.zIndex).toBe('1');
    });
    it('Should handle emulated fullscreen enabled', function () {
        fsAPI.nativeFullscreen = false;
        player.onChangeFullscreen(false);
        expect(player.isFullscreen).toBeFalsy();
        expect(player.zIndex).toBe('auto');
    });
});
describe('Videogular Player', function () {
    var builder;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [VgPlayerTest, vg_player_1.VgPlayer]
        });
    });
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.compileComponents();
    }));
    it('Should create a VgPlayer component', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(VgPlayerTest);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        var video = compiled.querySelector('video');
        expect(video.controls).toBe(true);
    }));
});
var VgPlayerTest = (function () {
    function VgPlayerTest() {
    }
    VgPlayerTest.decorators = [
        { type: core_1.Component, args: [{
                    template: "\n        <vg-player>\n            <video vg-media id=\"singleVideo\" preload=\"auto\" controls>\n                <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n                <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\n                <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\n            </video>\n        </vg-player>\n    ",
                    providers: [vg_api_1.VgAPI]
                },] },
    ];
    return VgPlayerTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1wbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE2RDtBQUM3RCxzQ0FBd0M7QUFDeEMseUNBQXFDO0FBRXJDLDZDQUF5QztBQUN6QyxtRUFBOEQ7QUFJOUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLElBQUksTUFBZSxDQUFDO0lBQ3BCLElBQUksR0FBYyxDQUFDO0lBQ25CLElBQUksR0FBUyxDQUFDO0lBQ2QsSUFBSSxLQUFxQixDQUFDO0lBQzFCLElBQUksY0FBK0IsQ0FBQztJQUVwQyxVQUFVLENBQUM7UUFDUCxHQUFHLEdBQUc7WUFDRixhQUFhLEVBQUU7Z0JBQ1gsZ0JBQWdCLEVBQUU7b0JBQ2QsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2Y7YUFDSjtTQUNKLENBQUM7UUFFRixjQUFjLEdBQUc7WUFDYixRQUFRLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLGVBQVE7YUFDdEI7U0FDZ0IsQ0FBQztRQUV0QixHQUFHLEdBQUcsSUFBSSxjQUFLLEVBQUUsQ0FBQztRQUNsQixLQUFLLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLElBQUksb0JBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztLQUMxRCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7UUFDbEMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU5QixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMzQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkNBQTJDLEVBQUU7UUFDNUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUUvQixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkNBQTJDLEVBQUU7UUFDNUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUUvQixNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0QyxDQUFDLENBQUM7Q0FDTixDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxPQUFPLENBQUM7SUFFWixVQUFVLENBQUM7UUFDUCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzNCLFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBUSxDQUFDO1NBQ3pDLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDYixpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsb0NBQW9DLEVBQ25DLGVBQUssQ0FBQztRQUNGLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDLENBQUMsQ0FDTCxDQUFDO0NBQ0wsQ0FBQyxDQUFDOzs7OztnQkFFRixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtZUFRVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFLLENBQUM7aUJBQ3JCOzt1QkFuR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FzeW5jLCBpbmplY3QsIFRlc3RCZWR9IGZyb20gXCJAYW5ndWxhci9jb3JlL3Rlc3RpbmdcIjtcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ1BsYXllcn0gZnJvbSBcIi4vdmctcGxheWVyXCI7XG5pbXBvcnQge1ZnTWVkaWF9IGZyb20gXCIuLi92Zy1tZWRpYS92Zy1tZWRpYVwiO1xuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtWZ0Z1bGxzY3JlZW5BUEl9IGZyb20gXCIuLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaVwiO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbmRlc2NyaWJlKCdWaWRlb2d1bGFyIFBsYXllcicsICgpID0+IHtcbiAgICBsZXQgcGxheWVyOlZnUGxheWVyO1xuICAgIGxldCByZWY6RWxlbWVudFJlZjtcbiAgICBsZXQgYXBpOlZnQVBJO1xuICAgIGxldCBmc0FQSTpWZ0Z1bGxzY3JlZW5BUEk7XG4gICAgbGV0IGNvbnRyb2xzSGlkZGVuOlZnQ29udHJvbHNIaWRkZW47XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgcmVmID0ge1xuICAgICAgICAgICAgbmF0aXZlRWxlbWVudDoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3JBbGw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt7fV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRyb2xzSGlkZGVuID0ge1xuICAgICAgICAgICAgaXNIaWRkZW46IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmU6ICgpID0+IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgVmdDb250cm9sc0hpZGRlbjtcblxuICAgICAgICBhcGkgPSBuZXcgVmdBUEkoKTtcbiAgICAgICAgZnNBUEkgPSBuZXcgVmdGdWxsc2NyZWVuQVBJKCk7XG4gICAgICAgIHBsYXllciA9IG5ldyBWZ1BsYXllcihyZWYsIGFwaSwgZnNBUEksIGNvbnRyb2xzSGlkZGVuKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgaGFuZGxlIG5hdGl2ZSBmdWxsc2NyZWVuJywgKCkgPT4ge1xuICAgICAgICBmc0FQSS5uYXRpdmVGdWxsc2NyZWVuID0gdHJ1ZTtcblxuICAgICAgICBwbGF5ZXIub25DaGFuZ2VGdWxsc2NyZWVuKHRydWUpO1xuXG4gICAgICAgIGV4cGVjdChwbGF5ZXIuaXNGdWxsc2NyZWVuKS50b0JlRmFsc3koKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgaGFuZGxlIGVtdWxhdGVkIGZ1bGxzY3JlZW4gZW5hYmxlZCcsICgpID0+IHtcbiAgICAgICAgZnNBUEkubmF0aXZlRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gICAgICAgIHBsYXllci5vbkNoYW5nZUZ1bGxzY3JlZW4odHJ1ZSk7XG5cbiAgICAgICAgZXhwZWN0KHBsYXllci5pc0Z1bGxzY3JlZW4pLnRvQmVUcnV0aHkoKTtcbiAgICAgICAgZXhwZWN0KHBsYXllci56SW5kZXgpLnRvQmUoJzEnKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgaGFuZGxlIGVtdWxhdGVkIGZ1bGxzY3JlZW4gZW5hYmxlZCcsICgpID0+IHtcbiAgICAgICAgZnNBUEkubmF0aXZlRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gICAgICAgIHBsYXllci5vbkNoYW5nZUZ1bGxzY3JlZW4oZmFsc2UpO1xuXG4gICAgICAgIGV4cGVjdChwbGF5ZXIuaXNGdWxsc2NyZWVuKS50b0JlRmFsc3koKTtcbiAgICAgICAgZXhwZWN0KHBsYXllci56SW5kZXgpLnRvQmUoJ2F1dG8nKTtcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnVmlkZW9ndWxhciBQbGF5ZXInLCAoKSA9PiB7XG4gICAgbGV0IGJ1aWxkZXI7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1ZnUGxheWVyVGVzdCwgVmdQbGF5ZXJdXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYmVmb3JlRWFjaChhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWQuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnU2hvdWxkIGNyZWF0ZSBhIFZnUGxheWVyIGNvbXBvbmVudCcsXG4gICAgICAgIGFzeW5jKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVmdQbGF5ZXJUZXN0KTtcbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgbGV0IGNvbXBpbGVkID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGxldCB2aWRlbyA9IGNvbXBpbGVkLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICAgICAgICAgIGV4cGVjdCh2aWRlby5jb250cm9scykudG9CZSh0cnVlKTtcbiAgICAgICAgfSlcbiAgICApO1xufSk7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx2Zy1wbGF5ZXI+XG4gICAgICAgICAgICA8dmlkZW8gdmctbWVkaWEgaWQ9XCJzaW5nbGVWaWRlb1wiIHByZWxvYWQ9XCJhdXRvXCIgY29udHJvbHM+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3RhdGljLnZpZGVvZ3VsYXIuY29tL2Fzc2V0cy92aWRlb3MvdmlkZW9ndWxhci5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3RhdGljLnZpZGVvZ3VsYXIuY29tL2Fzc2V0cy92aWRlb3MvdmlkZW9ndWxhci5vZ2dcIiB0eXBlPVwidmlkZW8vb2dnXCI+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3RhdGljLnZpZGVvZ3VsYXIuY29tL2Fzc2V0cy92aWRlb3MvdmlkZW9ndWxhci53ZWJtXCIgdHlwZT1cInZpZGVvL3dlYm1cIj5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgIDwvdmctcGxheWVyPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbVmdBUEldXG59KVxuY2xhc3MgVmdQbGF5ZXJUZXN0IHt9XG4iXX0=