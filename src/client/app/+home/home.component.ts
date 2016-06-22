import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import { NameListService } from '../shared/index';
import {NotificationsService, SimpleNotificationsComponent} from "angular2-notifications/components";
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, SimpleNotificationsComponent, FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [NotificationsService]
})
export class HomeComponent {

  newName: string;
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Calls the add method of the NameListService with the current newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
