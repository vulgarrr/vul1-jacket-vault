import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img src={logo} alt="Super Rich Kids" className="h-8 object-contain" />
        </div>
      </header>

      {/* Video Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <Button
            onClick={handleShopNow}
            size="lg"
            className="h-16 px-12 bg-background text-foreground hover:bg-background/90 font-black text-xl tracking-widest"
          >
            SHOP NOW
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
