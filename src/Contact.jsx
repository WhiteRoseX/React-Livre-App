import React, { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Contactez-Nous</h1>
        <p className="mt-4 text-lg text-gray-600">
          Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.
        </p>
        <div className="mt-8 flex flex-col items-center">

          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-800 font-semibold mb-2">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-800 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-gray-800 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
            {formStatus && (
              <p className="mt-4 text-green-600">{formStatus}</p>
            )}
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Informations de Contact</h2>
            <div className="mt-4">
              <p className="flex items-center justify-center text-gray-600">
                <AiOutlineMail className="text-blue-600 mr-2" size={24} />
                contact@echangelivre.com
              </p>
              <p className="flex items-center justify-center text-gray-600 mt-2">
                <AiOutlinePhone className="text-blue-600 mr-2" size={24} />
                +33 1 23 45 67 89
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
