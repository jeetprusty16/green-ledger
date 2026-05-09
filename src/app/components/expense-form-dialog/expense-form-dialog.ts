import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatDialogRef
} from '@angular/material/dialog';

import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatInputModule
} from '@angular/material/input';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatSelectModule
} from '@angular/material/select';

import {
  MatDatepickerModule
} from '@angular/material/datepicker';

import {
  MatRadioModule
} from '@angular/material/radio';

import {
  ExpenseCategory,
  PaymentMode
} from '../../models/expense.model';

@Component({
  selector: 'app-expense-form-dialog',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule
  ],

  templateUrl: './expense-form-dialog.html',
  styleUrl: './expense-form-dialog.scss'
})
export class ExpenseFormDialog {

  private fb = inject(FormBuilder);

  dialogRef =
    inject(MatDialogRef<ExpenseFormDialog>);

  categories =
    Object.values(ExpenseCategory);

  paymentModes =
    Object.values(PaymentMode);

  form = this.fb.group({

    amount: [
      '',
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    category: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ],

    date: [
      '',
      Validators.required
    ],

    paymentMode: [
      '',
      Validators.required
    ]
  });

  save() {

    if (this.form.invalid) return;

    this.dialogRef.close(
      this.form.value
    );
  }
}