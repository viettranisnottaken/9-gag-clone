import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFormComponent } from './account-form/account-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [AccountFormComponent, PasswordFormComponent, ProfileFormComponent, PrivacyComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
