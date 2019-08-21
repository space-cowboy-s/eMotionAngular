import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcommandComponent } from './listcommand.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListcommandComponent],
  imports: [
    CommonModule,
    FormsModule,
ReactiveFormsModule,
  ],
  providers: [
    FormBuilder
    ],
})
export class ListcommandModule { }
