// Avis Google de la fiche « Vert Demain par Clément Lasfont », recopiés mot pour mot
// depuis des captures fournies le 07/10/2026 (la fiche n'est pas lisible sans compte).
// Les deux avis tronqués par Google (« … Plus ») restent tronqués : leur fin n'a pas été
// lue, elle n'est pas inventée — la carte renvoie à la fiche pour la suite.
// Noms abrégés (prénom + initiale) : on cite des particuliers sur le site d'un tiers.

export const FICHE_GOOGLE = 'https://www.google.com/maps?cid=1318388340206876737';

export type Avis = {
  auteur: string;
  /** Profil Google, tel qu'affiché sur la fiche. */
  profil: string;
  texte: string;
  tronque: boolean;
  visite: string;
  couleur: string;
};

export const AVIS: Avis[] = [
  {
    auteur: 'Céline P.',
    profil: 'Local Guide · 22 avis',
    texte:
      'Clément a transformé mon terrain vague en superbe jardin paysagé ! Je n’ai que des compliments, nous sommes ravis. Tout y est ! Disponibilité, très bon rapport qualité prix, le service et le',
    tronque: true,
    visite: 'Visité en juin 2025',
    couleur: '#7B5E3B',
  },
  {
    auteur: 'Louise L.',
    profil: 'Local Guide · 19 avis',
    texte:
      'Un grand merci à Clément pour son professionnalisme ! Notre jardin était dans un état catastrophique après la construction, avec un terrain difficile à travailler. Le résultat final est au-delà de nos attentes, nous sommes vraiment très satisfaits ! Nous recommandons les yeux fermés.',
    tronque: false,
    visite: 'Visité en juillet 2025',
    couleur: '#7B1FA2',
  },
  {
    auteur: 'Alexia B.',
    profil: 'Local Guide · 7 avis',
    texte:
      'Je recommande vivement ! Clément est intervenu pour remettre notre jardin en état après des gros travaux de terrassement, puis pour faire le taillage avant hiver, travail très professionnel et soigné, de plus il est super sympa et très réactif !',
    tronque: false,
    // « il y a 8 mois » au 07/10/2026 : janvier 2026
    visite: 'Visité en janvier 2026',
    couleur: '#C2185B',
  },
  {
    auteur: 'Anthéa G.',
    profil: '11 avis',
    texte:
      'Travail impeccable ! Nous sommes ravis du résultat. Tout a été fait proprement avec soin et professionnalisme. Nous recommandons les yeux fermés ! 😊',
    tronque: true,
    visite: 'Visité en juin 2025',
    couleur: '#8D6E63',
  },
  {
    auteur: 'Pilar I.',
    profil: '1 avis',
    texte:
      'Un grand merci pour vos bons conseils et votre professionnalisme. Nous sommes ravis du résultat. Nous vous recommandons en toute confiance.',
    tronque: false,
    visite: 'Visité en juillet 2025',
    couleur: '#EF6C00',
  },
];
