import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent {
  dataForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    private fb: FormBuilder
  ) {
    this.dataForm = this.fb.group({
      sno: ['', Validators.required],
      name: ['', Validators.required],
      place: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.dataForm.valid) {
      this.dialogRef.close(this.dataForm.value);
    }
  }
}
