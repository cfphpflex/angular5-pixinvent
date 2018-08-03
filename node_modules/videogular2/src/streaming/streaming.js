"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vg_dash_1 = require("./vg-dash/vg-dash");
var vg_hls_1 = require("./vg-hls/vg-hls");
var VgStreamingModule = (function () {
    function VgStreamingModule() {
    }
    VgStreamingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_dash_1.VgDASH, vg_hls_1.VgHLS
                    ],
                    exports: [
                        vg_dash_1.VgDASH, vg_hls_1.VgHLS
                    ]
                },] },
    ];
    return VgStreamingModule;
}());
exports.VgStreamingModule = VgStreamingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThDO0FBQzlDLDBDQUErQztBQUMvQyw2Q0FBMkM7QUFDM0MsMENBQXdDOzs7OztnQkFRdkMsZUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRTt3QkFDVixnQkFBTSxFQUFFLGNBQUs7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQkFBTSxFQUFFLGNBQUs7cUJBQ2hCO2lCQUNKOzs0QkFuQkQ7O0FBb0JhLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWZ0RBU0ggfSBmcm9tIFwiLi92Zy1kYXNoL3ZnLWRhc2hcIjtcbmltcG9ydCB7IFZnSExTIH0gZnJvbSBcIi4vdmctaGxzL3ZnLWhsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEUk1MaWNlbnNlU2VydmVyIHtcbiAgICBbaW5kZXg6IHN0cmluZ106IHtcbiAgICAgICAgc2VydmVyVVJMOiBzdHJpbmc7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnREFTSCwgVmdITFNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdEQVNILCBWZ0hMU1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTdHJlYW1pbmdNb2R1bGUge31cbiJdfQ==