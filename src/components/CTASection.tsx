import { Calendar } from "lucide-react";
import SignUpForm from "./SignUpForm";
const CTASection = () => {
  return <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-title uppercase mb-4">Reserve Seu Exemplar</h2>
            <p className="text-lg">
              Não perca o lançamento de SOBRECARGA. Preencha o formulário abaixo e seja um dos primeiros a receber seu exemplar.
            </p>
            
            
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>;
};
export default CTASection;