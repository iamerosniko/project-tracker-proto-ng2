import { Component } from '@angular/core'; 
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    templateUrl : 'upload-multiple.component.html',
    selector: 'upload-multiple' ,
    inputs: ['uploads']
})
export class UploadMultipleComponent {}