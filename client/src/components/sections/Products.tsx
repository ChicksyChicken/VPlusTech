import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Database, Cloud } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Link from 'next/link';

const Products: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="products" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Discover our innovative software solutions designed to transform how you work and play.
          </p>
        </div>

        {/* Featured Product */}
        <div 
          id="codeforge" 
          className={`bg-white rounded-xl shadow-lg overflow-hidden mb-16 animate-hover ${isVisible ? 'slide-in visible' : 'slide-in'}`}
          style={{transitionDelay: '0.1s'}}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="inline-block bg-[hsl(var(--v-primary-light))/0.1] text-[hsl(var(--v-primary))] px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Product
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">CodeForge Suite</h3>
              <p className="text-gray-600 mb-6">
                A powerful, lightweight code editor designed for developers who need speed and flexibility. 
                With built-in version control, multiple language support, and customizable extensions, 
                CodeForge helps you write better code faster.
              </p>

              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Intuitive, customizable interface</span>
                </div>
                <div className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Support for 10 programming languages</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Integrated debugger and version control</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="px-6 py-3 bg-[hsl(var(--v-primary))] hover:bg-[hsl(var(--v-primary-light))]">
                  Download Free
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
                alt="CodeForge Suite interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Products */}
        <h3 className={`text-2xl font-bold text-gray-900 mb-6 text-center ${isVisible ? 'slide-in visible' : 'slide-in'}`} style={{transitionDelay: '0.2s'}}>
          Coming Soon
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className={`bg-white rounded-xl shadow-md p-8 opacity-75 animate-hover ${isVisible ? 'slide-in visible' : 'slide-in'}`}
            style={{transitionDelay: '0.3s'}}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Database className="h-6 w-6 text-gray-400" />
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                Coming Q2 2026
              </span>
            </div>

            <h4 className="text-xl font-bold text-gray-700 mb-3">DataSync Pro</h4>
            <p className="text-gray-500 mb-6">
              A simple enterprise data synchronization solution designed for seamless integration
              between multiple databases and applications.
            </p>

            <Link
                href="/datasync"
                className="text-gray-500 flex items-center hover:text-gray-700 transition-colors"
              >
                <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-md p-8 opacity-75 animate-hover ${isVisible ? 'slide-in visible' : 'slide-in'}`}
            style={{transitionDelay: '0.4s'}}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Cloud className="h-6 w-6 text-gray-400" />
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                Coming Q4 2026
              </span>
            </div>

            <h4 className="text-xl font-bold text-gray-700 mb-3">CloudArch Framework</h4>
            <p className="text-gray-500 mb-6">
              An easy to use cloud architecture framework for deploying, managing, and
              scaling web applications.
            </p>

            <Link
                href="/cloudarch"
                className="text-gray-500 flex items-center hover:text-gray-700 transition-colors"
              >
                <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;