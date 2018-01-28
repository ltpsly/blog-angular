/***
 * 此为首页的模块
 * 
 * 
 * 
 * 
 * */ 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Home routing
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SliderComponent
]
})
export class HomeModule { }
