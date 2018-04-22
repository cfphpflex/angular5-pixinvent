import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HorizontalNavbarComponent } from "./horizontal-navbar/horizontal-navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
// import { HorizontalMenuComponent } from "./horizontal-menu/horizontal-menu.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";


@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        HorizontalNavbarComponent,
        SidebarComponent,
        // HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        NgbModule,
        TranslateModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule
        
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        HorizontalNavbarComponent,
        SidebarComponent,
        // HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective
    ]
})
export class SharedModule { }
