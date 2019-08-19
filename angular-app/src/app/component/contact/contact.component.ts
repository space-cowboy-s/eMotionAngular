import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latParis: number = 48.862251;
  lngParis: number = 2.3362496;
  latLyon: number = 45.7692766;
  lngLyon: number = 4.82833;
  constructor() { }

  ngOnInit() {
  }

}
