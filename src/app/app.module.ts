import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastModule } from 'ng-uikit-pro-standard';
import { PaperlessExerciseComponent } from './paperless-exercise/paperless-exercise.component';
import { AppRoutingModule } from './app-routing.module';
import { PresentReverseFirstNameComponent } from './paperless-exercise/components/present-reverse-first-name/present-reverse-first-name.component'


@NgModule({
  declarations: [
    AppComponent,
    PaperlessExerciseComponent,
    PresentReverseFirstNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
