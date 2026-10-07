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
    prestations: 'Prestations',
    realisations: 'Réalisations',
    avantApres: 'Avant / après',
    avis: 'Avis',
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
      'Six métiers, un même soin du détail. Cliquez sur une famille : les photos s’ouvrent aussitôt.',
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
          'Créer ou réaménager un jardin en tenant compte du terrain, de vos envies et de votre budget : plantations d’arbres, massifs, allées et jardinières.',
      },
      pelouse: {
        titre: 'Pelouse\n& gazon',
        intro: 'Sol, terre, gazon en rouleaux',
        resume:
          'Sol travaillé au motoculteur, apport de terre, nivellement, puis gazon posé en rouleaux : une pelouse dense et rayée dès la fin du chantier.',
      },
      potager: {
        titre: 'Potager',
        intro: 'Création et entretien',
        resume:
          'Préparation de la terre, buttes et planches de culture : un potager prêt pour la saison, puis entretenu au fil de l’année si vous le souhaitez.',
      },
      friche: {
        titre: 'Jardins\noubliés',
        intro: 'Débroussaillage, remise en état',
        resume:
          'Herbes hautes, allées disparues, arbustes envahissants : débroussaillage et remise à plat d’un jardin laissé de côté, souvent après un achat.',
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
      'olivier-taille-echelle': { titre: 'Taille d’un olivier', alt: 'Clément taille un olivier depuis une échelle devant une maison' },
      'olivier-forme': { titre: 'Olivier en taille de formation', alt: 'Jeune olivier à la couronne arrondie après sa taille de formation' },
      'bordures-taille-haie': { titre: 'Bordures au taille-haie', alt: 'Taille au taille-haie d’une bordure le long d’une allée en pierre' },
      'allee-bordures-taillees': { titre: 'Allée et bordures taillées', alt: 'Allée en pierre courbe bordée de haies basses fraîchement taillées' },
      'catalpa-plantation': { titre: 'Plantation d’un catalpa', alt: 'Plantation d’un catalpa boule sur une pelouse, bâches et outils au sol' },
      'catalpa-plante': { titre: 'Catalpa planté et paillé', alt: 'Tronc d’un catalpa tuteuré au centre d’un cercle de paillis sur la pelouse' },
      'jardiniere-preparee': { titre: 'Jardinière préparée', alt: 'Longue jardinière de façade remplie de terre neuve, prête à planter' },
      'jardiniere-pittosporums': { titre: 'Pittosporums en jardinière', alt: 'Arrosage de pittosporums fraîchement plantés dans une jardinière de façade' },
      'pelouse-rouleaux-terrasse': { titre: 'Gazon en rouleaux', alt: 'Bandes de gazon en rouleaux posées devant une terrasse à arcades' },
      'pelouse-motoculteur': { titre: 'Sol au motoculteur', alt: 'Préparation du sol au motoculteur le long d’un mur blanc' },
      'pelouse-apport-terre': { titre: 'Apport de terre', alt: 'Benne de terre végétale déchargée pour préparer la pelouse' },
      'gazon-rouleaux-apres': { titre: 'Pose en cours', alt: 'Moitié du terrain couverte de gazon en rouleaux rayé, l’autre en terre nivelée' },
      'pelouse-finie': { titre: 'Pelouse terminée', alt: 'Pelouse dense et uniforme bordée d’un mur blanc et d’arbres' },
      'potager-planche': { titre: 'Planche de potager', alt: 'Potager en terre fraîchement travaillée, une planche posée au milieu' },
      'potager-preparation': { titre: 'Préparation du potager', alt: 'Clément prépare la terre d’un potager au fond d’un jardin' },
      'potager-buttes': { titre: 'Buttes de culture', alt: 'Buttes de culture en terre retournée dans un grand potager' },
      'friche-allee-degagee': { titre: 'Allée retrouvée', alt: 'Allée en béton dégagée au milieu d’un jardin débroussaillé' },
      'friche-avant': { titre: 'Le point de départ', alt: 'Jardin envahi par les herbes hautes devant un abri de jardin' },
      'friche-allee-buis': { titre: 'Jardin rouvert', alt: 'Allée dégagée menant à la maison, arbustes taillés en boule' },
      'jardin-oublie-apres': { titre: 'Terrain fauché', alt: 'Terrain débroussaillé à la débroussailleuse entre des maisons' },
      'friche-terrain-fauche': { titre: 'Terrain remis à plat', alt: 'Grand terrain fauché et nettoyé sous un ciel nuageux' },
    },
  },

  chantier: {
    kicker: 'Au jardin, filmé au téléphone',
    titre: 'Sur',
    titreAccent: 'le terrain',
    intro:
      'Ni mise en scène ni drone : ce qu’on voit en arrivant dans le jardin, et ce qu’on laisse en repartant.',
    // Une entrée par vidéo de ChantierVideo.tsx, dans le même ordre. Descriptions fidèles
    // à ce que montrent les images, sans espèce ni durée de chantier qui n'y figure pas.
    clips: [
      {
        titre: 'Le jardin oublié',
        detail: 'Herbes hautes et friche : débroussaillage complet, jusqu’à retrouver la surface du terrain.',
      },
      {
        titre: 'Haies au cordeau',
        detail: 'Haies, arche végétale et façade grimpante taillées sur échelle, puis les déchets ramassés.',
      },
      {
        titre: 'Un massif qui repart',
        detail: 'Arrachage et désherbage d’un massif fatigué, puis plantation, bulbes et paillage.',
      },
      {
        titre: 'Une pelouse de stade',
        detail: 'Sol travaillé au motoculteur, apport de terre, nivellement, puis gazon posé en rouleaux.',
      },
      {
        titre: 'L’allée, un mois après',
        detail: 'Retour d’entretien après une création : taille des bordures le long de l’allée en pierre.',
      },
    ],
  },

  apresVente: {
    kicker: 'Achat, vente : le jardin compte aussi',
    titre: 'Le jardin qui va',
    titreAccent: 'avec la maison.',
    intro:
      'Une maison qui change de mains, c’est souvent un jardin laissé de côté pendant des mois. C’est le moment où un passage fait le plus de différence.',
    // Propos d'un client, rapportés par Clément dans la légende de sa vidéo.
    citation: '« Je pensais pas que mon jardin était si grand »',
    citationSource: 'Un nouveau propriétaire, après le débroussaillage',
    etapes: [
      {
        num: '01',
        titre: 'Vous venez d’acheter',
        texte:
          'Herbes hautes, haies débordantes, allées disparues : je remets le jardin à plat pour que vous découvriez enfin ce que vous avez acheté. Un contrat d’entretien peut ensuite prendre le relais.',
        cta: 'Remettre mon jardin en état',
        sujet: 'Jardin à remettre en état après un achat',
        corps: 'Bonjour Clément, nous venons d’acheter une maison dont le jardin est à reprendre.\n\nCommune : \nSurface approximative : \n',
      },
      {
        num: '02',
        titre: 'Vous vendez',
        texte:
          'Un jardin net se photographie mieux et se visite mieux. Tonte, taille, désherbage et massifs repris avant les photos de l’annonce et les premières visites.',
        cta: 'Préparer le jardin avant la vente',
        sujet: 'Préparer le jardin avant une vente',
        corps: 'Bonjour Clément, je mets ma maison en vente et j’aimerais rendre le jardin présentable.\n\nDate des premières visites : \nCommune : \n',
      },
      {
        num: '03',
        titre: 'Agences et notaires',
        texte:
          'Un bien à valoriser, un jardin à remettre en état entre deux propriétaires : un seul interlocuteur, à Brunoy et dans les villes voisines.',
        cta: 'Proposer un partenariat',
        sujet: 'Partenariat — agence immobilière',
        corps: 'Bonjour Clément, je travaille pour une agence immobilière et j’aimerais vous proposer une collaboration.\n\n',
      },
    ],
  },

  avantApres: {
    kicker: 'Le même endroit, avant et après',
    titre: 'Ce qu’il y avait',
    titreAccent: 'à la place.',
    intro:
      'Cinq jardins dont j’ai gardé l’état de départ, souvent filmé depuis le même pied d’appareil. Chaque carte se pose au centre de l’écran, puis l’état d’origine s’efface au profit du résultat.',
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
      {
        titre: 'Le jardin oublié',
        lieu: 'Terrain envahi',
        detail:
          'Des herbes jusqu’aux genoux sur tout le terrain. Débroussaillage complet : en une séance, le sol réapparaît et le jardin retrouve ses limites.',
        repere: 'Filmé depuis le même pied d’appareil : mêmes maisons, même haie à droite.',
      },
      {
        titre: 'Gazon en rouleaux',
        lieu: 'Pelouse neuve',
        detail:
          'Une terre préparée et nivelée, puis le gazon posé bande par bande. L’image « après » est prise pendant la pose : la moitié du terrain est déjà verte.',
        repere: 'Filmé depuis le même pied d’appareil : même pool house, même mur blanc.',
      },
      {
        titre: 'Massif de façade',
        lieu: 'Devant la maison',
        detail:
          'Un massif fatigué au pied de la façade : arrachage, désherbage, puis replantation. Les deux photos sont celles du client, prises du même endroit.',
        repere: 'Même fenêtre cintrée, même arbre, même dallage au premier plan.',
      },
    ],
  },
};

export const FR = { ...FR_A, ...FR_B };
