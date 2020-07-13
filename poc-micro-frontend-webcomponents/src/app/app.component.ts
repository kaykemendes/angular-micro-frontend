import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'poc-micro-frontend-webcomponents';

  constructor() {}

  ngOnInit(){
    const script = document.createElement('script');
    script.src = 'http://localhost:8080/administrative/main-es2015.js';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'http://localhost:8080/financial/main-es2015.js';
    document.body.appendChild(script2);

    //http://localhost:4800/node_modules/angular-lister/app/app.component.js
    const script3 = document.createElement('script');
    script3.src = 'http://localhost:49412/company/main-es2015.js';
    document.body.appendChild(script3);
  }


}
