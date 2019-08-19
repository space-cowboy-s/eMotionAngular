import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchcar',
  templateUrl: './searchcar.component.html',
  styleUrls: ['./searchcar.component.css']
})
export class SearchcarComponent implements OnInit {
  searchForm: FormGroup;
  constructor( fb: FormBuilder ) {
    this.searchForm = fb.group({
      input1: '', // la chaîne de caractères est la valeur par défaut du champ
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      });
   }
   startSearch(){
    console.log("recherche lancée");
    }
  ngOnInit() {
  }

}
