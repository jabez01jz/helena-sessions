export const WHATSAPP_DISPLAY = "(85) 99281-6658";
export const WHATSAPP_NUMBER = "5585992816658";
export const WHATSAPP_MESSAGE =
  "Olá, Silvia! Conheci seu trabalho pelo site e gostaria de saber mais sobre o atendimento e a possibilidade de agendar uma sessão.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_HANDLE = "@silviahelenapsi";
export const INSTAGRAM_URL = "https://www.instagram.com/silviahelenapsi/";

export const ADDRESS = "R. 14 - Residencial, Maracanaú - CE, 61913-375";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`;

export const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contatos", href: "#contatos" },
];
