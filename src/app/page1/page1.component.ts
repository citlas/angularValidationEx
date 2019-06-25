import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators'; 

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

   buildForm(){
     this.registerForm = this.formBuilder.group({
       customerName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
       lastName: this.formBuilder.control(null, Validators.required),
       customerEmail: this.formBuilder.control(null, [Validators.required, Validators.email]),
       password: this.formBuilder.control(null, Validators.required),
       repeatedPassword: this.formBuilder.control(null, Validators.required)
     },{
       validator: CustomValidators.mustMatch('password','repeatedPassword')
     });
    
   }

   get myForm(){return this.registerForm.controls;}

   onResetForm(){
     this.registerForm.reset();
   }

   onSubmitForm(){
     this.submitted = true;
     if(this.registerForm.invalid){
       return;
     }
     alert("Success "+ JSON.stringify(this.registerForm.value))
   }
  ngOnInit() {
  }

}
