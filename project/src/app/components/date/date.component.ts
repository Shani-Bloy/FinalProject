import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { DateService} from 'src/app/services/date.service';
import { date } from '../../models/date';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  constructor(private dateService:DateService,
    public dialogRef: MatDialogRef<DateComponent> ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  Ok(
    startDate,
    endDate
  ){
    this.dateService.addDate(
      {startDate,
        endDate   
      } as date
    ).subscribe(()=>console.log(  {startDate,
      endDate   
    } as date)
    )
  
  }


  ngOnInit(): void {
  }

}
