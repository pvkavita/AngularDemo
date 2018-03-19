import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyDJWNH6q45I7ULUt6CG-welWruLbAzkiws',
    authDomain: 'employeeform-29792.firebaseapp.com',
    databaseURL: 'https://employeeform-29792.firebaseio.com',
    storageBucket: 'employeeform-29792.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   /* HttpModule,*/

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
