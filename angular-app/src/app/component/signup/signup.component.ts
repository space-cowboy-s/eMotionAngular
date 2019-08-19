import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log('Tentative de connexion');

    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/home']);
  }
}
