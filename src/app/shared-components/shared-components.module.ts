import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { GenreComponent } from './genre/genre.component';



@NgModule({
  declarations: [ButtonComponent, GenreComponent],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
