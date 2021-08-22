import { Component, OnInit } from '@angular/core';
import { rentor } from 'src/app/models/rentor';
import { RentorService } from 'src/app/services/rentor.service';
import { ApartmentService } from 'src/app/services/apartment.service';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.scss']
})
export class UpdateApartmentComponent implements OnInit {
  apartments: any;
  rentor: any;
  constructor(private apartmentService: ApartmentService, private rentorService: RentorService,) { }

  ngOnInit(): void {
    this.rentor = this.rentorService.rentorLogin;
    this.updateApartment();
  }

  updateApartment() {
    this.apartmentService.getRentorApartments(this.rentor.IdRentor)
      .subscribe((apartments: any) => this.apartments = apartments);
  }



}
