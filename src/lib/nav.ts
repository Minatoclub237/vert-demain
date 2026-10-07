// Liens de navigation, partagés par le hero (barre + menu mobile) et l'en-tête de la
// section blanche. Cinq entrées au plus : les grandes sections, dans l'ordre de la page.
// Les libellés viennent du dictionnaire (t.nav).
export const NAV_LINKS = [
  { cle: 'prestations', href: '#solutions' },
  { cle: 'realisations', href: '#realisations' },
  { cle: 'avantApres', href: '#avant-apres' },
  { cle: 'avis', href: '#avis' },
  { cle: 'faq', href: '#faq' },
] as const;
