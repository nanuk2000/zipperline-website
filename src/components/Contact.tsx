import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot protection - if honeypot field is filled, silently reject
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    // Basic validation
    if (!formData.firstName || !formData.surname || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual edge function call once Cloud is enabled
      // For now, simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. Our team will be in touch soon.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-radial opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your details and our team will be in touch to explore how Zipperline can assist&nbsp;you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zipperline/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-zipperline-light" />
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Trusted by instructors, race coaches, and snow practitioners
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zipperline/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-zipperline-light" />
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Smooth and streamlined integration without the need of sensors or wires
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border/30">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>Prefer to email? Feel free to write to </span>
                <a 
                  href="mailto:dev@zipperline.com"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  dev@zipperline.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="p-12 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute opacity-0 h-0 w-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      className="bg-input/50 border-border/50 focus:border-zipperline-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname" className="text-foreground">
                      Surname <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Enter your surname"
                      required
                      className="bg-input/50 border-border/50 focus:border-zipperline-light"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="bg-input/50 border-border/50 focus:border-zipperline-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-input/50 border-border/50 focus:border-zipperline-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Company <span className="text-muted-foreground text-sm">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="bg-input/50 border-border/50 focus:border-zipperline-light"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="bg-input/50 border-border/50 focus:border-zipperline-light resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zipperline hover:bg-zipperline-light text-foreground font-semibold py-6 rounded-xl shadow-button hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
