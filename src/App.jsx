import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AiFillThunderbolt, AiOutlineBook, AiOutlineMoneyCollect } from 'react-icons/ai';
import anime from 'animejs';
import About from './About';
import Navigation from './Navigation';
import Footer from './Footer'; 
import confetti from 'canvas-confetti';

const App = () => {
  useEffect(() => {
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      scale: [0.9, 1],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    anime({
      targets: '.hero-subtitle, .hero-button',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(300),
      easing: 'easeOutExpo',
      duration: 800,
    });

    anime({
      targets: '.feature-item',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 800,
    });

    anime({
      targets: '.cta-button',
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 600,
    });

    const animateText = () => {
      anime({
        targets: '.hero-title span',
        translateY: [-30, 0],
        duration: 600,
        easing: 'easeInOutSine',
        delay: anime.stagger(50, { start: 500 }),
        loop: true,
        direction: 'alternate',
      });
    };

    animateText();

    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        angle: 90,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#1E3A8A', '#3B82F6', '#60A5FA'],
      });
    };

    launchConfetti();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section className="bg-blue-600 text-white py-16">
                  <div className="container mx-auto px-6 text-center">
                    <h1 className="hero-title text-4xl font-bold sm:text-5xl">
                      {Array.from('Bienvenue sur ÉchangeLivre').map((char, index) => (
                        char === ' ' ? ' ' : <span key={index} className="inline-block">{char}</span>
                      ))}
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl hero-subtitle">
                      La meilleure plateforme pour acheter et vendre des livres scolaires d'occasion.
                    </p>
                    <div className="mt-8">
                      <Link
                        to="/about"
                        className="hero-button inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
                      >
                        En Savoir Plus
                      </Link>
                    </div>
                  </div>
                </section>

                <section className="py-12">
                  <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Pourquoi Choisir ÉchangeLivre ?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                      ÉchangeLivre vous aide à économiser de l'argent et à réduire les déchets en connectant les étudiants qui souhaitent acheter ou vendre des livres scolaires d'occasion.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-3">
                      <div className="feature-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <AiOutlineBook className="w-16 h-16 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Acheter des Livres</h3>
                        <p className="mt-2 text-gray-600">
                          Trouvez des livres scolaires d'occasion à prix abordables auprès d'autres étudiants.
                        </p>
                      </div>
                      <div className="feature-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <AiOutlineMoneyCollect className="w-16 h-16 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Vendre des Livres</h3>
                        <p className="mt-2 text-gray-600">
                          Mettez en vente vos anciens livres et gagnez de l'argent tout en aidant d'autres étudiants.
                        </p>
                      </div>
                      <div className="feature-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <AiFillThunderbolt className="w-16 h-16 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Facile à Utiliser</h3>
                        <p className="mt-2 text-gray-600">
                          Notre plateforme est conviviale et simple à utiliser, rendant l'achat et la vente de livres très faciles.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-blue-50 py-12">
                  <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Prêt à Commencer ?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Rejoignez notre communauté d'étudiants dès aujourd'hui et commencez à acheter ou vendre des livres en toute simplicité.
                    </p>
                    <div className="mt-8">
                      <Link
                        to="/signup"
                        className="cta-button inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                      >
                        Inscription
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            }
          />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
