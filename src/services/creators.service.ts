import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  constructor(public http: HttpClient) { }

  async getCreators(): Promise<any> {
    const response = await this.http.get('https://api.rawg.io/api/creators').toPromise();
    return response;
  }   
}
