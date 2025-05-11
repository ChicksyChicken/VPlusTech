import React from "react";
import { Code, Gamepad2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About V++ Technology</h2>
          <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We are a forward-thinking tech company specializing in software development
            and gaming technology. At V++, we believe in creating innovative solutions
            that empower businesses and enhance user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'slide-in visible' : 'slide-in'} style={{transitionDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To develop cutting-edge software and gaming solutions that push the
              boundaries of what's possible, while maintaining the highest standards of
              quality and user satisfaction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be at the forefront of technological innovation, creating products
              that not only meet the current needs of our users but anticipate the
              challenges of tomorrow.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--v-primary-light))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold">Software Development</h4>
                  <p className="text-sm text-gray-500">Enterprise & Consumer Solutions</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--v-primary-light))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold">Gaming Technology</h4>
                  <p className="text-sm text-gray-500">Next-Gen Gaming Experiences</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.2s'}}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
              alt="V++ Technology team collaborating"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="text-[hsl(var(--v-accent))] font-bold text-3xl mr-2">10+</div>
                <div className="text-sm text-gray-600">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
