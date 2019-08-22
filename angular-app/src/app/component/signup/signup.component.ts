import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const headers=  new HttpHeaders({
  'Content-Type': 'application/json'
});
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  private signupForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      password: ['', Validators.required],
      passwordValid: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['', Validators.required],
      driverLicence: ['', Validators.required],
      adress: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  signup() {
    const data = this.signupForm.value;
    const datas = JSON.stringify({ firstname: data.firstname, lastname: data.lastname, email: data.email, birthDate: data.birthDate, adress: data.adress, country: data.country, phone: data.phone, driverLicence: data.driverLicence,  password: data.password});
    console.log(datas);
    this.http.post(`http://api.atcreative.fr/api/new/user`, datas, {headers: headers}).subscribe((res: Response) => console.log(res));
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
