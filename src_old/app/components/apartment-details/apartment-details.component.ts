import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit {

  constructor(private apartmentService: ApartmentService,private activatedRoute: ActivatedRoute) { }

  Apartment: any;

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.getApartmentDetails();
    })
  }

  getApartmentDetails() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.apartmentService.getApartmentDetails(id).
    subscribe((apartmentDetails) => this.Apartment = apartmentDetails);
  }

}
