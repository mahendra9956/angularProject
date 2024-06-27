import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[!@#$%^&*()_+\\-=[\\]{};:\'",.<>/?`~]).{10,}$')
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.mustMatch('newPassword', 'confirmPassword') });
  }

  
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
     const {currentPassword,newPassword}=this.changePasswordForm.value;
     console.log('Password changed Sucessfully')

      this.router.navigate(['/login']);
    }
  }
}