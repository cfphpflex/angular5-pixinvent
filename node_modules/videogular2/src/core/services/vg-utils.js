"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VgUtils = (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    VgUtils.getZIndex = /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = 
    // Very simple mobile detection, not 100% reliable
    function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
    };
    ;
    VgUtils.isiOSDevice = function () {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    };
    ;
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    ;
    VgUtils.decorators = [
        { type: core_1.Injectable },
    ];
    return VgUtils;
}());
exports.VgUtils = VgUtils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5Qzs7OztJQUlyQzs7OztPQUlHOzs7Ozs7SUFDSSxpQkFBUzs7Ozs7SUFBaEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLGFBQW9CLENBQUM7UUFFekIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFMUUsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsa0RBQWtEOztJQUMzQyxzQkFBYzs7SUFBckI7UUFDSSxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFHO0lBQUEsQ0FBQztJQUVLLG1CQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztLQUN0SDtJQUFBLENBQUM7SUFFSyxpQkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RjtJQUFBLENBQUM7O2dCQW5DTCxpQkFBVTs7a0JBRlg7O0FBR2EsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdVdGlscyB7XG4gICAgLyoqXG4gICAgICogSW5zcGlyZWQgYnkgUGF1bCBJcmlzaFxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8yMTEyMDlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRaSW5kZXgoKTpudW1iZXIge1xuICAgICAgICBsZXQgekluZGV4ID0gMTtcbiAgICAgICAgbGV0IGVsZW1lbnRaSW5kZXg6bnVtYmVyO1xuXG4gICAgICAgIGxldCB0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50WkluZGV4ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFnc1tpXSlbXCJ6LWluZGV4XCJdLCAxMCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50WkluZGV4ID4gekluZGV4KSB7XG4gICAgICAgICAgICAgICAgekluZGV4ID0gZWxlbWVudFpJbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gekluZGV4O1xuICAgIH1cblxuICAgIC8vIFZlcnkgc2ltcGxlIG1vYmlsZSBkZXRlY3Rpb24sIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgc3RhdGljIGlzTW9iaWxlRGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJJRU1vYmlsZVwiKSAhPT0gLTEpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaXNpT1NEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXAoaG9uZXxhZHxvZCkvaSkgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpZW1vYmlsZSlbXFwvXFxzXT8oW1xcd1xcLl0qKS9pKSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc0NvcmRvdmEoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cDovLycpID09PSAtMSAmJiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gLTE7XG4gICAgfTtcbn1cbiJdfQ==