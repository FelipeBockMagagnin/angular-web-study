import { Component, OnInit, NgModule } from '@angular/core';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games;

  constructor(public gameservice: GamesService) {
    console.log('a');
   }

  async ngOnInit() {
    this.games = await this.gameservice.getgames();
  }

}
