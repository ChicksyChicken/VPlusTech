
import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Database, RefreshCw, Layers, Activity } from "lucide-react";

const DataSync: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DataSync Pro | V++ Technology</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-r from-[hsl(var(--v-primary))] to-[hsl(var(--v-primary-light))] text-white">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-6">DataSync Pro</h1>
              <p className="text-xl">Enterprise data synchronization solution</p>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Coming Q2 2026</h2>
                  <p className="text-gray-600 mb-6">
                    DataSync Pro is our upcoming enterprise-grade solution for seamless
                    data synchronization across multiple databases and applications.
                    Built for reliability and performance.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <RefreshCw className="h-6 w-6 text-[hsl(var(--v-primary))] mb-2" />
                      <h3 className="font-semibold">Real-time Sync</h3>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <Activity className="h-6 w-6 text-[hsl(var(--v-primary))] mb-2" />
                      <h3 className="font-semibold">Live Monitoring</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600"
                    alt="DataSync Pro"
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

export default DataSync;
