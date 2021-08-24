import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})

export class ApartmentService {

  ApartmentUrl = 'https://localhost:44312/api/apartment/';

  constructor(private http: HttpClient, ) { }

  getApartments(){
    return this.http.get(`${this.ApartmentUrl}/GetApartments`);
  }

  getApartmentsForSearch( city: string, numChildren: string){  
    return this.http.get(`${this.ApartmentUrl}/Search/${city}/${numChildren}`);
  }

  addApartment(apartment: apartment) {
    return this.http.post<apartment>(`${this.ApartmentUrl}/PostApartment`, apartment);
  }

  getApartmentDetails(id:number) {
    return this.http.get(`${this.ApartmentUrl}/GetApartmentDetails/${id}`);
  }

  getApartment(id:number) {
    return this.http.get(`${this.ApartmentUrl}/GetApartment/${id}`);
  }

  getRentorApartments(id:number){
    return this.http.get(`${this.ApartmentUrl}/GetRentorApartment/${id}`)
  }

  
}
