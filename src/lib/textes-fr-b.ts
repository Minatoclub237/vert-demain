// Suite du dictionnaire : FAQ, contact, pied de page, mentions légales.
// Séparé de textes-fr.ts uniquement pour garder des fichiers lisibles.

export const FR_B = {
  barre: {
    label: 'Contacter Vert Demain',
    appeler: 'Appeler',
    sms: 'SMS',
    devis: 'Devis',
  },

  avis: {
    kicker: 'Avis Google',
    titre: 'Ce qu’ils en',
    titreAccent: 'disent.',
    intro:
      'Des clients de Brunoy et des environs, sur la fiche Google de Vert Demain. Avis recopiés tels quels.',
    note: '5,0',
    noteLegende: 'Note moyenne sur Google',
    voirFiche: 'Voir tous les avis sur Google',
    lireSuite: 'Lire la suite sur Google',
    etoiles: '5 étoiles sur 5',
  },

  faq: {
    kicker: 'Questions fréquentes',
    titre: 'Ce qu’on me demande',
    titreAccent: 'avant de signer.',
    intro:
      'Les questions qu’on me pose vraiment avant un premier passage. Si la vôtre n’y est pas, posez-la directement.',
    categories: {
      budget: 'Prix & crédit d’impôt',
      chantier: 'Contrat & passages',
      garanties: 'Confiance & méthode',
    },
    reserveTitre: 'Une question qui vous retient ?',
    reserveTexte:
      'Posez-la telle quelle. C’est Clément qui vous répond, pas un standard téléphonique.',
    reserveCta: 'M’écrire',
    objections: {
      budget: [
        {
          q: 'Le crédit d’impôt de 50 %, comment ça marche ?',
          a: 'L’entretien de votre jardin à domicile — tonte, taille de haies, désherbage, ramassage des feuilles — relève des services à la personne : la moitié de ce que vous payez vous revient en crédit d’impôt, dans la limite de 5 000 € de dépenses par an et par foyer. Avec l’avance immédiate, vous ne réglez directement que votre part. La création ou le réaménagement d’un jardin n’y ouvre pas droit.',
          cta: 'Demander un devis avec le montant après crédit d’impôt',
          sujet: 'Devis entretien — montant après crédit d’impôt',
          corps: 'Bonjour Clément, je souhaite un devis d’entretien avec le montant restant à ma charge après crédit d’impôt.\n\nMon jardin : ',
        },
        {
          q: 'Combien coûte un contrat d’entretien annuel ?',
          a: 'Cela dépend de la surface, des haies, des massifs et du nombre de passages souhaités. Le plus juste est de passer voir le jardin : on fixe la fréquence ensemble et vous recevez un devis détaillé, avec le montant réel après crédit d’impôt.',
          cta: 'Demander une visite gratuite',
        },
        {
          q: 'C’est plus cher qu’une annonce entre particuliers.',
          a: 'Comparez ce qui reste réellement à votre charge. Une prestation déclarée ouvre droit au crédit d’impôt de 50 % ; un paiement non déclaré ne vous rend rien. À montant égal après crédit d’impôt, l’écart est souvent bien plus faible qu’il n’y paraît.',
          cta: 'Comparer avec une autre offre',
          sujet: 'Comparaison de tarif',
          corps: 'Bonjour Clément, voici l’offre que j’ai reçue ailleurs. Pouvez-vous me dire ce qu’elle comprend et ce qu’elle ne comprend pas ?\n\n',
        },
        {
          q: 'Mon jardin est trop petit pour un contrat.',
          a: 'Non. Une petite cour ou quelques mètres de haie se traitent très bien, en passages ponctuels ou en contrat léger limité aux interventions utiles. Il n’y a pas de surface minimum.',
          cta: 'Décrire votre jardin par SMS',
        },
        {
          q: 'Les déchets verts, c’est à moi de m’en occuper ?',
          a: 'On en parle dès la visite, et le devis le précise noir sur blanc : ce qu’il advient des tontes, des tailles et des feuilles est réglé avant le premier passage, pour qu’aucun frais ne s’ajoute après coup.',
          cta: 'Poser la question pour votre jardin',
        },
      ],
      chantier: [
        {
          q: 'À quelle fréquence passez-vous ?',
          a: 'C’est vous qui choisissez, selon votre jardin et votre budget. La fréquence des passages, les prestations incluses et le planning sont définis ensemble et écrits dans le contrat : vous savez à l’avance quand je viens et pour quoi faire.',
          cta: 'En parler au téléphone',
        },
        {
          q: 'Je ne suis pas là en journée.',
          a: 'La plupart des travaux d’entretien ne demandent pas votre présence, du moment que l’accès au jardin est prévu. On convient ensemble de la façon d’entrer et vous êtes prévenu avant chaque passage.',
          cta: 'Organiser les passages',
          sujet: 'Passages en mon absence',
          corps: 'Bonjour Clément, je ne suis pas présent en journée. Comment pourrions-nous organiser l’accès au jardin ?\n\n',
        },
        {
          q: 'Ma haie a été laissée à l’abandon.',
          a: 'Une haie qui a poussé librement pendant plusieurs années se reprend en plusieurs fois plutôt que d’un seul coup, pour ne pas l’affaiblir : une taille de reprise d’abord, puis l’entretien régulier lui redonne sa forme.',
          cta: 'Envoyer une photo de votre haie',
        },
        {
          q: 'Je voudrais un jardin qui demande moins d’entretien.',
          a: 'C’est souvent le meilleur projet : paillage, couvre-sols, gravillons sur les zones de passage et végétaux adaptés au terrain. L’allée en gravillons présentée plus haut en est un exemple.',
          cta: 'Voir l’avant / après',
        },
        {
          q: 'Quand faut-il tailler une haie ?',
          a: 'Idéalement en dehors de la nidification des oiseaux, qui court du printemps au milieu de l’été. La grande taille se fait plutôt à l’automne ou en fin d’hiver ; une taille d’entretien légère reste possible en été.',
          cta: 'Voir le calendrier du contrat annuel',
        },
      ],
      garanties: [
        {
          q: 'Qui vient chez moi ?',
          a: 'Moi, Clément Lasfont, jardinier paysagiste installé à Brunoy. C’est la même personne qui fait la visite, établit le devis et réalise les travaux : pas de sous-traitance, pas d’équipe qui change d’une fois sur l’autre.',
          cta: 'Appeler Clément',
        },
        {
          q: 'Qu’en disent vos clients ?',
          a: 'Ils l’écrivent sur Google, où la fiche de Vert Demain affiche une note de 5 sur 5 : un terrain vague transformé en jardin, des jardins remis en état après des travaux, la taille avant l’hiver. Plusieurs de ces avis sont repris sur cette page, avec le lien vers la fiche complète.',
          cta: 'Lire les avis',
        },
        {
          q: 'Vous intervenez aussi pour les entreprises ?',
          a: 'Oui : bureaux, locaux d’activité et copropriétés, en contrat ou en intervention ponctuelle. À noter, le crédit d’impôt de 50 % est réservé aux particuliers, pour l’entretien de leur résidence.',
          cta: 'Demander un devis professionnel',
          sujet: 'Entretien d’espaces verts — entreprise ou copropriété',
          corps: 'Bonjour, je souhaite un devis pour l’entretien des espaces verts de :\n\nAdresse : \nSurface approximative : \n',
        },
        {
          q: 'Vous venez jusque chez moi ?',
          a: 'J’interviens en priorité à Brunoy et dans les villes voisines : Yerres, Épinay-sous-Sénart, Montgeron, Draveil, Villecresnes et Villeneuve-Saint-Georges. Plus loin en Île-de-France, c’est possible selon le projet.',
          cta: 'Vérifier pour votre commune',
        },
        {
          q: 'Je veux juste un conseil, pas encore des travaux.',
          a: 'Le premier échange sert à ça : savoir ce qui est faisable, dans quel ordre s’y prendre et quel budget prévoir. Sans devis à signer et sans relance.',
          cta: 'Poser votre question',
          sujet: 'Une question avant de me lancer',
          corps: 'Bonjour Clément, avant d’aller plus loin j’aimerais savoir :\n\n',
        },
      ],
    },
  },

  contact: {
    kicker: 'Contact',
    titre: 'Parlons de',
    titreAccent: 'votre jardin',
    intro:
      'Décrivez votre jardin en quelques lignes. Je vous rappelle pour convenir d’une visite et vous remettre un devis gratuit.',
    puces: [
      'Visite et devis gratuits, sans engagement',
      'Contrat annuel ou intervention ponctuelle',
      'Crédit d’impôt de 50 % sur l’entretien',
    ],
    zone: 'Brunoy, Yerres, Montgeron et villes voisines',
    // Horaires de la fiche Google, relevés le 07/10/2026.
    horaires: 'Lun – ven 8h – 17h30 · Sam 8h – 12h30 · Dim. fermé',
    champNom: 'Nom et prénom',
    champLieu: 'Commune ou code postal',
    selectionner: 'Sélectionner…',
    titreProjet: 'Votre jardin',
    placeholderNom: 'Marie Dupont',
    placeholderTel: '06 12 34 56 78',
    placeholderEmail: 'marie.dupont@email.fr',
    placeholderLieu: '91800',
    champEmail: 'E-mail',
    champTel: 'Téléphone',
    champProjet: 'Type de demande',
    champDelai: 'Délai souhaité',
    champDescription: 'Description',
    placeholderDescription: 'Surface approximative, haies (longueur, hauteur), fréquence souhaitée…',
    projets: [
      'Contrat d’entretien annuel',
      'Entretien ponctuel ou remise en état',
      'Taille de haies et d’arbustes',
      'Tonte de pelouse',
      'Élagage',
      'Débroussaillage, jardin à remettre en état',
      'Gazon en rouleaux',
      'Potager',
      'Plantation d’arbres ou de haies',
      'Aménagement ou création de jardin',
      'Autre demande',
    ],
    delais: ['Dès que possible', 'Dans le mois', 'Pour la saison prochaine', 'Je me renseigne'],
    consentement:
      'J’accepte que mes informations soient utilisées pour être recontacté au sujet de ma demande. Elles ne sont ni revendues ni transmises à des tiers.',
    envoyer: 'Envoyer ma demande',
    apresEnvoi:
      'Le formulaire ouvre votre messagerie avec la demande déjà rédigée. Vous préférez appeler ? 06 79 48 24 92.',
    confirmation:
      'Votre logiciel de messagerie s’est ouvert avec la demande pré-remplie : il ne reste qu’à l’envoyer.',
  },

  footer: {
    titre: 'Un jardin',
    titreAccent: 'à confier ?',
    description:
      'Jardinier paysagiste à Brunoy. Contrats d’entretien annuels, tonte, taille de haies, élagage et création de jardins pour particuliers et professionnels.',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    linkedin: 'LinkedIn',
    horaires: 'Lun – ven 8h – 17h30 · Sam 8h – 12h30',
    colPrestations: 'Prestations',
    colEntreprise: 'Vert Demain',
    colContact: 'Contact',
    prestations: ['Entretien saisonnier', 'Taille de haies & arbustes', 'Aménagement & création', 'Pelouse & gazon', 'Potager', 'Jardins oubliés', 'Contrat annuel'],
    entreprise: ['Réalisations', 'Savoir-faire', 'Prestations', 'Questions fréquentes'],
    zone: 'Brunoy (91) et villes voisines',
    mentions: 'Mentions légales',
    donnees: 'Données personnelles',
    retourHaut: 'Revenir en haut de la page',
  },

  legal: {
    metaTitre: 'Mentions légales — Vert Demain, Brunoy',
    metaDescription:
      'Mentions légales de Vert Demain, Clément Lasfont, entrepreneur individuel à Brunoy (91800). SIRET 890 178 940 00023.',
    kicker: 'Informations légales',
    titre: 'Mentions',
    titreAccent: 'légales',
    intro:
      'Informations publiées conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique et au Règlement général sur la protection des données (RGPD).',
    etiquettes: {
      editeur: 'Éditeur',
      forme: 'Statut',
      nomUsage: 'Nom d’usage',
      adresse: 'Adresse',
      siret: 'SIRET',
      rcs: 'Immatriculation',
      tva: 'N° de TVA intracommunautaire',
      sap: 'N° de déclaration services à la personne',
      responsable: 'Directeur de la publication',
    },
    formeValeur: 'Entrepreneur individuel (EI)',
    adresseValeur: '29 avenue du Belvédère, 91800 Brunoy',
    editeurTitre: 'Éditeur du site',
    editeurTexte:
      'Le présent site est édité par un entrepreneur individuel, identifié ci-dessous. Il ne s’agit pas d’une société : il n’y a ni capital social ni organe de direction à mentionner.',
    activitesTitre: 'Activité',
    activitesTexte:
      'Entretien et création de jardins et d’espaces verts pour les particuliers et les professionnels : tonte, taille de haies et d’arbustes, désherbage, élagage, nettoyage, plantations et aménagement paysager.',
    activitesSuite:
      'Les prestations d’entretien réalisées au domicile des particuliers relèvent des services à la personne et peuvent ouvrir droit au crédit d’impôt prévu à l’article 199 sexdecies du Code général des impôts.',
    assurancesTitre: 'Assurance',
    assurances1:
      'Les informations relatives à l’assurance professionnelle — assureur, numéro de contrat, couverture géographique — sont communiquées sur simple demande, avant la signature de tout devis.',
    hebergementTitre: 'Hébergement',
    hebergementTexte: 'Le site est hébergé par',
    proprieteTitre: 'Propriété intellectuelle',
    propriete1:
      'L’ensemble des éléments du site — textes, photographies, vidéos, logo et identité visuelle — est protégé par le droit d’auteur. Les photographies présentées montrent des jardins réellement entretenus ou aménagés par Vert Demain.',
    propriete2:
      'Toute reproduction, représentation ou réutilisation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable.',
    donneesTitre: 'Données personnelles',
    donnees1:
      'Les données transmises via le formulaire de contact — nom, coordonnées et description de la demande — sont utilisées uniquement pour y répondre, organiser une visite et établir un devis. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.',
    donnees2:
      'Le traitement repose sur l’exécution de mesures précontractuelles prises à la demande de la personne concernée (article 6.1.b du RGPD). Les données sont conservées trois ans au maximum après le dernier contact, puis supprimées.',
    donnees3:
      'Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition. Pour l’exercer, écrivez à',
    donnees4:
      'Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —',
    cookiesTitre: 'Cookies et mesure d’audience',
    cookies1:
      'Ce site ne dépose aucun cookie publicitaire et n’utilise aucun traceur de profilage. Le formulaire de contact ouvre votre logiciel de messagerie : aucune donnée n’est enregistrée sur le site lui-même.',
    // Affiché uniquement quand la mesure d'audience est activée (VITE_UMAMI_ID).
    cookies3:
      'Une mesure d’audience anonyme (Umami) compte les visites et les prises de contact — appels, SMS, e-mails, demandes de devis. Elle ne dépose aucun cookie, n’enregistre aucune adresse IP complète et ne permet pas de vous identifier ; elle respecte le réglage « Ne pas me pister » de votre navigateur.',
    cookies2:
      'Les polices de caractères sont hébergées avec le site : leur affichage n’établit aucune connexion à un serveur tiers.',
    litigesTitre: 'Médiation de la consommation',
    litiges1:
      'En cas de différend, nous vous invitons à nous contacter en premier lieu afin de rechercher une solution amiable.',
    litiges2:
      'Conformément aux articles L.611-1 et suivants du Code de la consommation, le client consommateur peut ensuite recourir gratuitement au médiateur de la consommation suivant :',
    litiges3: 'Les présentes mentions sont régies par le droit français.',
    responsabiliteTitre: 'Responsabilité',
    responsabilite1:
      'Les informations publiées sur ce site sont fournies à titre indicatif et tenues à jour avec soin. Les descriptions de prestations et les zones d’intervention ne constituent pas une offre contractuelle : seul le devis signé engage l’entreprise.',
    responsabilite2:
      'Les photographies illustrent des travaux déjà réalisés ; elles ne préjugent pas du résultat d’une intervention future, qui dépend du terrain, des végétaux et des contraintes du site.',
    maj: 'Dernière mise à jour : 6 octobre 2026. Données d’identification vérifiées dans le répertoire SIRENE de l’INSEE.',
  },
};
