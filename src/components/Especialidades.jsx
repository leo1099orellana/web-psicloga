import { Cloud, HeartCrack, Sunrise, Activity, Sparkles } from 'lucide-react';

function TarjetaEspecialidad({ icono, titulo, descripcion }) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-left group cursor-default">
      <div className="bg-[#E3878D]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#8A2742] mb-6 group-hover:bg-[#E3878D]/20 transition-colors">
        {icono}
      </div>
      <h4 className="text-xl text-[#8A2742] mb-4 font-medium">{titulo}</h4>
      <p className="text-gray-600 leading-relaxed text-[15px] font-light">
        {descripcion}
      </p>
    </div>
  );
}

export default function Especialidades({ whatsappLink }) {
  return (
    <section id="especialidades" className="w-full py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E3878D] text-xs font-bold tracking-[0.2em] uppercase mb-4">ESPECIALIDADES</p>
          <h3 className="text-3xl md:text-5xl text-gray-700 font-light mb-6">Abordajes Clínicos</h3>
          <p className="text-gray-500 font-light text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
            Abordamos cada proceso terapéutico desde una perspectiva integradora, adaptando el tratamiento a las necesidades singulares de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <TarjetaEspecialidad icono={<Cloud strokeWidth={1.5} size={30} />} titulo="Ansiedad" descripcion="Herramientas para gestionar la incertidumbre y el malestar excesivo del día a día." />
          <TarjetaEspecialidad icono={<HeartCrack strokeWidth={1.5} size={30} />} titulo="Angustia" descripcion="Un espacio para poner en palabras aquello que oprime y no encuentra salida evidente." />
          <TarjetaEspecialidad icono={<Sunrise strokeWidth={1.5} size={30} />} titulo="Duelos" descripcion="Acompañamiento en procesos de pérdida, cambios, despedidas y nuevas etapas." />
          <TarjetaEspecialidad icono={<Activity strokeWidth={1.5} size={30} />} titulo="Crisis Vitales" descripcion="Momentos de ruptura o cambio de etapa que requieren re-preguntarse el camino." />
          <TarjetaEspecialidad icono={<Sparkles strokeWidth={1.5} size={30} />} titulo="Autoestima" descripcion="Fortalecer la relación con uno mismo, la confianza personal y el autoconcepto." />

          <div className="bg-[#E3878D] p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default">
            <h4 className="text-2xl text-white mb-4 font-medium">¿Algo más?</h4>
            <p className="text-white/90 leading-relaxed text-[15px] font-light mb-8">
              Cada proceso es único. Si no ves tu motivo de consulta listado aquí, no dudes en escribirme.
            </p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-white text-[#E3878D] font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 hover:bg-gray-50 transition-all cursor-pointer inline-block">
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}