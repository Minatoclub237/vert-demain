// Montage des deux vidéos Vert Demain : hero (carré 900, vidéo A) et fond en triptyque
// (3 panneaux 450x800, vidéo B + plans restants de A). Muet, H.264, boucles sans couture.
//
// Usage : node scripts/montage-videos.cjs <dossier contenant a.mp4 et b.mp4>
//   a.mp4 = « À partir de demain, retrouvez 1 vidéo par jour… » (720x1280, 52 s)
//   b.mp4 = « Je pensais pas que mon jardin était si grand… » (360x640, 55 s)
// Les sources (36 Mo) ne sont pas versionnées. Points d'entrée/sortie en secondes ci-dessous :
// ils évitent le logo incrusté (début/fin de A), la légende (A, 40,5 s) et la carte
// « Calendrier de l'Avent » (début/fin de B). Nécessite ffmpeg dans le PATH.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
if (!process.argv[2]) throw new Error('Indiquer le dossier des vidéos sources (a.mp4, b.mp4).');
const SRC = path.resolve(process.argv[2]);
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'montage-vd-'));
const OUT = path.join(__dirname, '..', 'public', 'video');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(DIR, 'tmp'), { recursive: true });
const ff = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: 'inherit' });
const FPS = 30;

// Encodage final en deux passes : débit cible fixe, donc poids maîtrisé quelle que
// soit la quantité de feuillage en mouvement (le CRF seul donnait 7 à 9 Mo).
function deuxPasses(entree, kbps, out) {
  const log = path.join(DIR, 'tmp', path.basename(out, '.mp4'));
  const commun = ['-an', '-c:v', 'libx264', '-preset', 'slow', '-b:v', `${kbps}k`, '-maxrate', `${Math.round(kbps * 1.6)}k`,
    '-bufsize', `${kbps * 2}k`, '-pix_fmt', 'yuv420p', '-g', '60', '-passlogfile', log];
  ff([...entree, ...commun, '-pass', '1', '-f', 'mp4', 'NUL']);
  ff([...entree, ...commun, '-pass', '2', '-movflags', '+faststart', out]);
}

// ---------- rendu d'un plan : recadrage, poussée lente, étalonnage ----------
function plan({ src, a, b, w, h, cropY = null, zoomIn = true, zoom = 0.07, grade, pre = '', out }) {
  const dur = +(b - a).toFixed(3);
  const n = Math.round(dur * FPS);
  const z = zoomIn ? `1+${zoom}*on/${n}` : `${1 + zoom}-${zoom}*on/${n}`;
  const crop = cropY === null ? '' : `crop=720:720:0:${cropY},`;
  // agrandi x2 avant zoompan : la poussée reste fluide (pas de saccade au pixel entier)
  const vf = [
    `fps=${FPS}`,
    `${pre}${crop}scale=${w * 2}:${h * 2}:flags=lanczos`,
    `zoompan=z='${z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${w}x${h}:fps=${FPS}`,
    grade,
    'format=yuv420p',
  ].join(',');
  ff(['-ss', String(a), '-t', String(dur), '-i', path.join(SRC, src), '-an', '-vf', vf,
      '-c:v', 'libx264', '-crf', '12', '-preset', 'veryfast', '-r', String(FPS), out]);
  return { file: out, dur: n / FPS };
}

// =====================================================================
// HERO : 7 plans de A, carré 900, fondus variés, boucle cyclique
// =====================================================================
const GRADE_HERO = "eq=contrast=1.06:saturation=1.12:gamma=0.98,curves=all='0/0 0.25/0.22 0.75/0.79 1/1',unsharp=5:5:0.55,vignette=angle=PI/6";
const HERO = [
  { a: 20.5, b: 23.0, y: 470, t: 'fade', d: 0.35 },       // tonte, plan d'ouverture
  { a: 16.2, b: 18.3, y: 200, t: 'fade', d: 0.2 },        // taille sur l'échelle
  { a: 38.75, b: 40.4, y: 150, t: 'smoothup', d: 0.35 },  // taille-haie en gros plan
  { a: 28.45, b: 30.0, y: 300, t: 'fade', d: 0.25 },      // gravier qui tombe
  { a: 24.35, b: 26.6, y: 300, t: 'fade', d: 0.45 },      // arrosage de l'olivier
  { a: 13.3, b: 16.0, y: 150, t: 'smoothleft', d: 0.4 },  // remontée vers la couronne
  { a: 32.2, b: 34.3, y: 400, t: 'fade', d: 0.4 },        // paillage + pelouse rayée -> retour au 1er plan
];
const heroPlans = HERO.map((s, i) =>
  plan({ src: 'a.mp4', a: s.a, b: s.b, w: 900, h: 900, cropY: s.y, zoomIn: i % 2 === 0, grade: GRADE_HERO,
         out: path.join(DIR, 'tmp', `h${i}.mp4`) }));

