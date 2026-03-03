import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    const form = e.currentTarget;
    
    try {
      const response = await fetch("https://formspree.io/f/mvzblrno", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-foreground">Contact Page</h1>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-strong rounded-2xl p-6 border border-white/10 bg-accent/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xs text-muted-foreground mb-2">Email Address</h3>
              <p className="text-sm font-semibold text-foreground">info@dataconector.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-strong rounded-2xl p-6 border border-white/10 bg-accent/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xs text-muted-foreground mb-2">Phone</h3>
              <p className="text-sm font-semibold text-foreground">+1 213-629-2845</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-strong rounded-2xl p-6 border border-white/10 bg-accent/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xs text-muted-foreground mb-2">Open Hours</h3>
              <p className="text-sm font-semibold text-foreground">Mon - Fri</p>
              <p className="text-sm font-semibold text-foreground">9AM - 6PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-strong rounded-2xl p-6 border border-white/10 bg-accent/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xs text-muted-foreground mb-2">Location</h3>
              <p className="text-sm font-semibold text-foreground">840 S Los Angeles St</p>
              <p className="text-sm font-semibold text-foreground">Los Angeles, CA 90014</p>
            </motion.div>
          </div>

          {/* Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-strong rounded-3xl p-10 border border-white/10"
            >
              <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">Keep In Touch</h2>
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9+\-\s()]{10,20}"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-all resize-none"
                    placeholder="Message"
                  />
                </div>
                
                {/* reCAPTCHA-style Verification */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/20 bg-white/5">
                  <input
                    type="checkbox"
                    id="verify"
                    checked={isVerified}
                    onChange={(e) => setIsVerified(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/30 bg-transparent checked:bg-accent cursor-pointer"
                  />
                  <label htmlFor="verify" className="text-sm text-muted-foreground cursor-pointer">
                    I'm not a robot
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isVerified}
                  className="px-8 py-3 rounded-full font-heading font-semibold bg-accent text-accent-foreground hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-strong rounded-3xl overflow-hidden border border-white/10 h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5!2d-118.2577!3d34.0407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b1e3c3c3c3%3A0x0!2s840%20S%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090014!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
