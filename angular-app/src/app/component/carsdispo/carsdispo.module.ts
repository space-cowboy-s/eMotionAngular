import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CarsdispoComponent } from './carsdispo.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    CarsdispoComponent,
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
    exports:[
      SearchformComponent
    ]
})

export class CarsdispoModule { }
