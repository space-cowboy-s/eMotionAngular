import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddcarComponent } from './component/addcar/addcar.component';
import { CarsdispoComponent } from './component/carsdispo/carsdispo.component';
import { ConditionComponent } from './component/condition/condition.component';
import { ContratComponent } from './component/contrat/contrat.component';
import { FactureComponent } from './component/facture/facture.component';
import { HistoricComponent } from './component/historic/historic.component';
import { InfouserComponent } from './component/infouser/infouser.component';
import { ListcarsComponent } from './component/listcars/listcars.component';
import { ListcommandComponent } from './component/listcommand/listcommand.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { ProfiluserComponent } from './component/profiluser/profiluser.component';
import { ContactComponent } from './component/contact/contact.component';
import { SignupComponent } from './component/signup/signup.component';
import { LegalComponent } from './component/legal/legal.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'addcar', component: AddcarComponent},
  {path: 'carsdispo', component: CarsdispoComponent},
  {path: 'condition', component: ConditionComponent},
  {path: 'contrat', component: ContratComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'historic', component: HistoricComponent},
  {path: 'infouser', component: InfouserComponent},
  {path: 'listcars', component: ListcarsComponent},
  {path: 'listcommand', component: ListcommandComponent},
  {path: 'listuser', component: ListuserComponent},
  {path: 'profiluser', component: ProfiluserComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'rgpd', component: RgpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
