import { useState } from "react";
import { Badge } from "./ui/badge";
const BookCover = () => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`relative transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
        <div className="bg-bookYellow p-2 shadow-lg relative">
          <img alt="Livro SOBRECARGA" className="w-full h-auto" src="/lovable-uploads/d1d461a7-7b78-4afa-afd6-0a5222788141.png" />
          <Badge className="absolute top-4 left-4 bg-black text-white font-bold px-3 py-1 text-xs">
            LANÇAMENTO
          </Badge>
        </div>
      </div>
    </div>;
};
export default BookCover;