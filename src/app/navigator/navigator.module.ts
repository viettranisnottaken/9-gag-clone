import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { NotificationComponent } from './notification/notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SearchInputComponent,
    NotificationComponent,
    UserMenuComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SearchInputComponent,
    NotificationComponent,
    UserMenuComponent,
  ],
})
export class NavigatorModule {}
