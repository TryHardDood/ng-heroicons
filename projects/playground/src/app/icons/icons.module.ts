import { NgModule } from '@angular/core';
import { NgHeroiconsModule } from "../../../../ng-heroicons/src/public-api";
import { IconsComponent } from './icons.component';
import { CommonModule } from '@angular/common';
import { OutlineIconsComponent } from './outline-icons.component';
import { SolidIconsComponent } from './solid-icons.component';

@NgModule({
  declarations: [
    IconsComponent,
    OutlineIconsComponent,
    SolidIconsComponent,
  ],
  imports: [
    CommonModule,
    NgHeroiconsModule,
  ],
  exports: [
    OutlineIconsComponent,
    SolidIconsComponent,
    IconsComponent,
  ],
  bootstrap: [
  ]
})

export class IconsModule { }