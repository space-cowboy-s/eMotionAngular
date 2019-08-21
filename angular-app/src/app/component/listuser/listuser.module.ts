import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListuserComponent],
  imports: [
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ],
  providers: [
    FormBuilder
    ],
})
export class ListuserModule { }
