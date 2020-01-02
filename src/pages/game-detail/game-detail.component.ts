import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  a;
  game = '';

  constructor(public route: ActivatedRoute,
              public router: Router,
              public gameService: GamesService) { }

  async ngOnInit() {
    this.a = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.game += params.get('slug'))
    ).subscribe(aa => {
      this.a = this.gameService.getgamebyid(this.game).then(a =>
      {
        console.log(a);
      });
    });

  }

}
