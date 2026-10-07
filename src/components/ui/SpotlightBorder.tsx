import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const RADII = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

export function spotlightMaskStyle(size = 280, intensity = 0.6): CSSProperties {
  return {
    background: `radial-gradient(${size}px circle at var(--spot-x, -200px) var(--spot-y, -200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)`,
    padding: '1px',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  };
}

// Suit le curseur sur tout le document : chaque conteneur écrit ses propres
// --spot-x / --spot-y, relatives à sa boîte.
// Sur écran tactile (pas de survol), le halo n'aurait jamais bougé : il balaie alors
// la bordure en diagonale au fil du défilement, et se pose sous le doigt au toucher.
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const poser = (x: number, y: number) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${x - rect.left}px`);
      el.style.setProperty('--spot-y', `${y - rect.top}px`);
    };
    const onMove = (e: MouseEvent) => poser(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) poser(t.clientX, t.clientY);
    };

    const tactile = window.matchMedia('(hover: none)').matches;
    let raf = 0;
    const balayer = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.setProperty('--spot-x', `${p * r.width}px`);
      el.style.setProperty('--spot-y', `${(1 - p) * r.height}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(balayer);
    };

    window.addEventListener('mousemove', onMove);
    if (tactile) {
      balayer();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('touchstart', onTouch, { passive: true });
      window.addEventListener('touchmove', onTouch, { passive: true });
    }
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  return ref;
}

type Props = {
  as?: ElementType;
  radius?: keyof typeof RADII;
  size?: number;
  intensity?: number;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'button';
  id?: string;
};

export default function SpotlightBorder({
  as: Tag = 'div',
  radius = '2xl',
  size = 280,
  intensity = 0.6,
  className,
  children,
  ...rest
}: Props) {
  const ref = useSpotlight<HTMLElement>();

  return (
    <Tag ref={ref} className={cn('relative', RADII[radius], className)} {...rest}>
      <span
        aria-hidden
        className={cn('pointer-events-none absolute inset-0', RADII[radius])}
        style={spotlightMaskStyle(size, intensity)}
      />
      {children}
    </Tag>
  );
}
