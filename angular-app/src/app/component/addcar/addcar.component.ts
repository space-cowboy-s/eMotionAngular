import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
const headers=  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '72312'
});
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
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
  constructor(public route: Router, public fb: FormBuilder, public httpClient: HttpClient ) {
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
      location: ['', Validators.required]
    });
  }
  ngOnInit() {

  }
  AddCar(){
    const url = `http://api.atcreative.fr/api/admin/car/add`;
    const data = this.AddCars.value;
    const datas = JSON.stringify({ brand: data.brand, model: data.model, serialNumber: data.serial_number, color: data.color, numberplate: data.numberplate, numberKilometers: data.number_kilometers, purchaseDate: data.purchase_date, buyingPrice: data.buying_price, location: data.location, availability: true, bail: data.bail})
    console.log(datas);
    this.httpClient.post(url, datas , {headers: headers}).subscribe((res: Response) => {
      console.log(res);
      this.route.navigate(['/admincars']);
    });
  }
}
