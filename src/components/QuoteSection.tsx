
import { book } from "lucide-react";

const QuoteSection = () => {
  return (
    <div className="relative py-16 bg-bookYellow">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <book className="h-6 w-6" />
            <span className="font-title uppercase text-xl tracking-wide">Uma mensagem para você</span>
          </div>
        </div>
        
        <blockquote className="relative max-w-4xl mx-auto text-center">
          <span className="quote-marks absolute -top-8 left-0">"</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-title uppercase leading-tight mb-6 px-8">
            QUANDO O CANSAÇO SUSSURRA SEUS SEGREDOS, UM ENIGMA SILENCIOSO CONVIDA À TRANSFORMAÇÃO. VOCÊ ESTÁ PRONTO PARA DECIFRÁ-LO?
          </p>
          <span className="quote-marks absolute bottom-0 right-0">"</span>
          
          <footer className="mt-8">
            <div className="font-semibold">Uma obra por:</div>
            <cite className="text-xl font-bold not-italic">Nathan Maestrello</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteSection;
