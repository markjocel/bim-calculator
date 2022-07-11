import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './pages/input/input.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/input',
    pathMatch: 'full'
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
