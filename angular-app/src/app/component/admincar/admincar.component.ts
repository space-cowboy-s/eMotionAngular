import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const headers =  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '72312'
});
@Component({
  selector: 'app-admincar',
  templateUrl: './admincar.component.html',
  styleUrls: ['./admincar.component.css']
})

export class AdmincarComponent implements OnInit {
  private cars;
  private searchBrand: string;
  private searchModel: string;
  private searchColor: string;
  constructor( private http: HttpClient) { }

  deleteCar(id) {
    this.http.delete(`http://api.atcreative.fr/api/admin/car/${id}`, { headers}).subscribe((res: Response) => {
      console.log(res);
      // tslint:disable-next-line:no-shadowed-variable
      this.http.get(`http://api.atcreative.fr/api/cars`).subscribe((res: Response) => console.log(this.cars = res));
    });
  }
  setAvailableValue(value, id) {
    this.http.patch(`http://api.atcreative.fr/api/admin/car/${id}`, JSON.stringify({availability: !value}), {headers}).subscribe((res: Response) => {
      console.log(res);
      // tslint:disable-next-line:no-shadowed-variable
      this.http.get(`http://api.atcreative.fr/api/cars`).subscribe((res: Response) => console.log(this.cars = res));
    });
  }
  ngOnInit() {
    this.http.get(`http://api.atcreative.fr/api/cars`).subscribe((res: Response) => this.cars = res);
    console.log(this.http.get(`http://api.atcreative.fr/api/cars`).subscribe((res: Response) => console.log(this.cars = res)));
  }

}
