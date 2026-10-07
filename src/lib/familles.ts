// Structure des familles de réalisations : uniquement ce qui n'est PAS du texte
// (slug, numéro, fichiers). Titres et textes alternatifs vivent dans le dictionnaire,
// sous `realisations.familles` et `realisations.photosTextes`.
//
// Photos : celles du site Wix du client, puis des images tirées de ses vidéos
// (scripts/extraire-photos.cjs).

export type FamilleSlug = 'entretien' | 'taille' | 'creation' | 'pelouse' | 'potager' | 'friche';

export type Famille = {
  slug: FamilleSlug;
  num: string;
  couverture: string;
  /** Clés de photos, dans l'ordre d'affichage. Chaque clé = /photos/<clé>.webp. */
  photos: string[];
};

/** Emplacements vides ajoutés à la fin de chaque galerie (0 : toutes ont de vraies photos). */
export const EMPLACEMENTS_VIDES = 0;

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
    photos: ['taille-haie-perche', 'topiaire-conifere', 'jasmin-arche-apres', 'olivier-taille-echelle', 'olivier-forme', 'bordures-taille-haie', 'allee-bordures-taillees'],
  },
  {
    slug: 'creation',
    num: '03',
    couverture: '/photos/palmiers-pelouse-rouleaux.webp',
    photos: ['palmiers-pelouse-rouleaux', 'massif-palmiers-humilis', 'massif-magnolia-pelouse', 'allee-gravillons-apres', 'catalpa-plantation', 'catalpa-plante', 'jardiniere-preparee', 'jardiniere-pittosporums'],
  },
  {
    slug: 'pelouse',
    num: '04',
    couverture: '/photos/pelouse-rouleaux-terrasse.webp',
    photos: ['pelouse-rouleaux-terrasse', 'pelouse-motoculteur', 'pelouse-apport-terre', 'gazon-rouleaux-apres', 'pelouse-finie'],
  },
  {
    slug: 'potager',
    num: '05',
    couverture: '/photos/potager-planche.webp',
    photos: ['potager-planche', 'potager-preparation', 'potager-buttes'],
  },
  {
    slug: 'friche',
    num: '06',
    couverture: '/photos/friche-allee-degagee.webp',
    photos: ['friche-allee-degagee', 'friche-avant', 'friche-allee-buis', 'jardin-oublie-apres', 'friche-terrain-fauche'],
  },
];

/** Chemin du fichier d'une photo, à partir de sa clé. */
export function cheminPhoto(cle: string): string {
  return `/photos/${cle}.webp`;
}
