import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { Blanc } from '@/components/ui/Vide';
import { T } from '@/lib/i18n';

const EMAIL = 'clement.vertdemain@gmail.com';

// Les listes du formulaire viennent du dictionnaire.

export default function Contact() {
  const t = T();
  const [sent, setSent] = useState(false);

  // Pas de backend sur cette maquette : la demande part dans le client mail
  // du visiteur, déjà rédigée.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const corps = [
      `${t.contact.champNom} : ${get('nom')}`,
      `${t.contact.champEmail} : ${get('email')}`,
      `${t.contact.champTel} : ${get('telephone')}`,
      `${t.contact.champLieu} : ${get('lieu')}`,
      `${t.contact.champProjet} : ${get('type')}`,
      `${t.contact.champDelai} : ${get('delai')}`,
      '',
      `${t.contact.champDescription} :`,
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Demande de devis — ${get('type')} — ${get('nom')}`
    )}&body=${encodeURIComponent(corps)}`;

    setSent(true);
  };

  const field =
    'w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-[14px] text-sapin placeholder:text-sapin/40 outline-none transition-colors focus:border-sapin';
  const label = 'block text-[11px] font-semibold uppercase tracking-[0.12em] text-sapin/60';

  return (
    <section id="contact" className="relative z-[3] w-full bg-white font-inter text-sapin">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-citron-dark">
              {t.contact.kicker}
            </p>
            <TexteRevele
              as="h2"
              texte={t.contact.titre}
              accent={t.contact.titreAccent}
              accentClass="text-citron-dark"
              className="mt-4 font-titre font-bold uppercase leading-[0.95] text-[clamp(2rem,5vw,3.4rem)]"
            />
            <p className="mt-5 max-w-[30rem] text-[16px] leading-[1.6] text-sapin/75">
              {t.contact.intro}
            </p>

            <div className="mt-10 flex flex-col divide-y divide-dashed divide-neutral-300 border-y border-dashed border-neutral-300">
              <a
                href="tel:+33679482492"
                className="flex items-center gap-3 py-4 text-[15px] transition-colors hover:text-citron-dark"
              >
                <Phone size={17} className="shrink-0 text-citron-dark" />
                {t.commun.telephone}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 py-4 text-[15px] transition-colors hover:text-citron-dark"
              >
                <Mail size={17} className="shrink-0 text-citron-dark" />
                {EMAIL}
              </a>
              <p className="flex items-center gap-3 py-4 text-[15px] text-sapin/70">
                <Clock size={17} className="shrink-0 text-citron-dark" />
                {/* Horaires à confirmer avec Clément : emplacement vide. */}
                {t.contact.horaires || <Blanc className="w-56" />}
              </p>
              <p className="flex items-center gap-3 py-4 text-[15px] text-sapin/70">
                <MapPin size={17} className="shrink-0 text-citron-dark" />
                {t.contact.zone}
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {t.contact.puces.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-sapin/75">
                  <span className="mt-[7px] h-1 w-1 shrink-0 bg-sapin" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-neutral-200 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="nom">
                    {t.contact.champNom}
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    required
                    autoComplete="name"
                    placeholder={t.contact.placeholderNom}
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="telephone">
                    {t.contact.champTel}
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={t.contact.placeholderTel}
                    className={`mt-2 ${field}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="email">
                    {t.contact.champEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t.contact.placeholderEmail}
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="lieu">
                    {t.contact.champLieu}
                  </label>
                  <input
                    id="lieu"
                    name="lieu"
                    required
                    placeholder={t.contact.placeholderLieu}
                    className={`mt-2 ${field}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="type">
                    {t.contact.champProjet}
                  </label>
                  <select id="type" name="type" required defaultValue="" className={`mt-2 ${field}`}>
                    <option value="" disabled>
                      {t.contact.selectionner}
                    </option>
                    {t.contact.projets.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="delai">
                    {t.contact.champDelai}
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    required
                    defaultValue=""
                    className={`mt-2 ${field}`}
                  >
                    <option value="" disabled>
                      {t.contact.selectionner}
                    </option>
                    {t.contact.delais.map((delai) => (
                      <option key={delai} value={delai}>
                        {delai}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={label} htmlFor="message">
                  {t.contact.titreProjet}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.placeholderDescription}
                  className={`mt-2 resize-y ${field}`}
                />
              </div>

              <label className="flex items-start gap-3 text-[12px] leading-[1.5] text-sapin/60">
                <input
                  type="checkbox"
                  name="consentement"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-sapin"
                />
                {t.contact.consentement}
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-sapin px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-citron transition-colors hover:bg-sapin-deep"
              >
                {t.contact.envoyer}
                <ArrowUpRight size={16} />
              </button>

              <p className="text-[12px] text-sapin/50" aria-live="polite">
                {sent ? t.contact.confirmation : t.contact.apresEnvoi}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
