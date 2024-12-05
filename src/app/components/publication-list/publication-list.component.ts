import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPublicacao, PublicacaoDTO } from 'src/app/dto/publicacao.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent {
  public publicacoes: ItemPublicacao[] = [];
  public publicacoesGrouped: ItemPublicacao[][] = [];

  tag_criteria: string = '';
  tp_publicacao_criteria: string = '';
  detalhe_artigo: string = '';
  show_nothing_here: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit() {
    this.tag_criteria = this.route.snapshot.paramMap.get('tag') || '';
    this.tp_publicacao_criteria = this.route.snapshot.paramMap.get('tipopublicacao') || '';
    
    if (this.tag_criteria) {
      this.fetchPublicacoesByTag();
    } else if (this.tp_publicacao_criteria) {
      this.fetchPublicacoesByTipo();
    } else {
      this.fetchPublicacoes();
    }
  }

  groupPublicacoes() {
    const chunkSize = 2;
    this.publicacoesGrouped = [];
    for (let i = 0; i < this.publicacoes.length; i += chunkSize) {
      this.publicacoesGrouped.push(this.publicacoes.slice(i, i + chunkSize));
    }
  }

  fetchPublicacoesByTag() {
    this.dataService.fetchPublicationsByTag(this.tag_criteria).subscribe({
      next: (result: PublicacaoDTO) => {
        this.publicacoes = result.data || [];
        this.groupPublicacoes();
        this.show_nothing_here = this.publicacoes.length === 0;
      },
      error: (error) => {
        console.log('ERRO', error);
        this.show_nothing_here = true;
      }
    });       
  }

  fetchPublicacoesByTipo() {
    this.dataService.fetchPublicationsByTipo(this.tp_publicacao_criteria).subscribe({
      next: (result: PublicacaoDTO) => {
        this.publicacoes = result.data || [];
        this.groupPublicacoes();
        this.show_nothing_here = this.publicacoes.length === 0;
        
        console.log('publicacoes', this.publicacoesGrouped);
      },
      error: (error) => {
        console.log('ERRO', error);
        this.show_nothing_here = true;
      }
    });       
  }

  fetchPublicacoes() {
    this.dataService.fetchCurrentPublications().subscribe({
      next: (result: PublicacaoDTO) => {
        this.publicacoes = result.data || [];
        this.groupPublicacoes();
        this.show_nothing_here = this.publicacoes.length === 0;
        console.log('publicacoes', this.publicacoesGrouped);
      },
      error: (error) => {
        console.log('ERRO', error);
        this.show_nothing_here = true;
      }
    });    
  }
}
