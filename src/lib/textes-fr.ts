// Dictionnaire du site (français). Les composants le lisent via T().
// Les clés de photos correspondent à celles de familles.ts.
//
// Données du client relevées le 06/10/2026 : fiche Google, clement-vertdemain.com,
// répertoire SIRENE. Ne rien ajouter qui ne soit vérifiable (années d'expérience,
// nombre de clients, avis) sans confirmation de Clément.

import { FR_B } from './textes-fr-b';

const FR_A = {
  meta: {
    titre: 'Vert Demain — Jardinier paysagiste à Brunoy (91)',
    description:
      'Jardinier paysagiste à Brunoy : contrat d’entretien annuel, tonte, taille de haies et création de jardins à Yerres, Montgeron, Épinay-sous-Sénart et alentours. Devis gratuit.',
  },

  commun: {
    devisGratuit: 'Devis gratuit',
    voirRealisations: 'Voir les réalisations',
    telephone: '06 79 48 24 92',
    fermer: 'Fermer',
    precedente: 'Photo précédente',
    suivante: 'Photo suivante',
    agrandir: 'Agrandir',
    retourSite: 'Retour au site',
    photoAVenir: 'Photo à venir',
    videoAVenir: 'Vidéo à venir',
  },

  nav: {
    savoirFaire: 'Savoir-faire',
    services: 'Prestations',
    realisations: 'Réalisations',
    faq: 'FAQ',
    ouvrirMenu: 'Ouvrir le menu',
  },

  hero: {
    mots: ['Tonte', 'Taille', 'Création'],
    baseline:
      'Jardinier paysagiste à Brunoy. Entretien à l’année, taille de haies et création de jardins, pour les particuliers comme pour les entreprises.',
    defiler: 'Défiler',
    garanties: 'Devis gratuit · Crédit d’impôt de 50 % sur l’entretien · Brunoy et alentours',
  },

  features: {
    titre: 'Du coup de tondeuse à la création complète de votre jardin',
    texte:
      'Tonte, taille, désherbage, élagage et aménagement paysager : un seul jardinier pour tout votre extérieur, à Brunoy et dans les villes voisines.',
    demanderDevis: 'Demander un devis',
  },

  stage: {
    services: ['/ ENTRETIEN SAISONNIER', '/ TAILLE DE HAIES & ARBUSTES', '/ AMÉNAGEMENT PAYSAGER', '/ CONTRAT ANNUEL'],
    badgeZone: 'Brunoy · Yerres · Montgeron',
    // Sa propre accroche, reprise de son site.
    phrase1: 'Parce que chaque jardin mérite du sens, pas juste de l’entretien.',
    titre1: 'Pensé. Taillé.',
    titre1Accent: 'Entretenu.',
    carteTitre: 'Parlons de votre jardin',
    carteSous: 'Vert Demain — Brunoy',
    carteCta: 'Devis gratuit',
    badge2: 'Contrat d’entretien annuel',
    phrase2:
      'Un jardin soigné en toute saison, sans avoir à y penser : la fréquence, les prestations et le planning sont fixés ensemble.',
    titre2: 'Toute',
    titre2Accent: 'l’année.',
    texte2:
      'Le contrat annuel est la formule la plus simple : un suivi régulier par le même jardinier, qui connaît votre terrain et anticipe ce que chaque saison demande.',
    // Calendrier type d'un contrat d'entretien. Repères horticoles généraux,
    // à ajuster avec Clément selon ce qu'il propose réellement.
    saisons: [
      {
        num: '01',
        titre: 'Printemps',
        texte: 'Reprise des tontes, nettoyage et désherbage des massifs, plantations de saison.',
      },
      {
        num: '02',
        titre: 'Été',
        texte: 'Tontes régulières, désherbage, taille légère des haies et des arbustes.',
      },
      {
        num: '03',
        titre: 'Automne',
        texte: 'Grande taille des haies, ramassage des feuilles, plantation d’arbres et d’arbustes.',
      },
      {
        num: '04',
        titre: 'Hiver',
        texte: 'Élagage des arbres au repos, nettoyage et remise en état du jardin avant le printemps.',
      },
    ],
    voirContrat: 'Demander un contrat',
  },

  realisations: {
    kicker: 'Quelques jardins récents',
    titre: 'Réalisations',
    intro:
      'Trois métiers, un même soin du détail. Cliquez sur une famille : les photos s’ouvrent aussitôt.',
    voirPhotos: 'Voir les {n} photos',
    photos: 'photos',
    famille: 'Famille',
    fermerGalerie: 'Fermer les réalisations',
    familles: {
      entretien: {
        titre: 'Entretien\nsaisonnier',
        intro: 'Tonte, désherbage, massifs',
        resume:
          'Chaque saison a ses besoins. L’entretien régulier préserve la santé des végétaux et garde le jardin net toute l’année, en contrat annuel ou en intervention ponctuelle.',
      },
      taille: {
        titre: 'Taille de haies\n& arbustes',
        intro: 'Haies, arbustes, topiaires',
        resume:
          'Des coupes nettes et régulières, adaptées à chaque végétal, pour structurer le jardin et favoriser une croissance dense et harmonieuse.',
      },
      creation: {
        titre: 'Aménagement\n& création',
        intro: 'Massifs, pelouse, allées',
        resume:
          'Créer ou réaménager un jardin en tenant compte du terrain, de vos envies et de votre budget : plantations, pelouse en rouleaux, allées et bordures.',
      },
    },
    photosTextes: {
      'jardin-cerisier-fleurs': { titre: 'Jardin au printemps', alt: 'Pelouse fraîchement tondue devant un cerisier à fleurs doubles en floraison' },
      'jardin-anglais-meuliere': { titre: 'Jardin à l’anglaise', alt: 'Jardin à l’anglaise avec pelouse et massifs devant une maison en meulière' },
      'clement-arrosage-massif': { titre: 'Massif au pied d’un arbre', alt: 'Clément arrose un massif paillé cerclé de bordure au pied d’un grand arbre' },
      'taille-haie-perche': { titre: 'Taille de haie', alt: 'Taille d’une haie dense au taille-haie sur perche, au-dessus d’une allée' },
      'topiaire-conifere': { titre: 'Conifère en topiaire', alt: 'Conifère taillé en forme ovale le long d’une maison, pas japonais au sol' },
      'jasmin-arche-apres': { titre: 'Arche de faux jasmin', alt: 'Arche de faux jasmin taillée au-dessus d’une allée en briques' },
      'palmiers-pelouse-rouleaux': { titre: 'Palmiers et pelouse en rouleaux', alt: 'Massif ovale en pelouse en rouleaux planté de palmiers, bordure béton' },
      'massif-palmiers-humilis': { titre: 'Plantation de palmiers nains', alt: 'Palmiers nains plantés dans une pelouse neuve cerclée de paillage minéral' },
      'massif-magnolia-pelouse': { titre: 'Massif engazonné', alt: 'Massif ovale engazonné planté d’un jeune arbre devant une clôture grise' },
      'allee-gravillons-apres': { titre: 'Allée en gravillons', alt: 'Allée en gravillons blancs le long d’une maison contemporaine grise' },
    },
  },

  chantier: {
    kicker: 'Au jardin, filmé au téléphone',
    titre: 'Sur',
    titreAccent: 'le terrain',
    intro:
      'Ni mise en scène ni drone : ce qu’on voit en arrivant dans le jardin, et ce qu’on laisse en repartant.',
    // Emplacements vides : titres et vidéos à reprendre des fichiers TikTok du client.
    clips: [
      { titre: '', detail: '' },
      { titre: '', detail: '' },
      { titre: '', detail: '' },
      { titre: '', detail: '' },
      { titre: '', detail: '' },
    ],
  },

  avantApres: {
    kicker: 'Le même endroit, avant et après',
    titre: 'Ce qu’il y avait',
    titreAccent: 'à la place.',
    intro:
      'Deux jardins dont j’ai gardé la photo de départ. Chaque carte se pose au centre de l’écran, puis l’état d’origine s’efface au profit du résultat.',
    avant: 'Avant',
    apres: 'Après',
    cta: 'Montrez-moi votre « avant »',
    // Paires vérifiées sur un détail fixe. La 3e paire du site Wix (palmiers) a été
    // écartée : la photo « avant » montre un autre massif, déjà engazonné.
    paires: [
      {
        titre: 'Allée en gravillons',
        lieu: 'Passage le long de la maison',
        detail:
          'Une bande de terrain envahie par les herbes et les arbustes, le long de la façade. Débroussaillage, nettoyage, puis pose de gravillons blancs : le passage est dégagé et propre.',
        repere: 'Même façade grise à bandeau vitré, même grillage vert à gauche.',
      },
      {
        titre: 'Arche de faux jasmin',
        lieu: 'Entrée de jardin',
        detail:
          'Un faux jasmin qui débordait sur le passage. Taille de l’arche pour lui rendre sa forme et dégager l’allée en briques.',
        repere: 'Même arche, même allée en briques, même escalier au fond.',
      },
    ],
  },
};

export const FR = { ...FR_A, ...FR_B };
