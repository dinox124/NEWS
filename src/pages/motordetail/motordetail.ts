import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the MotordetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motordetail',
  templateUrl: 'motordetail.html',
})
export class MotordetailPage {

  film = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.http.get(`https://greenm.herokuapp.com/motor-news-id/${this.navParams.get('id')}`).toPromise().then((movie) => {

      this.film = movie.json();
    });
  }

}
