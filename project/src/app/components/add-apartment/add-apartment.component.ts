import { Component, Input, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { apartment } from '../../models/apartment';
import { rentor } from 'src/app/models/rentor';
import { RentorService } from 'src/app/services/rentor.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss'],
})
export class AddApartmentComponent implements OnInit {
  rentor: rentor;

  constructor(
    private apartmentService: ApartmentService,
    private rentorService: RentorService
  ) {}
  options: string[] = [
    'Bnei Brak',
    'Yerushalaim',
    'Tel Aviv',
    'Petach Tikva',
    'Ramat Gan',
    'Afula',
  ];

  ngOnInit(): void {
    if (this.rentorService.rentorLogin)
      this.rentor = this.rentorService.rentorLogin;
    else this.rentor = this.rentorService.NewRentor;
  }

  addApartment(
    rentorId: number,
    city: string,
    street: string,
    floor: number,
    rooms: number,
    beds: number,
    airconditioners: number
  ) {
    console.log('add apatrtment work');
    this.apartmentService
      .addApartment({
        rentorId,
        city,
        street,
        floor,
        rooms,
        beds,
        airconditioners,
      } as apartment)
      .subscribe(() =>
        console.log({
          rentorId,
          city,
          street,
          floor,
          rooms,
          beds,
          airconditioners,
        } as apartment)
      );
  }

  upload(imageInput) {
    this.apartmentService.uploadImage(imageInput.files[0]).subscribe();
  }
}
