import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: MainScreenComponent, pathMatch: 'full'},
  {path: 'admin', component: AdminPanelComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
