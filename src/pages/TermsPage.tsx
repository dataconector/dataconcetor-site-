import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: "These Terms and Conditions govern your use of DataConector AI's platform, services, and products. By accessing or using our services, you agree to be bound by these terms. If you do not agree, do not use our services."
  },
  {
    title: "2. Definitions",
    content: "\"Platform\" refers to DataConector AI's GPU-accelerated AI infrastructure, including APIs, dashboards, and related tools. \"User\" means any individual or entity accessing the Platform. \"Services\" refers to all products, features, and functionalities offered through the Platform."
  },
  {
    title: "3. Account Registration",
    content: "You must provide accurate, complete information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must notify us immediately of any unauthorized use."
  },
  {
    title: "4. Acceptable Use",
    content: "You agree not to: (a) violate any laws or regulations; (b) infringe intellectual property rights; (c) transmit malicious code; (d) attempt to gain unauthorized access to our systems; (e) use the Platform for cryptocurrency mining without authorization; (f) resell access without written consent."
  },
  {
    title: "5. Service Level Agreement",
    content: "NeuralCore commits to 99.95% uptime for Enterprise plans and 99.9% for Starter plans. Scheduled maintenance windows are excluded. Credits will be issued for downtime exceeding SLA thresholds, calculated proportionally to monthly fees."
  },
  {
    title: "6. Payment Terms",
    content: "Fees are billed monthly or annually as selected. All fees are non-refundable except as required by law. We reserve the right to modify pricing with 30 days notice. Overdue payments accrue interest at 1.5% per month."
  },
  {
    title: "7. Intellectual Property",
    content: "You retain ownership of your models, data, and outputs. NeuralCore retains ownership of the Platform, including algorithms, interfaces, and documentation. Neither party acquires rights to the other's intellectual property except as expressly stated."
  },
  {
    title: "8. Data Protection",
    content: "We process data in accordance with our Privacy Policy and applicable data protection laws. For EU users, we comply with GDPR requirements. Data processing agreements are available for Enterprise customers upon request."
  },
  {
    title: "9. Limitation of Liability",
    content: "To the maximum extent permitted by law, DataConector AI's liability is limited to the amount paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages."
  },
  {
    title: "10. Termination",
    content: "Either party may terminate with 30 days written notice. We may suspend access immediately for violations. Upon termination, you may export your data within 30 days. After that period, data will be permanently deleted."
  },
  {
    title: "11. Governing Law",
    content: "These terms are governed by the laws of the State of California, USA. Any disputes shall be resolved through binding arbitration in Los Angeles, CA, under the rules of the American Arbitration Association. Contact: DataConector AI, 840 S Los Angeles St, Los Angeles, CA 90014, United States. Phone: +1 213-629-2845."
  },
  {
    title: "12. Changes to Terms",
    content: "We may update these terms periodically. Material changes will be communicated via email or Platform notification at least 30 days in advance. Continued use after changes constitutes acceptance."
  },
];

const TermsPage = () => {
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
            <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-foreground">Terms & Conditions</h1>
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

export default TermsPage;
