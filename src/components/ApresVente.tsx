import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail, Quote } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { T } from '@/lib/i18n';

// « Le jardin qui va avec la maison » : offre achat / vente / agences, racontée au scroll.
// Une plage haute avec une scène collée ; la progression choisit l'étape active et pilote
// un jeu de cartes photo : la nouvelle arrive de la droite en se redressant, la précédente
// recule et se couche. Une vignette « avant » flotte à une autre vitesse (parallaxe),
// le logo géant dérive en fond. Styles écrits directement : aucun rendu React par image.

const MAIL = 'clement.vertdemain@gmail.com';

// Une photo principale et une vignette par étape (images du client).
const CARTES = [
  { grande: '/photos/friche-allee-buis.webp', petite: '/photos/friche-avant.webp' },
  { grande: '/photos/jardin-cerisier-fleurs.webp', petite: '/photos/pelouse-finie.webp' },
  { grande: '/photos/massif-maison-apres.webp', petite: '/photos/allee-bordures-taillees.webp' },
];

const borne = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);

export default function ApresVente() {
  const t = T();
  const e = t.apresVente;
  const rangeRef = useRef<HTMLDivElement>(null);
  const grandesRef = useRef<(HTMLDivElement | null)[]>([]);
  const petitesRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLImageElement>(null);
  const barreRef = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const range = rangeRef.current;
    if (!range) return;
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const n = CARTES.length;
    let raf = 0;
    let dernier = -1;

    const render = () => {
      raf = 0;
      const r = range.getBoundingClientRect();
      const course = Math.max(1, r.height - window.innerHeight);
      const p = borne(-r.top / course);
      // 0 → n : chaque étape occupe un tiers de la plage
      const pos = p * (n - 0.001);
      const i = Math.floor(pos);
      if (i !== dernier) {
        dernier = i;
        setActif(i);
      }
      if (barreRef.current) barreRef.current.style.transform = `scaleX(${p})`;
      if (logoRef.current) logoRef.current.style.transform = `translate3d(${(0.5 - p) * 30}vw, ${(0.5 - p) * 8}vh, 0) rotate(${(p - 0.5) * -8}deg)`;
      if (reduit) return;

      grandesRef.current.forEach((el, k) => {
        if (!el) return;
        // phase < 0 : pas encore arrivée ; 0 → 1 : posée ; > 1 : recouverte
        const phase = pos - k;
        let x = 0, y = 0, rot = 0, rotY = 0, sc = 1, op = 1;
        if (phase < 0) {
          const v = borne(-phase * 1.6); // arrive sur les 60 % qui précèdent son étape
          x = v * 105; rot = v * 9; rotY = v * -28; sc = 1 - v * 0.04;
          op = 1 - v; // invisible tant qu'elle attend : rien ne dépasse au bord de l'écran
        } else if (phase > 1 || (k < n - 1 && phase > 0.85)) {
          const v = borne((phase - 0.85) / 1.15);
          y = v * -7; rot = v * -7; sc = 1 - v * 0.14; op = 1 - v * 0.55;
        }
        el.style.transform = `perspective(1400px) translate3d(${x}%, ${y}%, 0) rotateY(${rotY}deg) rotate(${rot}deg) scale(${sc})`;
        el.style.opacity = String(op);
      });

      petitesRef.current.forEach((el, k) => {
        if (!el) return;
        const phase = pos - k;
        // la vignette monte plus vite que la grande carte et n'est visible que pendant SON étape
        const visible = k === Math.floor(pos) ? 1 : 0;
        const dy = (0.5 - borne(phase, -0.3, 1.3)) * 70;
        el.style.transform = `translate3d(0, ${dy}%, 0) rotate(${-8 + phase * 6}deg)`;
        el.style.opacity = String(visible);
      });
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
      id="apres-vente"
      className="relative z-[3] overflow-x-clip rounded-t-[40px] bg-creme font-inter text-sapin shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.45)]"
    >
      <div ref={rangeRef} className="relative h-[340vh]">
        <div className="sticky top-0 h-screen overflow-hidden supports-[height:100svh]:h-[100svh]">
          {/* Logo géant en filigrane, qui dérive en sens inverse du défilement */}
          <img
            ref={logoRef}
            src="/logo-sapin.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 w-[120vw] max-w-none select-none opacity-[0.05] will-change-transform"
            style={{ marginLeft: '-60vw', marginTop: '-30vw' }}
          />

          <div className="relative mx-auto grid h-full max-w-[1400px] grid-rows-[auto_minmax(0,1fr)] gap-6 px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-1 lg:items-center lg:gap-14 lg:px-12 lg:pt-0">
            {/* Le jeu de cartes photo */}
            <div className="relative order-1 h-[38vh] sm:h-[44vh] lg:order-2 lg:h-[70vh]">
              {CARTES.map((c, k) => (
                // L'enveloppe centre la carte : un absolu étiré par inset-0 ignorerait aspect-ratio.
                <div key={c.grande} className="pointer-events-none absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 + k }}>
                  <div
                    ref={(el) => { grandesRef.current[k] = el; }}
                    className="aspect-[3/4] h-full max-w-full will-change-transform"
                    style={{ transformOrigin: '50% 100%' }}
                  >
                    <img
                      src={c.grande}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full rounded-2xl object-cover shadow-[0_40px_80px_-30px_rgba(19,50,1,0.6)] ring-1 ring-sapin/10"
                    />
                  </div>
                </div>
              ))}
              {CARTES.map((c, k) => (
                <div
                  key={c.petite}
                  ref={(el) => { petitesRef.current[k] = el; }}
                  className="absolute -left-2 bottom-[8%] z-30 w-[34%] max-w-[13rem] transition-opacity duration-500 sm:left-[2%] lg:-left-6"
                >
                  <div className="rounded-xl bg-white p-1.5 pb-6 shadow-[0_24px_50px_-18px_rgba(19,50,1,0.55)]">
                    <img src={c.petite} alt="" aria-hidden loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Le texte, étape par étape */}
            <div className="relative order-2 flex min-h-0 flex-col lg:order-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-citron-dark">{e.kicker}</p>
              <TexteRevele
                as="h2"
                texte={e.titre}
                accent={e.titreAccent}
                accentClass="text-citron-dark"
                className="mt-3 font-titre text-[clamp(1.9rem,5vw,4rem)] font-bold uppercase leading-[0.95]"
              />
              <p className="mt-4 hidden max-w-[34rem] text-[16px] leading-[1.6] text-sapin/70 lg:block">{e.intro}</p>

              <ol className="relative mt-5 flex flex-col gap-3 lg:mt-8 lg:gap-5">
                {e.etapes.map((s, k) => {
                  const on = k === actif;
                  const href = `mailto:${MAIL}?subject=${encodeURIComponent(s.sujet)}&body=${encodeURIComponent(s.corps)}`;
                  return (
                    <li
                      key={s.num}
                      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        on ? 'translate-x-0 opacity-100' : 'opacity-30 lg:-translate-x-6'
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className={`font-mono text-[12px] tracking-[0.15em] ${on ? 'text-citron-dark' : 'text-sapin/50'}`}>{s.num}</span>
                        <div>
                          <h3 className="text-xl font-semibold leading-tight sm:text-2xl">{s.titre}</h3>
                          <div className={`grid transition-[grid-template-rows] duration-700 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                              <p className="mt-2 max-w-[32rem] text-[16px] leading-[1.6] text-sapin/75">{s.texte}</p>
                              <a
                                href={href}
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-sapin px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.07em] text-citron transition-colors hover:bg-sapin-deep"
                              >
                                <Mail size={14} aria-hidden />
                                {s.cta}
                                <ArrowUpRight size={14} aria-hidden />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* Propos du nouveau propriétaire, visibles à la 1re étape */}
              <figure
                className={`mt-6 hidden max-w-[30rem] border-l-2 border-citron-dark pl-4 transition-[opacity,transform] duration-700 lg:block ${
                  actif === 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <Quote size={18} className="text-citron-dark" aria-hidden />
                <blockquote className="mt-1 text-lg font-medium italic leading-snug">{e.citation}</blockquote>
                <figcaption className="mt-1 text-[13px] text-sapin/55">{e.citationSource}</figcaption>
              </figure>

              <div className="mt-6 h-[3px] w-full max-w-[20rem] overflow-hidden rounded-full bg-sapin/10" aria-hidden>
                <div ref={barreRef} className="h-full origin-left bg-citron-dark" style={{ transform: 'scaleX(0)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
