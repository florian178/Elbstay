"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ApartmentCard } from "@/components/apartment/ApartmentCard";
import {
  Wifi, Tv, UtensilsCrossed, Coffee, WashingMachine, Key, BedDouble, Bath,
  MapPin, Star, Percent, HeartHandshake, PhoneCall, ChevronDown,
  Landmark, TreePine, Bike, Music,
  CalendarCheck, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ─── DATA ─── */

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

const AMENITIES = [
  { icon: Wifi, label: "Highspeed-WLAN" },
  { icon: Tv, label: "55\" Smart-TV" },
  { icon: UtensilsCrossed, label: "Voll ausgestattete Küche" },
  { icon: Coffee, label: "Kaffeemaschine" },
  { icon: WashingMachine, label: "Waschmaschine" },
  { icon: Key, label: "Self-Check-in 24/7" },
  { icon: BedDouble, label: "Premium-Bettwäsche" },
  { icon: Bath, label: "Handtücher & Pflegeprodukte" },
];

const REVIEWS = [
  {
    name: "Sarah & Markus",
    date: "März 2026",
    stars: 5,
    text: "Ein wunderschönes Apartment mit Liebe zum Detail. Die Lage direkt an der Elbe ist ein Traum – wir haben jeden Morgen den Sonnenaufgang genossen. Absolut empfehlenswert!",
  },
  {
    name: "Dr. Thomas Richter",
    date: "Februar 2026",
    stars: 5,
    text: "Perfekt für meinen Geschäftsaufenthalt. Schnelles WLAN, ruhige Lage und trotzdem alles fußläufig erreichbar. Die Direktbuchung war unkompliziert und günstig.",
  },
  {
    name: "Julia & Freundinnen",
    date: "Januar 2026",
    stars: 5,
    text: "Unser Mädels-Wochenende in Dresden war dank ElbStay einfach perfekt. Die Wohnung ist wunderschön, die Küche top ausgestattet und die Altstadt nur Minuten entfernt.",
  },
];

const DRESDEN_HIGHLIGHTS = [
  {
    icon: Landmark,
    title: "Frauenkirche & Altstadt",
    text: "Barocke Architektur, Semperoper und der berühmte Striezelmarkt – alles in 10 Minuten zu Fuß.",
  },
  {
    icon: TreePine,
    title: "Elbwiesen & Natur",
    text: "Direkt vor der Tür: Spaziergänge entlang der Elbe mit Blick auf das Elbflorenz-Panorama.",
  },
  {
    icon: Bike,
    title: "Elbradweg",
    text: "Einer der schönsten Radwege Europas führt direkt an unseren Apartments vorbei.",
  },
  {
    icon: Music,
    title: "Dresdner Neustadt",
    text: "Das kreative Szeneviertel mit unzähligen Cafés, Boutiquen und Bars – nur wenige Minuten entfernt.",
  },
];

const FAQS = [
  {
    q: "Wie funktioniert der Check-in?",
    a: "Sie erhalten vor Ihrer Anreise einen digitalen Zugangscode per E-Mail. Damit können Sie jederzeit – 24 Stunden am Tag, 7 Tage die Woche – selbstständig einchecken. Kein Schlüssel, keine Wartezeit.",
  },
  {
    q: "Gibt es Parkmöglichkeiten?",
    a: "Ja, in unmittelbarer Nähe befinden sich mehrere öffentliche Parkplätze und Parkhäuser. Auf Anfrage vermitteln wir Ihnen gerne einen Stellplatz.",
  },
  {
    q: "Sind Haustiere erlaubt?",
    a: "In unseren Apartments sind leider keine Haustiere gestattet, um allen Gästen ein sauberes und allergenfreies Umfeld zu bieten.",
  },
  {
    q: "Wie ist die Stornierungsregelung?",
    a: "Bei Direktbuchung bieten wir eine flexible Stornierung bis 7 Tage vor Anreise an. Danach berechnen wir 50% des Gesamtpreises. Details finden Sie in unseren AGB.",
  },
  {
    q: "Wie komme ich am besten nach Dresden?",
    a: "Dresden ist hervorragend per Bahn (Hauptbahnhof in 15 Min.), Auto (A4/A17) und Flugzeug (Flughafen Dresden, 20 Min.) erreichbar. Vom Bahnhof fahren Sie mit der Straßenbahn direkt zu uns.",
  },
];

/* ─── ANIMATION VARIANTS ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ─── FAQ ITEM ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── PAGE ─── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dresden_hero_user_final.jpg"
            alt="Dresden Skyline bei Sonnenuntergang"
            fill
            className="object-cover scale-105"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm tracking-[0.2em] uppercase font-medium mb-8 shadow-lg"
          >
            Boutique Apartments in Dresden
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg leading-[1.1] tracking-tight"
          >
            Ankommen.<br className="hidden sm:block" />
            Durchatmen.<br className="hidden sm:block" />
            Dresden erleben.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Stilvolle Ferienwohnungen an der Elbe – für Paare, Städtereisende
            und alle, die Dresden von seiner schönsten Seite entdecken möchten.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-base h-14 px-10 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                Verfügbarkeit prüfen
              </Button>
            </Link>
            <Link href="#apartments" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-base h-14 px-10 rounded-full bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-foreground transition-all duration-300 shadow-xl"
              >
                Apartments entdecken
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          2. EMOTIONALER INTRO-TEXT
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 md:px-6 text-center"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
            Willkommen bei ElbStay
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Mehr als eine Unterkunft –<br className="hidden sm:block" /> ein Gefühl von Zuhause.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Unsere Apartments verbinden durchdachtes Design mit dem Charme Dresdens.
            Ob ein romantisches Wochenende zu zweit, ein Städtetrip mit Freunden oder
            eine ruhige Auszeit vom Alltag – bei ElbStay finden Sie den perfekten Ort,
            um Dresden zu erleben und sich gleichzeitig wie zu Hause zu fühlen.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          3. AUSSTATTUNG (Icon-Grid)
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Ausstattung
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Alles, was Sie brauchen.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Unsere Apartments sind vollständig ausgestattet, damit Sie sich auf das Wesentliche konzentrieren können: Ihre Zeit in Dresden genießen.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
          >
            {AMENITIES.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. LAGE
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Text */}
            <motion.div variants={fadeUp}>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
                Standort
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Zentral an der Elbe.<br className="hidden md:block" /> Mitten im Herzen Dresdens.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Unsere Apartments liegen in einer der begehrtesten Lagen Dresdens – direkt an der Elbe
                und nur wenige Gehminuten von Frauenkirche, Zwinger und Semperoper entfernt.
                Die belebte Dresdner Neustadt mit ihren Cafés und Boutiquen ist ebenfalls fußläufig erreichbar.
              </p>
              <div className="space-y-4">
                {[
                  "5 Min. zu Fuß zur Frauenkirche",
                  "10 Min. zum Zwinger & Semperoper",
                  "Elbradweg direkt vor der Tür",
                  "Straßenbahn-Haltestelle in 2 Min.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/dresden_hero_user_final.jpg"
                alt="Dresden Lage – Blick auf Elbe und Altstadt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground text-sm">Dresden · Innere Altstadt</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. DIREKTBUCHUNGS-VORTEILE + APARTMENTS
      ═══════════════════════════════════════════ */}
      <section id="apartments" className="py-24 md:py-32 bg-muted/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Direktbuchungs-Vorteile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Direkt buchen & sparen
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Warum direkt bei uns buchen?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Sie finden uns auch auf Airbnb und Booking.com – aber direkt bei uns erhalten Sie immer den besten Preis und persönlichen Service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Percent,
                title: "Bestpreis-Garantie",
                text: "Sparen Sie die Plattform-Gebühren. Direkt bei uns buchen Sie immer mindestens 7% günstiger als auf Airbnb oder Booking.",
              },
              {
                icon: HeartHandshake,
                title: "Flexible Stornierung",
                text: "Kostenlose Stornierung bis 7 Tage vor Anreise. Bei uns buchen Sie ohne Risiko und mit maximaler Flexibilität.",
              },
              {
                icon: PhoneCall,
                title: "Persönlicher Kontakt",
                text: "Kein Bot, keine Hotline. Wir sind echte Gastgeber aus Dresden und bei Fragen direkt für Sie erreichbar.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-background rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Apartment-Karten */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                Unsere Apartments
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Finden Sie Ihr Zuhause auf Zeit
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed pb-1">
              Jedes Apartment ein Unikat – mit viel Liebe zum Detail eingerichtet.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {APARTMENTS.map((apt) => (
              <motion.div key={apt.id} variants={fadeUp} className="h-full">
                <ApartmentCard {...apt} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. BEWERTUNGEN
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Gästestimmen
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Was unsere Gäste sagen
            </h2>
            <div className="flex items-center justify-center gap-2 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
              <span className="ml-2 text-foreground font-semibold text-lg">5.0</span>
              <span className="text-muted-foreground ml-1">/ 5</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-muted/40 rounded-2xl p-8 border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-border/40 pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. DRESDEN-ERLEBNIS
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Entdecken
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Dresden erleben
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Barock, Kultur und Natur – direkt vor Ihrer Haustür. Entdecken Sie eine der
              schönsten Städte Deutschlands von der besten Ausgangslage.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {DRESDEN_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Gut zu wissen
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="border-t border-border/60"
          >
            {FAQS.map((faq, idx) => (
              <FaqItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FINALER CTA
      ═══════════════════════════════════════════ */}
      <section id="book" className="py-24 md:py-32 bg-[#2d2d2d] text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/dresden_hero_user_final.jpg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm tracking-[0.15em] uppercase font-medium mb-8"
          >
            Jetzt buchen
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Bereit für Dresden?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Sichern Sie sich jetzt Ihren Wunschtermin und erleben Sie Dresden
            von seiner schönsten Seite – direkt an der Elbe, zum besten Preis.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="/apartments/urban#book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-base h-14 px-10 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 bg-white text-[#2d2d2d] hover:bg-white/90">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Verfügbarkeit prüfen
              </Button>
            </Link>
            <Link href="#apartments" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-base h-14 px-10 rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Apartments ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/50 text-sm">
            Auch verfügbar auf{" "}
            <span className="text-white/70 font-medium">Airbnb</span> und{" "}
            <span className="text-white/70 font-medium">Booking.com</span>{" "}
            – aber direkt bei uns immer zum besten Preis.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
