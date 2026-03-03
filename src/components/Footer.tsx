import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-accent/10">
      {/* Top glow border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block -mb-2">
              <img src="/logo.png" alt="NeuralCore" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unify, automate, and scale your enterprise data pipelines with DCSyncAI X.1, seamless synchronization, real-time updates, and planetary-scale performance.

            </p>
            <p className="text-xs text-muted-foreground mt-4">
              840 S Los Angeles St<br />
              Los Angeles, CA 90014<br />
              +1 213-629-2845<br />
              info@dataconector.com
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link to="/dcsyncai" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">DCSyncAI X.1</Link></li>
              <li><a href="/#pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Changelog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Status</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Guides</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Terms & Conditions</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 DataConector AI. All rights reserved. Founded by Olson Albert.</p>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
