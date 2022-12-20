import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Circle Acc | Home';
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Contact />
    </main>
  );
};

export default HomePage;
