import { ShieldCheck, Headphones, Gem, Star, Clock } from "lucide-react";

const items = [
  { Icon: ShieldCheck, title: "Voyages sécurisés",            desc: "Votre sécurité, notre priorité"      },
  { Icon: Headphones,  title: "Assistance 24/7",              desc: "Une équipe toujours à vos côtés"     },
  { Icon: Gem,         title: "Expériences uniques",          desc: "Des voyages authentiques et exclusifs"},
  { Icon: Clock,       title: "Départs garantis",             desc: "Réservation flexible et remboursable" },
  { Icon: Star,        title: "Accompagnement sur mesure",    desc: "Des conseils d'experts locaux"        },
];

export function Benefits() {
  return (
    <section aria-label="Nos avantages" className="bg-white border-b border-[#ede6dc]">
      <div className="max-w-[1280px] mx-auto px-[4%]" style={{ padding: "52px 4% 36px" }}>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <span className="h-px flex-1 max-w-[60px] bg-[#d9cfc0]" />
          <span className="text-[10px] font-bold tracking-[0.35em] text-[#a87627] uppercase">
            Pourquoi nous choisir
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-[#d9cfc0]" />
        </div>

        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map(({ Icon, title, desc }) => (
            <article key={title} className="flex flex-col items-center text-center group">
              {/* Icon circle */}
              <span className="w-12 h-12 rounded-full bg-[#fdf3dc] flex items-center justify-center mb-3 group-hover:bg-[#f5b63f]/20 transition-colors duration-200 flex-shrink-0">
                <Icon size={22} className="text-[#b07d21]" strokeWidth={1.6} />
              </span>
              <h3 className="text-[12px] font-bold text-ink leading-[1.3] mb-1">{title}</h3>
              <p className="text-[10.5px] text-muted leading-[1.5]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
