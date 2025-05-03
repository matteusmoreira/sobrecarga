const AuthorSection = () => {
  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Nathan Maestrello" className="w-full h-auto object-cover" src="/lovable-uploads/1a4f782b-5876-4c22-a7c2-842ff53b116d.jpg" />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-title uppercase mb-4">Sobre o Autor</h2>
              <h3 className="text-xl font-bold mb-4">Nathan Maestrello</h3>
              <p className="mb-4 py-[14px]">Nathan Maestrello é Pastor, Bacharel em Teologia e Especialista em Desenvolvimento Humano. Autor do livro “SOBRECARGA: Quando o corpo e a mente dizem não”, ele atua há mais de 15 anos dedicando sua vida a transformar histórias, unir sabedoria prática, princípios espirituais e estratégias de alta performance.</p>
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
    </div>;
};
export default AuthorSection;