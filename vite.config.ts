import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { FR } from './src/lib/textes-fr';

const racine = dirname(fileURLToPath(import.meta.url));

// Domaine actuel du client (aujourd'hui sur Wix), destiné à pointer vers ce site.
const DOMAINE = 'https://www.clement-vertdemain.com';

// Données structurées générées depuis le dictionnaire : la fiche entreprise et la FAQ
// restent identiques au texte affiché, et Google les lit sans exécuter le JavaScript.
// schema.org n'a pas de type « paysagiste » : HomeAndConstructionBusiness (sous-type de
// LocalBusiness) est le plus proche. Pas d'aggregateRating : nombre d'avis non vérifié.
function donneesStructurees(): Plugin {
  const villes = ['Brunoy', 'Yerres', 'Épinay-sous-Sénart', 'Montgeron', 'Draveil', 'Villecresnes', 'Villeneuve-Saint-Georges'];
  const objections = Object.values(FR.faq.objections).flat();
  const graphe = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${DOMAINE}/#entreprise`,
        name: 'Vert Demain',
        alternateName: 'Vert Demain par Clément Lasfont',
        description: FR.meta.description,
        url: `${DOMAINE}/`,
        telephone: '+33679482492',
        email: 'clement.vertdemain@gmail.com',
        image: `${DOMAINE}/og.jpg`,
        logo: `${DOMAINE}/favicon-512.png`,
        vatID: 'FR53890178940',
        founder: { '@type': 'Person', name: 'Clément Lasfont' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brunoy',
          postalCode: '91800',
          addressRegion: 'Essonne',
          addressCountry: 'FR',
        },
        areaServed: villes.map((name) => ({ '@type': 'City', name })),
        knowsAbout: FR.contact.projets.filter((p) => p !== 'Autre demande'),
        sameAs: [
          'https://www.instagram.com/clement_vertdemain/',
          'https://www.tiktok.com/@vertdemain',
          'https://www.google.com/maps?cid=1318388340206876737',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: objections.map((o) => ({
          '@type': 'Question',
          name: o.q,
          acceptedAnswer: { '@type': 'Answer', text: o.a },
        })),
      },
    ],
  };
  const balise = `<script type="application/ld+json">${JSON.stringify(graphe).replace(/</g, '\\u003c')}</script>`;
  return {
    name: 'donnees-structurees',
    transformIndexHtml(html, ctx) {
      // uniquement la page d'accueil (pas les mentions légales)
      if (!ctx.filename.endsWith('index.html')) return html;
      return html.replace('</head>', `    ${balise}\n  </head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), donneesStructurees()],
  server: { port: 5910, strictPort: true },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    // Site multi-pages : la landing et les mentions légales sont deux vraies
    // pages, chacune avec son URL et son propre HTML indexable.
    rollupOptions: {
      input: {
        main: resolve(racine, 'index.html'),
        mentionsLegales: resolve(racine, 'mentions-legales.html'),
      },
    },
  },
  optimizeDeps: { exclude: ['lucide-react'] },
});
