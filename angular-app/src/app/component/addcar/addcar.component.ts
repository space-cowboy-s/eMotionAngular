import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers =  new HttpHeaders({
  'Content-Type': 'appliation/json',
  'x-auth-token': '72312'
});
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  public AddCars: FormGroup;
  constructor(public fb: FormBuilder, public httpClient: HttpClient ) {
  }
  ngOnInit() {
    this.AddCars = this.fb.group({
      brand: ['', Validators.required], // la chaîne de caractères est la valeur par défaut du champ
      model: ['', Validators.required],
      serial_number: ['', Validators.required],
      color: ['', Validators.required],
      numberplate: ['', Validators.required],
      number_kilometers: ['', Validators.required],
      purchase_date: ['', Validators.required],
      buying_price: ['', Validators.required],
      bail: ['', Validators.required],
    });
  }
  AddCar(){
    const url = 'http://api.atcreative.fr/api/admin/car/add';
    console.log(headers)
    this.httpClient.post(url,JSON.stringify(this.AddCars, getCircularReplacer()), {headers: headers}).subscribe((res: Response) => console.log(res));
  }
}
