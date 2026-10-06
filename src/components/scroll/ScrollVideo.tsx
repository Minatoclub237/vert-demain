// Fond de la scène qui défile. Emplacement vidéo vide : à reprendre d'une vidéo du
// client (TikTok / Instagram). Tant que SRC est vide, un dégradé vert sapin le remplace.
const SRC = '';
const POSTER = '';

export default function ScrollVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-sapin-deep pointer-events-none">
      {SRC ? (
        <video
          src={SRC}
          poster={POSTER || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(191,255,86,0.14),transparent_55%),radial-gradient(ellipse_at_15%_85%,rgba(191,255,86,0.08),transparent_50%),linear-gradient(160deg,#1a4203_0%,#133201_45%,#0C2100_100%)]" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.14)_28%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.52)_100%)]" />
    </div>
  );
}
