import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleGuideComponent } from './style-guide/style-guide/style-guide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigatorModule } from './navigator/navigator.module';
import { AdSpaceModule } from './ad-space/ad-space.module';
import { UploadFormComponent } from './upload-form/upload-form.component';

@NgModule({
  declarations: [AppComponent, StyleGuideComponent, UploadFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigatorModule,
    AdSpaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
