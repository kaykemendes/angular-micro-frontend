import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';

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
        //   pathMatch: 'full',
        //   component: AppComponent
        // },
        {
          path: 'financial',
          component: HomeComponent
        }
      ], { useHash: true }
    )
  ],
  providers: [],

  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('micro-app-financial', elem);
  }

  ngDoBootstrap() { }

}
