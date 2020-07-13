import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from 'projects/administrative/src/app/home/home.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    // RouterModule.forRoot(
    //   [
    //     { path: 'financial', pathMatch: 'full', redirectTo : 'financial'},
    //     { path: 'administrative', pathMatch: 'full', redirectTo : 'administrative'}
    //   ],{ useHash: true }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
