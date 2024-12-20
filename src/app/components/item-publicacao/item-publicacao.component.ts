import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacaoTexto, PublicacaoTextoDTO } from 'src/app/dto/publicacao-texto.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-publicacao',
  templateUrl: './item-publicacao.component.html',
  styleUrls: ['./item-publicacao.component.css']
})
export class ItemPublicacaoComponent {

  public currentPublicacao: PublicacaoTexto | null = null;

  url: string = '';

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get('url') || '';
    this.fetchPublicacao();
  }

  fetchPublicacao() {
    this.dataService.fetchPublicationByURL(this.url).subscribe({
      next: (result: any) => {
        if (Array.isArray(result.data) && result.data.length > 0) {
          this.currentPublicacao = result.data[0];
        } else {
          this.currentPublicacao = result.data;
        }
      },
      error: (err) => {
        console.error('Erro ao carregar publicação', err);
      }
    });
  }

}
