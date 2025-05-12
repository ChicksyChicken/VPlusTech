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
  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send to Discord webhook
      const webhookUrl = "https://discord.com/api/webhooks/1371142690334572677/7hmd3_9E6zSfiSogOqpt1aAiiy38Rza0mvNTfLGW3S_xB_qXRRbEbhwKk20F5Vv6ub5d";
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: "V++ Contact Form",
          avatar_url: "https://i.imgur.com/4M34hi2.png",
          content: `<@1322215102509879397> <@856039322359693333>`,
          embeds: [{
            title: "New Message Received!",
            color: 3447003,
            fields: [
              {
                name: "Name",
                value: data.name
              },
              {
                name: "Email",
                value: data.email
              },
              {
                name: "Message Type",
                value: data.subject
              },
              {
                name: "Message",
                value: data.message
              }
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "V++ Technology Contact Form • " + new Date().toLocaleString()
            }
          }]
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        reset();
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later or contact us directly via email.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  {...register("name", { required: "Full name is required" })}
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
                  className="w-full px-6 py-3 bg-[hsl(var(--v-primary))] hover:bg-[hsl(var(--v-primary-light))] relative"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
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
                    <p className="text-gray-600">Coming soon</p>
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
                    <p className="text-gray-600">Coming soon</p>
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
                      href={COMPANY_INFO.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--v-primary))] font-medium hover:text-[hsl(var(--v-primary-light))] transition-colors"
                    >
                      {COMPANY_INFO.discordInvite}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">SixOps Development</h3>

              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">{COMPANY_INFO.sixopsEmail}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-[hsl(var(--v-primary))/0.1] rounded-full flex items-center justify-center mr-4">
                  <FaDiscord className="h-5 w-5 text-[hsl(var(--v-primary))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">SixOps Discord</h4>
                  <p className="text-gray-600">Join our gaming community</p>
                  <a
                    href={COMPANY_INFO.sixopsDiscordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--v-primary))] font-medium hover:text-[hsl(var(--v-primary-light))] transition-colors"
                  >
                    {COMPANY_INFO.sixopsDiscordInvite}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;