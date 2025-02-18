import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  formGroup: FormGroup;
  ratings: number[] = [1, 2, 3, 4, 5];
  genders: string[] = ['Male', 'Female'];
  skills: string[] = ['Java', 'Python', 'JavaScript', 'SpringBoot', 'Angular'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required, this.validateFirstName]],
      lastName: ['', [Validators.required, this.validateLastName]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.validatePhone]],
      pmsRatingOct23: ['', Validators.required],
      pmsRatingApr24: ['', Validators.required],
      pmsRatingOct24: ['', Validators.required],
      skills: ['', Validators.required],
      coverNote: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  validateFirstName(control: AbstractControl): ValidationErrors | null {
    return /^[a-zA-Z]+$/.test(control.value) ? null : { invalidFirstName: true };
  }

  validateLastName(control: AbstractControl): ValidationErrors | null {
    return /^[a-zA-Z]+$/.test(control.value) ? null : { invalidLastName: true };
  }

  validatePhone(control: AbstractControl): ValidationErrors | null {
    return /^[789]\d{9}$/.test(control.value) ? null : { invalidPhone: true };
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const submittedData = this.formGroup.value;
      this.dataService.setSubmittedData(submittedData);
      this.router.navigate(['/submission']);
    } else {
      alert('Form Is Not Submitted Properly!!!.');
    }
  }
}
