import { useEffect, useState } from 'react';
import { FileText, MessageCircle, Phone } from 'lucide-react';
import { lien, T } from '@/lib/i18n';

// Barre d'appel collée en bas de l'écran, mobile uniquement (md:hidden).
// Elle apparaît une fois le hero passé (le hero a déjà ses propres boutons) et glisse
// depuis le bas. Les sections collées réservent sa hauteur via --barre-mobile (index.css)
// pour que la barre ne masque ni légende ni bouton.

const TEL = '+33679482492';
// iOS lit « &body », Android « ?body » : « ?&body » fonctionne sur les deux.
const SMS = `sms:${TEL}?&body=${encodeURIComponent('Bonjour Clément, je souhaite un devis pour mon jardin. ')}`;

export default function BarreMobile() {
  const t = T();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const maj = () => {
      raf = 0;
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(maj);
    };
    maj();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const bouton =
    'flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition-transform active:scale-95';

  return (
    <nav
      aria-label={t.barre.label}
      data-emplacement="barre-mobile"
      className={`fixed inset-x-3 bottom-3 z-[80] flex gap-2 rounded-2xl bg-sapin-deep/95 p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] ring-1 ring-citron/20 backdrop-blur-md transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[130%] opacity-0'
      }`}
    >
      <a href={`tel:${TEL}`} className={`${bouton} bg-citron text-sapin`}>
        <Phone size={18} aria-hidden />
        {t.barre.appeler}
      </a>
      <a href={SMS} className={`${bouton} bg-creme/10 text-creme`}>
        <MessageCircle size={18} aria-hidden />
        {t.barre.sms}
      </a>
      <a href={lien('#contact')} className={`${bouton} bg-creme/10 text-creme`}>
        <FileText size={18} aria-hidden />
        {t.barre.devis}
      </a>
    </nav>
  );
}
