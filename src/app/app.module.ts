import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/layouts/toolbar/toolbar.component';
import { ComponentsModule } from './core/components/components.module';
import { ServicesModule } from './core/services/services.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    ServicesModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
