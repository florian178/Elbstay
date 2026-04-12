"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getDynamicRate, createReservation } from "@/lib/channel-manager";

interface BookingWidgetProps {
  propertyId: string;
  defaultPrice: number;
}

export function BookingWidget({ propertyId, defaultPrice }: BookingWidgetProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDateChange = async (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);

    if (start && end && new Date(end) > new Date(start)) {
      setLoadingPrice(true);
      try {
        const price = await getDynamicRate({ propertyId, startDate: start, endDate: end, guests });
        setTotalPrice(price);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingPrice(false);
      }
    } else {
      setTotalPrice(null);
    }
  };

  const handleBook = async () => {
    if (!startDate || !endDate) return;
    setIsBooking(true);
    try {
      const res = await createReservation({
        propertyId,
        startDate,
        endDate,
        guests,
        userName: "Gast",
        userEmail: "gast@example.com"
      });
      if (res.success) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsBooking(false);
    }
  };

  if (success) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center shadow-xl">
        <h3 className="font-serif text-2xl mb-3 text-primary font-bold">Verfügbar!</h3>
        <p className="text-muted-foreground mb-6">
          Wir leiten Sie sicher über unseren Channel Manager zu Stripe weiter...
        </p>
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-background border border-border/80 shadow-2xl rounded-2xl p-6 lg:p-8 sticky top-32" id="book">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <span className="text-3xl font-bold text-foreground">
            {totalPrice ? `${totalPrice}€` : `${defaultPrice}€`}
          </span>
          <span className="text-muted-foreground ml-1">
            {totalPrice ? "Gesamt" : "/ Nacht"}
          </span>
        </div>
        <div className="h-6">
          {loadingPrice && <span className="text-sm text-primary animate-pulse font-medium">Berechne...</span>}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          <div className="bg-background p-3 relative group focus-within:bg-muted/30 transition-colors">
            <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Check-in</label>
            <input 
              type="date" 
              className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              value={startDate}
              onChange={(e) => handleDateChange(e.target.value, endDate)}
            />
          </div>
          <div className="bg-background p-3 relative group focus-within:bg-muted/30 transition-colors">
            <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Check-out</label>
            <input 
              type="date" 
              className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              value={endDate}
              min={startDate}
              onChange={(e) => handleDateChange(startDate, e.target.value)}
            />
          </div>
        </div>

        <div className="bg-background border border-border/60 rounded-lg p-3 relative focus-within:bg-muted/30 transition-colors">
          <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">Gäste</label>
          <select 
            className="w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer appearance-none"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            {[1,2,3,4,5,6].map(num => (
               <option key={num} value={num}>{num} {num === 1 ? 'Gast' : 'Gäste'}</option>
            ))}
          </select>
        </div>
      </div>

      <Button 
        className="w-full text-lg h-14" 
        onClick={handleBook}
        disabled={!startDate || !endDate || isBooking}
      >
        {isBooking ? "Wird geprüft..." : "Jetzt buchen"}
      </Button>
      
      <p className="text-center text-sm text-muted-foreground mt-4">
        Sie zahlen noch nichts. Direkt buchen für den besten Preis.
      </p>
    </div>
  );
}
