import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/30">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NeuralCore" className="h-20 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/dcsyncai" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">DCSyncAI X.1</Link>
          <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Features</a>
          <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</a>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link>
        </div>
        <Link to="/contact" className="hidden sm:block px-5 py-2 rounded-lg text-sm font-heading font-medium bg-gradient-accent text-primary-foreground glow-shadow-sm transition-all duration-300 hover:scale-[1.02]">
          Get Access
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
