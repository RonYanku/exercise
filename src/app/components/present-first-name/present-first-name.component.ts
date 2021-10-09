import { UtilsServiceService } from './../../services/utils-service.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'present-first-name',
  templateUrl: './present-first-name.component.html',
  styleUrls: ['./present-first-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentFirstNameComponent {

  @Input() firstName: string;

  constructor(private UtilsServiceService: UtilsServiceService) { }

  get reverseString() {
    return this.UtilsServiceService.reverseString(this.firstName);
  }
}
