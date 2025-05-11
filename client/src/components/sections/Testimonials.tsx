import React from "react";
import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white" ref={ref}>
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg ${isVisible ? 'slide-in visible' : 'slide-in'}`}
            style={{transitionDelay: '0.1s'}}
          >
            <div className="text-yellow-300 mb-4 flex">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <p className="italic mb-6">
              "CodeForge has been incredibly helpful for our development team. The clean interface and solid 
              performance have made it our go-to editor for various projects. Definitely recommend trying it out."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Alex Morgan</div>
                <div className="text-sm opacity-75">Software Developer</div>
              </div>
            </div>
          </div>

          <div 
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg ${isVisible ? 'slide-in visible' : 'slide-in'}`}
            style={{transitionDelay: '0.2s'}}
          >
            <div className="text-yellow-300 mb-4 flex">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <p className="italic mb-6">
              "I've been using CodeForge for about 3 months now for my PHP and JavaScript projects. 
              It's lightweight but has all the features I need for web development. The syntax highlighting 
              is especially good."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Jamie Chen</div>
                <div className="text-sm opacity-75">Web Developer</div>
              </div>
            </div>
          </div>

          <div 
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg ${isVisible ? 'slide-in visible' : 'slide-in'}`}
            style={{transitionDelay: '0.3s'}}
          >
            <div className="text-yellow-300 mb-4 flex">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5 opacity-50" />
            </div>
            <p className="italic mb-6">
              "As a hobbyist game developer, I've been following SixOps' VR projects with interest. 
              Their Discord community has been a great resource for learning about the latest 
              in XR technologies."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Sam Taylor</div>
                <div className="text-sm opacity-75">Indie Game Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
