import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcarsComponent } from './listcars.component';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListcarsComponent,
     SearchformComponent
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
