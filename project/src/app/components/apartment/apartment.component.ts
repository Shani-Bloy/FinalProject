import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentService } from '../../services/apartment.service';
import { MatDialog } from '@angular/material/dialog';
import { DateComponent } from '../date/date.component';
import { date } from '../../models/date';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

   animal: string;
  name: string;
  dateS:date;
  dateE:date;
  // Apartments: any;
  @Input() apartment: any;
  constructor(private apartmentService: ApartmentService,public dialog: MatDialog) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DateComponent, {
      width: '300px',
      data: {ApartmentId: this.apartment.ApartmentId,startDate:this.dateS,endDate:this.dateE},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      

    });
  }

  ngOnInit() {
    // this.GetApartments();
  }

  // GetApartments() {
  //   this.apartmentService.getApartments()
  //     .subscribe((apartments: any) => this.Apartments = apartments);
  // }


}
