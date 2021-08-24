import { Component, OnInit } from '@angular/core';
import { rentor } from 'src/app/models/rentor';
import { RentorService } from 'src/app/services/rentor.service';
import { ApartmentService } from 'src/app/services/apartment.service';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { apartment } from 'src/app/models/apartment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.scss']
})
export class UpdateApartmentComponent implements OnInit {
  apartments: any;
  rentor: any;
  apartment: any;

  constructor(private apartmentService: ApartmentService,private activatedRoute: ActivatedRoute, private rentorService: RentorService,) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.update();
    })
  }

  // updateApartment() {
  //   this.apartmentService.getRentorApartments(this.rentor.IdRentor)
  //     .subscribe((apartments: any) => this.apartments = apartments);
  // }
  
  update() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.apartmentService.getApartment(id).
    subscribe((apartment) => this.apartment = apartment);
  }
}
