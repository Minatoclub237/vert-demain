// Photos tirées des vidéos du client : 3 paires avant/après filmées sur pied (même cadrage)
// et les photos des familles de réalisations ajoutées le 07/10/2026.
//
// Usage : node scripts/extraire-photos.cjs <dossier des sources>
//   c1.mp4 = « Jardin oublié vs FS240 »            d1.mp4 = « Envie d'un potager »
//   c3.mp4 = « Rafraîchissement d'un massif »       d2.mp4 = « …haie de pyracanthas… pittosporums »
//   c4.mp4 = « Enfant j'aurais rêvé… pelouse »      d3.mp4 = « Mettre en lumière le potentiel d'un jardin… » (576p)
//   c5.mp4 = « Après un mois de création… »         d4.mp4 = « Plantation d'un catalpa boule »
//                                                    d5.mp4 = « Taille de formation d'un jeune olivier »
// Nécessite ffmpeg dans le PATH. Sortie : public/photos/<clé>.webp
const { execFileSync } = require('child_process');
const path = require('path');
if (!process.argv[2]) throw new Error('Indiquer le dossier des vidéos sources.');
const SRC = path.resolve(process.argv[2]);
const OUT = path.join(__dirname, '..', 'public', 'photos');

// [clé, source, instant (s), filtre]. Les paires utilisent le MÊME recadrage avant/après.
const PAIRE_FRICHE = 'crop=576:768:0:160';
// « therapy. » incrusté au milieu du timelapse (x 227-348, y 499-520) : effacé à 9,5 s,
// quand Clément est passé à gauche et que la zone n'est plus que de l'herbe.
const SANS_STICKER = 'delogo=x=220:y=492:w=136:h=36';
const PAIRE_GAZON = 'crop=576:768:0:150';
// Photos « Avant / Après » du client, en 3:4 dans des bandes noires (y = 128) ;
// la légende « Après » commence à y = 735 : carré de 576 qui s'arrête au-dessus.
// Photos prises à main levée : l'« après » est cadré 56 px plus haut (meilleur SSIM sur
// la maison, inchangée), on décale donc le recadrage de l'« avant » d'autant.
const MASSIF_AVANT = 'crop=576:576:0:201';
const MASSIF_APRES = 'crop=576:576:0:145';

const PHOTOS = [
  ['jardin-oublie-avant', 'c1.mp4', 9.5, SANS_STICKER + ',' + PAIRE_FRICHE],
  ['jardin-oublie-apres', 'c1.mp4', 30.6, PAIRE_FRICHE],
  ['gazon-rouleaux-avant', 'c4.mp4', 35.3, PAIRE_GAZON],
  ['gazon-rouleaux-apres', 'c4.mp4', 42.5, PAIRE_GAZON],
  ['massif-maison-avant', 'c3.mp4', 2.0, MASSIF_AVANT],
  ['massif-maison-apres', 'c3.mp4', 3.6, MASSIF_APRES],
  // Pelouse & gazon
  ['pelouse-motoculteur', 'c4.mp4', 8.0, ''],
  ['pelouse-apport-terre', 'c4.mp4', 16.0, ''],
  ['pelouse-rouleaux-terrasse', 'c4.mp4', 66.0, ''],
  ['pelouse-finie', 'c4.mp4', 80.0, ''],
  // Potager
  ['potager-preparation', 'd1.mp4', 14.0, ''],
  ['potager-buttes', 'd1.mp4', 26.0, ''],
  ['potager-planche', 'd1.mp4', 33.5, ''],
  // Jardins oubliés
  ['friche-avant', 'd3.mp4', 5.0, ''],
  ['friche-allee-degagee', 'd3.mp4', 46.5, ''],
  ['friche-allee-buis', 'd3.mp4', 50.8, ''],
  ['friche-terrain-fauche', 'c1.mp4', 55.0, ''],
  // Taille
  ['olivier-taille-echelle', 'd5.mp4', 34.0, ''],
  ['olivier-forme', 'd5.mp4', 57.5, ''],
  ['bordures-taille-haie', 'c5.mp4', 4.6, ''],
  ['allee-bordures-taillees', 'c5.mp4', 72.0, ''],
  // Création
  ['catalpa-plantation', 'd4.mp4', 30.0, ''],
  ['catalpa-plante', 'd4.mp4', 60.5, ''],
  ['jardiniere-preparee', 'd2.mp4', 50.0, ''],
  ['jardiniere-pittosporums', 'd2.mp4', 75.0, ''],
];

for (const [cle, src, t, filtre] of PHOTOS) {
  execFileSync('ffmpeg', ['-nostdin', '-v', 'error', '-y', '-ss', String(t), '-i', path.join(SRC, src),
    '-frames:v', '1', '-vf', [filtre, 'unsharp=5:5:0.4'].filter(Boolean).join(','), '-c:v', 'libwebp', '-quality', '80',
    '-compression_level', '6', path.join(OUT, `${cle}.webp`)], { stdio: 'inherit' });
}
console.log(PHOTOS.length, 'photos extraites');
