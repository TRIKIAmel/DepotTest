import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import { ExempleCoursComponent } from './exemple-cours/exemple-cours.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import { ProduitComponent } from './produit/produit.component';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import { Comp1Component } from './comp1/comp1.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    ExempleCoursComponent,
    PersonneComponent,
    CalculComponent,
    ProduitComponent,
    NouveauComposantComponent,
    CandidatViewComponent,
    Comp1Component


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
