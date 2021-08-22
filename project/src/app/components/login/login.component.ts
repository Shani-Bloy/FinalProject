import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RentorService } from 'src/app/services/rentor.service';
import { MatDialog } from '@angular/material/dialog';
import { RentorComponent } from '../rentor/rentor.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rentorLogin:any;

  constructor(private rentorService: RentorService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  login(userName: string, password: string) {
    this.rentorService.login(userName, password).
    subscribe((rentor: any) => {this.rentorLogin = rentor,this.rentorService.rentorLogin=this.rentorLogin
    ,console.log(this.rentorService.rentorLogin)});  
  }

  openDialog() {
    this.dialog.open(RentorComponent);
   // this.dialog.open(NewApartmentComponent);
  }
}

