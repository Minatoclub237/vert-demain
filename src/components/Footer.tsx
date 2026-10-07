import { ArrowUpRight, Clock, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { T, lien, PAGE_LEGALE } from '@/lib/i18n';

// Seules les ancres restent ici ; les libellés viennent du dictionnaire.
const PRESTATIONS = ['#realisations-entretien', '#realisations-taille', '#realisations-creation', '#realisations-pelouse', '#realisations-potager', '#realisations-friche', '#contrat'];
const ENTREPRISE = ['#realisations', '#solutions', '#secteurs', '#faq'];

// Comptes vérifiés le 06/10/2026 (liens présents sur clement-vertdemain.com).
const INSTAGRAM = 'https://www.instagram.com/clement_vertdemain/';
const TIKTOK = 'https://www.tiktok.com/@vertdemain';
// Profil fourni par l'utilisateur le 07/10/2026 (illisible sans compte LinkedIn).
const LINKEDIN = 'https://fr.linkedin.com/in/clementlasfont';

export default function Footer() {
  const t = T();
  return (
    <footer className="relative z-[3] w-full bg-citron font-inter text-sapin">
      <div className="absolute inset-2 sm:inset-3 border border-citron-dark rounded-sm pointer-events-none" />
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1 h-1 bg-sapin" />
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1 h-1 bg-sapin" />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1 h-1 bg-sapin" />
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-1 h-1 bg-sapin" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-6">
        <div className="flex flex-col gap-8 border-b border-dashed border-citron-dark pb-12 lg:flex-row lg:items-end lg:justify-between">
          <TexteRevele
            as="h2"
            texte={t.footer.titre}
            accent={t.footer.titreAccent}
            accentClass="text-citron-dark"
            className="max-w-[16ch] font-titre text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold uppercase leading-[0.95] text-sapin"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={lien('#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-sapin px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-citron transition-colors hover:bg-sapin-deep"
            >
              {t.commun.devisGratuit}
              <ArrowUpRight size={16} />
            </a>
            <a
              href="tel:+33679482492"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-citron-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-sapin transition-colors hover:bg-sapin/5"
            >
              <Phone size={15} />
              {t.commun.telephone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            {/* Le logo ramène en haut de page, sur le hero. */}
            <a
              href={lien('#hero')}
              aria-label={t.footer.retourHaut}
              className="group flex w-fit items-center rounded-sm transition-opacity hover:opacity-80"
            >
              <img
                src="/logo-sapin.svg"
                alt="Vert Demain"
                width={115}
                height={60}
                className="h-14 w-auto select-none"
                draggable={false}
              />
            </a>
            <p className="max-w-[24rem] text-[15px] leading-[1.6] text-sapin/75">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-citron-dark bg-white/40 px-3.5 py-2.5 text-[13px] font-medium text-sapin transition-colors hover:bg-white/70"
              >
                <Instagram size={17} aria-hidden />
                {t.footer.instagram}
              </a>
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-citron-dark bg-white/40 px-3.5 py-2.5 text-[13px] font-medium text-sapin transition-colors hover:bg-white/70"
              >
                <LogoTiktok />
                {t.footer.tiktok}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-citron-dark bg-white/40 px-3.5 py-2.5 text-[13px] font-medium text-sapin transition-colors hover:bg-white/70"
              >
                <Linkedin size={16} aria-hidden />
                {t.footer.linkedin}
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sapin/55">
              {t.footer.colPrestations}
            </p>
            {PRESTATIONS.map((href, i) => (
              <a
                key={href}
                href={lien(href)}
                className="text-[15px] text-sapin/80 transition-colors hover:text-sapin"
              >
                {t.footer.prestations[i]}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sapin/55">
              {t.footer.colEntreprise}
            </p>
            {ENTREPRISE.map((href, i) => (
              <a
                key={href}
                href={lien(href)}
                className="text-[15px] text-sapin/80 transition-colors hover:text-sapin"
              >
                {t.footer.entreprise[i]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sapin/55">
              {t.footer.colContact}
            </p>
            {/* Zone d'intervention plutôt que l'adresse : c'est le domicile du client
                (elle figure dans les mentions légales, où elle est obligatoire). */}
            <p className="flex items-start gap-2 text-[15px] text-sapin/80">
              <MapPin size={15} className="mt-1 shrink-0" />
              {t.footer.zone}
            </p>
            <a
              href="tel:+33679482492"
              className="flex items-center gap-2 text-[15px] text-sapin/80 transition-colors hover:text-sapin"
            >
              <Phone size={15} />
              {t.commun.telephone}
            </a>
            <a
              href="mailto:clement.vertdemain@gmail.com"
              className="flex items-center gap-2 text-[15px] text-sapin/80 transition-colors hover:text-sapin"
            >
              <Mail size={15} className="shrink-0" />
              <span>clement.vertdemain<wbr />@gmail.com</span>
            </a>
            <p className="flex items-start gap-2 text-[15px] text-sapin/80">
              <Clock size={15} className="mt-1 shrink-0" />
              {t.footer.horaires}
            </p>
          </div>
        </div>

        {/* SIRET vérifié le 06/10/2026 dans le répertoire SIRENE (établissement siège actif). */}
        <div className="flex flex-col gap-3 border-t border-dashed border-citron-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.1em] text-sapin/65">
            © 2026 Vert Demain · Brunoy · SIRET&nbsp;890&nbsp;178&nbsp;940&nbsp;00023
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={PAGE_LEGALE}
              className="text-[11px] uppercase tracking-[0.1em] text-sapin/65 underline-offset-2 transition-colors hover:text-sapin hover:underline"
            >
              {t.footer.mentions}
            </a>
            <a
              href={`${PAGE_LEGALE}#donnees`}
              className="text-[11px] uppercase tracking-[0.1em] text-sapin/65 underline-offset-2 transition-colors hover:text-sapin hover:underline"
            >
              {t.footer.donnees}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoTiktok() {
  // Note de musique TikTok, en monochrome comme l'icône Instagram voisine.
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden focusable="false" className="shrink-0" fill="currentColor">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
    </svg>
  );
}
