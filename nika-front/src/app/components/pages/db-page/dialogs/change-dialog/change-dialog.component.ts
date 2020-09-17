import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoPart } from '../../db-page.component';

@Component({
  selector: 'app-change-dialog',
  templateUrl: './change-dialog.component.html',
  styleUrls: ['./change-dialog.component.css']
})
export class ChangeDialogComponent{

  displayedColumns: string[] = ['number', 'nomenclature', 'balance', 'price'];

  constructor( public dialogRef: MatDialogRef<ChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AutoPart  ) {}

    onNoClick(): void {
      console.log("qwe");
    }

}
