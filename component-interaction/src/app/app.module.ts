import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { UserChildComponent } from './user-child/user-child.component';
import { NameParentComponent } from './name-parent.component'
import { NameChildComponent } from './name-child.component'
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
@NgModule({
  declarations: [
    AppComponent,
    UserParentComponent,
    UserChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
