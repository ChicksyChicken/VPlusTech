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
              "V++ Technology delivered a custom software solution that streamlined our
              entire operation. Their attention to detail and commitment to quality is
              unmatched."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm opacity-75">CTO, TechSolutions Inc.</div>
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
              "The CodeForge Suite has completely transformed how our development team
              works. It's intuitive, powerful, and the support from V++ is excellent."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Mark Reynolds</div>
                <div className="text-sm opacity-75">Lead Developer, Innovate Labs</div>
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
              "We partnered with SixOps for our game's development and were blown away by
              their creativity and technical expertise. Looking forward to our next
              collaboration!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary))/0.3] rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">Alex Chen</div>
                <div className="text-sm opacity-75">Founder, Nebula Games</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
