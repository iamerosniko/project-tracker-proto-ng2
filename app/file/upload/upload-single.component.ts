import { Component } from '@angular/core'; 
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    templateUrl : 'upload-single.component.html',
    selector: 'upload-single',
    inputs: ['uploads'] 
   
})
export class UploadSingleComponent {}