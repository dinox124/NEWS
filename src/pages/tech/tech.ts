import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the TechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tech',
  templateUrl: 'tech.html',
})
export class TechPage {

  moviesList;
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://greenm.herokuapp.com/tec-news").toPromise().then((filmList) => {
      //console.log(filmList.json());
      this.moviesList = filmList.json();
    }, (err) => {
      console.log(err);
    })
  }

  openReview(imgUrl, id) {
    this.navCtrl.push("TechdetailPage", {
      imgUrl, id
    });
  }


}
