import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ContratComponent } from './contrat.component';

@NgModule({
  declarations: [
    ContratComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ],
  providers: [
    FormBuilder
    ]
})
export class ContratModule { }
