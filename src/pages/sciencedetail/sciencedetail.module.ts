import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SciencedetailPage } from './sciencedetail';

@NgModule({
  declarations: [
    SciencedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SciencedetailPage),
  ],entryComponents: [SciencedetailPage]
})
export class SciencedetailPageModule {}
