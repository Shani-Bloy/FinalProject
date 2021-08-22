import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apartmentService: ApartmentService,) { }
 
  myControl = new FormControl();
  options: string[] = ['Bnei Brak', 'Yerushalaim', 'Tel Aviv','Petach Tikva','Ramat Gan','Afula'];
  filteredOptions: Observable<string[]>;
  Apartments:any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  search(city:string,numChildren:string){    
      this.apartmentService.getApartmentsForSearch(city,numChildren)
        .subscribe((apartments: any) => this.Apartments = apartments);
  }
}
