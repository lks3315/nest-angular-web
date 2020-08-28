import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponentRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeComponentRoutingModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeComponentModule {}
