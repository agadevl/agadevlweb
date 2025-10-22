import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import PersonalProfile from "@/components/PersonalProfile";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <Skills />
      <PersonalProfile />
      <Testimonials />
    </>
  );
}
