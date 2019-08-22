import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const headers=  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '72312'
 });


@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.css'],

})

export class EditcarsComponent implements OnInit {
  EditCars: FormGroup;
  private car: any;
  private id: string;
  constructor(public fb: FormBuilder, public httpClient: HttpClient, private route: ActivatedRoute ) {

   }

 
  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    const urlget = `http://api.atcreative.fr/api/car/${this.id}`;

 this.httpClient.get(urlget, {headers: headers}).subscribe((res: Response) =>  { console.log(this.car = res) 
  this.EditCars =this.fb.group({
    brand: [this.car.brand, ''], // la chaîne de caractères est la valeur par défaut du champ
    model: [this.car.model,''],
    serial_number: [this.car.serialNumber,''],
    color: [this.car.color,''],
    numberplate: [this.car.numberplate,''],
    purchase_date: [this.car.purchaseDate,''],
    number_kilometers: [this.car.numberKilometers,''],
    buying_price: [this.car.buyingPrice,''],
    bail: [this.car.bail,''],
    availability: [this.car.availability, ''],
    location: [this.car.location,'']
      })
  });}




  UpdateCars(){
    const url =  `http://api.atcreative.fr/api/admin/car/${this.id}`;
    const data = this.EditCars.value;
    const datas = JSON.stringify({ brand: data.brand, model: data.model, serialNumber: data.serial_number, color: data.color, numberplate: data.numberplate, numberKilometers: data.number_kilometers, purchaseDate: data.purchase_date, buyingPrice: data.buying_price, location: data.location, availability: true, bail: data.bail})
    console.log(datas);
    this.httpClient.patch(url, datas , {headers: headers}).subscribe((res: Response) => console.log(res));
    }
}

