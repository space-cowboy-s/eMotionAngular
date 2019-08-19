import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
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
    console.log("contrat signé");
    }
  ngOnInit() {
  }

}
