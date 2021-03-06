import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrls: ['./listcars.component.css']
})

export class ListcarsComponent implements OnInit {
  private cars;
  private searchBrand: string;
  private searchModel: string;
  private searchColor: string;
  private searchTypeVehicule: string;
  private searchLocalisation: string;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://api.atcreative.fr/api/cars`).subscribe((res: Response) => console.log(this.cars = res));
  }

}
