import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactDock } from "@/components/layout/ContactDock";
import { MotionRoot } from "@/components/ui/MotionRoot";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Stories } from "@/components/sections/Stories";
import { Process } from "@/components/sections/Process";
import { Contact, Quote } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";
import { Interactions } from "@/components/ui/Interactions";
import { Intro } from "@/components/ui/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Approach />
        <Stories />
        <Process />
        <Quote />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
      <MotionRoot />
      <Interactions />
    </>
  );
}
