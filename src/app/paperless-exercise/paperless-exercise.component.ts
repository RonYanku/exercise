import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-paperless-exercise',
  templateUrl: './paperless-exercise.component.html',
  styleUrls: ['./paperless-exercise.component.scss'],
})
export class PaperlessExerciseComponent implements OnInit {
  validatingForm: FormGroup;
  disabledSubmitButton: boolean = false;

  constructor(
    private userService: UserService,
    private toastrService: ToastService
  ) {}

  ngOnInit() {
    this.validatingForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  // return first name
  get firstNameInput() {
    return this.validatingForm.get('firstName');
  }
  // return email
  get emailInput() {
    return this.validatingForm.get('email');
  }

  // submit form
  onSubmit() {
    this.disabledSubmitButton = true;
    this.userService
      .postUserData(this.firstNameInput.value, this.emailInput.value)
      .subscribe(
        // upon receiving a response from the backend - show request status text
        // in toast and enable the submit button
        (res) => {
          this.toastrService.success(res.statusText);
          this.disabledSubmitButton = false;
        },
        (error) => {
          this.toastrService.error(error.statusText);
          this.disabledSubmitButton = false;
        }
      );
  }
}
