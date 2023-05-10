import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormReactive } from './user-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { identityRevealedValidatorDirective } from './shared/identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormReactive,
    identityRevealedValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
