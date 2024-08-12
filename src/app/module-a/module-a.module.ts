import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ModuleARoutingModule } from './module-a-routing.module';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule {}
