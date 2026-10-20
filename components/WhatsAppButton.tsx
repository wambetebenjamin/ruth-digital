"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

/**
 * Fixed WhatsApp button, bottom right, 24px from the edges, 56 by 56,
 * circular, z-index 9998. Entrance pulse runs from CSS keyframes.
 * The icon is the template's own chat bubble language rather than a logo swap,
 * and the brand green is the WhatsApp standard.
 */
export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href={whatsappLink}
      className="rd-float rd-float--wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ruth Digital on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2.1} aria-hidden="true" />
      <span className="rd-float__tooltip" role="tooltip">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
