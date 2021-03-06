import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { SportsPage } from '../pages/sports/sports';
import { SciencePage } from '../pages/science/science';
import { TechPage } from '../pages/tech/tech';
import { MotorPage } from '../pages/motor/motor';
//import {DetailPageModule}from'../pages/detail/detail.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // ListPage,
    SportsPage,
    SciencePage,
    TechPage,
    MotorPage
   // DetailPageModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    SportsPage,
    SciencePage,
    TechPage,
    MotorPage,
   // DetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
