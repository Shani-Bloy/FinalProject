import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { LoginComponent } from './components/login/login.component';
import { RentorComponent } from './components/rentor/rentor.component';

import { AddApartmentComponent } from './components/add-apartment/add-apartment.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { UpdateApartmentComponent } from './components/update-apartment/update-apartment.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "apartments", component: ApartmentsComponent },
  { path: "login", component: LoginComponent },
  { path: "rentor", component: RentorComponent },
  { path: "addApartment", component:AddApartmentComponent },
  { path: 'apartmentDetails/:id', component: ApartmentDetailsComponent },
  { path: 'updateApartment/:id', component: UpdateApartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
