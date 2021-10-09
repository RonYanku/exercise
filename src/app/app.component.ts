import { UtilsServiceService } from './services/utils-service.service';
import { HttpServiceService } from './services/http-service.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'paperless-assignment';
  validatingForm: FormGroup;
  disabledSubmitButton: boolean = false;

  constructor(
    private httpService: HttpServiceService,
    private UtilsServiceService: UtilsServiceService,
    private toastrService: ToastService
  ) {}

  ngOnInit() {
    this.validatingForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  get firstNameInput() {
    return this.validatingForm.get('firstName');
  }
  get reversedFirstNameInput() {
    return this.UtilsServiceService.reverseString(this.firstNameInput.value);
  }
  get emailInput() {
    return this.validatingForm.get('email');
  }

  onSubmit() {
    this.disabledSubmitButton = true;
    this.httpService
      .login(this.firstNameInput.value, this.emailInput.value)
      .subscribe(
        (res) => {
          this.toastrService.success(res.statusText);
          // this.validatingForm.reset();
          this.disabledSubmitButton = false;
        },
        (error) => {
          this.toastrService.error(error.statusText);
        }
      );
  }
}
