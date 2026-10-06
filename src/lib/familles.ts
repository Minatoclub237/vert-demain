// Structure des familles de réalisations : uniquement ce qui n'est PAS du texte
// (slug, numéro, fichiers). Titres et textes alternatifs vivent dans le dictionnaire,
// sous `realisations.familles` et `realisations.photosTextes`.
//
// Photos actuelles : celles du site Wix du client (clement-vertdemain.com).
// Les emplacements vides attendent les photos Instagram / TikTok.

export type FamilleSlug = 'entretien' | 'taille' | 'creation';

export type Famille = {
  slug: FamilleSlug;
  num: string;
  couverture: string;
  /** Clés de photos, dans l'ordre d'affichage. Chaque clé = /photos/<clé>.webp. */
  photos: string[];
};

/** Emplacements vides ajoutés à la fin de chaque galerie, en attendant les photos. */
export const EMPLACEMENTS_VIDES = 4;

export const FAMILLES: Famille[] = [
  {
    slug: 'entretien',
    num: '01',
    couverture: '/photos/jardin-cerisier-fleurs.webp',
    photos: ['jardin-cerisier-fleurs', 'jardin-anglais-meuliere', 'clement-arrosage-massif'],
  },
  {
    slug: 'taille',
    num: '02',
    couverture: '/photos/taille-haie-perche.webp',
    photos: ['taille-haie-perche', 'topiaire-conifere', 'jasmin-arche-apres'],
  },
  {
    slug: 'creation',
    num: '03',
    couverture: '/photos/palmiers-pelouse-rouleaux.webp',
    photos: ['palmiers-pelouse-rouleaux', 'massif-palmiers-humilis', 'massif-magnolia-pelouse', 'allee-gravillons-apres'],
  },
];

/** Chemin du fichier d'une photo, à partir de sa clé. */
export function cheminPhoto(cle: string): string {
  return `/photos/${cle}.webp`;
}
