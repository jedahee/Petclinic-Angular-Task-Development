import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OwnersComponent } from './components/owners/owners.component';
import { HomeComponent } from './components/home/home.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeterinaiosComponent } from './components/veterinaios/veterinaios.component';
import { FormVetComponent } from './components/form-vet/form-vet.component';
import { PettypeListaComponent } from './components/pettype-lista/pettype-lista.component';
import { PettypeAddComponent } from './components/pettype-add/pettype-add.component';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { ElementRef } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomeComponent,
    FormOwnerComponent,
    VeterinaiosComponent,
    FormVetComponent,
    PettypeListaComponent,
    PettypeAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
