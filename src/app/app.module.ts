import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OwnersComponent } from './components/owners/owners.component';
import { HomeComponent } from './components/home/home.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeterinaiosComponent } from './components/veterinaios/veterinaios.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomeComponent,
    FormOwnerComponent,
    VeterinaiosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
