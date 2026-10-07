// Mesure d'audience respectueuse de la vie privée : Umami (sans cookie, sans identifiant
// personnel, respect de « Do Not Track »). Compte les visites et les contacts :
//   appel     → clic sur un lien tel:
//   sms       → clic sur un lien sms:
//   email     → clic sur un lien mailto: (dont les e-mails pré-remplis de la FAQ)
//   demande-devis → envoi du formulaire de contact
// Chaque événement porte `emplacement` : la section d'où vient le clic (hero, faq,
// barre-mobile…), pour savoir quels boutons font réellement appeler.
//
// Inactive tant que VITE_UMAMI_ID n'est pas défini (voir .env.example) : aucun script
// tiers n'est alors chargé et suivre() ne fait rien.

const ID = import.meta.env.VITE_UMAMI_ID as string | undefined;
const SCRIPT = (import.meta.env.VITE_UMAMI_SRC as string | undefined) || 'https://cloud.umami.is/script.js';

export const MESURE_ACTIVE = Boolean(ID);

type Umami = { track: (nom: string, donnees?: Record<string, string>) => void };
declare global {
  interface Window {
    umami?: Umami;
  }
}

export function suivre(nom: string, donnees: Record<string, string> = {}) {
  if (import.meta.env.DEV) console.debug('[mesure]', nom, donnees);
  window.umami?.track(nom, donnees);
}

function emplacement(el: Element): string {
  const marque = el.closest('[data-emplacement]');
  if (marque) return marque.getAttribute('data-emplacement') || '';
  const bloc = el.closest('section[id], footer, nav, [id]');
  if (!bloc) return 'page';
  return bloc.id || bloc.tagName.toLowerCase();
}

/** À appeler une fois par page. */
export function installerMesure() {
  if (ID && !document.querySelector('script[data-website-id]')) {
    const s = document.createElement('script');
    s.defer = true;
    s.src = SCRIPT;
    s.dataset.websiteId = ID;
    s.dataset.doNotTrack = 'true';
    document.head.appendChild(s);
  }

  // Un seul écouteur pour tous les liens de contact, présents et futurs.
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const nom = href.startsWith('tel:') ? 'appel' : href.startsWith('sms:') ? 'sms' : href.startsWith('mailto:') ? 'email' : '';
      if (nom) suivre(nom, { emplacement: emplacement(a) });
    },
    { capture: true },
  );
}
