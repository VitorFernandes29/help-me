
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '../directives/shared-directives.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    RouterModule,
    SharedDirectivesModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

