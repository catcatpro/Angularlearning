import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { RouterableComponent } from './routerable/routerable.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    RouterableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
