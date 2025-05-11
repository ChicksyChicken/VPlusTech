import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { COMPANY_INFO } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { register, handleSubmit, formState } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the form data to your backend
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'slide-in visible' : 'slide-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[hsl(var(--v-primary))] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have questions about our products or services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={isVisible ? 'slide-in visible' : 'slide-in'} style={{transitionDelay: '0.1s'}}>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--v-primary))] focus:border-transparent"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--v-primary))] focus:border-transparent"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </Label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--v-primary))] focus:border-transparent">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="careers">Careers</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  {...register("message", { required: true })}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--v-primary))] focus:border-transparent"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full px-6 py-3 bg-[hsl(var(--v-primary))] hover:bg-[hsl(var(--v-primary-light))]"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className={isVisible ? 'slide-in visible' : 'slide-in'} style={{transitionDelay: '0.2s'}}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">1234 Technology Drive, Silicon Valley, CA 94043</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                    <FaDiscord className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Discord</h4>
                    <p className="text-gray-600">Join our Discord community</p>
                    <a
                      href="https://discord.gg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--v-primary))] font-medium hover:text-[hsl(var(--v-primary-light))] transition-colors"
                    >
                      discord.gg/vplusplus
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--v-primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--v-primary-light))] transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--v-primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--v-primary-light))] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--v-primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--v-primary-light))] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--v-primary))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--v-primary-light))] transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
