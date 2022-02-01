import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

import { VeterinaiosComponent } from "./components/veterinaios/veterinaios.component";

const routes: Routes = [
  {
    path: "owners",
    component: OwnersComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "form-owner/:id",
    component: FormOwnerComponent
  },

  {
    path: "veterinarios",
    component: VeterinaiosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
