import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-comapny-monorepo', elem);
  }

  ngDoBootstrap() {}
 }
