import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'present-reverse-first-name',
  templateUrl: './present-reverse-first-name.component.html',
  styleUrls: ['./present-reverse-first-name.component.scss'],
})
export class PresentReverseFirstNameComponent {
  @Input() firstName: string;

  constructor(private UtilsService: UtilsService) {}

  // reverse the string we got as input using UtilsService function
  get reverseString() {
    return this.UtilsService.reverseString(this.firstName);
  }
}
