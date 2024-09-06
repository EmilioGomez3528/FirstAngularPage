import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  load = false;

  constructor( private http: HttpClient ) {
    
    console.log("Hello")

    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {

      this.load = true;
      this.info = resp;
      console.log( resp );

    });

  }
}
