import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent // ensure what we share is accessible to those who import it
  ]
})
export class HeaderModule { }
