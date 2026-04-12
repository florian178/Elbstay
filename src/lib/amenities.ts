export interface AmenityCategory {
  title: string;
  icon: string; // Now refers to a Lucide icon name
  items: string[];
}

export const urbanAmenities: AmenityCategory[] = [
  {
    title: "Badezimmer",
    icon: "Bath",
    items: [
      "Badewanne",
      "Föhn",
      "Reinigungsprodukte",
      "Shampoo",
      "Seife oder Duschgel",
      "Warmwasser"
    ]
  },
  {
    title: "Schlafzimmer und Wäsche",
    icon: "Bed",
    items: [
      "Kleiderbügel",
      "Bettwäsche",
      "Fensterverdunklung",
      "Bügeleisen",
      "Kleiderschrank"
    ]
  },
  {
    title: "Unterhaltung",
    icon: "Tv",
    items: ["TV", "Bücher und Lesematerial"]
  },
  {
    title: "Für Familien",
    icon: "Baby",
    items: [
      "Babybett",
      "Reisebett für Kinder (auf Anfrage)",
      "Kinderbücher und Spielzeug",
      "Hochstuhl (auf Anfrage)",
      "Brettspiele"
    ]
  },
  {
    title: "Heizung & Klima",
    icon: "Thermometer",
    items: ["Zentralheizung"]
  },
  {
    title: "Internet und Büro",
    icon: "Wifi",
    items: ["WLAN", "Arbeitsplatz"]
  },
  {
    title: "Sicheres Zuhause",
    icon: "ShieldCheck",
    items: ["Rauchmelder", "Feuerlöscher", "Erste-Hilfe-Set"]
  },
  {
    title: "Küche und Esszimmer",
    icon: "Utensils",
    items: [
      "Küche zur Eigenverpflegung",
      "Kühlschrank & Gefrierschrank",
      "Mikrowelle",
      "Spülmaschine",
      "Herd & Backofen",
      "Grundausstattung (Öl, Salz, Pfeffer)",
      "Geschirr & Besteck",
      "Kaffeemaschine & Wasserkocher",
      "Weingläser",
      "Toaster & Backblech",
      "Esstisch"
    ]
  },
  {
    title: "Rund um die Unterkunft",
    icon: "DoorOpen",
    items: ["Privater Eingang (Straßenzugang)"]
  },
  {
    title: "Parken und Zugang",
    icon: "Car",
    items: [
      "Kostenfreie Parkplätze auf der Straße",
      "Unterkunft auf einer Ebene (keine Treppen)"
    ]
  },
  {
    title: "Services",
    icon: "Bell",
    items: [
      "Haustiere erlaubt",
      "Langzeitaufenthalte möglich",
      "Eigenständiger Check-in (Schlüsselbox)"
    ]
  }
];

export const premiumAmenities: AmenityCategory[] = [
  {
    title: "Malerischer Ausblick",
    icon: "Sunrise",
    items: ["Blick auf die Skyline der Stadt"]
  },
  {
    title: "Badezimmer",
    icon: "Bath",
    items: [
      "Badewanne",
      "Föhn",
      "Reinigungsprodukte",
      "Shampoo & Duschgel",
      "Warmwasser"
    ]
  },
  {
    title: "Schlafzimmer und Wäsche",
    icon: "Bed",
    items: [
      "Waschmaschine (im Gebäude)",
      "Trockner (im Gebäude)",
      "Kleiderbügel",
      "Bettwäsche",
      "Fensterverdunklung",
      "Bügeleisen",
      "Aufbewahrung von Kleidung"
    ]
  },
  {
    title: "Unterhaltung",
    icon: "Tv",
    items: ["Smart-TV", "Bücher und Lesematerial"]
  },
  {
    title: "Für Familien",
    icon: "Baby",
    items: [
      "Babybett & Kinderreisebett",
      "Kinderbücher und Spielzeug",
      "Hochstuhl",
      "Brettspiele",
      "Spielplatz im Freien"
    ]
  },
  {
    title: "Heizung & Klima",
    icon: "Thermometer",
    items: ["Zentralheizung"]
  },
  {
    title: "Internet und Büro",
    icon: "Wifi",
    items: ["High-Speed WLAN", "Arbeitsplatz"]
  },
  {
    title: "Sicheres Zuhause",
    icon: "ShieldCheck",
    items: ["Rauchmelder", "Feuerlöscher", "Erste-Hilfe-Set"]
  },
  {
    title: "Küche und Esszimmer",
    icon: "Utensils",
    items: [
      "Voll ausgestattete Küche",
      "Kühlschrank & Gefrierschrank",
      "Mikrowelle",
      "Geschirrspüler",
      "Herd & Backofen",
      "Grundausstattung (Öl, Salz, Pfeffer)",
      "Kaffeemaschine & Wasserkocher",
      "Weingläser",
      "Toaster & Backblech"
    ]
  },
  {
    title: "Außenbereiche",
    icon: "TreeDeciduous",
    items: [
      "Gemeinsam genutzter Innenhof oder Balkon",
      "Gartenmöbel",
      "Essbereich im Freien"
    ]
  },
  {
    title: "Parken und Zugang",
    icon: "Car",
    items: [
      "Kostenloser Parkplatz auf dem Grundstück",
      "Aufzug im Gebäude",
      "Unterkunft auf einer Ebene (barrierearm)"
    ]
  },
  {
    title: "Rund um die Unterkunft",
    icon: "DoorOpen",
    items: ["Privater Eingang"]
  },
  {
    title: "Services",
    icon: "Bell",
    items: [
      "Haustiere erlaubt",
      "Langzeitaufenthalte möglich (28+ Tage)",
      "Eigenständiger Check-in (Schlüsselbox)"
    ]
  }
];
