import React from "react";
import { Link } from "wouter";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { COMPANY_INFO } from "@/lib/constants";

const Footer: React.FC = () => {
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="text-2xl font-bold mb-6">
              V<span className="text-[hsl(var(--primary))]">++</span>{" "}
              <span className="text-gray-300">Technology</span>
            </div>
            <p className="text-gray-400 mb-6">Powering Tomorrow's Technology Today</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/VPP-Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("codeforge")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CodeForge Suite
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  DataSync Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  CloudArch Framework
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sixops")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SixOps Games
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FaDiscord /> Discord Community
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} V++ Technology. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-500 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
