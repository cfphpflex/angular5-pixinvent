"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./src/core/core"));
// CustomEvent polyfill for IE9/10/11
(function () {
    if (typeof window === "undefined" || typeof window['CustomEvent'] === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window['Event'].prototype;
    window['CustomEvent'] = CustomEvent;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBZ0M7O0FBR2hDLENBQUM7SUFFRyxFQUFFLENBQUMsQ0FBRSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVqRyxxQkFBdUIsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNoRCxHQUFHLENBQUMsZUFBZSxDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDZDtJQUVELFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVsRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDO0NBQ3ZDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9jb3JlJztcblxuLy8gQ3VzdG9tRXZlbnQgcG9seWZpbGwgZm9yIElFOS8xMC8xMVxuKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICggdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygd2luZG93WydDdXN0b21FdmVudCddID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcbiAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XG4gICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcbiAgICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3dbJ0V2ZW50J10ucHJvdG90eXBlO1xuXG4gICAgd2luZG93WydDdXN0b21FdmVudCddID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuIl19