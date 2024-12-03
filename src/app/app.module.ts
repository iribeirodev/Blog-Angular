import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { ItemPublicacaoComponent } from './components/item-publicacao/item-publicacao.component';
import { MarkdownModule } from 'ngx-markdown';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PublicationListComponent,
    ItemPublicacaoComponent,
    BlogMenuComponent,
    AboutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    [FontAwesomeModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
