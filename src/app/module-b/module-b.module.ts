import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';
import { ModuleBRoutingModule } from './module-b-routing.module';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule {}
