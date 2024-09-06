import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  load = false;
  team: any[] = [];

  constructor( private http: HttpClient ) {
    

    this.loadInfo();
    this.loadTeam();

  }

  private loadInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {

      this.load = true;
      this.info = resp;
    });
  }


  private loadTeam() {
    this.http.get('https://angular-html-9172a-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.team = resp;
      console.log(resp);
    });
  }
}
