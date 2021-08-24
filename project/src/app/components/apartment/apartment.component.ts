import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentService } from '../../services/apartment.service';


@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  // Apartments: any;
  @Input() apartment: any;
  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    // this.GetApartments();
  }

  // GetApartments() {
  //   this.apartmentService.getApartments()
  //     .subscribe((apartments: any) => this.Apartments = apartments);
  // }


}
