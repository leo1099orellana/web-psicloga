import './App.css';
import { MessageCircle } from 'lucide-react';

// Importamos nuestros componentes
import Header from './components/Header';
import Hero from './components/Hero';
import Recorrido from './components/Recorrido';
import Trayectoria from './components/Trayectoria';
import Especialidades from './components/Especialidades';
import Modalidad from './components/Modalidad';
import Footer from './components/Footer';

export default function App() {
  // Definimos el link de WhatsApp una sola vez acá arriba
  const whatsappNumber = "+5491100000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Melanie,%20me%20gustar%C3%ADa%20hacer%20una%20consulta.`;

  return (
    <div className='min-h-screen font-sans text-gray-700 relative pb-0 bg-[#FCF6F0] overflow-x-hidden'>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap');`}
      </style>

      {/* Secciones de la página */}
      <Header whatsappLink={whatsappLink} />
      
      <main>
        <Hero whatsappLink={whatsappLink} />
        <Recorrido />
        <Trayectoria />
        <Especialidades whatsappLink={whatsappLink} />
        <Modalidad />
      </main>

      <Footer whatsappLink={whatsappLink} />

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#E3878D] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#D1767C] transition-all z-50 flex items-center justify-center cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
}