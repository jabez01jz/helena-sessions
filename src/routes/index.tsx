import { createFileRoute } from "@tanstack/react-router";
import { SplashScreen } from "@/components/SplashScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Commitment } from "@/components/sections/Commitment";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/site";

const TITLE = "Silvia Helena · Psicóloga clínica em Maracanaú";
const DESCRIPTION =
  "Psicoterapia com abordagem psicanalítica em Maracanaú, CE. Silvia Helena, mestra em Psicologia pela UNIFOR, oferece escuta acolhedora para ansiedade, luto, trabalho e relações.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          name: "Silvia Helena",
          description: DESCRIPTION,
          telephone: WHATSAPP_DISPLAY,
          sameAs: [INSTAGRAM_URL],
          areaServed: "Maracanaú, Ceará, Brasil",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. 14 - Residencial",
            addressLocality: "Maracanaú",
            addressRegion: "CE",
            postalCode: "61913-375",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main id="main">
        <Hero />
        <Specialties />
        <About />
        <Commitment />
        <Faq />
        <Testimonials />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
