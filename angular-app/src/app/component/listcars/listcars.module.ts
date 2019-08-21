import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcarsComponent } from './listcars.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ListcarsPipe } from './listcars.pipe';

@NgModule({
  declarations: [
    ListcarsComponent,
     ListcarsPipe
    ],
  imports: [
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ],
  providers: [
    FormBuilder
    ],
})
export class ListcarsModule { }
