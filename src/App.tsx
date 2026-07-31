import { useRef } from "react";
import {
  Footer,
  Contact,
  Header,
  Hero,
  Mission,
  Why,
  Stats,
  Services,
} from "./components";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Header
        refs={{
          home: heroRef,
          stats: statsRef,
          services: servicesRef,
          mission: missionRef,
          why: whyRef,
          contact: contactRef,
        }}
      />

      <Hero ref={heroRef} />
      <Stats ref={statsRef} />
      <Services ref={servicesRef} />
      <Mission ref={missionRef} />
      <Why ref={whyRef} />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  );
}

export default App;
