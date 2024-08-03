import React, { useEffect } from 'react';
import anime from 'animejs';

const About = () => {
  useEffect(() => {
    // Animation pour le titre principal
    anime({
      targets: '.about-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animation pour les paragraphes
    anime({
      targets: '.about-text',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(200), // Délai entre chaque élément
      easing: 'easeOutExpo',
      duration: 800,
    });

    // Animation pour les membres de l'équipe
    anime({
      targets: '.team-member',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 800,
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="relative overflow-hidden bg-white shadow-xl sm:rounded-lg">
        <div className="px-4 py-6 sm:px-6">
          <h1 className="about-title text-3xl font-bold text-gray-900">À Propos</h1>
          <p className="mt-2 text-lg text-gray-600 about-text">
            Bienvenue sur notre site ! Nous sommes une équipe de professionnels dévoués et engagés à fournir les meilleurs services et expériences. Notre mission est d'offrir une valeur exceptionnelle à nos clients grâce à l'innovation, l'expertise et le dévouement.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-6 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900 about-title">Notre Histoire</h2>
            <p className="mt-2 text-base text-gray-600 about-text">
              Notre aventure a commencé avec une idée simple : créer une plateforme qui connecte les gens avec des services et des produits de qualité. Au fil des années, nous sommes devenus un leader dans notre domaine, grâce à notre équipe passionnée et au soutien de nos fidèles clients.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-900 about-title">Notre Équipe</h2>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
            <div className="team-member flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Lucas Djavid</h3>
              <p className="text-sm text-gray-600">PDG</p>
            </div>
            <div className="team-member flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Louis Reboul</h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>
            <div className="team-member flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">L'indien</h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
