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

  gameSlug = '';
  gameDetails;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public gameService: GamesService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe( paramMap =>
      {
        this.gameSlug = paramMap.get('slug');      
        this.gameService.getgamebyid(this.gameSlug).then(data => {
          this.gameDetails = data;
          console.log(this.gameDetails);
        });
      })


    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.game += params.get('slug'))
    // ).subscribe(aa => {
    //   this.gameService.getgamebyid(this.game).then(a =>
    //   {
    //     console.log(a);
    //   });
    // });
  }

}
