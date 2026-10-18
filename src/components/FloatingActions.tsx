import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(brandConfig.whatsappMessage)}`;

  return (
    <aside className="floating-actions" aria-label="Direct Quick Contact">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat with our sales team on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="floating-btn-tooltip">Chat via WhatsApp</span>
      </a>

      {/* Direct Quote Button */}
      <Link
        to="/request-quote"
        className="floating-btn floating-btn-quote"
        aria-label="Request a bulk container quotation"
        title="Request a Quote"
      >
        <FileText size={22} />
        <span className="floating-btn-tooltip">Request for Order/Supply</span>
      </Link>
    </aside>
  );
};
