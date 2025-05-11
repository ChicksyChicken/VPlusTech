import React from 'react';
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";
import { Code, Gamepad2, Users, Cpu, Glasses } from "lucide-react";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | V++ Technology</title>
        <meta name="description" content="Learn more about V++ Technology, our mission, vision, and the team behind our innovative software and gaming solutions." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">About V++ Technology</h1>
                <p className="text-xl opacity-90">
                  We are a forward-thinking tech company specializing in software development
                  and gaming innovations through our SixOps division.
                </p>
              </div>
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <div className="w-16 h-1 bg-[hsl(var(--v-primary))] mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      To develop cutting-edge software and gaming solutions that push the
                      boundaries of what's possible, while maintaining the highest standards of
                      quality and user satisfaction.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                    <div className="w-16 h-1 bg-[hsl(var(--v-primary))] mb-6"></div>
                    <p className="text-gray-600 mb-6">
                      To be at the forefront of technological innovation, creating products
                      that not only meet the current needs of our users but anticipate the
                      challenges of tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Story</h2>
                <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-10"></div>
                
                <p className="text-gray-600 mb-6">
                  Founded in {COMPANY_INFO.foundedYear}, V++ Technology began with a simple goal: to create 
                  software that makes a difference. What started as a small team of passionate 
                  developers has grown into a dynamic company with {COMPANY_INFO.experienceYears}+ years of 
                  experience in developing innovative solutions.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our journey began with the development of developer tools, aimed at improving 
                  workflow efficiency and code quality. The success of our initial products led us 
                  to expand our offerings into various software domains.
                </p>
                
                <p className="text-gray-600 mb-6">
                  In 2023, we launched our gaming division, SixOps Development, to explore the 
                  exciting world of interactive entertainment and virtual reality. This expansion 
                  reflects our commitment to innovation and our belief in the transformative power 
                  of technology.
                </p>
                
                <p className="text-gray-600">
                  Today, we continue to push boundaries with our software products and gaming experiences, 
                  always guided by our core values of innovation, quality, and user satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What We Do</h2>
                <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-10"></div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-6">
                      <Code className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Software Development</h3>
                    <p className="text-gray-600">
                      We create powerful, user-friendly software solutions designed to solve real-world 
                      problems. Our flagship product, CodeForge Suite, exemplifies our commitment to 
                      developing tools that enhance productivity and simplify complex tasks.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-6">
                      <Gamepad2 className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Gaming Innovation</h3>
                    <p className="text-gray-600">
                      Through our SixOps Development division, we're creating engaging gaming experiences 
                      that blend captivating storytelling with cutting-edge technology. We're particularly 
                      focused on exploring the possibilities of virtual and augmented reality.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-6">
                      <Glasses className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">XR Development</h3>
                    <p className="text-gray-600">
                      We're passionate about extended reality technologies and their potential to transform 
                      how we learn, work, and play. Our team is exploring innovative applications in education, 
                      training, and entertainment.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mb-6">
                      <Users className="h-6 w-6 text-[hsl(var(--v-primary))]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
                    <p className="text-gray-600">
                      We believe in the power of community. That's why we're dedicated to building vibrant 
                      communities around our products and actively engaging with users through our Discord 
                      servers and other platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section className="py-16 bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
                <p className="text-xl opacity-90 mb-8">
                  We're excited about the future of technology and invite you to join us on this journey. 
                  Whether you're a user of our products, a member of our community, or someone who shares 
                  our passion for innovation, we value your support and feedback.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={COMPANY_INFO.discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-[hsl(var(--v-primary))] font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Join V++ Discord
                  </a>
                  <a
                    href={COMPANY_INFO.sixopsDiscordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[hsl(var(--v-primary))] transition-colors"
                  >
                    Join SixOps Discord
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;