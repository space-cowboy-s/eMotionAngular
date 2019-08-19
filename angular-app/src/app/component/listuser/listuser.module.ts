import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListuserComponent, SearchformComponent],
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
