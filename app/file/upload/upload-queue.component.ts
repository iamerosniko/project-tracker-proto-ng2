import { Component } from '@angular/core'; 
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    templateUrl : 'upload-queue.component.html',
    selector: 'upload-queue',
    inputs: ['fromUploader','ex']
})
export class UploadQueueComponent {

}