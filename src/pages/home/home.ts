import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  moviesList;
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://greenm.herokuapp.com/top-news").toPromise().then((filmList) => {
      //console.log(filmList.json());
      this.moviesList = filmList.json();
    }, (err) => {
      console.log(err);
    })
  }
  openReview(imgUrl, id) {
    this.navCtrl.push("DetailPage", {
      imgUrl, id
    });
  }
}
