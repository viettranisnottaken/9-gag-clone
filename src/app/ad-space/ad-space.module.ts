import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdComponent } from './header-ad/header-ad.component';
import { SideAdComponent } from './side-ad/side-ad.component';

const components = [HeaderAdComponent, SideAdComponent];

@NgModule({
  declarations: [HeaderAdComponent, SideAdComponent],
  imports: [CommonModule],
  exports: [...components],
})
export class AdSpaceModule {}
