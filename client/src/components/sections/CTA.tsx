import React from "react";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { COMPANY_INFO } from "@/lib/constants";

const CTA: React.FC = () => {
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <div className={`max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <div className="md:flex">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Digital Experience?
              </h2>
              <p className="text-gray-600 mb-8">
                Join the V++ Technology ecosystem and discover how our software and gaming
                solutions can revolutionize your business or gaming experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-[hsl(var(--v-primary))] hover:bg-[hsl(var(--v-primary-light))]"
                >
                  Contact Us
                </Button>
                <a
                  href={COMPANY_INFO.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors"
                >
                  <FaDiscord className="mr-2" /> Join Our Community
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
                alt="V++ Technology team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
