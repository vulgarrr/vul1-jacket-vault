import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "vul1") {
      sessionStorage.setItem("authenticated", "true");
      navigate("/shop");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <img 
            src={logo} 
            alt="Super Rich Kids" 
            className="h-20 mx-auto object-contain"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter">
              EXCLUSIVE ACCESS
            </h1>
            <p className="text-muted-foreground text-sm tracking-wider">
              ENTER PASSWORD TO CONTINUE
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className="h-14 text-center tracking-widest bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground uppercase"
          />
          <Button 
            type="submit" 
            className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 font-bold tracking-widest"
          >
            ENTER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPage;
