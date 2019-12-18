import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GamesPlayTime';
  response: any;
  result : any;

  constructor(public http: HttpClient)
  {
    this.http.get('https://api.rawg.io/api/creators')
    .subscribe((res: Response) => {
      this.response = res;
      console.log(this.response);
      this.result = this.response['results'];
    });
  }

  

}
