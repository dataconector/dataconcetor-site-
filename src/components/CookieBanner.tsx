import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="glass-strong rounded-2xl p-6 border border-white/10 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-heading text-lg font-semibold text-foreground">Cookie Consent</h3>
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110 transition-all text-sm"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-4 py-2.5 rounded-full border border-white/20 text-foreground font-heading font-semibold hover:bg-white/5 transition-all text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
