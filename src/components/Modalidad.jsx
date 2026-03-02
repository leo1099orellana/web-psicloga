import { MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function Modalidad() {
  return (
    <section id="modalidad" className="w-full py-20 md:py-24 border-t border-[#8A2742]/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E3878D] text-xs font-bold tracking-[0.2em] uppercase mb-4">ATENCIÓN</p>
          <h3 className="text-3xl md:text-5xl text-gray-700 font-light mb-6">Modalidad de Consulta</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-default">
            <MapPin size={160} className="absolute -top-6 -right-6 text-[#E3878D]/10 group-hover:scale-110 transition-transform duration-500 hidden md:block" strokeWidth={1} />
            <div className="relative z-10">
              <div className="bg-[#E3878D]/15 w-12 h-12 rounded-full flex items-center justify-center text-[#E3878D] mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-2xl text-[#8A2742] mb-4 font-medium">Atención Presencial</h4>
              <p className="text-gray-600 leading-relaxed text-[15px] font-light mb-8">
                Un espacio cuidado y confidencial diseñado para el encuentro terapéutico. Ideal para quienes valoran el cara a cara y el espacio físico compartido.
              </p>
              <ul className="space-y-4 text-[14px] md:text-[15px]">
                <li className="flex items-center gap-3 text-gray-600 font-light">
                  <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                  Consultorios en Villa Urquiza y Palermo
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-light">
                  <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                  Clima cálido y reservado
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-light">
                  <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                  Fácil acceso y transporte
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#E3878D] p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-default">
            <Globe size={160} className="absolute -top-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500 hidden md:block" strokeWidth={1} />
            <div className="relative z-10">
              <div className="bg-[#8A2742]/20 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                <Globe size={24} />
              </div>
              <h4 className="text-2xl text-white mb-4 font-medium">Atención Online</h4>
              <p className="text-white/90 leading-relaxed text-[15px] font-light mb-8">
                Terapia estés donde estés. Una modalidad flexible que mantiene la calidad del vínculo terapéutico sin barreras geográficas.
              </p>
              <ul className="space-y-4 text-[14px] md:text-[15px]">
                <li className="flex items-center gap-3 text-white/90 font-light">
                  <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                  Atención a todo el mundo (Habla Hispana)
                </li>
                <li className="flex items-center gap-3 text-white/90 font-light">
                  <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                  Videollamada (Meet/Zoom/WhatsApp)
                </li>
                <li className="flex items-center gap-3 text-white/90 font-light">
                  <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                  Flexibilidad horaria
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}