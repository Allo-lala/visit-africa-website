import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Deals } from "@/components/deals";
import { Destinations } from "@/components/destinations";
import { ReferralBanner } from "@/components/referral-banner";
import { Reviews } from "@/components/reviews";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="deals">
        <Deals />
      </section>
      <section id="destinations">
        <Destinations />
      </section>
      <ReferralBanner />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
