import { Component, Input, OnInit } from '@angular/core';
import { UtilsServiceService } from '../../services/utils-service.service'

@Component({
  selector: 'present-reverse-first-name',
  templateUrl: './present-reverse-first-name.component.html',
  styleUrls: ['./present-reverse-first-name.component.scss']
})
export class PresentReverseFirstNameComponent {

  @Input() firstName: string;

  constructor(private UtilsServiceService: UtilsServiceService) { }

  /* */
  get reverseString() {
    return this.UtilsServiceService.reverseString(this.firstName);
  }
}
