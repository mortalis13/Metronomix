import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import * as TUTORIALS from './tutorials-page/tutorials-page.component';
import { LinksPageComponent } from './links-page/links-page.component';

import { TestComponent } from './tests/test.component';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TUTORIALS.TutorialsPageComponent,
    TUTORIALS.TutorialExportVstiComponent,
    TUTORIALS.TutorialRecordGuitarComponent,
    TUTORIALS.TutorialRecordAndroidComponent,
    TestComponent,
    LinksPageComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {useHash: true})
  ],
  // providers: [],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
