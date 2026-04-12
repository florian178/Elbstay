"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ApartmentDescriptionProps {
  title: string;
  previewText: React.ReactNode;
  fullText: React.ReactNode;
}

export function ApartmentDescription({ title, previewText, fullText }: ApartmentDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="prose prose-lg text-muted-foreground max-w-none">
      <h2 className="text-3xl font-semibold text-foreground mb-6 font-serif">{title}</h2>
      
      <div className="leading-loose mb-2">
        {previewText}
      </div>

      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-1 text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors mt-2"
        >
          Mehr anzeigen <ChevronDown className="w-4 h-4" />
        </button>
      ) : (
        <div className="animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="leading-loose space-y-6">
            {fullText}
          </div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-1 text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors mt-6"
          >
            Weniger anzeigen <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
