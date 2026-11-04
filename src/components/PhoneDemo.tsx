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

/** Exemple fictif dessiné en HTML. Aucun commerce réel. */
export default function PhoneDemo({ demo }: { demo: Demo }) {
  return (
    <figure className="mx-auto w-full max-w-[19rem]">
      <div className="relative border-4 border-ink bg-white">
        <span className="absolute -top-4 left-3 bg-tomato px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">
          {demo.label}
        </span>
        <div className="bg-green px-5 pb-6 pt-8 text-paper">
          <p className="font-display text-3xl leading-none">{demo.name}</p>
          <p className="mt-2 text-softOnGreen">{demo.tagline}</p>
        </div>
        <div className="space-y-5 p-5">
          <div>
            <p className="label text-soft">{demo.hoursTitle}</p>
            <p className="mt-1">{demo.hours}</p>
          </div>
          <p className="leader font-bold">
            <span>{demo.dish}</span>
            <span>{demo.dishPrice}</span>
          </p>
          <span className="block border-2 border-tomato bg-tomato px-4 py-3 text-center font-display uppercase text-white">
            {demo.book}
          </span>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-soft">{demo.caption}</figcaption>
    </figure>
  );
}
