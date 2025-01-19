// weisoho/soho-front/src/views/Home.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;