import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
const headers=  new HttpHeaders({
  'Content-Type': 'application/json',
  'x-auth-token': '72312'
});
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  Editusers: FormGroup;
  private user: any;
  private id: string;
  constructor(public fb: FormBuilder, public httpClient: HttpClient, private route: ActivatedRoute ) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const url1 = `http://api.atcreative.fr/api/admin/users/profile/${this.id}`;
    this.httpClient.get(url1, {headers:headers}).subscribe((res: Response) =>  { console.log(this.user = res)
      this.Editusers =this.fb.group({
        firstname: [this.user.firstname, ''], // la chaîne de useractères est la valeur par défaut du champ
        lastname: [this.user.lastname,''],
        email: [this.user.email,''],
        apiKey: [this.user.apiKey,''],
        birthDate: [this.user.birthDate,''],
        adress: [this.user.adress,''],
        country: [this.user.country,'']
      })
    });}
  Updateusers(){
    const url =  `http://api.atcreative.fr/api/admin/users/profile/${this.id}`;
    const data = this.Editusers.value;
    const datas = JSON.stringify({ firstname: data.firstname, lastname: data.lastname,
      email: data.email, apiKey: data.apiKey, birthDate: data.birthDate, adress: data.adress, country: data.country})
    console.log(datas);
    this.httpClient.patch(url, datas , {headers: headers}).subscribe((res: Response) => console.log(res));
  }
}
