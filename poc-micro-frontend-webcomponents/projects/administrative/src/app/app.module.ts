import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(
      [
        // {
        //   path: '',
        //   pathMatch: 'full'
        // },
        {
          path: 'administrative',
          component: HomeComponent
        }
      ],{ useHash: true }
    )
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-administrative', elem);
  }

  ngDoBootstrap() {}
}
