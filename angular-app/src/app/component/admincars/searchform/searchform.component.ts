import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;
  constructor( fb: FormBuilder ) {
  this.searchForm = fb.group({
  title: '', // la chaîne de caractères est la valeur par défaut du champ
  year: ''
  });}
  
  ngOnInit() {
  }

}