// chaîne cyclique h0 → … → h6 → h0, puis on découpe une période entière
const seq = [...heroPlans, heroPlans[0]];
const inputs = seq.flatMap((p) => ['-i', p.file]);
let fc = '', prev = '[0:v]', t = 0;
HERO.forEach((s, k) => {
  t += seq[k].dur - s.d;
  const lab = `[x${k}]`;
  fc += `${prev}[${k + 1}:v]xfade=transition=${s.t}:duration=${s.d}:offset=${t.toFixed(3)}${lab};`;
  prev = lab;
});
const periode = HERO.reduce((acc, s, k) => acc + heroPlans[k].dur - s.d, 0);
const u0 = HERO[HERO.length - 1].d + 0.3; // dans le 1er plan, nettement après le fondu d'entrée
fc += `${prev}trim=start=${u0.toFixed(3)}:duration=${periode.toFixed(3)},setpts=PTS-STARTPTS[v]`;
deuxPasses([...inputs, '-filter_complex', fc, '-map', '[v]'], 2400, path.join(OUT, 'hero-vert-demain.mp4'));
ff(['-ss', '0.4', '-i', path.join(OUT, 'hero-vert-demain.mp4'), '-frames:v', '1', '-q:v', '3', path.join(OUT, 'hero-poster.jpg')]);
console.log('hero : période', periode.toFixed(2), 's');

// =====================================================================
// FOND : triptyque « avant · pendant · après », 3 panneaux 450x800
// =====================================================================
const GRADE_B = "eq=contrast=1.06:saturation=0.92:brightness=-0.02,curves=all='0/0 0.5/0.47 1/0.96'";
const PRE_B = 'hqdn3d=2:2:6:6,';            // 360p : on débruite avant l'agrandissement
const SHARP = ',unsharp=5:5:0.7';
const P = 14.0;
const PANNEAUX = {
  avant: [['b', 4.0, 7.5], ['b', 10.5, 12.6], ['a', 10.0, 11.9], ['b', 12.9, 14.5], ['b', 2.0, 3.8], ['b', 40.6, 43.7]],
  pendant: [['b', 17.2, 20.2], ['a', 19.4, 20.15], ['b', 30.1, 33.5], ['a', 12.1, 13.1], ['b', 24.4, 27.4], ['a', 35.0, 36.0], ['b', 37.6, 39.45]],
  apres: [['b', 43.8, 45.2], ['b', 20.55, 22.9], ['b', 34.6, 37.3], ['b', 45.5, 49.15], ['a', 36.7, 38.6], ['b', 49.6, 51.6]],
};
// décalage de la boucle de chaque panneau : ils ne coupent jamais tous en même temps
const DECALAGE = { avant: 0, pendant: 1.15, apres: 2.3 };

const panneaux = Object.entries(PANNEAUX).map(([nom, plans]) => {
  const fichiers = plans.map(([src, a, b], i) =>
    plan({ src: `${src}.mp4`, a, b, w: 450, h: 800, zoomIn: i % 2 === 1, zoom: 0.05,
           pre: src === 'b' ? PRE_B : '', grade: GRADE_B + SHARP,
           out: path.join(DIR, 'tmp', `${nom}${i}.mp4`) }));
  const liste = path.join(DIR, 'tmp', `${nom}.txt`);
  fs.writeFileSync(liste, fichiers.map((f) => `file '${f.file.replace(/\\/g, '/')}'`).join('\n'));
  const brut = path.join(DIR, 'tmp', `${nom}-brut.mp4`);
  ff(['-f', 'concat', '-safe', '0', '-i', liste, '-c', 'copy', brut]);
  // rotation : la couture de boucle tombe au milieu d'un plan, donc invisible
  const o = DECALAGE[nom];
  const tourne = path.join(DIR, 'tmp', `${nom}-boucle.mp4`);
  const fcp = o === 0
    ? `[0:v]trim=duration=${P},setpts=PTS-STARTPTS[v]`
    : `[0:v]split[p][q];[p]trim=start=${o}:end=${P},setpts=PTS-STARTPTS[a];[q]trim=end=${o},setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1[v]`;
  ff(['-i', brut, '-filter_complex', fcp, '-map', '[v]', '-c:v', 'libx264', '-crf', '12', '-preset', 'veryfast', tourne]);
  const total = fichiers.reduce((s, f) => s + f.dur, 0);
  console.log(nom, 'durée des plans', total.toFixed(2), 's');
  return tourne;
});

const gouttiere = `color=c=0x0C2100:s=7x800:d=${P}:r=${FPS}`;
deuxPasses(['-i', panneaux[0], '-i', panneaux[1], '-i', panneaux[2],
    '-filter_complex',
    `${gouttiere}[g1];${gouttiere}[g2];[0:v][g1][1:v][g2][2:v]hstack=5,vignette=angle=PI/5,format=yuv420p[v]`,
    '-map', '[v]', '-t', String(P)], 3200, path.join(OUT, 'fond-triptyque.mp4'));
ff(['-ss', '0.5', '-i', path.join(OUT, 'fond-triptyque.mp4'), '-frames:v', '1', '-q:v', '4', path.join(OUT, 'fond-poster.jpg')]);
console.log('terminé');
