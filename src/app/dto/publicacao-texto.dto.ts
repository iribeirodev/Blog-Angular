export interface PublicacaoTexto {
    titulo: string;
    tipoPublicacao: string;
    tags: string;
    dataPublicacao: string;
    dataRevisao: string;
    texto: string;
}

export interface PublicacaoTextoDTO {
    success: boolean;
    data: PublicacaoTexto;
    message: string;
}