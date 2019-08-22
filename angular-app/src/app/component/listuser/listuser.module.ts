import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ListusersPipe } from './listuser.pipe';

@NgModule({
  declarations: [ListuserComponent, ListusersPipe],
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
