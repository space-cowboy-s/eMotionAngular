import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddcarComponent } from './component/addcar/addcar.component';
import { ConditionComponent } from './component/condition/condition.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { ListcarsComponent } from './component/listcars/listcars.component';
import { ListcommandComponent } from './component/listcommand/listcommand.component';
import { FactureComponent } from './component/facture/facture.component';
import { HistoricComponent } from './component/historic/historic.component';
import { CarsdispoComponent } from './component/carsdispo/carsdispo.component';
import { InfouserComponent } from './component/infouser/infouser.component';
import { ProfiluserComponent } from './component/profiluser/profiluser.component';
import { ContratComponent } from './component/contrat/contrat.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ReactiveFormsModule } from '@angular/forms';
import { LegalComponent } from './component/legal/legal.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
HomepageComponent,
NavbarComponent,
FooterComponent,
AddcarComponent,
ConditionComponent,
ListcarsComponent,
ListuserComponent,
ListcommandComponent,
FactureComponent,
HistoricComponent,
CarsdispoComponent,
InfouserComponent,
ProfiluserComponent,
ContratComponent,
LegalComponent,
RgpdComponent,
SignupComponent,
ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
