import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsdetailPage } from './sportsdetail';

@NgModule({
  declarations: [
    SportsdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsdetailPage),
  ],entryComponents: [SportsdetailPage]
})
export class SportsdetailPageModule {}
