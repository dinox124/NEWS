import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotordetailPage } from './motordetail';

@NgModule({
  declarations: [
    MotordetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MotordetailPage),
  ],entryComponents: [MotordetailPage]
})
export class MotordetailPageModule {}
