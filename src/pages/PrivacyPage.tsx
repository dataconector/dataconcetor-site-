import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly (account details, contact information, payment data), data generated through Platform usage (API calls, model metrics, usage logs), and technical data (IP addresses, device information, browser type). We do not access or analyze the content of your AI models or training data."
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your information to: provide and maintain the Platform; process payments; send service communications; improve our services; ensure security and prevent fraud; comply with legal obligations; and, with your consent, send marketing communications."
  },
  {
    title: "3. Data Storage & Security",
    content: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We store data in SOC 2 Type II certified data centers. Access is controlled through role-based permissions. We conduct regular security audits and penetration testing."
  },
  {
    title: "4. Data Sharing",
    content: "We do not sell your personal data. We may share data with: service providers who assist in Platform operations (under strict contracts); law enforcement when required by law; and in connection with a merger or acquisition. All third-party processors are vetted for security compliance."
  },
  {
    title: "5. Your Rights",
    content: "You have the right to: access your personal data; correct inaccurate data; delete your data (right to be forgotten); port your data to another service; object to processing; and withdraw consent. Exercise these rights by contacting privacy@neuralcore.ai."
  },
  {
    title: "6. Cookies & Tracking",
    content: "We use essential cookies for Platform functionality, analytics cookies to improve our services, and optional marketing cookies. You can manage cookie preferences through your browser settings. We use no third-party advertising trackers."
  },
  {
    title: "7. Data Retention",
    content: "Account data is retained while your account is active and for 90 days after deletion. Usage logs are retained for 12 months. Payment records are retained for 7 years per legal requirements. You may request earlier deletion where legally permissible."
  },
  {
    title: "8. International Transfers",
    content: "Data may be transferred to and processed in the United States. For EU users, we rely on Standard Contractual Clauses and ensure adequate safeguards. Enterprise customers may specify data residency requirements."
  },
  {
    title: "9. Children's Privacy",
    content: "Our services are not directed to individuals under 18. We do not knowingly collect personal data from minors. If we become aware of such collection, we will promptly delete the information."
  },
  {
    title: "10. Changes to This Policy",
    content: "We may update this policy periodically. We will notify you of material changes via email or Platform notification at least 30 days before they take effect. The date at the top of this page indicates the last revision."
  },
  {
    title: "11. Contact Us",
    content: "For privacy-related inquiries, contact our Data Protection Officer at info@dataconector.com or write to: DataConector AI, Attn: Privacy Team, 840 S Los Angeles St, Los Angeles, CA 90014, United States. Phone: +1 213-629-2845."
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: April 10, 2023</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
