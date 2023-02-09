import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ReportComponent } from './components/report/report.component';
import { MeComponent } from './components/me/me.component';

const routes: Routes = [
  { path: '', component: MeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
