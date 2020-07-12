import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {path:'', component: CountriesListComponent},
  {path:'country/:country_name', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
