import { ChevronLeft, ChevronRight } from "lucide-react";

export function AvailabilityCalendar() {
  // A completely static visual layout mimicking the Airbnb 2-month view.
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  
  const renderMonth = (monthName: string, startDay: number, totalDays: number) => {
    const blanks = Array.from({ length: startDay }).map((_, i) => <div key={`b-${i}`} className="p-2"></div>);
    const dates = Array.from({ length: totalDays }).map((_, i) => {
       const day = i + 1;
       // Make some days visually "booked" (strike-through)
       const isBooked = (monthName === "April 2026" && [12, 13, 14, 28, 29].includes(day)) || (monthName === "Mai 2026" && [3, 4, 18, 19, 20].includes(day));
       
       return (
         <div key={day} className={`p-2 w-11 h-11 flex items-center justify-center font-medium text-sm transition-all
           ${isBooked ? 'text-muted-foreground/30 line-through' : 'text-foreground hover:border border-foreground rounded-full cursor-pointer hover:bg-muted/30'}
         `}>
           {day}
         </div>
       );
    });

    return (
      <div className="flex-1 w-full max-w-[340px] mx-auto md:mx-0">
         <h3 className="text-center font-semibold mb-6">{monthName}</h3>
         <div className="grid grid-cols-7 text-xs text-muted-foreground font-semibold mb-4 text-center">
           {days.map(d => <div key={d}>{d}</div>)}
         </div>
         <div className="grid grid-cols-7 place-items-center gap-y-1">
           {blanks}
           {dates}
         </div>
      </div>
    );
  };

  return (
    <section className="mb-4 w-full overflow-hidden relative">
      <h2 className="text-2xl font-semibold mb-2 font-serif">Wählen Sie Ihr Check-in-Datum</h2>
      <p className="text-muted-foreground mb-10 text-base">Mindestaufenthalt: 2 Nächte</p>
      
      <div className="relative">
        <div className="flex justify-between absolute -top-16 right-0 z-10 w-24">
            <button className="p-2 hover:bg-muted rounded-full transition-colors"><ChevronLeft className="w-5 h-5 text-muted-foreground" /></button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors"><ChevronRight className="w-5 h-5 text-foreground" /></button>
        </div>

        <div className="flex flex-col md:flex-row gap-12 w-full pt-2">
          {renderMonth("April 2026", 2, 30)}
          <div className="hidden md:block">
            {renderMonth("Mai 2026", 4, 31)}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-8">
         <button className="text-foreground font-semibold text-sm underline underline-offset-4 hover:text-muted-foreground transition">Datum löschen</button>
      </div>
    </section>
  );
}
