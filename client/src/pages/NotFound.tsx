import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>
            <p className="mt-4 mb-6 text-sm text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
