import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincarComponent } from './admincar.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AdmincarComponent
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
export class AdminCar { }
