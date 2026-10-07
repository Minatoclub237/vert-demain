import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { T } from '@/lib/i18n';
import { Blanc } from '@/components/ui/Vide';
import { MESURE_ACTIVE } from '@/lib/mesure';

// Identification vérifiée le 06/10/2026 dans le répertoire SIRENE (recherche-entreprises
// .api.gouv.fr) : Clément Lasfont, entrepreneur individuel, SIREN 890 178 940, siège
// 29 avenue du Belvédère 91800 Brunoy (SIRET …00023, actif). Clé de TVA FR53 recalculée.
//
// TODO client — à demander à Clément Lasfont puis à inscrire ici :
//   1. N° de déclaration services à la personne (SAP), condition du crédit d'impôt
//      annoncé sur tout le site. Emplacement laissé vide ci-dessous.
//   2. Médiateur de la consommation (nom, adresse, site) : obligatoire pour la vente
//      aux particuliers (art. L.612-1 du Code de la consommation). Emplacement vide.
//   3. Immatriculation : « R.C.S. Évry » est repris de son site actuel, non confirmé
//      par SIRENE (activité principale déclarée : 62.01Z, programmation informatique).
//      À faire vérifier et mettre à jour par le client.
//   4. Assureur et n° de contrat, s'il souhaite les afficher.

const MEDIATEUR = '';
const NUMERO_SAP = '';

function Bloc({
  titre,
  numero,
  ancre,
  children,
}: {
  titre: string;
  numero: string;
  ancre?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={ancre} className="scroll-mt-6 border-t border-sapin/10 py-9">
      <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-citron-dark">{numero}</p>
          <h2 className="mt-1 text-lg font-semibold leading-tight text-sapin sm:text-xl">{titre}</h2>
        </div>
        <div className="max-w-[46rem] space-y-3 text-[16px] leading-[1.7] text-sapin/75">{children}</div>
      </div>
    </section>
  );
}

const A = 'font-medium text-citron-dark underline underline-offset-2';
const MAIL = 'clement.vertdemain@gmail.com';

export default function MentionsLegales() {
  const t = T();
  const g = t.legal;

  const identite: [string, React.ReactNode][] = [
    [g.etiquettes.editeur, 'Clément Lasfont'],
    [g.etiquettes.forme, g.formeValeur],
    [g.etiquettes.nomUsage, 'Vert Demain'],
    [g.etiquettes.adresse, g.adresseValeur],
    [g.etiquettes.siret, '890 178 940 00023'],
    [g.etiquettes.rcs, 'R.C.S. Évry 890 178 940'],
    [g.etiquettes.tva, 'FR53 890 178 940'],
    [g.etiquettes.sap, NUMERO_SAP || <Blanc />],
    [g.etiquettes.responsable, 'Clément Lasfont'],
  ];

  return (
    <main className="min-h-screen bg-creme font-inter">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-sapin/65 transition-colors hover:text-sapin"
          >
            <ArrowLeft size={15} />
            {t.commun.retourSite}
          </a>
          <img src="/logo-sapin.svg" alt="Vert Demain" width={92} height={48} className="h-11 w-auto" />
        </div>

        <header className="mt-10 max-w-[46rem]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-citron-dark">{g.kicker}</p>
          <h1 className="mt-3 font-titre text-[clamp(2rem,6vw,3.6rem)] font-bold uppercase leading-[0.95] text-sapin">
            {g.titre} <span className="text-citron-dark">{g.titreAccent}</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[1.7] text-sapin/65">{g.intro}</p>
        </header>

        <div className="mt-12">
          <Bloc numero="01" titre={g.editeurTitre}>
            <p>{g.editeurTexte}</p>
            <dl className="mt-5 overflow-hidden rounded-xl border border-sapin/10 bg-white/60">
              {identite.map(([label, valeur], i) => (
                <div
                  key={label}
                  className={`grid gap-1 px-4 py-3 sm:grid-cols-[18rem_1fr] sm:gap-4 ${i ? 'border-t border-sapin/10' : ''}`}
                >
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-sapin/50">{label}</dt>
                  <dd className="text-[15px] font-medium text-sapin">{valeur}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-2.5 text-[15px]">
              <a href="tel:+33679482492" className="flex items-center gap-2 text-sapin transition-colors hover:text-citron-dark">
                <Phone size={15} className="shrink-0 text-citron-dark" />
                {t.commun.telephone}
              </a>
              <a href={`mailto:${MAIL}`} className="flex items-center gap-2 text-sapin transition-colors hover:text-citron-dark">
                <Mail size={15} className="shrink-0 text-citron-dark" />
                {MAIL}
              </a>
              <span className="flex items-start gap-2 text-sapin/75">
                <MapPin size={15} className="mt-1 shrink-0 text-citron-dark" />
                {g.adresseValeur}
              </span>
            </div>
          </Bloc>

          <Bloc numero="02" titre={g.activitesTitre}>
            <p>{g.activitesTexte}</p>
            <p>{g.activitesSuite}</p>
          </Bloc>

          <Bloc numero="03" titre={g.assurancesTitre}>
            <p>{g.assurances1}</p>
          </Bloc>

          <Bloc numero="04" titre={g.hebergementTitre}>
            <p>
              {g.hebergementTexte} <strong className="font-medium text-sapin">Vercel Inc.</strong>, 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={A}>
                vercel.com
              </a>.
            </p>
          </Bloc>

          <Bloc numero="05" titre={g.proprieteTitre}>
            <p>{g.propriete1}</p>
            <p>{g.propriete2}</p>
          </Bloc>

          <Bloc numero="06" titre={g.donneesTitre} ancre="donnees">
            <p>{g.donnees1}</p>
            <p>{g.donnees2}</p>
            <p>
              {g.donnees3}{' '}
              <a href={`mailto:${MAIL}?subject=RGPD`} className={A}>
                {MAIL}
              </a>.
            </p>
            <p>
              {g.donnees4}{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={A}>
                cnil.fr
              </a>.
            </p>
          </Bloc>

          <Bloc numero="07" titre={g.cookiesTitre}>
            <p>{g.cookies1}</p>
            <p>{g.cookies2}</p>
            {MESURE_ACTIVE && <p>{g.cookies3}</p>}
          </Bloc>

          <Bloc numero="08" titre={g.litigesTitre}>
            <p>{g.litiges1}</p>
            <p>
              {g.litiges2} {MEDIATEUR || <Blanc className="w-64" />}
            </p>
            <p>{g.litiges3}</p>
          </Bloc>

          <Bloc numero="09" titre={g.responsabiliteTitre}>
            <p>{g.responsabilite1}</p>
            <p>{g.responsabilite2}</p>
          </Bloc>
        </div>

        <footer className="border-t border-sapin/10 pt-8">
          <p className="text-[13px] text-sapin/50">{g.maj}</p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sapin px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-citron transition-colors hover:bg-sapin-deep"
          >
            <ArrowLeft size={14} />
            {t.commun.retourSite}
          </a>
        </footer>
      </div>
    </main>
  );
}
