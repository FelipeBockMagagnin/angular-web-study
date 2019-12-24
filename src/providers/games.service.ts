import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(public http: HttpClient) {  
    
  }

  async getgames(): Promise<any> {
    const response = await this.http.get('https://api.rawg.io/api/games').toPromise();
    return response;
  }    
}
