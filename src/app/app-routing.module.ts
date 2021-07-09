import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HttpmethodComponent } from './httpmethod/httpmethod.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'country', component: CountryComponent},
  {path:'httpmethod', component: HttpmethodComponent},
  {path:'log-in', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
