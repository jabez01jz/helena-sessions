export type Testimonial = {
  text: string;
  name: string;
  rating?: number;
  /** Origem pública e verificável do depoimento (ex.: "Google Meu Negócio"). */
  source?: string;
};

/**
 * IMPORTANTE — nenhum depoimento fictício deve ser adicionado aqui.
 *
 * Esta lista está intencionalmente vazia porque não há avaliações públicas
 * verificáveis de Silvia Helena disponíveis no momento da construção do site.
 *
 * Para publicar depoimentos reais, adicione objetos a este array informando
 * sempre a origem verificável (`source`), por exemplo:
 *
 * {
 *   text: "Texto exatamente como publicado pela pessoa.",
 *   name: "Nome público de quem avaliou",
 *   rating: 5,
 *   source: "Google Meu Negócio",
 * }
 */
export const testimonials: Testimonial[] = [];
