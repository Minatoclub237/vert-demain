import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

// Primitives de mouvement au scroll, partagées par les sections.
// La progression de l'élément dans la fenêtre est écrite dans la variable CSS --p
// (0 = son haut touche le bas de l'écran, 1 = son bas quitte le haut) : aucun rendu
// React pendant le défilement. On mesure l'enveloppe et on déplace un calque intérieur,
// sinon la translation fausserait la mesure suivante.

function useProgression<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '0.5');
      return;
    }

    let raf = 0;
    const maj = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - r.top) / (vh + r.height);
      el.style.setProperty('--p', String(p < 0 ? 0 : p > 1 ? 1 : p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(maj);
    };

    maj();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}

/**
 * Parallaxe scrubée. `vitesse` = déplacement total en px sur la traversée de l'écran :
 * positive, le calque monte plus vite que la page (premier plan) ; négative, il traîne
 * (arrière-plan).
 */
export function Parallaxe({
  vitesse = 120,
  axe = 'y',
  className = '',
  style,
  children,
}: {
  vitesse?: number;
  axe?: 'x' | 'y';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useProgression<HTMLDivElement>();
  const d = `calc((var(--p, 0.5) - 0.5) * ${-vitesse}px)`;
  return (
    <div ref={ref} className={className} style={style}>
      <div
        className="h-full w-full will-change-transform"
        style={{ transform: axe === 'y' ? `translate3d(0, ${d}, 0)` : `translate3d(${d}, 0, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Entrée latérale scrubée, à pleine opacité : le bloc arrive de son côté de la mise en
 * page en se redressant (rotateY), et se pose quand il atteint le tiers de l'écran.
 * Un fondu vertical de quelques px ne se voit pas : c'est le déplacement qui fait l'effet.
 */
export function Glisse({
  depuis = 'gauche',
  distance = 220,
  rotation = 14,
  className = '',
  children,
}: {
  depuis?: 'gauche' | 'droite';
  distance?: number;
  rotation?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useProgression<HTMLDivElement>();
  const s = depuis === 'gauche' ? -1 : 1;
  // reste = 1 tant que le bloc entre, 0 une fois posé (à --p = 0,4)
  const reste = '(1 - clamp(0, (var(--p, 0.5) - 0.02) * 2.6, 1))';
  return (
    <div ref={ref} className={className} style={{ perspective: '1400px' }}>
      <div
        className="h-full will-change-transform"
        style={{
          transform: `translate3d(calc(${reste} * ${s * distance}px), 0, 0) rotateY(calc(${reste} * ${-s * rotation}deg))`,
          transformOrigin: depuis === 'gauche' ? 'left center' : 'right center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
