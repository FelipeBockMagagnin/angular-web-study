import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from 'src/providers/games.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'GamesPlayTime';
    response: any;
    result: any;
    games: any;

    constructor(public game: GamesService) {
        
    }

    async ngOnInit() {
        this.games = await this.game.getgames();
        console.log('games:' , this.games);
    }
}
