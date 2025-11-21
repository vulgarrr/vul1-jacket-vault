import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import jacket from "@/assets/jacket.png";

const ShopPage = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    region: "",
  });

  const scrollToProduct = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    const orderData = {
      ...formData,
      size: selectedSize,
      product: "Super Rich Kids Jacket",
      price: "$1,499",
    };

    try {
      const response = await fetch("https://formspree.io/f/mwpaeola", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit order. Please try again.");
    }
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
      <section className="relative h-screen w-full overflow-hidden mt-16">
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
            onClick={scrollToProduct}
            size="lg"
            className="h-16 px-12 bg-background text-foreground hover:bg-background/90 font-black text-xl tracking-widest"
          >
            SHOP NOW
          </Button>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={jacket}
                alt="Super Rich Kids Jacket"
                className="w-full max-w-lg object-contain"
              />
            </div>

            {/* Product Info & Checkout */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                  SUPER RICH KIDS JACKET
                </h1>
                <p className="text-2xl font-bold">$1,499</p>
                <p className="text-muted-foreground leading-relaxed">
                  Crafted from premium leather, the Super Rich Kids Jacket embodies luxury streetwear at its finest. 
                  This exclusive piece features meticulous stitching, a tailored fit, and an attitude that commands attention. 
                  Limited edition. Handmade. Uncompromising quality.
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-bold tracking-wide">SELECT SIZE</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="h-14 border-2 border-foreground">
                    <SelectValue placeholder="CHOOSE SIZE" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <h2 className="text-2xl font-black tracking-tight">CHECKOUT</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold tracking-wide">FIRST NAME</Label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold tracking-wide">LAST NAME</Label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wide">EMAIL</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wide">PHONE NUMBER</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wide">ADDRESS</Label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wide">REGION</Label>
                  <Input
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 font-black tracking-widest text-lg"
                >
                  BUY NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
