import { Image, Video } from 'lucide-react';

// Emplacement vide, laissé volontairement visible : il attend une photo ou une
// vidéo du client (fichiers Instagram / TikTok à venir).

export default function Vide({
  type = 'photo',
  label,
  ton = 'sombre',
  className = '',
}: {
  type?: 'photo' | 'video';
  label?: string;
  /** `sombre` sur fond vert sapin, `clair` sur fond citron, crème ou blanc. */
  ton?: 'sombre' | 'clair';
  className?: string;
}) {
  const Icone = type === 'video' ? Video : Image;
  const couleurs =
    ton === 'sombre'
      ? 'border-creme/20 bg-creme/[0.04] text-creme/40'
      : 'border-sapin/25 bg-sapin/[0.04] text-sapin/45';
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed ${couleurs} ${className}`}
    >
      <Icone size={22} strokeWidth={1.5} aria-hidden />
      {label && <span className="font-mono text-[10px] uppercase tracking-[0.15em]">{label}</span>}
    </div>
  );
}

/** Donnée texte encore manquante (n° SAP, médiateur, horaires) : un trait vide. */
export function Blanc({ className = 'w-40' }: { className?: string }) {
  return (
    <span
      aria-label="à compléter"
      className={`inline-block h-[1.1em] translate-y-[0.2em] border-b border-dashed border-current opacity-40 ${className}`}
    />
  );
}
