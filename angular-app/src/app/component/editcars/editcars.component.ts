import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.css']
})
export class EditcarsComponent implements OnInit {
  EditCars: FormGroup;
  constructor( fb: FormBuilder ) {
    this.EditCars = fb.group({
      input1: '', // la chaîne de caractères est la valeur par défaut du champ
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      });
   }
   StartAdd(){
    console.log("voiture ajoutée");
    }
  ngOnInit() {
  }

}
