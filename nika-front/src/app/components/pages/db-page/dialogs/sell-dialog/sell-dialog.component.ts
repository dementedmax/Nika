import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoPart } from '../../db-page.component';

@Component({
  selector: 'app-sell-dialog',
  templateUrl: './sell-dialog.component.html',
  styleUrls: ['./sell-dialog.component.css']
})
export class SellDialogComponent{

  displayedColumns: string[] = ['number', 'nomenclature', 'manufacturer', 'mark', 'balance', 'price'];

  constructor( public dialogRef: MatDialogRef<SellDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AutoPart  ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
