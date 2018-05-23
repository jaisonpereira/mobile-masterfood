// tslint:disable-next-line:interface-name
export interface Restaurante {
  id: string;
  nome: string;
  cnpj?: string;
  razaoSocial: string;
  descricao: string;
  categoria: string;
  tempoEstimado: number;
  avaliacao: number;
  imagePath: string;
  estado?: string;
  cidade?: string;
  logradouro?: string;
  site?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  telefone?: string;
  email?: string;
}
