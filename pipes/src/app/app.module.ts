import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBirthday } from './user-birthday.component';
import { PowCaloulatorPipe } from './pow-calculator.pipe';
import { PowCaloulatorComponent } from './pow-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBirthday,
    PowCaloulatorPipe,
    PowCaloulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
