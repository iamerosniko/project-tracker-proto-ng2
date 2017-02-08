import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DownloadMemoryService }  from './download-memory.service';
//import { InMemoryDataService }  from '../cars/in-memory-data.service';

import { UploadComponent } from './upload/upload.component';
import { UploadMultipleComponent } from './upload/upload-multiple.component';
import { UploadSingleComponent } from './upload/upload-single.component';
import { UploadQueueComponent } from './upload/upload-queue.component';

import { DownloadComponent } from './download.component';


import { DownloadService } from './download.service';

import { FileRouting } from './file.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        //InMemoryWebApiModule.forRoot(DownloadMemoryService),
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        FileRouting
    ],
    declarations: [
        FileSelectDirective ,
        FileDropDirective,
        UploadComponent, 
        DownloadComponent,
        UploadMultipleComponent,
        UploadSingleComponent,
        UploadQueueComponent,

    ],
    providers: [
        DownloadService
    ]
    //,bootstrap: [ UploadComponent ]
})

export class FileModule {}