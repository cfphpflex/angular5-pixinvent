import { Component, OnInit } from '@angular/core';
import { ROUTES } from './horizontal-menu-routes.config';
import { RouteInfo } from "./horizontal-menu.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'app-horizontal-menu',
    templateUrl: './horizontal-menu.component.html',
})

export class HorizontalMenuComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute, public translate: TranslateService) {
        
    }

    ngOnInit() {
        $.getScript('./assets/js/horizontal-menu.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    //NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
}
