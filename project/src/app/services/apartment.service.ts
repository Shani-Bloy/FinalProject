import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { apartment } from '../models/apartment';
import { apartmentDetails } from '../models/apartmentDetails';
import { Observable } from 'rxjs';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApartmentService {

  ApartmentUrl = 'https://localhost:44312/api/apartment/';
  path:any;
  constructor(private http: HttpClient) { }

  getApartments(){
    return this.http.get(`${this.ApartmentUrl}/GetApartments`);
  }

  getApartmentsForSearch( city: string, numChildren: number,startDate:Date,endDate:Date){  
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    return this.http.get(`${this.ApartmentUrl}/Search/${city}/${numChildren}/${formatDate(date1, 'yyyy-MM-dd', 'en')}/${formatDate(date2, 'yyyy-MM-dd', 'en')}`);
  }

  addApartment(apartment: apartment,apartmentDetails:apartmentDetails) {
    return this.http.post<apartment>(`${this.ApartmentUrl}/PostApartment`,{apartment,apartmentDetails});
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

  uploadImage (image: File): Observable<Object>
  {
     let formData = new FormData();
     this.path=formData.append('image', image);
     return this.http.post(`${this.ApartmentUrl}/addImage`,formData);
  }

  
}
