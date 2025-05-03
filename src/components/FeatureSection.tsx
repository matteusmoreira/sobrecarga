
import { BookOpen } from "lucide-react";

const features = [
  {
    title: "Experiência Universal",
    description: "A sobrecarga é uma experiência universal, mas profundamente pessoal, que afeta milhões de pessoas ao redor do mundo."
  }, 
  {
    title: "Combinação de Fé e Ciência",
    description: "Este livro revela a verdade sobre o esgotamento e mostra como você pode se libertar antes que seja tarde demais."
  }, 
  {
    title: "Prefácio de Julio Ventullo",
    description: "Uma introdução especial escrita por Julio Ventullo, que traz uma perspectiva única sobre os temas abordados no livro."
  }
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-title uppercase text-center mb-12">Por que ler SOBRECARGA?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-2 text-bookBlack" />
                <h3 className="font-bold text-xl mx-0 px-0 my-0 py-0 text-center">{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium max-w-2xl mx-auto">
            Quando o corpo e a mente dizem: <span className="font-bold">NÃO!</span> — é hora de encontrar um novo caminho.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
