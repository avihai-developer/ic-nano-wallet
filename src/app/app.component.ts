import {Component} from '@angular/core';
import {NanoService} from './services/nano-service/nano.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(private nanoService: NanoService) {
    }

    a() {
        this.nanoService.createNewWallet();
    }
}
