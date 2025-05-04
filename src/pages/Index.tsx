import { useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";

// Lazy load components that aren't immediately visible in the viewport
const QuoteSection = lazy(() => import("@/components/QuoteSection"));
const FeatureSection = lazy(() => import("@/components/FeatureSection"));
const AuthorSection = lazy(() => import("@/components/AuthorSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => {
  useEffect(() => {
    document.title = "SOBRECARGA | Nathan Maestrello | Lançamento";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Keep this eagerly loaded */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="max-w-lg">
                <div className="bg-bookBlack inline-block px-4 py-2 mb-4">
                  <h2 className="text-white font-title uppercase text-lg">Lançamento</h2>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-title uppercase leading-none mb-6">
                  <span className="text-bookYellow">SOBRE</span>
                  <span className="text-bookBlack">CARGA</span>
                </h1>
                <p className="text-xl mb-6">
                  Quando o corpo e a mente dizem <span className="font-bold">NÃO!</span> 
                  É hora de decifrar os segredos do seu cansaço e transformar sua vida.
                </p>
                <div className="space-y-4">
                  <p className="font-medium">
                    ✓ Desvende os segredos por trás do cansaço crônico<br />
                    ✓ Descubra ferramentas práticas para recuperar sua energia<br />
                    ✓ Aprenda a estabelecer limites saudáveis em todas as áreas
                  </p>
                  <Button className="bg-bookBlack hover:bg-bookBlack/80 text-white font-bold py-6 px-8 text-lg transition-all animate-pulse-slow" onClick={() => {
                    window.location.href = "https://nathanmaestrello.com.br/finalizar-compra/?add-to-cart=226";
                  }}>
                    QUERO MEU EXEMPLAR!
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <BookCover />
            </div>
          </div>
        </div>
      </section>

      {/* Lazy load sections that are below the fold */}
      <Suspense fallback={<div className="py-16 text-center">Carregando...</div>}>
        <QuoteSection />
        <FeatureSection />
        <AuthorSection />
        <section id="cta-section">
          <CTASection />
        </section>
      </Suspense>
      
      {/* Footer */}
      <footer className="bg-bookBlack text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img alt="Autor da Fé Logo" className="h-20" src="/lovable-uploads/fcbaf3d5-a692-4366-9a20-08b5d5ac8ab1.png" />
          </div>
          <p className="mb-2">© {new Date().getFullYear()} SOBRECARGA - Todos os direitos reservados</p>
          <p className="text-sm opacity-75">Nathan Maestrello | Autor da Fé</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
