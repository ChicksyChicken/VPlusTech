import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | V++ Technology</title>
        <meta name="description" content="V++ Technology's privacy policy regarding the collection and use of personal information." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white dark:bg-gray-800 py-12">
          {/* Back Button */}
          <div className="container mx-auto px-4 mb-6">
            <Link href="/" className="inline-flex items-center text-[hsl(var(--v-primary))] hover:text-[hsl(var(--v-primary-light))] transition-colors mb-4 animate-fadeIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </div>
          
          <div className="container mx-auto px-4 max-w-4xl animate-fadeInUp">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last updated: May 11, 2025</p>
              
              <h2>Introduction</h2>
              <p>
                V++ Technology ("we", "our", or "us") respects your privacy and is committed to 
                protecting your personal data. This privacy policy will inform you about how we look 
                after your personal data when you visit our website and tell you about your privacy rights.
              </p>
              
              <h2>The Data We Collect</h2>
              <p>
                When you use our contact form, we may collect the following information:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Information regarding your inquiry or message</li>
              </ul>
              
              <h2>How We Use Your Data</h2>
              <p>
                We use the data you provide through our contact form to:
              </p>
              <ul>
                <li>Respond to your inquiries or requests</li>
                <li>Provide customer support</li>
                <li>Send you information about our products and services (only if you've opted in)</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being 
                accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal 
                data to those employees and partners who have a business need to know.
              </p>
              
              <h2>Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we 
                collected it for, including for the purposes of satisfying any legal or reporting requirements.
              </p>
              
              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on 
                those links or enabling those connections may allow third parties to collect or share data about you. 
                We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
              
              <h2>Cookie Policy</h2>
              <p>
                We use cookies to enhance your experience on our website. Cookies are small text files that are 
                placed on your computer by websites that you visit. They are widely used in order to make websites work, 
                or work more efficiently, as well as to provide information to the website owners.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an 
                updated "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <p>
                Email: {COMPANY_INFO.email}
              </p>
              <p>
                Discord: <a href={COMPANY_INFO.discordLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{COMPANY_INFO.discordInvite}</a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;