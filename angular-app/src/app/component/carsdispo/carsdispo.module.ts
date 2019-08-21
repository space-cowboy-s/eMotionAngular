import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CarsdispoComponent } from './carsdispo.component';

@NgModule({
  declarations: [
    CarsdispoComponent,
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

export class CarsdispoModule { }
