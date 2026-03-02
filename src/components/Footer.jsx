import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer({ whatsappLink }) {
  return (
    <footer id="contacto" className="w-full pt-20 pb-12 relative border-t border-[#8A2742]/5 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl text-gray-700 font-light mb-4 leading-tight">
          Empecemos a trabajar juntos
        </h3>
        <p className="text-gray-400 font-light text-[15px] md:text-base max-w-lg mx-auto leading-relaxed mb-10">
          El primer paso es el más importante. Escribime para coordinar una entrevista y conocer cómo puedo acompañarte.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#E3878D] text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-[#D1767C] hover:scale-105 transition-all cursor-pointer w-full sm:w-auto justify-center">
            <MessageCircle size={18} />
            Enviar WhatsApp
          </a>
          <a href="mailto:lic.melaniech@gmail.com" className="flex items-center gap-2 bg-white text-[#8A2742] font-medium py-3 px-8 rounded-full shadow-sm hover:bg-gray-50 border border-gray-200 hover:scale-105 transition-all cursor-pointer w-full sm:w-auto justify-center">
            <Mail size={18} />
            lic.melaniech@gmail.com
          </a>
        </div>

        <hr className="border-[#E3878D]/20 mb-10 max-w-2xl mx-auto" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <MapPin size={20} className="text-[#E3878D]" />
            <p className="text-gray-400 text-sm font-light">Villa Urquiza | Palermo, CABA<br />Argentina</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Mail size={20} className="text-[#E3878D]" />
            <p className="text-gray-400 text-sm font-light">lic.melaniech@gmail.com</p>
          </div>
        </div>

        <p className="text-[#8A2742]/40 text-[10px] md:text-xs font-medium tracking-widest uppercase">
          © 2026 Lic. Melanie Chaffittelli - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}