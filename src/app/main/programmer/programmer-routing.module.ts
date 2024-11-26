import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammerPage } from './programmer.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammerPageRoutingModule {}
