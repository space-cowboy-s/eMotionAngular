import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { AdmincarsComponent } from './admincars.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchformComponent,
  AdmincarsComponent
],
  imports: [
    CommonModule,
    FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
  { path: '', component: AdmincarsComponent }
  ])
  ],
  providers: [
    FormBuilder
    ],

})
export class AdmincarsModule { }
