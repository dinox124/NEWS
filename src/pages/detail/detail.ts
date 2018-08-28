import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  film = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.http.get(`https://greenm.herokuapp.com/top-news-id/${this.navParams.get('id')}`).toPromise().then((movie) => {

      this.film = movie.json();
    });
  }


}
export class Demo{}
