"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ApartmentCard } from "@/components/apartment/ApartmentCard";
import { ShieldCheck, Percent, MessageCircle, MapPin, Wifi, Key, Sparkles, Coffee } from "lucide-react";
import { motion } from "framer-motion";

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

// Animation variants
const fadeUpVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dresden_hero_ultra_highres.png"
            alt="Dresden Skyline Sunset"
            fill
            className="object-cover scale-105 animate-in fade-in duration-1000"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          {/* Overlay gradient - heavily darkened at the bottom for crisp white text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.span variants={fadeUpVar} className="inline-block py-1.5 px-4 rounded-full bg-background/20 backdrop-blur-md border border-white/20 text-white text-sm tracking-[0.2em] uppercase font-medium mb-8 shadow-xl">
              Boutique Apartments
            </motion.span>
            <motion.h1 variants={fadeUpVar} className="font-serif tracking-tight text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Stilvoll wohnen <br className="hidden md:block"/> in Dresden
            </motion.h1>
            <motion.p variants={fadeUpVar} className="text-lg md:text-2xl text-white/95 mb-10 font-medium drop-shadow-md leading-relaxed">
              Erleben Sie exklusiven Wohnkomfort in bester Lage. <br className="hidden sm:block"/> Buchen Sie direkt bei uns für den besten Preis.
            </motion.p>
            <motion.div variants={fadeUpVar} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="#apartments" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-base h-14 px-8 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                  Apartments ansehen
                </Button>
              </Link>
              <Link href="#book" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-base h-14 px-8 rounded-full bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-foreground transition-all duration-300 shadow-xl">
                  Verfügbarkeit prüfen
                </Button>
              </Link>
            </motion.div>
            
            {/* Trust Badges directly on Hero */}
            <motion.div variants={fadeUpVar} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/20">
              {[
                { icon: MapPin, text: "Beste Lage" },
                { icon: Sparkles, text: "Premium Design" },
                { icon: Percent, text: "Keine Gebühren" },
                { icon: Key, text: "24/7 Check-in" },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-2 text-white/90">
                  <feature.icon className="h-6 w-6 opacity-80" />
                  <span className="text-sm md:text-base font-semibold">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Highlights */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-[0.02] pointer-events-none">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#dots)"></rect></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Ihre Vorteile</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Warum ElbStay?</h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Mehr als nur ein Schlafplatz. Wir bieten durchdachtes Design, kompromisslosen Komfort und Features, die Ihren Aufenthalt in Dresden unvergesslich machen.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
          >
            {/* Box 1: Lage */}
            <motion.div variants={fadeUpVar} className="col-span-1 md:col-span-2 row-span-1 bg-muted rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-border/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center shadow-sm">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Zentrale Bestlage</h3>
                  <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                    Ob Frauenkirche, Zwinger oder Szeneviertel – von unseren Apartments erreichen Sie alle Highlights in wenigen Minuten.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Check-in */}
            <motion.div variants={fadeUpVar} className="col-span-1 row-span-1 bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                <Key className="h-32 w-32" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Smart Check-in</h3>
                <p className="opacity-90 text-lg leading-relaxed">
                  Maximal flexibel anreisen mittels digitalem Zugangscode. Keine Wartezeiten auf Schlüssel.
                </p>
              </div>
            </motion.div>

            {/* Box 3: Ausstattung */}
            <motion.div variants={fadeUpVar} className="col-span-1 row-span-1 bg-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-border/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                <Wifi className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">High-Speed WLAN</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ultraschnelles Internet & Smart-TVs für entspanntes Streaming oder reibungsloses Home-Office.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Direktbuchung */}
            <motion.div variants={fadeUpVar} className="col-span-1 md:col-span-2 row-span-1 bg-[#1A1F2C] text-white rounded-[2rem] p-8 md:p-10 flex border border-border/40 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-[url('/images/dresden_skyline_sunset.png')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative z-10 w-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Percent className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-white text-[#1A1F2C] font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
                    Exklusiv hier
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">7% Günstiger buchen</h3>
                  <p className="text-white/80 text-lg max-w-lg leading-relaxed">
                    Warum Plattform-Gebühren zahlen? Buchen Sie direkt über unsere Website und sparen Sie bares Geld bei voller Flexibilität.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartments" className="py-24 md:py-32 bg-muted/30 border-t border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVar} 
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Unterkünfte</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Unsere Welten</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed pb-2">
              Jedes Apartment ein Unikat. Finden Sie das perfekte Zuhause auf Zeit für Ihre Ansprüche in Dresden.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer} 
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {APARTMENTS.map((apt) => (
              <motion.div key={apt.id} variants={fadeUpVar} className="h-full">
                <ApartmentCard {...apt} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Elements Bottom */}
      <section className="py-20 bg-background border-t border-border/50 overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer} 
          className="max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
            <motion.div variants={fadeUpVar} className="flex flex-col items-center pt-8 md:pt-0 pb-8 md:pb-0 px-4">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Sichere Buchung</h4>
              <p className="text-muted-foreground">Einfache und absolut sichere Zahlung in Echtzeit via PayPal, Stripe oder Kreditkarte.</p>
            </motion.div>
            <motion.div variants={fadeUpVar} className="flex flex-col items-center py-8 md:py-0 px-4">
              <Coffee className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Voll Ausgestattet</h4>
              <p className="text-muted-foreground">Kaffeemaschine, frische Handtücher und Premium-Pflegeprodukte inklusive.</p>
            </motion.div>
            <motion.div variants={fadeUpVar} className="flex flex-col items-center pt-8 md:pt-0 px-4">
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Persönlicher Support</h4>
              <p className="text-muted-foreground">Wir sind echte Gastgeber aus Dresden und helfen bei Fragen gerne weiter.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
