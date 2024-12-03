import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { ItemPublicacaoComponent } from './components/item-publicacao/item-publicacao.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: PublicationListComponent },
  { path: 'publicacoes/:url', component: ItemPublicacaoComponent },
  { path: 'publicacoes/tags/:tag', component: PublicationListComponent },
  { path: 'publicacoes/tipopublicacao/:tipopublicacao', component: PublicationListComponent },
  { path: 'sobre', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
