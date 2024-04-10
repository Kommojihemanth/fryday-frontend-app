import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'; // Import ModuleMapLoaderModule
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'your-app-id' }),
    ServerModule,
    HttpClientModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
  constructor() {}
}
