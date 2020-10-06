import { HomeComponent } from './components/home/home.component';
import { IdeComponent } from './components/ide/ide.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contributors', component: ContributorsComponent },
  { path: 'ide', component: IdeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
