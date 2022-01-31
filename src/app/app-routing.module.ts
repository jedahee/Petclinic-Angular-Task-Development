import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';

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
    path: "vets",
    component: VetsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
