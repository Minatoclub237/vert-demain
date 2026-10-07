import { useEffect, useRef } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { AVIS, FICHE_GOOGLE } from '@/lib/avis';
import { T } from '@/lib/i18n';

// Avis Google, racontés au scroll. Plage haute + scène collée :
//  - la note « 5,0 » compte à l'entrée et les étoiles se remplissent ;
//  - la bande d'avis glisse de droite à gauche, chaque carte pivote selon sa distance
//    au centre et se pose à plat au centre ;
//  - une bande de photos de jardins file en sens inverse, légèrement inclinée ;
//  - un guillemet géant dérive en fond (parallaxe).
// Positions des cartes calculées depuis offsetLeft + translation : aucune lecture de
// layout pendant le défilement, donc aucun retard après un saut de scroll.

const PHOTOS = [
  'pelouse-finie',
  'jardin-cerisier-fleurs',
  'friche-allee-buis',
  'allee-bordures-taillees',
  'massif-maison-apres',
  'olivier-forme',
  'palmiers-pelouse-rouleaux',
  'potager-planche',
  'topiaire-conifere',
];

const borne = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);

export default function Avis() {
  const t = T();
  const a = t.avis;
  const rangeRef = useRef<HTMLDivElement>(null);
  const bandeRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const cartesRef = useRef<(HTMLElement | null)[]>([]);
  const noteRef = useRef<HTMLSpanElement>(null);
  const etoilesRef = useRef<HTMLDivElement>(null);
  const guillemetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const range = rangeRef.current;
    const bande = bandeRef.current;
    const photos = photosRef.current;
    if (!range || !bande || !photos || !cartesRef.current.length) return;
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const render = () => {
      raf = 0;
      const vw = window.innerWidth;
      const r = range.getBoundingClientRect();
      const course = Math.max(1, r.height - window.innerHeight);
      // progression dans la plage collée, et entrée (avant que la scène ne se colle)
      const p = borne(-r.top / course);
      const entree = borne((window.innerHeight - r.top) / window.innerHeight);

      // note et étoiles : se remplissent pendant l'entrée de la section
      const n = reduit ? 1 : borne((entree - 0.35) / 0.55);
      if (noteRef.current) noteRef.current.textContent = (5 * n).toFixed(1).replace('.', ',');
      if (etoilesRef.current) etoilesRef.current.style.clipPath = `inset(0 ${100 - n * 100}% 0 0)`;
      if (guillemetRef.current) guillemetRef.current.style.transform = `translate3d(${(0.5 - p) * 18}vw, ${(0.5 - p) * 14}vh, 0) rotate(${(p - 0.5) * 12}deg)`;
      if (reduit) return;

      // bande d'avis : de droite à gauche. Bornes calées sur les vraies cartes : la
      // première entre centrée à 80 % de l'écran, la dernière finit posée au centre.
      const cartes = cartesRef.current.filter(Boolean) as HTMLElement[];
      const premiere = cartes[0];
      const derniere = cartes[cartes.length - 1];
      const centreDe = (el: HTMLElement) => el.offsetLeft + el.offsetWidth / 2;
      const depart = vw * 0.8 - centreDe(premiere);
      const arrivee = vw / 2 - centreDe(derniere);
      const x = depart + (arrivee - depart) * p;
      bande.style.transform = `translate3d(${x}px, 0, 0)`;
      cartesRef.current.forEach((el) => {
        if (!el) return;
        const centre = el.offsetLeft + el.offsetWidth / 2 + x;
        const d = borne((centre - vw / 2) / (vw * 0.55), -1, 1);
        const ad = Math.abs(d);
        el.style.transform = `perspective(1300px) rotateY(${-d * 22}deg) translate3d(0, ${ad * 26}px, ${-ad * 90}px) rotate(${d * 2}deg)`;
        el.style.opacity = String(1 - ad * 0.35);
      });

      // bande de photos : sens inverse
      const lp = photos.scrollWidth;
      photos.style.transform = `translate3d(${-(lp - vw) * (1 - p) - vw * 0.1}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="avis"
      className="relative z-[3] overflow-x-clip rounded-t-[40px] bg-citron font-inter text-sapin shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.4)]"
    >
      <div ref={rangeRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden supports-[height:100svh]:h-[100svh]">
          {/* Guillemet géant en filigrane */}
          <div
            ref={guillemetRef}
            aria-hidden
            className="pointer-events-none absolute right-[4vw] top-[14vh] select-none font-titre text-[60vw] font-bold leading-[0.8] text-sapin/[0.07] will-change-transform lg:text-[34vw]"
          >
            “
          </div>

          {/* En-tête : titre + note */}
          <div className="relative mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-x-10 gap-y-4 px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
            <div className="max-w-[40rem]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sapin/70">{a.kicker}</p>
              <TexteRevele
                as="h2"
                texte={a.titre}
                accent={a.titreAccent}
                accentClass="text-citron-dark"
                className="mt-3 font-titre text-[clamp(2rem,6vw,4.6rem)] font-bold uppercase leading-[0.92]"
              />
              <p className="mt-3 hidden max-w-[30rem] text-[16px] leading-[1.55] text-sapin/75 sm:block">{a.intro}</p>
            </div>

            <div className="flex items-center gap-5">
              <div>
                <p className="flex items-baseline gap-2 font-titre font-bold leading-none">
                  <span ref={noteRef} className="text-[clamp(3rem,8vw,6rem)] tabular-nums">5,0</span>
                  <span className="text-xl text-sapin/60">/ 5</span>
                </p>
                <div className="relative mt-2 w-fit" role="img" aria-label={a.etoiles}>
                  <div className="flex gap-1 text-sapin/20">
                    {Array.from({ length: 5 }, (_, i) => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <div ref={etoilesRef} className="absolute inset-0 flex gap-1 text-sapin">
                    {Array.from({ length: 5 }, (_, i) => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
                  </div>
                </div>
                <p className="mt-1.5 text-[13px] text-sapin/65">{a.noteLegende}</p>
              </div>
              <a
                href={FICHE_GOOGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sapin px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.07em] text-citron transition-colors hover:bg-sapin-deep"
              >
                <LogoGoogle />
                <span className="hidden sm:inline">{a.voirFiche}</span>
                <span className="sm:hidden">Google</span>
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </div>

          {/* Bande d'avis */}
          <div className="relative flex min-h-0 flex-1 items-center pb-6">
            <div ref={bandeRef} className="flex w-max items-stretch gap-5 px-[6vw] will-change-transform sm:gap-8">
              {AVIS.map((v, i) => (
                <article
                  key={v.auteur}
                  ref={(el) => { cartesRef.current[i] = el; }}
                  className="flex w-[80vw] max-w-[25rem] shrink-0 flex-col rounded-2xl bg-creme p-6 shadow-[0_30px_60px_-28px_rgba(19,50,1,0.55)] ring-1 ring-sapin/10 will-change-transform sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[16px] font-semibold text-white"
                      style={{ background: v.couleur }}
                    >
                      {v.auteur[0]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold leading-tight">{v.auteur}</p>
                      <p className="text-[12px] text-sapin/55">{v.profil}</p>
                    </div>
                    <LogoGoogle />
                  </div>
                  <div className="mt-4 flex gap-0.5 text-[#E8A200]" role="img" aria-label={a.etoiles}>
                    {Array.from({ length: 5 }, (_, k) => <Star key={k} size={16} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <blockquote className="mt-3 flex-1 text-[16px] leading-[1.6] text-sapin/85">
                    {v.texte}
                    {v.tronque && '…'}
                  </blockquote>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-sapin/10 pt-3">
                    <span className="text-[12px] text-sapin/55">{v.visite}</span>
                    {v.tronque && (
                      <a
                        href={FICHE_GOOGLE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-citron-dark underline-offset-2 hover:underline"
                      >
                        {a.lireSuite}
                        <ArrowUpRight size={12} aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bande de photos, en sens inverse */}
          <div className="relative -rotate-2 pb-8 sm:pb-10" aria-hidden>
            <div ref={photosRef} className="flex w-max gap-3 will-change-transform sm:gap-4">
              {[...PHOTOS, ...PHOTOS].map((p, i) => (
                <img
                  key={`${p}-${i}`}
                  src={`/photos/${p}.webp`}
                  alt=""
                  loading="lazy"
                  className="h-[11vh] w-[16vh] shrink-0 rounded-lg object-cover ring-2 ring-sapin/15 sm:h-[13vh] sm:w-[19vh]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoGoogle() {
  // « G » de Google, pour signaler la source des avis.
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden focusable="false" className="shrink-0 rounded-full bg-white p-[2px]">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
