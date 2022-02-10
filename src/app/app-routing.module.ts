import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { VeterinaiosComponent } from "./components/veterinaios/veterinaios.component";
import { FormVetComponent } from './components/form-vet/form-vet.component';
import { PettypeListaComponent } from './components/pettype-lista/pettype-lista.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "owners",
    component: OwnersComponent
  },
  {
    path: "form-owner/:id",
    component: FormOwnerComponent
  },
  {
    path: "form-vet/:id",
    component: FormVetComponent
  },
  {
    path: "veterinarios",
    component: VeterinaiosComponent
  },
  {
    path: "pettype-lista",
    component: PettypeListaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
