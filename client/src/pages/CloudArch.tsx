
import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cloud, Server, Shield, Zap } from "lucide-react";

const CloudArch: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CloudArch Framework | V++ Technology</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-6">CloudArch Framework</h1>
              <p className="text-xl">An enterprise-grade cloud architecture framework for modern applications</p>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Coming Q4 2026</h2>
                  <p className="text-gray-600 mb-6">
                    CloudArch Framework is our upcoming solution for simplified cloud deployment
                    and management. Built for modern development teams, it provides a robust
                    foundation for scalable applications.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <Server className="h-6 w-6 text-[hsl(var(--v-primary))] mb-2" />
                      <h3 className="font-semibold">Auto-scaling</h3>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <Shield className="h-6 w-6 text-[hsl(var(--v-primary))] mb-2" />
                      <h3 className="font-semibold">Security First</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
                    alt="CloudArch Framework"
                    className="rounded-lg shadow-lg"
                  />
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

export default CloudArch;
