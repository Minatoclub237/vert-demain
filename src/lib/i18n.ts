// Site en français uniquement (clientèle de l'Essonne). Les composants lisent
// leurs textes via T() : le dictionnaire reste séparé du code de mise en page.

import { FR } from './textes-fr';

export type Textes = typeof FR;

/** Les textes du site. Appelé pendant le rendu : `const t = T();` */
export function T(): Textes {
  return FR;
}

export const PAGE_LEGALE = '/mentions-legales';

/** Les ancres internes pointent vers la page d'accueil, y compris depuis les mentions légales. */
export function lien(ancre: string): string {
  return ancre.startsWith('#') ? `/${ancre}` : ancre;
}
