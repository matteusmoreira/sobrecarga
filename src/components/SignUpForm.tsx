import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá mais informações sobre o livro SOBRECARGA em breve."
      });
      setEmail("");
      setName("");
    }, 1500);
  };
  return <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div>
        
      </div>
      <div>
        
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-bookBlack hover:bg-bookBlack/80 text-white font-bold py-6 text-lg transition-all">
        {loading ? "PROCESSANDO..." : "QUERO GARANTIR MEU LIVRO"}
      </Button>
      <p className="text-xs text-center text-gray-600">
        Suas informações estão seguras e não serão compartilhadas.
      </p>
    </form>;
};
export default SignUpForm;