import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from 'src/services/games.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'GamesPlayTime';
    response: any;
    result: any;

    constructor(public game: GamesService) {
        
    }

    async ngOnInit() {

    }
}
