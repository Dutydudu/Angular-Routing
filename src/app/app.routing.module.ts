import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './components/home-component/home-component.component';
import { MultTableComponentComponent } from './components/mult-table-component/mult-table-component.component';
import { TimerComponentComponent } from './components/timer-component/timer-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'multTable', component: MultTableComponentComponent },
  { path: 'timer', component: TimerComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
