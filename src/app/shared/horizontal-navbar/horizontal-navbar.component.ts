import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-horizontal-navbar',
    templateUrl: './horizontal-navbar.component.html',
    styleUrls: ['./horizontal-navbar.component.scss']
})

export class HorizontalNavbarComponent {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    constructor(public translate: TranslateService) {
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }
}
