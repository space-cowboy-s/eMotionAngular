import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
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
