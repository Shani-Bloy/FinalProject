import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { OnInit, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { RentorService } from '../../services/rentor.service';
import { Subject } from 'rxjs';
import { rentor } from '../../models/rentor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private rentorService: RentorService) {}

  ngOnInit(): void {}
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  addRentor(
    FirstName: string,
    LastName: string,
    Password: string,
    Mail: string,
    Phone: string,
    AddaitionalPhone: string
  ) {
    this.rentorService
      .addRentor({
        FirstName,
        LastName,
        Password,
        Mail,
        Phone,
        AddaitionalPhone,
      } as rentor)    
      .subscribe((res: any) => {
        if (res.IsSuccess) 
          alert("the rentor registered successfuly");
         else 
          alert("erorr :( please try again");
      }
    )};
}
