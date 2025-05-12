import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Headset, Users, Sword, Building, Rocket, Glasses, Cpu } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { COMPANY_INFO } from "@/lib/constants";

const SixOps: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="sixops" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--v-primary))/0.1] rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--v-primary))/0.1] rounded-full opacity-70 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SixOps Development</h2>
          <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our dedicated gaming division creating next-generation experiences for the gamers of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`order-2 md:order-1 ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Building the Future of Gaming</h3>
            <p className="text-gray-600 mb-6">
              SixOps Development is our specialized gaming division focused on creating
              immersive, cutting-edge gaming experiences. We combine technical excellence
              with creative storytelling to develop games that push boundaries.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Game Development</h4>
                  <p className="text-gray-600">
                    Creating engaging, innovative gaming experiences across multiple platforms
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Headset className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Interactive Gaming</h4>
                  <p className="text-gray-600">
                    Creating immersive interactive gaming experiences with cutting-edge technology
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Sword className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Game Design</h4>
                  <p className="text-gray-600">
                    Innovative game design strategies that enhance player experience and engagement
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Cpu className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Advanced Tech Integration</h4>
                  <p className="text-gray-600">
                    Combining AI, machine learning, and haptic feedback systems for next-gen experiences
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Gaming Community</h4>
                  <p className="text-gray-600">
                    Building a vibrant community of gamers and developers
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={COMPANY_INFO.sixopsDiscordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-md bg-[hsl(var(--v-primary))] text-white font-medium hover:bg-[hsl(var(--v-primary-light))] transition-colors"
              >
                <FaDiscord className="mr-2" /> Join Our Discord
              </a>
              <Button
                variant="outline"
                className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className={`order-1 md:order-2 ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.2s'}}>
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
              alt="SixOps gaming technology and development"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className={`bg-gray-50 rounded-xl p-8 shadow-sm ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.3s'}}>
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Upcoming Projects</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-4">
                <Sword className="h-5 w-5 text-[hsl(var(--v-primary))]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Quantum Realm</h4>
              <p className="text-gray-600 text-sm">
                An action-adventure RPG set in a futuristic quantum physics-inspired universe.
              </p>
              <div className="mt-4 text-xs font-medium text-gray-500">Coming 2024</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-4">
                <Building className="h-5 w-5 text-[hsl(var(--v-primary))]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Metro Architect</h4>
              <p className="text-gray-600 text-sm">
                A city-building simulation game with realistic economics and social dynamics.
              </p>
              <div className="mt-4 text-xs font-medium text-gray-500">Coming 2023</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-5 w-5 text-[hsl(var(--v-primary))]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Stellar Voyager</h4>
              <p className="text-gray-600 text-sm">
                A space exploration game featuring procedurally generated galaxies and alien civilizations.
              </p>
              <div className="mt-4 text-xs font-medium text-gray-500">Coming 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixOps;
