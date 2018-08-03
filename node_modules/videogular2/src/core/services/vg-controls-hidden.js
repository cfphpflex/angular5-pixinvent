"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var VgControlsHidden = (function () {
    function VgControlsHidden() {
        this.isHiddenSubject = new Subject_1.Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    VgControlsHidden.prototype.state = function (hidden) {
        this.isHiddenSubject.next(hidden);
    };
    VgControlsHidden.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgControlsHidden.ctorParameters = function () { return []; };
    return VgControlsHidden;
}());
exports.VgControlsHidden = VgControlsHidden;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMtaGlkZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctY29udHJvbHMtaGlkZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVDO0FBRXZDLHNDQUEyQzs7SUFRdkM7K0JBRjRDLElBQUksaUJBQU8sRUFBVztRQUc5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkQ7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sTUFBZTtRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQzs7Z0JBWkosaUJBQVU7Ozs7MkJBSlg7O0FBS2EsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHNIaWRkZW4ge1xuICAgIGlzSGlkZGVuOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgcHJpdmF0ZSBpc0hpZGRlblN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0aGlzLmlzSGlkZGVuU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzdGF0ZShoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlblN1YmplY3QubmV4dChoaWRkZW4pO1xuICAgIH1cbn1cbiJdfQ==