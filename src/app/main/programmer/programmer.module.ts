import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgrammerPageRoutingModule } from './programmer-routing.module';
import { ProgrammerPage } from './programmer.page';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammerPageRoutingModule,
    RouterLink,
    SharedModule
  ],
  declarations: [ProgrammerPage]
})
export class ProgrammerPageModule {}
