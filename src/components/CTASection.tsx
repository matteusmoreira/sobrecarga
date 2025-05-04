
import { Calendar } from "lucide-react";
import SignUpForm from "./SignUpForm";

const CTASection = () => {
  return (
    <div className="py-16 bg-bookYellow">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-title uppercase mb-4">Garanta seu exemplar</h2>
            <p className="text-lg">
              Transforme sua relação com o cansaço e redescubra sua energia vital.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
