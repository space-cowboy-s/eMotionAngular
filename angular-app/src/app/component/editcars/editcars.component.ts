import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const headers=  new HttpHeaders({
  'Content-Type': 'appliation/json',
  'x-auth-token': '72312'
 });

@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.css']
})
export class EditcarsComponent implements OnInit {
  EditCars: FormGroup;
  private id: string;
  constructor(public fb: FormBuilder, public httpClient: HttpClient, private route: ActivatedRoute ) {

   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditCars =this.fb.group({
      brand: ['', Validators.required], // la chaîne de caractères est la valeur par défaut du champ
      model: ['', Validators.required],
      serial_number: ['', Validators.required],
      color: ['', Validators.required],
      numberplate: ['', Validators.required],
      number_kilometers: ['', Validators.required],
      buying_price: ['', Validators.required],
      bail: ['', Validators.required],
      });
  }
  UpdateCars(){
    const url = 'http://api.atcreative.fr/api/admin/car/{id}';

    console.log(headers)
 this.httpClient.patch(url, this.EditCars, {headers: headers}).subscribe((res: Response) => console.log(res));

    }
}
