import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {importProvidersFrom, provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch((err) => console.error(err));
