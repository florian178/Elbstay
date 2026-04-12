export interface Review {
  name: string;
  date: string;
  text: string;
  img: string; // Using pravatar IDs or unique strings
}

export const urbanReviews: Review[] = [
  { name: "Lukas & Sarah", date: "April 2026", text: "Perfekte Lage für einen Städtetrip! Die Wohnung ist super modern und sauber. Dass wir direkt vor der Tür parken konnten, war ein riesen Pluspunkt. Die Elbe ist nur einen Katzensprung entfernt.", img: " https://i.pravatar.cc/150?u=lukas" },
  { name: "Fam. Meyer", date: "März 2026", text: "Sehr kinderfreundlich! Das Reisebett und der Hochstuhl waren bereits aufgebaut. Die Sächsische Schweiz ist von hier aus super schnell erreichbar. Die Kinder haben den Spielplatz geliebt.", img: "https://i.pravatar.cc/150?u=meyer" },
  { name: "Prof. Dr. Arndt", date: "Februar 2026", text: "Ich war geschäftlich in Dresden und habe die Ruhe in der Wohnung sehr geschätzt. Die Ausstattung ist funktional und hochwertig. Der Online Check-in verlief vorbildlich professionell.", img: "https://i.pravatar.cc/150?img=68" }, // More professional looking
  { name: "Julia", date: "Januar 2026", text: "Stylisch eingerichtet und sehr gemütlich. Der Check-in mit der Schlüsselbox war total entspannt, auch wenn wir erst spät ankamen. Tolle Tipps für Bars in der Neustadt gab es auch noch.", img: "https://i.pravatar.cc/150?u=julia" },
  { name: "Christian", date: "Dezember 2025", text: "Tolle Wohnung, alles wie beschrieben. Sehr sauber und die Kommunikation war top. Komme gerne wieder!", img: "https://i.pravatar.cc/150?u=christian" },
  { name: "Hannah", date: "November 2025", text: "War zum Weihnachtsmarkt in Dresden. Die Anbindung mit der Bahn ist super. Die Wohnung war schön warm und weihnachtlich dekoriert.", img: "https://i.pravatar.cc/150?u=hannah" }
];

export const premiumReviews: Review[] = [
  { name: "Maximilian von Werthern", date: "April 2026", text: "Der Blick von der Dachterrasse bei Sonnenuntergang ist einfach unbezahlbar. Das Penthouse ist extrem luxuriös – wir haben uns wie im Hotel gefühlt. Exzellente Ausstattung.", img: "https://i.pravatar.cc/150?u=max" },
  { name: "Ehepaar Fischer", date: "März 2026", text: "Einzigartiges Wohndesign! Das Schlafzimmer oben mit Skyline-Blick ist ein Traum. Die Küche lässt keine Wünsche offen. Wir haben den Weinkühlschrank sehr genossen.", img: "https://i.pravatar.cc/150?img=52" },
  { name: "Clarissa Bloom", date: "Januar 2026", text: "Perfekter Ort für unser Team-Wochenende. Viel Platz, sehr edel und die Altstadt ist quasi um die Ecke. Ein echtes Highlight in Dresden für gehobene Ansprüche.", img: "https://i.pravatar.cc/150?u=clarissa" },
  { name: "Bastian", date: "Dezember 2025", text: "Habe hier meinen Geburtstag gefeiert. Der Essbereich ist riesig und die gesamte Atmosphäre der Maisonette ist spektakulär. Die Wendeltreppe zur Terrasse ist toll.", img: "https://i.pravatar.cc/150?u=bastian" },
  { name: "Dr. rer. nat. Wagner", date: "November 2025", text: "Hervorragende Architektur und sehr geschmackvolle Einrichtung. Die Lage zwischen Altstadt und Zentrum ist ideal. Ein sehr angenehmer Aufenthalt.", img: "https://i.pravatar.cc/150?img=12" }, // Professional look
  { name: "Elena", date: "Oktober 2025", text: "Wunderschön! Man sieht die Frauenkirche von der oberen Etage. Das Bett war das bequemste, das ich je in einem Airbnb hatte.", img: "https://i.pravatar.cc/150?u=elena" }
];
