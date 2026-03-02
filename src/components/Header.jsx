import { useState } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';

export default function Header({ whatsappLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-[#FCF6F0]/95 backdrop-blur-sm py-4 px-6 md:px-8 lg:px-24 flex justify-between items-center transition-all border-b border-[#8A2742]/5'>
      {/* LOGO Y NOMBRE */}
      <div className='flex items-center gap-3 cursor-pointer z-50'>
        <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E3878D] p-[3px] shadow-sm flex-none flex items-center justify-center'>
          <div className='w-full h-full border-[1.5px] border-white rounded-full flex items-center justify-center'>
            <HeartPulse size={20} className="text-white" strokeWidth={1.5} />
          </div>
        </div>
        <div className='flex flex-col items-start mt-1'>
          <h1 className='text-[#D1767C] text-xl md:text-2xl leading-none pr-1 tracking-tight' style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}>
            Lic. Melanie Chaffittelli
          </h1>
          <span className='bg-[#E3878D] text-white text-[8px] md:text-[9px] px-3 py-1 rounded-sm uppercase mt-1 font-bold shadow-sm tracking-widest'>
            Psicóloga
          </span>
        </div>
      </div>

      {/* NAVEGACIÓN Y MENÚ */}
      <div className="flex items-center gap-4">
        <nav className='hidden lg:flex gap-8 items-center text-sm font-medium text-[#8A2742]/80'>
          <a href="#inicio" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Inicio</a>
          <a href="#recorrido" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Sobre mí</a>
          <a href="#especialidades" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Abordajes</a>
          <a href="#modalidad" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Modalidad</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className='cursor-pointer bg-[#D1767C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition shadow-md'>
            Contacto
          </a>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#8A2742] z-50">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`fixed inset-0 bg-[#FCF6F0] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Inicio</a>
        <a href="#recorrido" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Sobre mí</a>
        <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Abordajes</a>
        <a href="#modalidad" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Modalidad</a>
        <a href={whatsappLink} onClick={() => setIsMenuOpen(false)} target="_blank" rel="noreferrer" className="bg-[#D1767C] text-white px-10 py-4 rounded-full text-xl shadow-lg mt-4">Contacto</a>
      </div>
    </header>
  );
}