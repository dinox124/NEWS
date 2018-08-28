import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechdetailPage } from './techdetail';

@NgModule({
  declarations: [
    TechdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TechdetailPage),
  ],entryComponents: [TechdetailPage]
})
export class TechdetailPageModule {}
