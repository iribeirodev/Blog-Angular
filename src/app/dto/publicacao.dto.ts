export interface ItemPublicacao {
    id: number;
    titulo: string;
    detalhe: string;
    url: string;
    tipoPublicacao: string;
    tags: string[];
    tempoPublicadoEmDias: number;
    dataPublicacao: string;
    dataRevisao: string;
    imageLink: string;
}

export interface PublicacaoDTO {
    success: boolean;
    data: ItemPublicacao[];
    message: string;
}