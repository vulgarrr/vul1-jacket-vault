import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import logo from "@/assets/logo.png";
import PageTransition from "@/components/PageTransition";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <img 
          src={logo} 
          alt="Super Rich Kids" 
          className="h-20 mx-auto object-contain"
        />
        
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground">
            <Check className="w-10 h-10 text-background" strokeWidth={3} />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-black tracking-tighter">
              THANK YOU
            </h1>
            <p className="text-lg text-muted-foreground">
              FOR YOUR PURCHASE
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Your order has been received. We'll be in touch soon with shipping details.
          </p>
        </div>

        <Button
          onClick={() => {
            sessionStorage.removeItem("authenticated");
            navigate("/");
          }}
          className="h-14 px-10 bg-foreground text-background hover:bg-foreground/90 font-bold tracking-widest"
        >
          RETURN HOME
        </Button>
      </div>
    </div>
    </PageTransition>
  );
};

export default ThankYouPage;
