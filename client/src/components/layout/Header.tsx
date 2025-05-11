import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { FaDiscord } from "react-icons/fa";

const Header: React.FC = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const [productDropdownVisible, setProductDropdownVisible] = useState(false);

  const scrollToSection = (id: string) => {
    close();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-[hsl(var(--v-primary-light))]">V</span>
              <span className="text-[hsl(var(--v-primary))]">++</span>{" "}
              <span className="text-gray-700">Technology</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors"
            >
              About
            </button>

            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setProductDropdownVisible(false)}>
              <button
                onMouseEnter={() => setProductDropdownVisible(true)}
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors flex items-center"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productDropdownVisible && (
                <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 fade-in">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => {
                        scrollToSection("codeforge");
                        setProductDropdownVisible(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      CodeForge Suite
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <span className="block px-4 py-2 text-xs text-gray-500">Coming Soon</span>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                      DataSync Pro
                    </span>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                      CloudArch Framework
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("sixops")}
              className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors"
            >
              SixOps
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Join Discord Button */}
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-4 py-2 rounded-md bg-[hsl(var(--v-primary))] text-white font-medium hover:bg-[hsl(var(--v-primary-light))] transition-colors"
          >
            <FaDiscord className="mr-2" /> Join Discord
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors py-1"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors py-1"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("sixops")}
                className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors py-1"
              >
                SixOps
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[hsl(var(--v-primary-light))] font-medium transition-colors py-1"
              >
                Contact
              </button>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 rounded-md bg-[hsl(var(--v-primary))] text-white font-medium hover:bg-[hsl(var(--v-primary-light))] transition-colors"
              >
                <FaDiscord className="mr-2" /> Join Discord
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
