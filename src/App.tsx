import { Footer, Contact, Header, Hero, Mission, Why } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Mission, Vision, Values Section */}
      <Mission />

      {/* Why Choose Us Section */}
      <Why />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
