import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditcarsComponent } from './editcars.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EditcarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forChild([
    { path: '', component: EditcarsComponent }
    ])
  ],
  providers: [
    FormBuilder
    ]
})
export class EditcarsModule { }
