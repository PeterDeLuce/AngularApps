import { enableProdMode } from '@angular/core';
//below imports a function to target the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//below imports the bootsrap module
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//targets the browser and calls the bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //use "ng serve" in the terminal to build the application on localhost:4200
