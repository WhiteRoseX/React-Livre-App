// FAQ.jsx
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Comment puis-je acheter un livre sur ÉchangeLivre ?',
      answer: 'Pour acheter un livre, vous devez vous inscrire sur notre site, parcourir les livres disponibles et contacter le vendeur via les informations fournies.'
    },
    {
      question: 'Comment puis-je vendre un livre ?',
      answer: 'Pour vendre un livre, inscrivez-vous et accédez à votre compte. Cliquez sur "Vendre un livre" et remplissez les informations requises sur le livre que vous souhaitez vendre.'
    },
    {
      question: 'Est-ce que l\'inscription est gratuite ?',
      answer: 'Oui, l\'inscription sur ÉchangeLivre est totalement gratuite.'
    },
    {
      question: 'Puis-je annuler ma commande ?',
      answer: 'Oui, vous pouvez annuler votre commande tant que celle-ci n\'a pas encore été confirmée par le vendeur.'
    },
    {
      question: 'Comment puis-je contacter le support client ?',
      answer: 'Vous pouvez nous contacter via la page de contact ou envoyer un email directement à support@echangelivre.com.'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Foire Aux Questions (FAQ)</h1>
        <div className="mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
