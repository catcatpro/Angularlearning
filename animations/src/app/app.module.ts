import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListBasicComponent } from './user-list-basic.component';
import { UserListTimingsComponent } from './user-list-timings.component';
import { UserListMultistepComponent } from './user-list-multistep.compent';
@NgModule({
  declarations: [
    AppComponent,
    UserListBasicComponent,
    UserListTimingsComponent, 
    UserListMultistepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
