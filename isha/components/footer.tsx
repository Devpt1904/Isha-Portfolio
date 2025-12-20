"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { DATA } from "@/data";

export const Footer = () => {
  const { name, description, contact, socialLinks, services } = DATA.footer;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-b from-background to-content1 py-16">
      <motion.div
        className="container mx-auto px-4 max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Contact Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="bg-content1/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-foreground-600 mb-6">
                I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  classNames={{
                    input: "bg-background/50",
                    inputWrapper: "bg-background/50 border border-white/10",
                  }}
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  classNames={{
                    input: "bg-background/50",
                    inputWrapper: "bg-background/50 border border-white/10",
                  }}
                />
                <Textarea
                  label="Message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  minRows={4}
                  classNames={{
                    input: "bg-background/50",
                    inputWrapper: "bg-background/50 border border-white/10",
                  }}
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full font-semibold"
                  isLoading={isSubmitting}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-foreground-600 mb-6">
                  Alternatively, you can reach me through these channels. I&apos;m always open to
                  discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-content1/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Icon icon="lucide:mail" className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-600">Email</p>
                    <p className="font-medium">{contact.email}</p>
                  </div>
                </a>

                <a
                  href="https://github.com/ishasolanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-content1/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Icon icon="mdi:github" className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-600">GitHub</p>
                    <p className="font-medium">github.com</p>
                  </div>
                </a>

                <a
                  href={socialLinks.find(s => s.platform === "LinkedIn")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-content1/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Icon icon="mdi:linkedin" className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-600">LinkedIn</p>
                    <p className="font-medium">linkedin.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-12 border-t border-divider">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-foreground-600 mb-4">{description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  aria-label={social.platform}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button isIconOnly variant="light" size="sm">
                    <Icon className="w-5 h-5" icon={social.icon} />
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-foreground-600 text-sm">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-foreground-600 text-sm flex items-start gap-2">
              <Icon icon="lucide:map-pin" className="w-4 h-4 mt-1" />
              {contact.location}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
