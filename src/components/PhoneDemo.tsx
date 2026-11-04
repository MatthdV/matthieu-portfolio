type Demo = {
  label: string;
  caption: string;
  name: string;
  tagline: string;
  hoursTitle: string;
  hours: string;
  dish: string;
  dishPrice: string;
  book: string;
};

/**
 * Exemple fictif dessiné en HTML : une fenêtre d'ordinateur et un téléphone
 * qui la chevauche. Aucun commerce réel. Le domaine utilise le suffixe
 * réservé « .example », qui ne peut pas exister.
 */
export default function PhoneDemo({ demo }: { demo: Demo }) {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="relative pb-36 pt-6 sm:pb-40">
        <span className="absolute left-3 top-0 z-10 border-2 border-ink bg-tomato px-3 py-1 text-sm font-bold text-[#101010]">
          {demo.label}
        </span>

        {/* Ordinateur */}
        <div className="border-2 border-ink bg-card">
          <div className="border-b-2 border-ink bg-paper px-3 py-2 text-sm text-soft">
            chez-exemple.example
          </div>
          <div className="bg-green px-4 pb-4 pt-5 text-paper sm:px-5">
            <p className="font-display text-2xl leading-none sm:text-3xl">{demo.name}</p>
            <p className="mt-1 text-softOnGreen">{demo.tagline}</p>
          </div>
          <div className="grid gap-4 p-4 pb-16 sm:grid-cols-2 sm:p-5 sm:pb-12">
            <div>
              <p className="label text-soft">{demo.hoursTitle}</p>
              <p className="mt-1">{demo.hours}</p>
            </div>
            <div className="space-y-4">
              <p className="leader font-bold">
                <span>{demo.dish}</span>
                <span>{demo.dishPrice}</span>
              </p>
              <span className="block border-2 border-ink bg-tomato px-4 py-3 text-center font-sans font-semibold text-[#101010]">
                {demo.book}
              </span>
            </div>
          </div>
        </div>

        {/* Téléphone */}
        <div className="absolute bottom-0 right-3 w-40 border-2 border-ink bg-card shadow-[4px_4px_0_rgb(var(--c-ink))]">
          <div className="bg-green px-3 pb-3 pt-4 text-paper">
            <p className="font-display text-lg leading-none">{demo.name}</p>
          </div>
          <div className="space-y-3 p-3 text-sm">
            <p className="leader font-bold">
              <span>{demo.dish}</span>
              <span>{demo.dishPrice}</span>
            </p>
            <span className="block border-2 border-ink bg-tomato px-2 py-2 text-center text-sm font-semibold text-[#101010]">
              {demo.book}
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-soft">{demo.caption}</figcaption>
    </figure>
  );
}
