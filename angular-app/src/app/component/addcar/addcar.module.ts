import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddcarComponent } from './addcar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddcarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  RouterModule.forChild([
    { path: '', component: AddcarComponent }
    ])
  ],
  providers: [
    FormBuilder,
    ]
})
export class AddcarModule { }
