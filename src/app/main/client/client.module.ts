import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientPageRoutingModule } from './client-routing.module';
import { ClientPage } from './client.page';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    RouterLink,
    SharedModule
  ],
  declarations: [ClientPage]
})
export class ClientPageModule {}
