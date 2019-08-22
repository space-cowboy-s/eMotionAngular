import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EdituserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forChild([
    { path: '', component: EdituserComponent }
    ])
  ],
  providers: [
    FormBuilder
    ]
})
export class EditusersModule { }
