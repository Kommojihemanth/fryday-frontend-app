import {  CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { HomeComponent } from './features/components/home/home.component';
import { MenuComponent } from './features/components/menu/menu.component';
import { FranchiseComponent } from './features/components/franchise/franchise.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './features/components/dashboard/dashboard.module';
import { AboutUsComponent } from './features/components/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FranchiseComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    DashboardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
