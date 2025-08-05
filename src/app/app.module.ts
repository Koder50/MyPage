import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MainPageComponent } from './main-page/main-page.component'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list"; 
import { MatIconModule } from '@angular/material/icon';
import { InViewportModule } from 'ng-in-viewport';
import { ProgrammingComponent } from './programming/programming.component';
import { SportComponent } from './sport/sport.component';
import { TravelsComponent } from './travels/travels.component';
import { LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService, SelectionService, AnnotationsService, ZoomService } from '@syncfusion/ej2-angular-maps';
import { NatureComponent } from './nature/nature.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProgrammingComponent,
    SportComponent,
    TravelsComponent,
    NatureComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    InViewportModule
  ],
  providers: [LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService , SelectionService, AnnotationsService, ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
