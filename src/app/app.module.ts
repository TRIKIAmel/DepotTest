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
<<<<<<< HEAD
import { EtudiantViewComponent } from './etudiant-view/etudiant-view.component';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
=======
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
>>>>>>> 989be2b


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    ExempleCoursComponent,
    PersonneComponent,
    CalculComponent,
    ProduitComponent,
<<<<<<< HEAD
    EtudiantViewComponent,
    NouveauComposantComponent
=======
    CandidatViewComponent
>>>>>>> 989be2b

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
