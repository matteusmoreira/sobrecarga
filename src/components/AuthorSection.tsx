
const AuthorSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/c700d0c8-9f99-4000-86ae-d00f6f1938e8.png" 
                alt="Nathan Maestrello" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-title uppercase mb-4">Sobre o Autor</h2>
              <h3 className="text-xl font-bold mb-4">Nathan Maestrello</h3>
              <p className="mb-4">
                Nathan Maestrello é autor e especialista em bem-estar mental. Com formação e experiência em ajudar pessoas a superarem o esgotamento e a sobrecarga, ele traz nesta obra uma combinação única de conhecimento prático e insights profundos.
              </p>
              <p className="mb-4">
                Em "SOBRECARGA", Nathan compartilha estratégias comprovadas e histórias inspiradoras que têm ajudado milhares de pessoas a transformarem suas vidas, encontrando equilíbrio em meio ao caos da vida moderna.
              </p>
              <p>
                Seu trabalho como Autor da Fé tem impactado positivamente inúmeras vidas, combinando princípios de fé com abordagens científicas para o bem-estar integral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
