import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Upload } from 'src/portal/portal-shared/models/Upload';




@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  dropzoneActive = false;
  currentUpload: Upload;

  constructor() { }

  handleDrop(fileList: FileList) {
    const filesIndex = _.range(fileList.length);

    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
    });

  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }


}
