import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ApartmentCard } from "@/components/apartment/ApartmentCard";
import { ShieldCheck, Percent, MessageCircle } from "lucide-react";

const APARTMENTS = [
  {
    id: "urban-1",
    name: "ElbStay Urban",
    type: "Urban" as const,
    description: "Modernes Design-Apartment im Herzen von Dresden. Perfekt für Paare und Business-Reisende, die Wert auf Stil und Komfort legen.",
    guests: 4,
    beds: "1 Bett + 1 Schlafcouch",
    size: 55,
    imageUrl: "/images/urban/airbnb-flo-5.jpg",
    priceFrom: 120,
  },
  {
    id: "premium-1",
    name: "ElbStay Premium",
    type: "Premium" as const,
    description: "Exklusives Penthouse mit weitläufiger Dachterrasse und Panoramablick über Dresden. Luxus und Erlebnis für Familien und Gruppen.",
    guests: 6,
    beds: "2 Betten + 1 Schlafcouch",
    size: 120,
    imageUrl: "/images/premium/floairbnb_-77.jpg",
    priceFrom: 280,
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dresden_premium_skyline.png"
            alt="Dresden Skyline Sunset"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-background/20 backdrop-blur-md border border-white/20 text-white text-sm tracking-widest uppercase font-medium mb-6 mt-16 md:mt-0 shadow-sm">
            Boutique Apartments
          </span>
          <h1 className="font-serif tracking-tight text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-md">
            Stilvoll wohnen <br className="hidden md:block"/> in Dresden
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
            Entdecken Sie exklusiven Wohnkomfort in bester Lage. Buchen Sie direkt bei uns für den besten Preis und persönlichen Service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#apartments">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Apartments ansehen
              </Button>
            </Link>
            <Link href="#book">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-background/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-foreground">
                Verfügbarkeit prüfen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Elements / Direct Booking Benefits */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Warum direkt buchen?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Profitieren Sie von exklusiven Vorteilen, wenn Sie Ihren Aufenthalt direkt über unsere Website reservieren.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bestpreisgarantie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sparen Sie sich teure Plattformgebühren. Bei uns buchen Sie garantiert immer zum günstigsten verfügbaren Preis.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sichere Echtzeit-Buchung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wir nutzen modernste Systeme. Ihre Buchung ist in Echtzeit bei uns im System sicher vermerkt & synchronisiert.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted border border-border/50 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Persönlicher Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wir sind persönlich für Sie da. Klären Sie Fragen oder individuelle Wünsche ganz einfach direkt mit uns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartments" className="py-20 md:py-32 bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Unterkünfte</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Unsere Welten</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md">
              Ob zentral im urbanen Trubel oder exklusiv über den Dächern der Stadt – finden Sie Ihr perfektes Zuhause auf Zeit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {APARTMENTS.map((apt) => (
              <ApartmentCard key={apt.id} {...apt} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary/5">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-[0.03]">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Erleben Sie Dresden von seiner schönsten Seite</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Sichern Sie sich jetzt Ihr Apartment und freuen Sie sich auf einen unvergesslichen Aufenthalt voller Komfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#book">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px] text-lg rounded-full h-14">
                Jetzt Verfügbarkeit prüfen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
