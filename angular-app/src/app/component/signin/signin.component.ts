import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log('Tentative de connexion');

    localStorage.setItem('user', JSON.stringify({login : this.model.adress}));
    this.router.navigate(['/']);
  }
}
