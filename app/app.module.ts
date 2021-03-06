import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
//modules
import { CarModule } from './cars/cars.module';
import { FileModule } from './file/file.module';
import { ProjectTrackerModule } from './project-tracker/project-tracker.module';
//routing
import { AppRouting } from './app.routing';

@NgModule({
    imports: [BrowserModule, CarModule,Ng2GoogleChartsModule, FileModule,
        ProjectTrackerModule, AppRouting],
    declarations: [AppComponent, AboutComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}