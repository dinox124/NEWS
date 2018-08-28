import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the SciencedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sciencedetail',
  templateUrl: 'sciencedetail.html',
})
export class SciencedetailPage {

  film = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.http.get(`https://greenm.herokuapp.com/sci-news-id/${this.navParams.get('id')}`).toPromise().then((movie) => {

      this.film = movie.json();
    });
  }

}
