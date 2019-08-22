import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers=  new HttpHeaders({
  'Content-Type': 'application/json'
});
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any =  FormGroup;
  apiKeyres: any;
  apiKey: string;
  constructor(private router: Router, public fb: FormBuilder, public httpClient: HttpClient) {
    this.model = this.fb.group({
      email: '', // la chaîne de caractères est la valeur par défaut du champ
      password: '',
    });
  }
  ngOnInit() {
  }
  login() {
    console.log('Tentative de connexion');
    const url = `http://api.atcreative.fr/api/connexion`;
    const data = this.model.value;
    const datas = JSON.stringify({ user: {email: data.email, password: data.password}});
    console.log(datas);
    this.httpClient.post(url, datas, {headers : headers}).subscribe((res: Response) => {
      this.apiKeyres = res;
      localStorage.setItem('apiKey', JSON.stringify({apiKeyres : this.apiKey
        })
      )
      console.log(this.apiKey);
      console.log(this.apiKeyres);
      this.router.navigate(['/']);
      console.log(res);
    });
  }
}
