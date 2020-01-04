import { Component, OnInit, NgModule } from '@angular/core';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  results = [];

  constructor(public gameservice: GamesService) {

  }

  ngOnInit() {
    this.gameservice.getgames().then(game =>{
      this.results = game['results'];
      console.log("Result" , this.results);
    });
  }
}
