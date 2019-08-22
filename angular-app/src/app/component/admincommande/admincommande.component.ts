import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers =  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '72312'
});
@Component({
  selector: 'app-admincommande',
  templateUrl: './admincommande.component.html',
  styleUrls: ['./admincommande.component.css']
})
export class AdmincommandeComponent implements OnInit {
  private bookings;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://api.atcreative.fr/api/admin/bookings`, { headers}).subscribe((res: Response) => console.log(this.bookings = res))
  }

}
