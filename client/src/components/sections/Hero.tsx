import React from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Hero: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white"
      ref={ref}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&h=1000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="py-20 md:py-28 max-w-3xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
            Powering Tomorrow's Technology Today
          </h1>
          <p className={`text-xl opacity-90 mb-8 ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.1s'}}>
            V++ Technology delivers cutting-edge software solutions and gaming innovations for businesses and consumers alike.
          </p>
          <div className={`flex flex-wrap gap-4 ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.2s'}}>
            <Button
              onClick={() => scrollToSection("about")}
              className="px-6 py-3 bg-white text-[hsl(var(--v-primary))] hover:bg-gray-100"
              size="lg"
            >
              Learn More
            </Button>
            <Button
              onClick={() => scrollToSection("products")}
              variant="outline"
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--v-primary))]"
              size="lg"
            >
              Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
