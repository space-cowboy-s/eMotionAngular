import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

const headers =  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '93324'
});
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  private  car;
  private TTprice;
  private reducValue;
  private id: string;
  private reserveForm: FormGroup;
  constructor( private route: ActivatedRoute, private routeRedirect: Router, private http: HttpClient, private fb: FormBuilder ) {
    this.reserveForm = fb.group({
      start: '',
      end: '',
      priceTTC: this.TTprice,
    });
  }
  static datediff(firstDate, secondDate) {
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);
    const diff = date2.getTime() - date1.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
  afficheReduction() {
    const dayStart = this.reserveForm.value.start;
    const dayEnd = this.reserveForm.value.end;
    if (Math.floor(ContratComponent.datediff(dayStart, dayEnd) / 10) * 5 > 0) {
      this.reducValue = Math.min(Math.floor(ContratComponent.datediff(dayStart, dayEnd) / 10) * 5, 20);
      this.reducValue = `Vous avez ${this.reducValue} % de réduction.`;
      return this.reducValue;
    } else {
      this.reducValue = '';
      return this.reducValue;
    }
  }
  setNewPrice(price) {
    const dayStart = this.reserveForm.value.start;
    const dayEnd = this.reserveForm.value.end;
    let reduction = 0;
    if ( dayStart && dayEnd ) {
      if (ContratComponent.datediff(dayStart, dayEnd) >= 0) {
        reduction = Math.min(Math.floor(ContratComponent.datediff(dayStart, dayEnd) / 10) * 5, 20);
        console.log((ContratComponent.datediff(dayStart, dayEnd) + 1) * price * (1 - reduction / 100));
        this.TTprice = ((ContratComponent.datediff(dayStart, dayEnd) + 1) * price * (1 - reduction / 100)).toFixed(2);
        return this.TTprice;
      } else {
        this.TTprice = '';
        return this.TTprice;
      }
    }
  }
  reserveCar(price) {
    const Total = this.setNewPrice(price)
    const data = JSON.stringify({ car: {id: this.id}, startBooking: this.reserveForm.value.start, endBooking: this.reserveForm.value.end, totalPriceHT: Total})
    console.log(data, headers);
    this.http.post(`http://api.atcreative.fr/api/user/bookings/add`, data, {headers: headers}).subscribe((res: Response) => console.log(res));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://api.atcreative.fr/api/car/${this.id}`).subscribe((res: Response) => {
      this.car = res; if (!this.car.availability) {
        this.routeRedirect.navigate(['/listcars']);
      }
    });
  }

}
