// Environment-based constants for production safety
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905302473702';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oztayteks.com';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Oztayteks';
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/oztayteksofficial/';

// WhatsApp helper - always encode messages
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

// Safe external link props
export const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const,
};
