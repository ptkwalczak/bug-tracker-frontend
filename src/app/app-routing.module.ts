import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugDetailComponent } from './bug-detail/bug-detail.component';
import { BugsComponent } from './bugs/bugs.component';

const routes: Routes = [
  { path: '', redirectTo: '/bugs', pathMatch: 'full' },
  { path: 'detail/:id', component: BugDetailComponent },
  { path: 'bugs', component: BugsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
